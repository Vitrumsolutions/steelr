// One-off generator for a SteelR letterhead .docx
// Run: node scripts/generate-letterhead.mjs
// Output: C:\Users\SOT\Documents\SteelR-Letterhead.docx
//
// Page 1: empty letterhead template (open and type your quote)
// Page 2: partly-filled mock quote so you see how the letterhead reads
//   when content is added

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

// docx is installed globally; use createRequire to resolve from global modules
// rather than adding a dep to the project.
const require = createRequire(import.meta.url);
const globalRoot = require("child_process")
  .execSync("npm root -g")
  .toString()
  .trim();
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer,
  AlignmentType, PageOrientation, BorderStyle, TabStopType, TabStopPosition,
  PageBreak, PageNumber, Table, TableRow, TableCell, WidthType,
} = require(path.join(globalRoot, "docx"));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");

// ── Brand tokens ────────────────────────────────────────────────────────────
const GOLD = "C9A96E";
const INK = "1A1A18";
const WARM = "8A6F4E";
const MUTED = "6B5A42";

// Read the brand logo as a darker, transparent RGBA PNG.
// Source: public/brand/steelr-logo-primary.png (the actual brand wordmark)
// Processed (one-time, see commit history): cream background pixels masked
// to alpha 0; the dark-ink wordmark pixels forced to pure black #000000 for
// maximum contrast on the white Word page; the gold pipe pixels left at
// brand value (#c9a96e). Anti-aliased edge alpha preserved for smoothness.
const logoBuffer = fs.readFileSync(
  path.join(__dirname, "steelr-logo-primary-darker.png")
);

// ── Reusable builders ───────────────────────────────────────────────────────

// A paragraph that renders as a thin gold horizontal rule via bottom border.
function goldRule({ thickness = 4 } = {}) {
  return new Paragraph({
    border: {
      bottom: { style: BorderStyle.SINGLE, size: thickness, color: GOLD, space: 4 },
    },
    spacing: { before: 0, after: 60 },
    children: [new TextRun({ text: " " })],
  });
}

function heading(text, opts = {}) {
  const { size = 32, color = INK, bold = false, before = 0, after = 120, alignment = AlignmentType.LEFT } = opts;
  return new Paragraph({
    alignment,
    spacing: { before, after },
    children: [
      new TextRun({ text, font: "Calibri Light", size, color, bold }),
    ],
  });
}

function body(text, opts = {}) {
  const { color = INK, size = 22, before = 0, after = 80, alignment = AlignmentType.LEFT, italics = false } = opts;
  return new Paragraph({
    alignment,
    spacing: { before, after, line: 320 },
    children: [
      new TextRun({ text, font: "Calibri Light", size, color, italics }),
    ],
  });
}

function caps(text, opts = {}) {
  const { color = WARM, size = 14, alignment = AlignmentType.CENTER, before = 0, after = 0, spacing = 200 } = opts;
  // Letter-spaced uppercase via individual character spacing on the run.
  return new Paragraph({
    alignment,
    spacing: { before, after },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: "Calibri Light",
        size,
        color,
        characterSpacing: spacing,
      }),
    ],
  });
}

// Small empty paragraph for vertical breathing room.
const SPACER = (lines = 1) =>
  Array.from({ length: lines }, () =>
    new Paragraph({ children: [new TextRun({ text: "" })], spacing: { before: 0, after: 120 } })
  );

