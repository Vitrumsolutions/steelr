import { gerdaDesigns, type GerdaRangeSlug, type GerdaSeries } from "./gerda-designs";

/**
 * The Gerda collection: three series-manufactured residential door ranges that
 * SteelR supplies and installs alongside its own bespoke doors.
 *
 * SOURCING RULE. Every figure in this file (U-values, RC grades, dimensions,
 * lock descriptions, colour references, maximum heights) is copied from the
 * three range brochures held in Drive under
 * "Brochures & Paperwork / Vitrum Brochures / Gerda" (Optima 60, Thermo
 * Premium 75, Thermo Prime 75, added 12 Nov 2026). Do not add a number that is
 * not printed there or on a manufacturer page you can link to. Nothing here
 * borrows a SteelR bespoke claim: Gerda doors are a different product with
 * their own specification, so RC4, LPS 1175, PAS 24, FD30S, "UK made" and the
 * 8 week lead time must never be attached to them.
 *
 * The brochures themselves are not published on the site: they carry a
 * residential address on every page (site brand rule 3).
 *
 * MANUFACTURER CROSS-CHECK (14 Nov 2026). Leaf construction, place of
 * manufacture and the Optima 60 sound rating are not in the UK brochures and
 * come from Gerda's own documents:
 *   - House Doors catalogue, Edition 1.2026:
 *     https://gerda.pl/wp-content/uploads/2021/07/EN_HOUSE-DOORS-EDITION-2026-1_www.pdf
 *     (cores: "wooden frame + expanded graphite polystyrene" for Optima 60 and
 *     Thermo Premium 75, "wooden frame + PUR foam" for Thermo Prime 75; the
 *     75 mm ranges are described only as "metal door"; RC3 is a package)
 *   - Declarations of performance dated 15.12.2025 (plant: Starachowice,
 *     Poland; Optima 60 Rw 36 dB solid, 30 dB glazed):
 *     https://gerda.pl/wp-content/uploads/2023/03/DoP-114.1-D-25.pdf
 *   - Gerda operating since 1987: https://gerda.pl/en/serwis/o-nas/misja-i-wartosci/
 *   - Gerda describes the Optima leaf as steel (Optima Duo 60 page):
 *     https://gerda.pl/produkt/drzwi-do-domow/optima/duo-60/
 * NOT confirmed on any manufacturer source, so NOT claimed anywhere here:
 * PAS 24, Secured by Design, any fire rating, a UK warranty term, a UK lead
 * time. Do not add them without a document.
 * Known differences between the UK brochures and the Polish catalogue (owner
 * to confirm with the supplier): Optima 60 solid Ud is 1.0 in the brochure and
 * catalogue but 1.1 in the declaration of performance; Thermo Premium 75 is
 * 0.8 / 1.1 in the UK brochure and 0.79 / 0.85 in the catalogue. The UK
 * brochure figures are used because they describe the door as sold here and
 * are equal to or more cautious than the catalogue in every case but one.
 */

export const GERDA_URL = "https://steelr.co.uk/gerda-doors";

export interface GerdaImage {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption?: string;
  /** CSS object-position when the image is cropped into a fixed-ratio frame. */
  position?: string;
}

export interface GerdaFaq {
  question: string;
  answer: string;
}

export interface GerdaRange {
  slug: GerdaRangeSlug;
  /** "Optima 60" */
  name: string;
  /** "Gerda Optima 60" */
  fullName: string;
  leafMm: number;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  cardSummary: string;
  cardFacts: Array<{ label: string; value: string }>;
  intro: string[];
  keyFacts: Array<{ label: string; value: string }>;
  factsFootnote: string;
  hero: GerdaImage;
  construction: GerdaImage;
  constructionTitle: string;
  constructionIntro: string;
  features: Array<{ title: string; text: string }>;
  designsIntro: string;
  seriesSizes: Array<{ series: GerdaSeries; width: string; height: string; note?: string }>;
  gallery: GerdaImage[];
  coloursIntro: string;
  optionsIntro: string;
  options: Array<{ label: string; value: string }>;
  faqs: GerdaFaq[];
  schemaProperties: Array<{ name: string; value: string }>;
}

const countFor = (slug: GerdaRangeSlug) => gerdaDesigns.filter((d) => d.ranges.includes(slug)).length;
const N_OPTIMA = countFor("optima-60");
const N_PREMIUM = countFor("thermo-premium-75");
const N_PRIME = countFor("thermo-prime-75");
const N_ALL = gerdaDesigns.length;

const RC_NOTE = "The RC grade (2 or 3 under EN 1627) depends on door size and design. Gerda offers RC3 as a package on solid doors, so the grade is confirmed for your chosen design at quotation.";
const SIZE_NOTE = "Heights exclude the 27 mm sill and any extensions, and include the low threshold. Sizes are made in 10 mm increments; the available width and height depend on the design and colour.";

/* ------------------------------------------------------------------ */
/* Shared finishes and options (identical across the three brochures)  */
/* ------------------------------------------------------------------ */

export const gerdaColours: Array<{ code: string; name: string; maxHeight: string; maxHeightPrime: string }> = [
  { code: "FSB", name: "White", maxHeight: "2200 mm", maxHeightPrime: "2400 mm" },
  { code: "FKZ", name: "Steel Grey", maxHeight: "2100 mm", maxHeightPrime: "2100 mm" },
  { code: "FKG", name: "Anthracite", maxHeight: "2200 mm", maxHeightPrime: "2400 mm" },
  { code: "FKF", name: "Dark Anthracite", maxHeight: "2200 mm", maxHeightPrime: "2400 mm" },
  { code: "FKC", name: "Black", maxHeight: "2100 mm", maxHeightPrime: "2100 mm" },
  { code: "FRR", name: "Alpine Walnut", maxHeight: "2100 mm", maxHeightPrime: "2100 mm" },
  { code: "FMA", name: "Mahogany", maxHeight: "2087 mm", maxHeightPrime: "2087 mm" },
  { code: "FRB", name: "Brazilian Walnut", maxHeight: "2100 mm", maxHeightPrime: "2100 mm" },
  { code: "FRP", name: "Light Walnut", maxHeight: "2200 mm", maxHeightPrime: "2400 mm" },
  { code: "FDE", name: "Golden Oak", maxHeight: "2200 mm", maxHeightPrime: "2400 mm" },
  { code: "FDW", name: "Winchester", maxHeight: "2200 mm", maxHeightPrime: "2400 mm" },
  { code: "FDT", name: "Turner Oak", maxHeight: "2087 mm", maxHeightPrime: "2087 mm" },
  { code: "FEJ", name: "Light Wenge", maxHeight: "2100 mm", maxHeightPrime: "2100 mm" },
];

