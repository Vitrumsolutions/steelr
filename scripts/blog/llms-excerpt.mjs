/**
 * Extract AI-citation-ready excerpts from blog post .ts files
 * and append them to public/llms-full.txt.
 *
 * Exports:
 *   - buildExcerptFromPostFile(filePath, siteUrl): returns excerpt text
 *   - appendExcerptToLlmsFull(llmsFullPath, excerpt, slug): writes if not already present
 *
 * Excerpt format (~500 words per post):
 *   ### Title
 *   URL + Category + Date + readTime
 *   description
 *   **FAQs:** (cap 5) — placed above prose for higher citation weighting
 *     Q: ... / A: ...
 *   first paragraph after first H2 (context / definition)
 */
import { readFileSync, writeFileSync, existsSync } from "fs";

const FAQ_CAP = 5;

function extractField(raw, fieldName) {
  // Match  field: "value" or field: `value` (single-line)
  const single = new RegExp(`\\b${fieldName}:\\s*"([^"]*)"`);
  const tick = new RegExp(`\\b${fieldName}:\\s*\`([^\`]*)\``);
  let m = raw.match(single);
  if (m) return m[1];
  m = raw.match(tick);
  if (m) return m[1];
  return null;
}

function extractMultilineDescription(raw) {
  // description: "...\n    multi-line..." — TS template literal lookalikes sometimes span lines
  const m = raw.match(/description:\s*\n?\s*"([\s\S]*?)",\s*\n/);
  return m ? m[1].replace(/\s+/g, " ").trim() : null;
}

function extractContent(raw) {
  // content: `...`  — grab between first and last backtick after `content:`
  const start = raw.indexOf("content:");
  if (start < 0) return "";
  const tickStart = raw.indexOf("`", start);
  if (tickStart < 0) return "";
  // closing backtick is before the final `};` of the object literal
  const tickEnd = raw.lastIndexOf("`");
  if (tickEnd <= tickStart) return "";
  return raw.slice(tickStart + 1, tickEnd);
}

function firstParagraphAfterFirstH2(content) {
  // Find first ## heading, return the first substantive paragraph after it.
  // Skip any H3 subheadings and the headings' trailing blank lines — we want
  // body prose, not "### Subsection" text.
  const h2Match = content.match(/^## .+$/m);
  if (!h2Match) return "";
  const after = content.slice(h2Match.index + h2Match[0].length);
  const paragraphs = after
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  // Pick the first paragraph that is NOT a heading and NOT a list-only block
  let candidate = "";
  for (const p of paragraphs) {
    if (/^#{1,6}\s/.test(p)) continue; // pure heading
    if (/^[-*]\s/.test(p.split("\n")[0]) && !p.includes("\n\n")) continue; // list-only
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

function extractFaqs(content, cap = FAQ_CAP) {
  // Find a likely FAQ section heading. Tolerate variations.
  const faqHeadingMatch = content.match(
    /^##\s+(?:Frequently Asked Questions|FAQ[s]?|Common Questions[^\n]*)\s*$/m
  );
  if (!faqHeadingMatch) return [];
  const after = content.slice(faqHeadingMatch.index + faqHeadingMatch[0].length);
  // FAQs end at next ## heading (not ### which is used for Q headings in some posts)
  const nextH2Idx = after.search(/\n##\s/);
  const faqBlock = nextH2Idx >= 0 ? after.slice(0, nextH2Idx) : after;

  const faqs = [];

  // Pattern A: ### Question?\n\nAnswer paragraph (most posts)
  const h3Regex = /^###\s+([^\n]+\?)\s*\n+([\s\S]*?)(?=\n###\s|\n##\s|$)/gm;
  let m;
  while ((m = h3Regex.exec(faqBlock)) !== null) {
    const q = m[1].trim();
    const a = m[2].replace(/\s+/g, " ").trim();
    if (q && a) faqs.push({ q, a });
    if (faqs.length >= cap) return faqs;
  }
  if (faqs.length > 0) return faqs;

  // Pattern B: **Question?**\nAnswer (SR4 style)
  const boldRegex = /\*\*([^*]+\?)\*\*\s*\n([\s\S]*?)(?=\n\s*\*\*[^*]+\?\*\*|\n##|$)/g;
  while ((m = boldRegex.exec(faqBlock)) !== null) {
    const q = m[1].trim();
    const a = m[2].replace(/\s+/g, " ").trim();
    if (q && a) faqs.push({ q, a });
    if (faqs.length >= cap) break;
  }
  return faqs;
}

export function buildExcerptFromPostFile(filePath, siteUrl) {
  const raw = readFileSync(filePath, "utf8");
  const slug = extractField(raw, "slug");
  const title = extractField(raw, "title");
  const description = extractMultilineDescription(raw) || extractField(raw, "description") || "";
  const date = extractField(raw, "date") || "";
  const readTime = extractField(raw, "readTime") || "";
  const category = extractField(raw, "category") || "";

  if (!slug || !title) {
    throw new Error(`Could not parse slug/title from ${filePath}`);
  }

  const content = extractContent(raw);
  const firstPara = firstParagraphAfterFirstH2(content);
  const faqs = extractFaqs(content);

  const url = `${siteUrl.replace(/\/$/, "")}/blog/${slug}`;
  const meta = [
    `Category: ${category}`,
    date ? `Published: ${date}` : null,
    readTime ? readTime : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const lines = [
    `### ${title}`,
    `URL: ${url}${meta ? ` | ${meta}` : ""}`,
    "",
  ];
  if (description) {
    lines.push(description, "");
  }
  // FAQs placed above the context paragraph — AI crawlers prioritise direct
  // Q&A pairs over prose, so surfacing them higher increases citation odds.
  if (faqs.length > 0) {
    lines.push("**FAQs:**", "");
    for (const { q, a } of faqs) {
      lines.push(`Q: ${q}`, `A: ${a}`, "");
    }
  }
  if (firstPara) {
    lines.push(firstPara, "");
  }
  return { slug, excerpt: lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n" };
}

function extractUrlFromExcerpt(excerpt) {
  const m = excerpt.match(/^URL: (\S+)/m);
  return m ? m[1] : "";
}

/**
 * Append an excerpt to llms-full.txt if the slug is not already present.
 * Inserts under a "## Blog Excerpts" section — creates that section if missing.
 * Returns true if appended, false if already present or llms-full.txt missing.
 */
export function appendExcerptToLlmsFull(llmsFullPath, excerpt, slug) {
  if (!existsSync(llmsFullPath)) return false;
  let body = readFileSync(llmsFullPath, "utf8");

  // Skip if this slug is already excerpted. Match whole-URL with a word boundary
  // so `/slug` does not falsely match `/slug-2026` or similar.
  const targetUrl = extractUrlFromExcerpt(excerpt);
  if (targetUrl) {
    const re = new RegExp(`URL: ${targetUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![/\\w-])`);
    if (re.test(body)) return false;
  }

  const sectionHeader = "## Blog Excerpts";
  if (!body.includes(sectionHeader)) {
    // Append the section at the end
    body = body.trimEnd() + `\n\n${sectionHeader}\n\nSearch-engine-ready excerpts of each blog post. Each entry contains the post summary, a contextual paragraph, and up to ${FAQ_CAP} frequently asked questions. Full articles at the URL shown.\n\n`;
  }

  body = body.trimEnd() + "\n\n" + excerpt;
  writeFileSync(llmsFullPath, body);
  return true;
}