// Header block: logo + tagline (left) and contact details (right), one row.
function buildHeader() {
  // Two-column table for the header so left/right alignment is rock solid.
  // Page width A4 (11906) - left margin 1418 - right margin 1418 = 9070 content.
  const contentWidth = 9070;
  const leftWidth = 4500;
  const rightWidth = contentWidth - leftWidth;

  const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const allNoBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder };

  return new Header({
    children: [
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [leftWidth, rightWidth],
        borders: allNoBorders,
        rows: [
          new TableRow({
            children: [
              // LEFT: actual brand logo PNG (darkened) + tagline.
              new TableCell({
                borders: allNoBorders,
                width: { size: leftWidth, type: WidthType.DXA },
                margins: { top: 0, bottom: 0, left: 0, right: 0 },
                children: [
                  new Paragraph({
                    spacing: { before: 0, after: 60 },
                    children: [
                      new ImageRun({
                        type: "png",
                        data: logoBuffer,
                        transformation: { width: 300, height: 75 },
                        altText: { title: "SteelR", description: "SteelR wordmark", name: "SteelRLogo" },
                      }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { before: 0, after: 0 },
                    children: [
                      new TextRun({
                        text: "BESPOKE ENTRANCE DOORS",
                        font: "Calibri Light",
                        size: 14,
                        color: WARM,
                        characterSpacing: 80,
                      }),
                    ],
                  }),
                ],
              }),
              // RIGHT: contact details
              new TableCell({
                borders: allNoBorders,
                width: { size: rightWidth, type: WidthType.DXA },
                margins: { top: 0, bottom: 0, left: 0, right: 0 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new TextRun({ text: "0800 861 1450", font: "Calibri Light", size: 22, color: INK, bold: true }),
                    ],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new TextRun({ text: "info@steelr.co.uk", font: "Calibri Light", size: 20, color: INK }),
                    ],
                  }),
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new TextRun({ text: "steelr.co.uk", font: "Calibri Light", size: 20, color: WARM }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      // Gold rule under the header
      goldRule({ thickness: 4 }),
    ],
  });
}

// Footer: only the five items the user asked for. Nothing else.
//   1. BESPOKE STEEL ENTRANCE DOORS
//   2. SR3   ·   SR4
//   3. info@steelr.co.uk   ·   steelr.co.uk
function buildFooter() {
  return new Footer({
    children: [
      // Thin gold rule above the footer
      new Paragraph({
        border: {
          top: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 8 },
        },
        spacing: { before: 0, after: 80 },
        children: [new TextRun({ text: " " })],
      }),
      // Line 1 — tagline, letter-spaced caps
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 60 },
        children: [
          new TextRun({
            text: "BESPOKE STEEL ENTRANCE DOORS",
            font: "Calibri",
            size: 16,
            color: INK,
            characterSpacing: 100,
          }),
        ],
      }),
      // Line 2 — security ratings only
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 50 },
        children: [
          new TextRun({
            text: "SR3   ·   SR4",
            font: "Calibri",
            size: 16,
            color: WARM,
            characterSpacing: 60,
          }),
        ],
      }),
      // Line 3 — contact
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 0 },
        children: [
          new TextRun({
            text: "info@steelr.co.uk   ·   steelr.co.uk",
            font: "Calibri",
            size: 15,
            color: MUTED,
          }),
        ],
      }),
    ],
  });
}

// ── Page 1: empty letterhead ────────────────────────────────────────────────
function page1Content() {
  return [
    ...SPACER(1),
    heading("Quotation", { size: 56, color: INK, after: 240 }),
    body("[Client name]", { color: MUTED, after: 60 }),
    body("[Client address line 1]", { color: MUTED, after: 60 }),
    body("[Client address line 2]", { color: MUTED, after: 200 }),
    new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: 9070 }],
      spacing: { before: 0, after: 200 },
      children: [
        new TextRun({ text: "Quote Reference: [SR-XXXX]", font: "Calibri Light", size: 22, color: INK }),
        new TextRun({ text: "\t" }),
        new TextRun({ text: "Date: [DD Month YYYY]", font: "Calibri Light", size: 22, color: INK }),
      ],
    }),
    goldRule({ thickness: 2 }),
    ...SPACER(2),
    body("[Project description]", { color: MUTED, italics: true, after: 200 }),
    ...SPACER(20),
  ];
}

