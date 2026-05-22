/**
 * Deterministic cannibalisation check for the SR4 blog re-angle.
 * Re-runnable: `node audit-data/sr4-overlap-check.mjs`
 *
 * Compares term overlap between the SR4 blog post and the /sr4-residential-steel-door
 * topic page, OLD (git HEAD) vs NEW (working tree). A genuine de-cannibalisation
 * should show the NEW numbers materially lower than the OLD numbers.
 */
import fs from "fs";
import { execSync } from "child_process";

const STOP = new Set(
  ("the a an and or but for to of in on at by is are was were be been being with from this that these those it its as not no " +
   "you your our we us they their them have has had will would can could should may might do does done if so than then there here " +
   "which who what when where why how all any each every some most more much very also into out up down over under again").split(" ")
);
const tokens = (t) =>
  (t.toLowerCase().match(/[a-z][a-z0-9-]{2,}/g) || []).filter((w) => !STOP.has(w));

const blogContent = (src) => {
  const i = src.indexOf("content: `");
  const j = src.lastIndexOf("`,");
  return i >= 0 && j > i ? src.slice(i + 10, j) : "";
};
const firstTitle = (src) => {
  const m = src.match(/title:\s*\n?\s*"([^"]+)"/);
  return m ? m[1] : "";
};
// Topic page: take every string/template literal >= 30 chars (prose, not code identifiers).
const topicProse = (src) =>
  (src.match(/"[^"]{30,}"|`[^`]{30,}`/g) || []).join(" ");

const jaccard = (a, b) => {
  const A = new Set(a), B = new Set(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / new Set([...A, ...B]).size;
};
// containment(A,B) = share of A's distinct terms that also appear in B
const containment = (a, b) => {
  const A = new Set(a), B = new Set(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / A.size;
};
const pct = (x) => (x * 100).toFixed(1) + "%";

const oldSrc = execSync(
  "git show HEAD:src/data/blog/posts/sr4-lps-1175-commercial-grade-residential.ts"
).toString();
const newSrc = fs.readFileSync(
  "src/data/blog/posts/sr4-lps-1175-commercial-grade-residential.ts", "utf8"
);
const topicSrc = fs.readFileSync(
  "src/app/sr4-residential-steel-door/page.tsx", "utf8"
);

const oldBody = tokens(blogContent(oldSrc));
const newBody = tokens(blogContent(newSrc));
const topicBody = tokens(topicProse(topicSrc));
const oldTitle = tokens(firstTitle(oldSrc));
const newTitle = tokens(firstTitle(newSrc));
const topicTitle = tokens(firstTitle(topicSrc));

console.log("Titles");
console.log("  OLD blog  :", firstTitle(oldSrc));
console.log("  NEW blog  :", firstTitle(newSrc));
console.log("  Topic page:", firstTitle(topicSrc));
console.log("");
console.log("Title term Jaccard vs topic page");
console.log("  OLD blog title:", pct(jaccard(oldTitle, topicTitle)));
console.log("  NEW blog title:", pct(jaccard(newTitle, topicTitle)));
console.log("");
console.log("Body term Jaccard vs topic page  (shared terms / all distinct terms)");
console.log("  OLD blog body :", pct(jaccard(oldBody, topicBody)));
console.log("  NEW blog body :", pct(jaccard(newBody, topicBody)));
console.log("");
console.log("Body containment: share of the blog's distinct terms also on the topic page");
console.log("  OLD blog -> topic:", pct(containment(oldBody, topicBody)));
console.log("  NEW blog -> topic:", pct(containment(newBody, topicBody)));
console.log("");
console.log("Distinct content terms: old blog", new Set(oldBody).size,
            "| new blog", new Set(newBody).size, "| topic page", new Set(topicBody).size);
