/**
 * Extract AI-citation-ready excerpts from blog post .ts files
 * and write them to public/llms-full.txt, grouped by category.
 *
 * Excerpt format (~600 words per post):
 *   #### Title
 *   URL + Category + Date + readTime
 *   Description
 *   **Key facts:** (3-5 bullets, quotable stats/standards)
 *   **FAQs:** (cap 5)
 *     Q: ... / A: ...
 *   First paragraph after first H2
 *   **Related:** links to 2-3 same-category posts
 *
 * Exports:
 *   - readPostMeta(filePath): parses a .ts file and returns post metadata
 *   - buildCategoryClusteredSection(metas, siteUrl): returns the full
 *       "## Blog Excerpts" section as a string, clustered by category
 *   - writeBlogExcerptsSection(llmsFullPath, section): strips any
 *       existing "## Blog Excerpts" section and appends the new one
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const FAQ_CAP = 5;
const KEY_FACTS_CAP = 5;
const RELATED_CAP = 3;

// ---------------------------------------------------------------------------
// Field extraction
// ---------------------------------------------------------------------------

function extractField(raw, fieldName) {
  const single = new RegExp(`\\b${fieldName}:\\s*"([^"]*)"`);
  const tick = new RegExp(`\\b${fieldName}:\\s*\`([^\`]*)\``);
  let m = raw.match(single);
  if (m) return m[1];
  m = raw.match(tick);
  if (m) return m[1];
  return null;
}

function extractMultilineDescription(raw) {
  const m = raw.match(/description:\s*\n?\s*"([\s\S]*?)",\s*\n/);
  return m ? m[1].replace(/\s+/g, " ").trim() : null;
}

function extractContent(raw) {
  const start = raw.indexOf("content:");
  if (start < 0) return "";
  const tickStart = raw.indexOf("`", start);
  if (tickStart < 0) return "";
  const tickEnd = raw.lastIndexOf("`");
  if (tickEnd <= tickStart) return "";
  return raw.slice(tickStart + 1, tickEnd);
}

function firstParagraphAfterFirstH2(content) {
  const h2Match = content.match(/^## .+$/m);
  if (!h2Match) return "";
  const after = content.slice(h2Match.index + h2Match[0].length);
  const paragraphs = after
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  let candidate = "";
  for (const p of paragraphs) {
    if (/^#{1,6}\s/.test(p)) continue;
    if (/^[-*]\s/.test(p.split("\n")[0]) && !p.includes("\n\n")) continue;
    candidate = p;
    break;
  }
  if (!candidate) return "";
  return candidate
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

// ---------------------------------------------------------------------------
// FAQ extraction (tolerant: ### Q?, **Q?**\nA, **Q?** A inline, multiple sections)
// ---------------------------------------------------------------------------

function extractFaqs(content, cap = FAQ_CAP) {
  const headingRegex =
    /^##\s+(?:Frequently Asked Questions|FAQ[s]?|Common Questions[^\n]*)\s*$/gm;
  const matches = [...content.matchAll(headingRegex)].sort((a, b) => {
    const aCanon = /Frequently Asked Questions/.test(a[0]) ? 0 : 1;
    const bCanon = /Frequently Asked Questions/.test(b[0]) ? 0 : 1;
    return aCanon - bCanon;
  });
  if (matches.length === 0) return [];

  const faqs = [];
  for (const match of matches) {
    const after = content.slice(match.index + match[0].length);
    const nextH2Idx = after.search(/\n##\s/);
    const faqBlock = nextH2Idx >= 0 ? after.slice(0, nextH2Idx) : after;

    const h3Regex = /^###\s+([^\n]+\?)\s*\n+([\s\S]*?)(?=\n###\s|\n##\s|$)/gm;
    let m;
    while ((m = h3Regex.exec(faqBlock)) !== null) {
      const q = m[1].trim();
      const a = m[2].replace(/\s+/g, " ").trim();
      if (q && a && !faqs.some((f) => f.q === q)) faqs.push({ q, a });
      if (faqs.length >= cap) return faqs;
    }

    const boldBlockRegex =
      /\*\*([^*\n]+\?)\*\*\s*\n([\s\S]*?)(?=\n\s*\*\*[^*\n]+\?\*\*|\n##|$)/g;
    while ((m = boldBlockRegex.exec(faqBlock)) !== null) {
      const q = m[1].trim();
      const a = m[2].replace(/\s+/g, " ").trim();
      if (q && a && !faqs.some((f) => f.q === q)) faqs.push({ q, a });
      if (faqs.length >= cap) return faqs;
    }

    const boldInlineRegex = /\*\*([^*\n]+\?)\*\*\s+([^\n]+)/g;
    while ((m = boldInlineRegex.exec(faqBlock)) !== null) {
      const q = m[1].trim();
      const a = m[2].replace(/\s+/g, " ").trim();
      if (q && a && !faqs.some((f) => f.q === q)) faqs.push({ q, a });
      if (faqs.length >= cap) return faqs;
    }
  }
  return faqs;
}

// ---------------------------------------------------------------------------
// Key Facts extraction — heuristic selection of quotable numerical / standard claims
// ---------------------------------------------------------------------------

const STAT_PATTERNS = [
  /\b(?:SR|RC)\d\b/i,
  /\bPAS\s?\d{2,}\b/i,
  /\bLPS\s?\d{3,}\b/i,
  /\bBS\s?EN\s?\d{3,}\b/i,
  /\bFD\s?\d{2,}S?\b/i,
  /\b\d+(?:\.\d+)?\s?(?:%|percent)\b/i,
  /\b\d+(?:\.\d+)?\s?W\/m\u00b2K\b/,
  /\b\d+(?:\.\d+)?\s?(?:mm|cm|kg|years?|months?|weeks?|days?|hours?|minutes?|mins?)\b/i,
  /\b\d+[\u2013-]\d+\s?(?:years?|months?|weeks?|days?|hours?|minutes?|mins?|%)\b/i,
  /\b£\s?\d[\d,]*\b/,
  /\bISO\s?\d{4,}\b/i,
  /\bU-value\b/i,
];

function looksQuotable(sentence) {
  if (sentence.length < 30 || sentence.length > 280) return false;
  // Skip sentences containing markdown artifacts or questions
  if (/[{}|]/.test(sentence)) return false;
  return STAT_PATTERNS.some((re) => re.test(sentence));
}

function stripMarkdown(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function extractKeyFacts(content, cap = KEY_FACTS_CAP) {
  // Strip FAQ sections — emitted separately
  const withoutFaqs = content.replace(
    /\n##\s+(?:Frequently Asked Questions|FAQ[s]?|Common Questions[^\n]*)[\s\S]*?(?=\n## |\n?$)/gi,
    ""
  );

  // Drop heading lines entirely so they don't bleed into sentences
  const noHeadings = withoutFaqs
    .split("\n")
    .filter((line) => !/^#{1,6}\s/.test(line.trim()))
    .join("\n");

  // Collapse list items to plain text and strip markdown BEFORE splitting so
  // bold-wrapped terms (**SR3**) don't block the sentence-boundary lookahead.
  const prose = stripMarkdown(
    noHeadings
      .replace(/^[\s]*[-*]\s+/gm, "")
      .replace(/\n+/g, " ")
  );

  const sentences = prose
    .split(/(?<=[.!?])\s+(?=[A-Z\d£])/g)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const chosen = [];
  const seen = new Set();
  for (const s of sentences) {
    if (!looksQuotable(s)) continue;
    // Must end in a full stop (drop awkward mid-sentence fragments)
    const clean = /[.!?]$/.test(s) ? s : `${s}.`;
    const key = clean.toLowerCase().slice(0, 80);
    if (seen.has(key)) continue;
    seen.add(key);
    chosen.push(clean);
    if (chosen.length >= cap) break;
  }
  return chosen;
}

// ---------------------------------------------------------------------------
// Related posts
// ---------------------------------------------------------------------------

function buildRelatedLinks(currentMeta, allMetas, cap = RELATED_CAP) {
  // Prefer same category, then same-prefix slug, then skip.
  const sameCategory = allMetas.filter(
    (m) => m.slug !== currentMeta.slug && m.category === currentMeta.category
  );
  const chosen = sameCategory.slice(0, cap);
  return chosen.map((m) => ({ title: m.title, url: m.url }));
}

// ---------------------------------------------------------------------------
// Public API: read + build
// ---------------------------------------------------------------------------

export function readPostMeta(filePath, siteUrl) {
  const raw = readFileSync(filePath, "utf8");
  const slug = extractField(raw, "slug");
  const title = extractField(raw, "title");
  const description =
    extractMultilineDescription(raw) || extractField(raw, "description") || "";
  const date = extractField(raw, "date") || "";
  const readTime = extractField(raw, "readTime") || "";
  const category = extractField(raw, "category") || "Uncategorised";
  if (!slug || !title) {
    throw new Error(`Could not parse slug/title from ${filePath}`);
  }
  const content = extractContent(raw);
  return {
    slug,
    title,
    description,
    date,
    readTime,
    category,
    content,
    url: `${siteUrl.replace(/\/$/, "")}/blog/${slug}`,
  };
}

export function readAllPostMetas(postsDir, siteUrl) {
  return readdirSync(postsDir)
    .filter((f) => f.endsWith(".ts"))
    .sort()
    .map((f) => readPostMeta(join(postsDir, f), siteUrl));
}

function buildExcerptFromMeta(meta, allMetas) {
  const faqs = extractFaqs(meta.content);
  const keyFacts = extractKeyFacts(meta.content);
  const firstPara = firstParagraphAfterFirstH2(meta.content);
  const related = buildRelatedLinks(meta, allMetas);

  const metaLine = [
    `Category: ${meta.category}`,
    meta.date ? `Published: ${meta.date}` : null,
    meta.readTime ? meta.readTime : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const lines = [
    `#### ${meta.title}`,
    `URL: ${meta.url}${metaLine ? ` | ${metaLine}` : ""}`,
    "",
  ];
  if (meta.description) {
    lines.push(meta.description, "");
  }
  if (keyFacts.length > 0) {
    lines.push("**Key facts:**", "");
    for (const fact of keyFacts) lines.push(`- ${fact}`);
    lines.push("");
  }
  if (faqs.length > 0) {
    lines.push("**FAQs:**", "");
    for (const { q, a } of faqs) {
      lines.push(`Q: ${q}`, `A: ${a}`, "");
    }
  }
  if (firstPara) {
    lines.push(firstPara, "");
  }
  if (related.length > 0) {
    lines.push("**Related:**", "");
    for (const r of related) lines.push(`- [${r.title}](${r.url})`);
    lines.push("");
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

export function buildCategoryClusteredSection(allMetas) {
  const header =
    `## Blog Excerpts\n\nSearch-engine-ready excerpts of every blog post, grouped by category so AI crawlers receive topically-clustered content. Each entry carries the post summary, up to ${KEY_FACTS_CAP} directly-quotable key facts, up to ${FAQ_CAP} frequently asked questions, a contextual paragraph, and up to ${RELATED_CAP} related posts for chain-of-reasoning queries.\n\n`;

  // Group by category, preserve natural ordering: category first appearance order, then by date desc within.
  const byCategory = new Map();
  for (const m of allMetas) {
    if (!byCategory.has(m.category)) byCategory.set(m.category, []);
    byCategory.get(m.category).push(m);
  }
  for (const arr of byCategory.values()) {
    arr.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }

  const chunks = [header];
  for (const [category, posts] of byCategory.entries()) {
    chunks.push(`### ${category} (${posts.length} post${posts.length === 1 ? "" : "s"})\n\n`);
    for (const post of posts) {
      chunks.push(buildExcerptFromMeta(post, allMetas));
      chunks.push("\n");
    }
  }
  return chunks.join("").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

export function writeBlogExcerptsSection(llmsFullPath, newSection) {
  if (!existsSync(llmsFullPath)) {
    throw new Error(`llms-full.txt not found at ${llmsFullPath}`);
  }
  let body = readFileSync(llmsFullPath, "utf8");
  const sectionIdx = body.lastIndexOf("\n## Blog Excerpts");
  if (sectionIdx >= 0) {
    body = body.slice(0, sectionIdx);
  }
  body = body.trimEnd() + "\n\n" + newSection;
  writeFileSync(llmsFullPath, body);
}