// ── Page 2: filled mock quote (Varun Kumar Rishi brief) ─────────────────────
function page2Content() {
  return [
    new Paragraph({ children: [new PageBreak()] }),
    ...SPACER(1),
    heading("Quotation", { size: 56, color: INK, after: 240 }),
    body("Mr Varun Kumar Rishi", { after: 40 }),
    body("[Address line 1]", { color: MUTED, after: 40 }),
    body("[Address line 2]", { color: MUTED, after: 200 }),
    new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: 9070 }],
      spacing: { before: 0, after: 200 },
      children: [
        new TextRun({ text: "Quote Reference: SR-2026-0142", font: "Calibri Light", size: 22, color: INK }),
        new TextRun({ text: "\t" }),
        new TextRun({ text: "Date: 28 April 2026", font: "Calibri Light", size: 22, color: INK }),
      ],
    }),
    goldRule({ thickness: 2 }),
    ...SPACER(1),
    heading("Project", { size: 26, color: INK, bold: false, after: 120 }),
    body(
      "Bespoke double-leaf steel front entrance for a high-end residential property. Overall structural opening 1820mm wide by 2240mm high. Heritage panelled design referencing Georgian proportions, finished in RAL 9005 Jet Black with antique brass ironmongery throughout.",
      { after: 200 }
    ),
    ...SPACER(1),
    heading("Specification", { size: 26, color: INK, after: 120 }),
    body("Construction: reinforced steel doorset, leaf and frame manufactured and tested as a single unit. Hand-finished in our UK workshop. ISO 9001 certified.", { after: 80 }),
    body("Security rating: SR4 to LPS 1175 Issue 8, LPCB certified. Surpasses the SR3 (C5) baseline specified and exceeds Secured by Design. Tested against sustained attack using drills, crowbars and powered tools, consistent with the reference brief. PAS 24:2022 compliant for Approved Document Q.", { after: 80 }),
    body("Locking: stainless steel multi-point locking system with anti-snap, anti-pick, anti-bump cylinder. Heavy-duty stainless steel security hinges with anti-lift pins.", { after: 80 }),
    body("Hinging: inward-opening configuration. Recommended for residential entrance for weather sealing and pull-side ironmongery presentation.", { after: 80 }),
    body("Finish: custom finish in RAL 9005 Jet Black, satin or matt to be confirmed at specification stage. Inside and out.", { after: 80 }),
    body("Ironmongery: antique brass throughout. Specification options include lion's head knocker, doctor knocker, or ring knocker, with matching escutcheon and lever or knob set.", { after: 80 }),
    body("Warranty: ten years on the door construction, five years on the decorative finish, three years on hardware components. Extended warranty packages available on request.", { after: 200 }),
    ...SPACER(1),
    heading("Investment", { size: 26, color: INK, after: 120 }),
    body("Total quotation provided separately on the accompanying schedule. Excludes VAT.", { color: MUTED, italics: true, after: 80 }),
    body("Payment terms: 40% deposit on order, 50% on commencement of manufacture, 10% on completion of installation.", { after: 80 }),
    body("Lead time: ten to twelve weeks from signed order to installation, subject to site survey.", { after: 200 }),
    ...SPACER(1),
    heading("Validity", { size: 26, color: INK, after: 120 }),
    body("This quotation is valid for thirty days from the date above. Specifications and pricing are subject to confirmation following on-site survey.", { after: 200 }),
    body("Yours sincerely,", { after: 600 }),
    body("[Name]", { color: MUTED }),
    body("SteelR", { color: MUTED, after: 0 }),
  ];
}

// ── Build the document ──────────────────────────────────────────────────────
const doc = new Document({
  creator: "SteelR",
  title: "SteelR Letterhead",
  description: "Bespoke entrance door quotation letterhead",
  sections: [
    {
      properties: {
        page: {
          size: {
            width: 11906,    // A4 width in DXA
            height: 16838,   // A4 height in DXA
            orientation: PageOrientation.PORTRAIT,
          },
          margin: { top: 1418, right: 1418, bottom: 1418, left: 1418 }, // 2.5 cm
        },
      },
      headers: { default: buildHeader() },
      footers: { default: buildFooter() },
      children: [
        ...page1Content(),
        ...page2Content(),
      ],
    },
  ],
});

// Write to the canonical filename when possible. If Word has it open and
// it is locked, fall through to a -v<N> filename so the user does not lose
// their current open copy.
const baseDir = "C:\\Users\\SOT\\Documents";
const baseName = "SteelR-Letterhead";
const buffer = await Packer.toBuffer(doc);

let outPath = path.join(baseDir, `${baseName}.docx`);
try {
  fs.writeFileSync(outPath, buffer);
} catch (err) {
  if (err.code === "EBUSY" || err.code === "EPERM") {
    // Find next free numbered slot
    let n = 2;
    while (true) {
      const candidate = path.join(baseDir, `${baseName}-v${n}.docx`);
      if (!fs.existsSync(candidate)) {
        try {
          fs.writeFileSync(candidate, buffer);
          outPath = candidate;
          break;
        } catch (innerErr) {
          if (innerErr.code !== "EBUSY" && innerErr.code !== "EPERM") throw innerErr;
        }
      }
      n += 1;
      if (n > 50) throw new Error("Could not find a free filename slot");
    }
  } else {
    throw err;
  }
}

console.log("Written:", outPath, "(", buffer.length, "bytes )");