export const gerdaExtraColours = [
  "Black Matt",
  "Silk Anthracite",
  "Red",
  "Pistachio",
  "Light Blue",
  "Light Green",
  "Blue",
  "Dark Green",
  "Cobalt Blue",
];

export const gerdaOptions: Array<{ label: string; value: string }> = [
  { label: "Glass", value: "Clear, Matte, Reflex Graphite, Reflex Brown or Mira Star." },
  { label: "Insert strips", value: "Black (RAL 9005) or brushed stainless steel." },
  { label: "Hardware finishes", value: "Platinum, silver or black anodised. Brushed stainless steel is available on handrails." },
  { label: "Handrails", value: "Amsterdam and Montreal pull bars in 1000, 1500, 1700 and 1800 mm lengths." },
  { label: "Side lights and top lights", value: "Side lights 300 to 900 mm wide and 1950 to 2200 mm high. Top lights 840 to 2950 mm wide and 300 to 500 mm high. Both are made in 10 mm increments." },
  { label: "Sills", value: "The sill sits under the frame on the outside. Four depths: 120, 150, 180 and 230 mm, with thermal compensation, finished in the door colour." },
  { label: "Letterplates", value: "Platinum, silver or black anodised." },
  { label: "Keys", value: "A two stage key system. Two installer keys operate the door during fitting. The first use of an owner key cancels them. Five owner keys arrive in a sealed bag with a code card." },
  { label: "Smart lock", value: "A tedee smart lock with its bridge (a plug in unit that connects the lock to the internet) can be added, so the door can be locked, unlocked and checked from a phone. A keypad with PIN and fingerprint entry is also available." },
];

/* ------------------------------------------------------------------ */
/* Design series                                                       */
/* ------------------------------------------------------------------ */

export const gerdaSeries: Record<GerdaSeries, { blurb: string; availableIn: string; showcase: string[] }> = {
  Tempo: {
    blurb: "Flat contemporary leaves with stainless or black insert strips, slim glazed panels and long bar handles.",
    availableIn: "all three ranges",
    showcase: ["NS1", "NS7", "SNUB", "ST8", "SOJ", "TN7"],
  },
  Quadro: {
    blurb: "Flush leaves divided by horizontal and vertical lines, many with square or full height glazing and contrasting colour blocks. The inside face is plain as standard.",
    availableIn: "Thermo Premium 75 and Thermo Prime 75",
    showcase: ["KWT", "KWF", "KWSB", "KWA", "KPM", "KWK"],
  },
  "Air Glass": {
    blurb: "Designs built around a tall glass panel set into the leaf. Air Glass doors are made at a fixed height of 2087 mm without a sill. The two Villach designs are the exception: they are made in a range of heights and need a width of 1030 to 1130 mm.",
    availableIn: "Thermo Premium 75 and Thermo Prime 75",
    showcase: ["AGA", "AGC", "AGGB", "AGH", "AGE", "AGD"],
  },
  "Elite 3D": {
    blurb: "Panelled doors with raised decorative mouldings. The mouldings are thick aluminium profiles fixed to the leaf and finished in the leaf colour. The series includes the Hawkstone, a traditional four panel door with two glazed lights.",
    availableIn: "all three ranges",
    showcase: ["Hawkstone", "ELA", "ELB", "ELC", "ELD", "ELE"],
  },
  Classic: {
    blurb: "Traditional pressed panel designs, including arched and oval panel layouts, with the same pattern on both faces as standard.",
    availableIn: "Optima 60",
    showcase: ["W91", "W54", "W23", "WJ1", "W9N", "W24"],
  },
};

/* ------------------------------------------------------------------ */
/* Ranges                                                              */
/* ------------------------------------------------------------------ */

const LIFE = "/images/gerda/lifestyle";
const DETAIL = "/images/gerda/detail";

const zwLocking: Array<{ title: string; text: string }> = [
  { title: "Main lock", text: "A 3-bolt class 7 Gerda ZW 2000 main lock." },
  { title: "Additional lock", text: "A 3-bolt class 6 Gerda ZW 500 additional lock, set above the main lock." },
  { title: "Auxiliary lock and vertical bolt", text: "A 2-bolt auxiliary lock and an anti-burglary vertical bolt, both driven by the main lock." },
  { title: "Cylinders and keys", text: "Class 6 lock cylinders on a single key system, so one key operates both the main and additional lock." },
];

export const gerdaRanges: GerdaRange[] = [
  {
    slug: "optima-60",
    name: "Optima 60",
    fullName: "Gerda Optima 60",
    leafMm: 60,
    eyebrow: "Gerda residential doors",
    h1: "Gerda Optima 60 Entrance Doors",
    metaTitle: "Gerda Optima 60 Doors | RC2 or RC3 Security | SteelR",
    metaDescription: `Gerda Optima 60 doors supplied and installed by SteelR. 60 mm leaf, U-value 1.0 W/m²K, RC2 or RC3 burglary rating, ${N_OPTIMA} designs across three series.`,
    cardSummary: "The 60 mm range, and the one with the widest choice of contemporary Tempo designs plus the traditional Classic panel doors.",
    cardFacts: [
      { label: "U-value, solid door", value: "1.0 W/m²K" },
      { label: "Burglary resistance", value: "RC2 or RC3" },
      { label: "Designs", value: String(N_OPTIMA) },
    ],
    intro: [
      "Optima 60 is the 60 mm range in the Gerda residential collection. The leaf sits in an Alutherm 60 aluminium frame and is secured by the Gerda ZW 2000 main lock with a second three bolt lock above it.",
      `It is offered in ${N_OPTIMA} designs across three series: the contemporary Tempo designs, the traditional Classic panel doors, and the Hawkstone from the Elite 3D series. SteelR supplies and installs the range.`,
    ],
    keyFacts: [
      { label: "Thermal performance (U-value)", value: "1.0 W/m²K solid, 1.3 W/m²K glazed" },
      { label: "Burglary resistance", value: "RC2 or RC3 to EN 1627" },
      { label: "Door leaf", value: "60 mm thick" },
      { label: "Frame", value: "Alutherm 60 aluminium, 77 mm" },
      { label: "Width", value: "840 to 1130 mm" },
      { label: "Height", value: "1950 to 2200 mm" },
      { label: "Sound insulation", value: "36 dB solid, 30 dB glazed" },
      { label: "Made in", value: "Starachowice, Poland" },
    ],
    factsFootnote: `${RC_NOTE} ${SIZE_NOTE} Sound insulation is taken from Gerda's declaration of performance for Optima 60.`,
    hero: {
      src: `${LIFE}/optima-60-milano-4-b-winchester.webp`,
      alt: "Gerda Optima 60 front door, Tempo Milano 4 B design in Winchester woodgrain with a black insert and long handrail, on a white rendered house",
      w: 1212,
      h: 1722,
      caption: "Tempo Milano 4 B in Winchester with a black insert and Montreal handrail.",
      position: "center 60%",
    },
    construction: {
      src: `${DETAIL}/optima-60-construction.webp`,
      alt: "Cutaway of a Gerda Optima 60 door leaf showing the insulated core, lock positions and frame",
      w: 1209,
      h: 1395,
      caption: "Optima 60 leaf in section, showing the insulated core and the three lock positions on the leading edge.",
    },
    constructionTitle: "A 60 mm leaf with a main lock and a second lock above it",
    constructionIntro: "The Optima 60 specification, as set out in the UK range brochure. The doors are made at Gerda's plant in Starachowice, Poland.",
    features: [
      { title: "Leaf construction", text: "Gerda describes the Optima leaf as steel. It is 60 mm thick, on a timber inner frame, with an expanded graphite polystyrene core." },
      ...zwLocking,
      { title: "Hinges", text: "Adjustable in two planes, with caps that match the hardware colour, and three hinge guards on the hinge side." },
      { title: "Frame and seals", text: "An Alutherm 60 aluminium frame. The door is rebated on three sides, meaning leaf and frame overlap in a stepped edge. An adjustable keep, the plate the lock engages in the frame, sets how firmly the leaf closes against the seals." },
      { title: "Threshold", text: "A low aluminium threshold as standard." },
    ],
    designsIntro: "Each design is shown as Gerda illustrates it. Colours and hardware in the pictures are examples: any design can be ordered in any colour its size allows.",
    seriesSizes: [
      { series: "Tempo", width: "840 to 1130 mm", height: "1950 to 2200 mm", note: "Tempo designs carry the pattern on both faces as standard." },
      { series: "Elite 3D", width: "840 to 1130 mm", height: "1950 to 2200 mm", note: "The Hawkstone has the design on both faces as standard." },
      { series: "Classic", width: "920 to 1030 mm", height: "1950 to 2100 mm" },
    ],
    gallery: [
      { src: `${LIFE}/optima-60-berlin-4-winchester-sidelight.webp`, alt: "Gerda Optima 60 Tempo Berlin 4 door in Winchester with stainless inserts and a matte glass side light", w: 1081, h: 798, caption: "Tempo Berlin 4 in Winchester, stainless inserts, matte side light." },
      { src: `${LIFE}/optima-60-milano-12-steel-grey.webp`, alt: "Gerda Optima 60 Tempo Milano 12 door in Steel Grey with a stainless insert", w: 1081, h: 755, caption: "Tempo Milano 12 in Steel Grey with a stainless insert." },
      { src: `${LIFE}/optima-60-bergamo-2-dark-anthracite-sidelight.webp`, alt: "Gerda Optima 60 Tempo Bergamo 2 door in Dark Anthracite with a curved glazed panel and matte side light", w: 1081, h: 798, caption: "Tempo Bergamo 2 in Dark Anthracite with a matte side light.", position: "40% center" },
      { src: `${LIFE}/optima-60-turyn-1-golden-oak.webp`, alt: "Gerda Optima 60 Tempo Turyn 1 door in Golden Oak with a stainless insert", w: 571, h: 755, caption: "Tempo Turyn 1 in Golden Oak with a stainless insert." },
    ],
    coloursIntro: "Thirteen standard colours and woodgrains. The tallest door available depends on the colour chosen.",
    optionsIntro: "Handle sets for Optima 60, followed by the options shared across the Gerda collection.",
    options: [
      { label: "Handle sets", value: "Blok TW200, Bergen TW300 and Bergen TD300, as handle both sides or knob outside and handle inside. A handrail can replace the outside handle: Montreal pairs with Blok and Amsterdam pairs with Bergen." },
    ],
    faqs: [
      {
        question: "What is the U-value of the Gerda Optima 60?",
        answer: "The range brochure gives a Ud of 1.0 W/m²K for a solid Optima 60 door and 1.3 W/m²K for a glazed one. Ud is the heat loss figure for the whole door, and a lower number means less heat lost.",
      },
      {
        question: "What security rating does the Gerda Optima 60 have?",
        answer: "Optima 60 is rated RC2 or RC3 under the European burglary resistance standard EN 1627. Which of the two grades applies depends on the door size and design. The door has a 3-bolt class 7 Gerda ZW 2000 main lock, a 3-bolt class 6 Gerda ZW 500 additional lock, a 2-bolt auxiliary lock, an anti-burglary vertical bolt and three hinge guards.",
      },
      {
        question: "What sizes does the Gerda Optima 60 come in?",
        answer: "Tempo and Elite 3D designs are made from 840 to 1130 mm wide and 1950 to 2200 mm high. Classic designs are made from 920 to 1030 mm wide and 1950 to 2100 mm high. Sizes step in 10 mm increments, and the maximum height also depends on the colour. Side lights and top lights extend the opening.",
      },
      {
        question: "How is Optima 60 different from Thermo Premium 75?",
        answer: "Both share the same Gerda ZW 2000 locking and the same RC2 or RC3 rating. Thermo Premium 75 has a thicker 75 mm leaf with a thermal break, a four sided rebate and a lower Ud of 0.8 W/m²K against 1.0 W/m²K for Optima 60. Optima 60 is the range that carries the Classic panel designs.",
      },
    ],
    schemaProperties: [
      { name: "Thermal transmittance (Ud), solid door", value: "1.0 W/m²K" },
      { name: "Thermal transmittance (Ud), glazed door", value: "1.3 W/m²K" },
      { name: "Burglary resistance class (EN 1627)", value: "RC2 or RC3, depending on door size and design" },
      { name: "Door leaf thickness", value: "60 mm" },
      { name: "Frame", value: "Alutherm 60 aluminium" },
      { name: "Width range", value: "840 to 1130 mm" },
      { name: "Height range", value: "1950 to 2200 mm" },
      { name: "Sound insulation (Rw), solid door", value: "36 dB" },
      { name: "Number of designs", value: String(N_OPTIMA) },
    ],
  },
  {
    slug: "thermo-premium-75",
    name: "Thermo Premium 75",
    fullName: "Gerda Thermo Premium 75",
    leafMm: 75,
    eyebrow: "Gerda residential doors",
    h1: "Gerda Thermo Premium 75 Entrance Doors",
    metaTitle: "Gerda Thermo Premium 75 Doors | U-value 0.8 | SteelR",
    metaDescription: `Gerda Thermo Premium 75 doors supplied and installed by SteelR. 75 mm leaf, thermal break, U-value 0.8 W/m²K, RC2 or RC3 burglary rating, ${N_PREMIUM} designs.`,
    cardSummary: "A 75 mm leaf with a thermal break, the full Gerda ZW 2000 locking set and the largest choice of designs in the collection.",
    cardFacts: [
      { label: "U-value, solid door", value: "0.8 W/m²K" },
      { label: "Burglary resistance", value: "RC2 or RC3" },
      { label: "Designs", value: String(N_PREMIUM) },
    ],
    intro: [
      "Thermo Premium 75 has a 75 mm door leaf with a thermal break (an insulating barrier that slows heat passing through the door) and an Alutherm 75 aluminium frame. It keeps the Gerda ZW 2000 main lock and second three bolt lock used on Optima 60, and lowers the U-value to 0.8 W/m²K for a solid door.",
      `With ${N_PREMIUM} designs it has the widest choice in the collection: the Tempo and Elite 3D designs, plus the Quadro and Air Glass series. SteelR supplies and installs the range.`,
    ],
    keyFacts: [
      { label: "Thermal performance (U-value)", value: "0.8 W/m²K solid, 1.1 W/m²K glazed" },
      { label: "Burglary resistance", value: "RC2 or RC3 to EN 1627" },
      { label: "Door leaf", value: "75 mm thick, with thermal break" },
      { label: "Frame", value: "Alutherm 75 aluminium, 77 mm" },
      { label: "Width", value: "840 to 1130 mm" },
      { label: "Height", value: "1950 to 2200 mm" },
    ],
    factsFootnote: `${RC_NOTE} ${SIZE_NOTE}`,
    hero: {
      src: `${LIFE}/thermo-premium-75-milano-8-winchester-sidelight.webp`,
      alt: "Gerda Thermo Premium 75 front door, Tempo Milano 8 design in Winchester woodgrain with a stainless insert and matte glass side light",
      w: 1212,
      h: 1507,
      caption: "Tempo Milano 8 in Winchester with a stainless insert and matte side light.",
    },
    construction: {
      src: `${DETAIL}/thermo-premium-75-construction.webp`,
      alt: "Cutaway of a Gerda Thermo Premium 75 door leaf showing the insulated core, thermal break and lock positions",
      w: 1209,
      h: 1648,
      caption: "Thermo Premium 75 leaf in section, showing the insulated core and the lock positions on the leading edge.",
    },
    constructionTitle: "A 75 mm leaf with a thermal break and four sided rebate",
    constructionIntro: "The Thermo Premium 75 specification, as set out in the UK range brochure. The doors are made at Gerda's plant in Starachowice, Poland.",
    features: [
      { title: "Leaf construction", text: "A metal faced leaf, 75 mm thick, on a timber inner frame with an expanded graphite polystyrene core and a thermal break." },
      ...zwLocking,
      { title: "Hinges", text: "Adjustable in three planes, with caps that match the hardware colour, and three hinge guards on the hinge side." },
      { title: "Leaf and frame", text: "A door leaf with a thermal break in an Alutherm 75 aluminium frame. The door is rebated on four sides, meaning leaf and frame overlap in a stepped edge. An adjustable keep, the plate the lock engages in the frame, sets how firmly the leaf closes against the seals." },
      { title: "Threshold and weather seal", text: "A low aluminium threshold with a thermal break, and a bottom weather seal on the leaf." },
    ],
    designsIntro: "Each design is shown as Gerda illustrates it. Colours and hardware in the pictures are examples: any design can be ordered in any colour its size allows.",
    seriesSizes: [
      { series: "Tempo", width: "840 to 1130 mm", height: "1950 to 2200 mm", note: "Milano, Hanover and Innsbruck carry the design on both faces as standard." },
      { series: "Quadro", width: "840 to 1130 mm", height: "1950 to 2200 mm", note: "Kronach, Regen, Drezno and Erfurt can be ordered with the design on both faces as an option." },
      { series: "Air Glass", width: "840 to 1130 mm (Villach 1030 to 1130 mm)", height: "2087 mm fixed (Villach 1950 to 2200 mm)" },
      { series: "Elite 3D", width: "840 to 1130 mm", height: "1950 to 2200 mm", note: "Classic or modern moulding frames. The inside face is plain as standard, with the design on both faces as an option. The Hawkstone has the design on both faces as standard." },
    ],
    gallery: [
      { src: `${LIFE}/thermo-premium-75-kassel-1-anthracite-winchester.webp`, alt: "Gerda Thermo Premium 75 Quadro Kassel 1 door in Dark Anthracite with Winchester woodgrain blocks on a white house", w: 1226, h: 827, caption: "Quadro Kassel 1 in Dark Anthracite and Winchester.", position: "62% center" },
      { src: `${LIFE}/thermo-premium-75-dorfen-b-winchester-sidelight.webp`, alt: "Gerda Thermo Premium 75 Quadro Dorfen B door in Winchester with square glazed panels and a matte side light", w: 1081, h: 796, caption: "Quadro Dorfen B in Winchester with a matte side light.", position: "58% center" },
      { src: `${LIFE}/thermo-premium-75-hanover-6-dark-anthracite-sidelight.webp`, alt: "Gerda Thermo Premium 75 Tempo Hanover 6 door in Dark Anthracite with a stainless insert and matte side light", w: 1081, h: 755, caption: "Tempo Hanover 6 in Dark Anthracite with a matte side light.", position: "70% center" },
      { src: `${LIFE}/thermo-premium-75-bamberg-1-steel-grey.webp`, alt: "Gerda Thermo Premium 75 Quadro Bamberg 1 door in Steel Grey with a stainless insert", w: 543, h: 755, caption: "Quadro Bamberg 1 in Steel Grey with a stainless insert." },
    ],
    coloursIntro: "Thirteen standard colours and woodgrains. The tallest door available depends on the colour chosen.",
    optionsIntro: "Handle sets for Thermo Premium 75, followed by the options shared across the Gerda collection.",
    options: [
      { label: "Handle sets", value: "Bergen TD200, as handle both sides or knob outside and handle inside. An Amsterdam or Montreal handrail can replace the outside handle." },
    ],
    faqs: [
      {
        question: "What is the U-value of the Gerda Thermo Premium 75?",
        answer: "The range brochure gives a Ud of 0.8 W/m²K for a solid Thermo Premium 75 door and 1.1 W/m²K for a glazed one. Ud is the heat loss figure for the whole door, and a lower number means less heat lost.",
      },
      {
        question: "What security rating does the Gerda Thermo Premium 75 have?",
        answer: "Thermo Premium 75 is rated RC2 or RC3 under the European burglary resistance standard EN 1627, depending on the door size and design. It has a 3-bolt class 7 Gerda ZW 2000 main lock, a 3-bolt class 6 Gerda ZW 500 additional lock, a 2-bolt auxiliary lock, an anti-burglary vertical bolt and three hinge guards.",
      },
      {
        question: "What is the difference between Thermo Premium 75 and Thermo Prime 75?",
        answer: "Both have a 75 mm leaf with a thermal break in an Alutherm 75 frame. Thermo Premium 75 uses the Gerda ZW 2000 multi lock set and is rated RC2 or RC3. Thermo Prime 75 uses a 5-point mortise lock or a 3-point automatic lock, is rated RC2, has a slightly lower Ud of 0.79 W/m²K and can be made up to 2400 mm high in selected colours and designs.",
      },
      {
        question: "What sizes does the Gerda Thermo Premium 75 come in?",
        answer: "Tempo, Quadro and Elite 3D designs are made from 840 to 1130 mm wide and 1950 to 2200 mm high, in 10 mm increments. Air Glass designs are made at a fixed height of 2087 mm, except the Villach designs, which are made 1950 to 2200 mm high and need a width of 1030 to 1130 mm. The maximum height also depends on the colour.",
      },
    ],
    schemaProperties: [
      { name: "Thermal transmittance (Ud), solid door", value: "0.8 W/m²K" },
      { name: "Thermal transmittance (Ud), glazed door", value: "1.1 W/m²K" },
      { name: "Burglary resistance class (EN 1627)", value: "RC2 or RC3, depending on door size and design" },
      { name: "Door leaf thickness", value: "75 mm" },
      { name: "Frame", value: "Alutherm 75 aluminium" },
      { name: "Width range", value: "840 to 1130 mm" },
      { name: "Height range", value: "1950 to 2200 mm" },
      { name: "Number of designs", value: String(N_PREMIUM) },
    ],
  },
  {
    slug: "thermo-prime-75",
    name: "Thermo Prime 75",
    fullName: "Gerda Thermo Prime 75",
    leafMm: 75,
    eyebrow: "Gerda residential doors",
    h1: "Gerda Thermo Prime 75 Entrance Doors",
    metaTitle: "Gerda Thermo Prime 75 Doors | U-value 0.79 | SteelR",
    metaDescription: `Gerda Thermo Prime 75 doors supplied and installed by SteelR. 75 mm leaf with thermal break, U-value 0.79 W/m²K, RC2 rating, ${N_PRIME} designs in four series.`,
    cardSummary: "U-values of 0.79 W/m²K solid and 0.9 W/m²K glazed, a choice of mortise or automatic locking, and heights up to 2400 mm in selected colours and designs.",
    cardFacts: [
      { label: "U-value, solid door", value: "0.79 W/m²K" },
      { label: "Burglary resistance", value: "RC2" },
      { label: "Designs", value: String(N_PRIME) },
    ],
    intro: [
      "Thermo Prime 75 has U-values of 0.79 W/m²K for a solid door and 0.9 W/m²K glazed, the lowest of the three ranges in the UK brochures. The 75 mm leaf has a thermal break (an insulating barrier that slows heat passing through the door) and sits in an Alutherm 75 aluminium frame.",
      `Locking is a 5-point mortise lock or a 3-point automatic lock, and the range is rated RC2. It is offered in ${N_PRIME} designs across the Tempo, Quadro, Air Glass and Elite 3D series, and in selected colours and designs it can be made up to 2400 mm high. SteelR supplies and installs the range.`,
    ],
    keyFacts: [
      { label: "Thermal performance (U-value)", value: "0.79 W/m²K solid, 0.9 W/m²K glazed" },
      { label: "Burglary resistance", value: "RC2" },
      { label: "Door leaf", value: "75 mm thick, with thermal break" },
      { label: "Frame", value: "Alutherm 75 aluminium, 77 mm" },
      { label: "Width", value: "840 to 1130 mm" },
      { label: "Height", value: "1950 to 2200 mm, or up to 2400 mm in selected colours and designs" },
    ],
    factsFootnote: `${SIZE_NOTE} Doors over 2200 mm are available in a limited choice of colours and designs and are not tested for security or weather resistance.`,
    hero: {
      src: `${LIFE}/thermo-prime-75-pasawa-1-black-golden-oak.webp`,
      alt: "Gerda Thermo Prime 75 front door, Quadro Pasawa 1 design in Black with a Golden Oak strip, long handrail and full height glazed side light",
      w: 664,
      h: 943,
      caption: "Quadro Pasawa 1 in Black and Golden Oak with a stainless insert and Amsterdam handrail.",
    },
    construction: {
      src: `${DETAIL}/thermo-prime-75-construction.webp`,
      alt: "Cutaway of a Gerda Thermo Prime 75 door leaf showing the insulated core and thermal break",
      w: 604,
      h: 707,
      caption: "Thermo Prime 75 leaf in section, showing the insulated core.",
    },
    constructionTitle: "A 75 mm leaf with a thermal break and a choice of two locks",
    constructionIntro: "The Thermo Prime 75 specification, as set out in the UK range brochure. The doors are made at Gerda's plant in Starachowice, Poland.",
    features: [
      { title: "Leaf construction", text: "A metal faced leaf, 75 mm thick, on a timber inner frame with a polyurethane (PUR) foam core and a thermal break." },
      { title: "Locking", text: "A 5-point mortise lock, or a 3-point automatic lock, with adjustable hook keeps that have a flexible insert." },
      { title: "Cylinder and keys", text: "A class 6 lock cylinder on the two stage installer and owner key system." },
      { title: "Hinges", text: "Adjustable in three planes, with caps that match the hardware colour, and three hinge guards on the hinge side." },
      { title: "Leaf and frame", text: "A door leaf with a thermal break in an Alutherm 75 aluminium frame. The door is rebated on four sides, meaning leaf and frame overlap in a stepped edge. An adjustable keep, the plate the lock engages in the frame, sets how firmly the leaf closes against the seals." },
      { title: "Threshold and weather seal", text: "A low aluminium threshold with a thermal break, a composite threshold connector and a bottom weather seal on the leaf." },
      { title: "Ring plate", text: "A ring plate around the lock cylinder (a ring escutcheon) is available where the door is fitted with a handrail." },
    ],
    designsIntro: "Each design is shown as Gerda illustrates it. Colours and hardware in the pictures are examples: any design can be ordered in any colour its size allows.",
    seriesSizes: [
      { series: "Tempo", width: "840 to 1130 mm", height: "1950 to 2400 mm", note: "Milano and Hanover carry the design on both faces as standard." },
      { series: "Quadro", width: "840 to 1130 mm", height: "1950 to 2400 mm", note: "Kronach, Regen, Drezno and Erfurt can be ordered with the design on both faces as an option." },
      { series: "Air Glass", width: "840 to 1130 mm (Villach 1030 to 1130 mm)", height: "2087 mm fixed (Villach 1950 to 2400 mm)" },
      { series: "Elite 3D", width: "840 to 1130 mm", height: "1950 to 2400 mm (Hawkstone 1950 to 2200 mm)", note: "Classic or modern moulding frames. The inside face is plain as standard, with the design on both faces as an option. The Hawkstone has the design on both faces as standard." },
    ],
    gallery: [
      { src: `${LIFE}/thermo-prime-75-regen-6-b-winchester-sidelight.webp`, alt: "Gerda Thermo Prime 75 Quadro Regen 6 B door in Winchester with a black handrail and matte side light", w: 540, h: 399, caption: "Quadro Regen 6 B in Winchester with a black insert and matte side light.", position: "35% center" },
      { src: `${LIFE}/thermo-prime-75-linz-2-anthracite-sidelight.webp`, alt: "Gerda Thermo Prime 75 Air Glass Linz 2 door in Anthracite with a matte side light", w: 540, h: 349, caption: "Air Glass Linz 2 in Anthracite with a matte side light.", position: "62% center" },
      { src: `${LIFE}/thermo-prime-75-graz-3-b-white-sidelight.webp`, alt: "Gerda Thermo Prime 75 Air Glass Graz 3 B door in White with a black insert and striped matte side light", w: 540, h: 427, caption: "Air Glass Graz 3 B in White with a black insert and side light.", position: "55% center" },
      { src: `${LIFE}/thermo-prime-75-pasawa-4-brazilian-walnut.webp`, alt: "Gerda Thermo Prime 75 Quadro Pasawa 4 door in Brazilian Walnut with a stainless insert", w: 271, h: 377, caption: "Quadro Pasawa 4 in Brazilian Walnut with a stainless insert." },
    ],
    coloursIntro: "Thirteen standard colours and woodgrains. Six of them can be made up to 2400 mm high in this range.",
    optionsIntro: "Handle sets for Thermo Prime 75, followed by the options shared across the Gerda collection.",
    options: [
      { label: "Handle sets", value: "Bergen TW300, as handle both sides or knob outside and handle inside, or Sofia as handle both sides. An Amsterdam or Montreal handrail with a ring plate can replace the outside handle." },
    ],
    faqs: [
      {
        question: "What is the U-value of the Gerda Thermo Prime 75?",
        answer: "The range brochure gives a Ud of 0.79 W/m²K for a solid Thermo Prime 75 door and 0.9 W/m²K for a glazed one. These are the lowest figures of the three ranges in the UK brochures. Ud is the heat loss figure for the whole door, and a lower number means less heat lost.",
      },
      {
        question: "How tall can a Gerda Thermo Prime 75 door be?",
        answer: "The standard height range is 1950 to 2200 mm. In selected colours and designs the door can be made up to 2400 mm. Gerda states that doors over 2200 mm are not tested for security or weather resistance, so the RC2 rating applies up to 2200 mm.",
      },
      {
        question: "What locking does the Gerda Thermo Prime 75 use?",
        answer: "Thermo Prime 75 is fitted with either a 5-point mortise lock or a 3-point automatic lock, with a class 6 cylinder. The range is rated RC2. A tedee PRO smart lock with its bridge can be added as an option.",
      },
      {
        question: "Should I choose Thermo Prime 75 or Thermo Premium 75?",
        answer: "Choose Thermo Prime 75 for the lower glazed U-value, an automatic lock option or a door taller than 2200 mm (doors over 2200 mm are not tested for security or weather resistance). Choose Thermo Premium 75 for the Gerda ZW 2000 multi lock set and the possibility of an RC3 rating, which depends on door size and design.",
      },
    ],
    schemaProperties: [
      { name: "Thermal transmittance (Ud), solid door", value: "0.79 W/m²K" },
      { name: "Thermal transmittance (Ud), glazed door", value: "0.9 W/m²K" },
      { name: "Burglary resistance class", value: "RC2" },
      { name: "Door leaf thickness", value: "75 mm" },
      { name: "Frame", value: "Alutherm 75 aluminium" },
      { name: "Width range", value: "840 to 1130 mm" },
      { name: "Height range", value: "1950 to 2200 mm (up to 2400 mm in selected colours and designs, untested above 2200 mm)" },
      { name: "Number of designs", value: String(N_PRIME) },
    ],
  },
];

export function getGerdaRange(slug: string): GerdaRange | undefined {
  return gerdaRanges.find((r) => r.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Hub page                                                            */
/* ------------------------------------------------------------------ */

export const gerdaComparison = {
  intro: "The three ranges share the same colours, glass and hardware finishes. They differ in leaf thickness, thermal performance and locking.",
  head: ["Specification", "Optima 60", "Thermo Premium 75", "Thermo Prime 75"],
  rows: [
    ["Door leaf", "60 mm", "75 mm with thermal break", "75 mm with thermal break"],
    ["U-value, solid door", "1.0 W/m²K", "0.8 W/m²K", "0.79 W/m²K"],
    ["U-value, glazed door", "1.3 W/m²K", "1.1 W/m²K", "0.9 W/m²K"],
    ["Burglary resistance class", "RC2 or RC3", "RC2 or RC3", "RC2"],
    ["Locking", "Gerda ZW 2000 3-bolt main lock, ZW 500 3-bolt additional lock, 2-bolt auxiliary lock, vertical bolt", "Gerda ZW 2000 3-bolt main lock, ZW 500 3-bolt additional lock, 2-bolt auxiliary lock, vertical bolt", "5-point mortise lock or 3-point automatic lock"],
    ["Frame", "Alutherm 60 aluminium", "Alutherm 75 aluminium", "Alutherm 75 aluminium"],
    ["Rebate", "3 sides", "4 sides", "4 sides"],
    ["Hinges", "Adjustable in 2 planes, 3 hinge guards", "Adjustable in 3 planes, 3 hinge guards", "Adjustable in 3 planes, 3 hinge guards"],
    ["Threshold", "Low aluminium", "Low aluminium with thermal break", "Low aluminium with thermal break"],
    ["Width", "840 to 1130 mm", "840 to 1130 mm", "840 to 1130 mm"],
    ["Height", "1950 to 2200 mm", "1950 to 2200 mm", "1950 to 2200 mm, up to 2400 mm in selected colours and designs"],
    ["Design series", "Tempo, Classic, Elite 3D", "Tempo, Quadro, Air Glass, Elite 3D", "Tempo, Quadro, Air Glass, Elite 3D"],
    ["Designs", String(N_OPTIMA), String(N_PREMIUM), String(N_PRIME)],
  ],
  footnote: `Figures are taken from the UK brochure for each range. RC classes are defined in EN 1627. ${RC_NOTE} ${SIZE_NOTE} Thermo Prime 75 doors over 2200 mm are not tested for security or weather resistance.`,
};

export const gerdaHub = {
  metaTitle: "Gerda Doors UK | Optima 60 and Thermo Ranges | SteelR",
  metaDescription: `Gerda doors supplied and installed by SteelR. Optima 60, Thermo Premium 75 and Thermo Prime 75: ${N_ALL} designs, RC2 and RC3, U-value from 0.79 W/m²K.`,
  ogAlt: "Gerda Thermo Premium 75 Quadro Kassel 1 front door in Dark Anthracite and Winchester on a white house",
  schemaName: "Gerda Residential Door Collection at SteelR",
  eyebrow: "Gerda residential doors",
  h1: "Gerda Doors, Supplied and Installed by SteelR",
  intro: [
    `SteelR supplies and installs the Gerda residential door collection: three ranges, ${N_ALL} different designs (many are offered in more than one range), thirteen standard colours and woodgrains, and security rated to RC2 or RC3 under EN 1627.`,
    "Gerda has been operating since 1987, and these ranges are built at its plant in Starachowice, Poland. A Gerda door is selected from a catalogue. You pick a range for its thermal performance and locking, a design, a colour and the hardware. The door is then made to your opening in 10 mm steps, within a set range of widths and heights.",
    "This page sets out the three ranges side by side, with every design shown on the range pages.",
  ],
  heroImage: {
    src: `${LIFE}/thermo-premium-75-kassel-1-anthracite-winchester.webp`,
    alt: "Gerda Thermo Premium 75 Quadro Kassel 1 front door in Dark Anthracite with Winchester woodgrain blocks, set in a white rendered house with a curved stone step",
    caption: "Quadro Kassel 1 in Dark Anthracite and Winchester, from the Thermo Premium 75 range.",
  },
  rangesIntro: "All three are made in the same widths and share the same colours, glass and hardware finishes. The number in each name is the thickness of the door leaf in millimetres.",
  versus: {
    title: "A Gerda door or a SteelR bespoke door",
    intro: "They are different products for different briefs, and SteelR supplies both. One is selected from a catalogue and made in set sizes. The other is drawn and built for a single opening.",
    columns: [
      {
        title: "The Gerda collection",
        points: [
          `${N_ALL} catalogue designs across five series`,
          "Widths 840 to 1130 mm, heights 1950 to 2200 mm in most designs",
          "RC2 or RC3 under EN 1627",
          "Ud from 0.79 W/m²K on a solid door",
          "Thirteen standard colours and woodgrains, plus RAL",
          "Insulated leaf with a metal face, made by Gerda in Poland",
        ],
        href: "#ranges",
        linkLabel: "Compare the Gerda ranges",
      },
      {
        title: "SteelR bespoke",
        points: [
          "Designed and made to measure for one opening",
          "Single, double and arched doors",
          "BS EN 1627 RC4 (single leaf, unglazed) as standard, with LPS 1175 SR3 and SR4 available",
          "Any RAL colour and a choice of hardware finishes",
          "Steel door made in the UK",
        ],
        href: "/collection",
        linkLabel: "View the bespoke collection",
      },
    ],
  },
  seriesIntro: "A series is a family of designs that share a style. Six designs from each are shown here.",
  coloursIntro: "Thirteen standard finishes: five plain colours and eight woodgrains. The tallest door available depends on the colour, because some finishes are only made up to a certain height.",
  twoColour: "A leaf in one colour with the frame in another can be ordered as standard. A door with a different colour inside and outside is available as an option.",
  optionsIntro: "These options are common to all three ranges. Handle sets differ by range and are listed on each range page.",
};

/**
 * Wording for the enquiry panel on Gerda pages. The panel's default text lists
 * SteelR bespoke certifications, so every Gerda page must pass these instead
 * and hide the trust row.
 */
export const gerdaEnquiry = {
  eyebrow: "Gerda residential doors · Supplied and installed by SteelR",
  pitch: "Tell us which range and design you have in mind and we will call you back to talk through sizes, colours and options. There is no obligation. Supply and installation are by SteelR.",
};

export const gerdaHubFaqs: GerdaFaq[] = [
  {
    question: "Are Gerda doors steel doors?",
    answer: "Gerda doors have an insulated leaf with a metal face over a timber inner frame, rather than a solid steel construction. Gerda describes the Optima leaf as steel, and it has an expanded graphite polystyrene core. Thermo Premium 75 uses the same core in a 75 mm leaf, and Thermo Prime 75 uses a PUR foam core. All three are made at Gerda's plant in Starachowice, Poland.",
  },
  {
    question: "What Gerda doors does SteelR supply?",
    answer: `SteelR supplies and installs three Gerda residential door ranges: Optima 60, Thermo Premium 75 and Thermo Prime 75. Between them there are ${N_ALL} different designs across the Tempo, Quadro, Air Glass, Elite 3D and Classic series. Many designs are offered in more than one range: Optima 60 has ${N_OPTIMA}, Thermo Premium 75 has ${N_PREMIUM} and Thermo Prime 75 has ${N_PRIME}.`,
  },
  {
    question: "Which Gerda range has the best thermal performance?",
    answer: "In the UK range brochures Thermo Prime 75 has the lowest U-values: 0.79 W/m²K for a solid door and 0.9 W/m²K glazed. Thermo Premium 75 is 0.8 and 1.1 W/m²K. Optima 60 is 1.0 and 1.3 W/m²K. A lower figure means less heat lost through the door.",
  },
  {
    question: "What security rating do Gerda doors have?",
    answer: "Optima 60 and Thermo Premium 75 are rated RC2 or RC3 under the European burglary resistance standard EN 1627, depending on door size and design. RC3 is a package that Gerda offers on solid doors. Thermo Prime 75 is rated RC2. For a higher rating, SteelR bespoke doors are certified to BS EN 1627 RC4 (single leaf, unglazed) as standard, with LPS 1175 SR3 and SR4 available.",
  },
  {
    question: "What is the difference between a Gerda door and a SteelR bespoke door?",
    answer: "A Gerda door is selected from a catalogue of designs and made in 10 mm steps within a set range of sizes, mostly 840 to 1130 mm wide and 1950 to 2200 mm high. A SteelR bespoke door is designed and made to measure for one opening, including double and arched doors, in any RAL colour and at higher security ratings.",
  },
  {
    question: "What sizes do Gerda doors come in?",
    answer: "Most designs are made from 840 to 1130 mm wide and 1950 to 2200 mm high, in 10 mm increments. Classic designs are 920 to 1030 mm wide and up to 2100 mm high. Most Air Glass designs have a fixed height of 2087 mm. Thermo Prime 75 can reach 2400 mm in selected colours and designs. Side lights and top lights are available for wider or taller openings.",
  },
  {
    question: "What colours do Gerda doors come in?",
    answer: `There are thirteen standard finishes: White, Steel Grey, Anthracite, Dark Anthracite, Black, Alpine Walnut, Mahogany, Brazilian Walnut, Light Walnut, Golden Oak, Winchester, Turner Oak and Light Wenge. ${gerdaExtraColours.join(", ")} and the RAL colour range are also available. The inside and outside can be different colours.`,
  },
  {
    question: "Can a Gerda door have a smart lock?",
    answer: "Yes. A tedee smart lock with its bridge can be added to all three ranges (tedee PRO on Thermo Prime 75). It lets you lock, unlock and check the door from a phone. A keypad with PIN and fingerprint entry is also available.",
  },
  {
    question: "How long does a Gerda door take?",
    answer: "Lead time depends on the range, design and colour, and is confirmed in writing with your quotation.",
  },
];
