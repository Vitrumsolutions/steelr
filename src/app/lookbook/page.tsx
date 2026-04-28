import Image from "next/image";

// Tiny 10x14 dark-warm JPEG (267 bytes) used as Next.js blur placeholder for
// every image on this page. Eliminates the blank-pop while images load. The
// colour matches SteelR's dark-warm aesthetic (rgb(42,42,40)) so it reads as
// a deliberate placeholder rather than a flash of unrelated colour.
const LOOKBOOK_BLUR =
  "data:image/jpeg;base64,/9j/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAAOAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIwAP//Z";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import LookbookActions, { TrackedLink } from "./lookbook-actions";
import QuickEnquiry from "@/components/QuickEnquiry";
import "./lookbook.css";

export const metadata: Metadata = {
  title: "The Lookbook | SteelR Bespoke Steel Entrance Doors",
  description:
    "A curated lookbook of bespoke steel entrance doors by SteelR. Over forty installed works across contemporary, traditional, ornate and panelled specifications. SR3 certified as standard with SR4 (LPS 1175) commercial-grade upgrade, UK manufactured.",
  alternates: { canonical: "https://steelr.co.uk/lookbook" },
  openGraph: {
    title: "The Lookbook | SteelR Bespoke Steel Entrance Doors",
    description:
      "A curated lookbook of bespoke steel entrance doors. Forty installed works, organised by style and colour. SR3 standard, SR4 (LPS 1175) upgrade, UK manufactured.",
    url: "https://steelr.co.uk/lookbook",
    type: "website",
    images: [{ url: "/og-image.png", width: 2400, height: 1260 }],
  },
};

interface LookbookDoor {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  spec?: string;
}

const signatureCollection: LookbookDoor[] = [
  {
    src: "/images/gallery/steelr-black-ornate-medallion-sidelights.jpg",
    alt: "Black ornate steel door with medallion detail and sidelights",
    title: "Black Ornate with Medallion",
    caption:
      "Hand-detailed central medallion in raised relief, flanked by twin obscure glass sidelights. A formal composition for period townhouses where the entrance carries the weight of the facade.",
    spec: "SR3 · PAS 24 · Secured by Design · FD30S · Black RAL 9005",
  },
  {
    src: "/images/gallery/steelr-olive-traditional-brass-pendant.jpg",
    alt: "Olive traditional steel door with brass pendant lighting",
    title: "Olive Traditional, Brass Pendant",
    caption:
      "A traditional panelled face in a hand-mixed olive, finished with solid brass furniture and a period brass pendant above the threshold. A country-house specification that reads confidently rather than loudly.",
    spec: "SR3 · PAS 24 · Bespoke olive RAL · Solid brass furniture",
  },
  {
    src: "/images/gallery/steelr-walnut-ribbed-columns.jpg",
    alt: "Walnut ribbed steel door framed by stone columns",
    title: "Walnut Ribbed, Stone Columns",
    caption:
      "A vertically-ribbed door finished in a warm walnut, set between classical stone columns on a private driveway. The ribbed rhythm draws the eye upward and adds structural rigidity to a slim profile.",
    spec: "SR3 · Vertical rib profile · Walnut finish · Architect specification",
  },
  {
    src: "/images/gallery/steelr-black-traditional-doctor-knocker-canopy.jpg",
    alt: "Black traditional steel door with doctor knocker under tiled canopy",
    title: "Heritage Doctor Knocker",
    caption:
      "A five-panel traditional specification with a forged doctor knocker set above the letterplate. Photographed under its tiled canopy. Designed to sit invisibly within conservation-area streetscapes.",
    spec: "SR3 · FD30S · Conservation-appropriate · Forged brass doctor knocker",
  },
  {
    src: "/images/gallery/steelr-sage-panelled-arched-wreath.jpg",
    alt: "Sage green panelled steel door under arched brick surround",
    title: "Sage Panelled, Arched",
    caption:
      "A panelled steel specification finished in a soft sage, set into an arched brick surround. The arched head is formed in steel and welded to the frame, not an applied trim.",
    spec: "SR3 · Bespoke RAL · Arched structural frame · Panelled face",
  },
  {
    src: "/images/gallery/steelr-black-panelled-double-fingerprint.jpg",
    alt: "Black panelled double steel door with fingerprint access",
    title: "Panelled Double, ekey Biometric",
    caption:
      "A panelled double entrance with integrated ekey fingerprint access. Mechanical override retained. SR3 certified as standard; SR4 (LPS 1175) upgrade available for the highest-risk addresses.",
    spec: "SR3 · SR4 upgrade available · ekey biometric · Mechanical override",
  },
];

const contemporaryDoors: LookbookDoor[] = [
  { src: "/images/gallery/steelr-black-contemporary-ribbed-topiary.jpg", alt: "Black contemporary ribbed steel door with topiary", title: "Ribbed, flanked by topiary" },
  { src: "/images/gallery/steelr-black-contemporary-dual-sidelights.jpg", alt: "Black contemporary steel door with dual sidelights", title: "Dual sidelights, black" },
  { src: "/images/gallery/steelr-grey-contemporary-horizontal-slots.jpg", alt: "Grey contemporary steel door with horizontal slots", title: "Horizontal slotted grey" },
  { src: "/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg", alt: "Charcoal contemporary horizontal double steel doors", title: "Charcoal horizontal double" },
  { src: "/images/gallery/steelr-espresso-contemporary-gold-inlay.jpg", alt: "Espresso contemporary steel door with gold inlay", title: "Espresso with gold inlay" },
  { src: "/images/gallery/steelr-sage-contemporary-bar-handle-sidelight.jpg", alt: "Sage contemporary steel door with bar handle and sidelight", title: "Sage, bar-handle" },
];

const traditionalDoors: LookbookDoor[] = [
  { src: "/images/gallery/steelr-black-traditional-lion-knocker-fanlight.jpg", alt: "Black traditional steel door with lion knocker and fanlight", title: "Lion knocker, fanlight" },
  { src: "/images/gallery/steelr-cream-traditional-lion-knocker-topiary.jpg", alt: "Cream traditional steel door with lion knocker and topiary", title: "Cream, brass lion" },
  { src: "/images/gallery/steelr-red-traditional-lion-knocker.jpg", alt: "Red traditional steel door with lion knocker", title: "Statement red traditional" },
  { src: "/images/gallery/steelr-olive-traditional-arched-surround.jpg", alt: "Olive traditional steel door with arched stone surround", title: "Olive, arched stone" },
  { src: "/images/gallery/steelr-charcoal-traditional-oval-window-lantern.jpg", alt: "Charcoal traditional steel door with oval window and lantern", title: "Oval window, charcoal" },
  { src: "/images/gallery/steelr-navy-traditional-vine-porch.jpg", alt: "Navy traditional steel door under vine-covered porch", title: "Navy, vine porch" },
];

const ornateDoors: LookbookDoor[] = [
  { src: "/images/gallery/steelr-black-ornate-checkerboard-canopy.jpg", alt: "Black ornate steel door with checkerboard step and canopy", title: "Checkerboard relief" },
  { src: "/images/gallery/steelr-black-ornate-double-gable.jpg", alt: "Black ornate double steel doors under gabled porch", title: "Gabled double" },
  { src: "/images/gallery/steelr-black-ornate-lion-knocker-gable.jpg", alt: "Black ornate steel door with lion knocker under gable", title: "Lion, gabled porch" },
  { src: "/images/gallery/steelr-black-ornate-circular-fluted.jpg", alt: "Black ornate steel door with circular fluted centrepiece", title: "Circular fluted" },
  { src: "/images/gallery/steelr-black-ornate-lion-knocker-sidelights.jpg", alt: "Black ornate steel door with lion knocker and sidelights", title: "Lion, twin sidelights" },
  { src: "/images/gallery/steelr-cobalt-ornate-lion-knocker.jpg", alt: "Cobalt blue ornate steel door with lion knocker", title: "Cobalt statement" },
];

const panelledDoors: LookbookDoor[] = [
  { src: "/images/gallery/steelr-taupe-panelled-dual-sidelights.jpg", alt: "Taupe panelled steel door with dual sidelights", title: "Taupe, dual sidelights" },
  { src: "/images/gallery/steelr-black-panelled-grille-sidelights.jpg", alt: "Black panelled steel door with decorative grille", title: "Decorative grille" },
  { src: "/images/gallery/steelr-grey-panelled-stone-surround.jpg", alt: "Grey panelled steel door in stone surround", title: "Stone surround, grey" },
  { src: "/images/gallery/steelr-navy-panelled-lanterns-fanlight.jpg", alt: "Navy panelled steel door with lanterns and fanlight", title: "Navy with lanterns" },
  { src: "/images/gallery/steelr-black-panelled-double-letterbox.jpg", alt: "Black panelled double steel door with letterbox", title: "Panelled double with letterbox" },
  { src: "/images/gallery/steelr-black-traditional-glazed-double.jpg", alt: "Black traditional glazed double steel doors", title: "Glazed double" },
];

interface ColourFamily {
  name: string;
  ral: string;
  doors: { src: string; alt: string }[];
}

const colourStory: ColourFamily[] = [
  {
    name: "Black",
    ral: "Typically RAL 9005 Jet Black or hand-mixed",
    doors: [
      { src: "/images/gallery/steelr-black-traditional-stained-glass.jpg", alt: "Black traditional with stained glass" },
      { src: "/images/gallery/steelr-black-traditional-columns-mansion.jpg", alt: "Black traditional with columns" },
      { src: "/images/gallery/steelr-black-traditional-timber-canopy.jpg", alt: "Black traditional under timber canopy" },
    ],
  },
  {
    name: "Navy",
    ral: "Custom-mixed from RAL 5011 and 5004",
    doors: [
      { src: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg", alt: "Navy panelled with chrome hardware" },
      { src: "/images/gallery/steelr-navy-traditional-brass-knocker-vine.jpeg", alt: "Navy traditional with brass knocker" },
      { src: "/images/gallery/steelr-navy-contemporary-square-knocker.jpg", alt: "Navy contemporary with square knocker" },
    ],
  },
  {
    name: "Sage and Olive",
    ral: "Country-house heritage greens, from muted sage to deep olive",
    doors: [
      { src: "/images/gallery/steelr-olive-panelled-ring-knocker-sidelight.jpg", alt: "Olive panelled with ring knocker" },
      { src: "/images/gallery/steelr-olive-traditional-brass-pendant.jpg", alt: "Olive traditional with brass pendant" },
      { src: "/images/gallery/steelr-sage-traditional-arched-brick.jpg", alt: "Sage traditional in arched brick surround" },
    ],
  },
  {
    name: "Cream and Taupe",
    ral: "Warm off-whites and soft neutral earth tones",
    doors: [
      { src: "/images/gallery/steelr-cream-panelled-chrome-sidelight.jpg", alt: "Cream panelled with chrome sidelight" },
      { src: "/images/gallery/steelr-taupe-panelled-chrome-dual-sidelights.jpg", alt: "Taupe panelled with chrome dual sidelights" },
      { src: "/images/gallery/steelr-white-panelled-sidelights-hallway.jpg", alt: "White panelled with sidelights hallway" },
    ],
  },
  {
    name: "Statement colours",
    ral: "Any RAL. Red 3020, cobalt 5002, teal, espresso, champagne metallic.",
    doors: [
      { src: "/images/gallery/steelr-teal-panelled-glass-hallway.jpg", alt: "Teal panelled with glass hallway" },
      { src: "/images/gallery/steelr-blue-panelled-brass-hardware-flat.jpg", alt: "Blue panelled with brass hardware" },
      { src: "/images/gallery/steelr-cobalt-ornate-lion-knocker.jpg", alt: "Cobalt ornate with lion knocker" },
    ],
  },
];

const hardwareDetails = [
  { src: "/images/detail/steelr-black-panelled-brass-lion-closeup.jpg", alt: "Close-up of solid brass lion-head knocker", label: "Brass lion knocker" },
  { src: "/images/detail/steelr-grey-panelled-brass-handle-closeup.jpeg", alt: "Close-up of solid brass lever handle", label: "Brass lever handle" },
  { src: "/images/detail/steelr-navy-panelled-chrome-ring-closeup.jpg", alt: "Close-up of polished chrome ring knocker", label: "Chrome ring knocker" },
  { src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg", alt: "Close-up of chrome multi-point locking system", label: "Multi-point locking" },
  { src: "/images/detail/steelr-black-detail-ekey-access-panel.jpg", alt: "ekey biometric access panel", label: "ekey access panel" },
  { src: "/images/detail/steelr-black-detail-ekey-fingerprint.jpg", alt: "ekey fingerprint scanner in use", label: "Biometric fingerprint reader" },
  { src: "/images/detail/steelr-black-detail-hinge-locking-pin.jpg", alt: "Hinge and locking pin detail", label: "Hinge and locking pin" },
];

export default function Lookbook() {
  return (
    <div className="lookbook">
      {/* ────────────── HERO ────────────── */}
      <section className="lb-hero">
        <div className="lb-hero__image">
          <Image
            src="/images/hero/steelr-navy-panelled-chrome-frosted.jpg"
            alt="Navy panelled steel entrance door with chrome hardware"
            fill
            priority
            placeholder="blur"
            blurDataURL={LOOKBOOK_BLUR}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="lb-hero__content">
          <ScrollReveal direction="none" duration={1}>
            <span className="lb-eyebrow">The Lookbook · MMXXVI</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15} duration={1.1}>
            <h1 className="lb-hero__title">
              A study in
              <br />
              <em>bespoke steel</em> entrances.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.35} duration={1}>
            <p className="lb-hero__sub">
              Forty installed works. Five colour families. One manufacturing principle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ────────────── INTRO / STATEMENT ────────────── */}
      <section className="lb-statement">
        <ScrollReveal direction="up">
          <p className="lb-statement__eyebrow">A note on how to read this book</p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <p className="lb-statement__body">
            Not a catalogue. SteelR does not sell a standard range. Every door on
            these pages was specified by a homeowner, architect or developer for
            a particular property, and hand-finished in our workshop. The intent
            is to show the breadth of what has been commissioned, organised by
            the four decisions every client makes with us: <em>style, colour,
            hardware, detail</em>.
          </p>
        </ScrollReveal>
      </section>

      {/* ────────────── SIGNATURE COLLECTION ────────────── */}
      <section className="lb-section">
        <div className="lb-section__head">
          <ScrollReveal direction="up">
            <span className="lb-eyebrow">01 · Signature Collection</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="lb-h2">Six works we return to.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="lb-lede">
              Six installations that capture the breadth of the work. Heritage,
              contemporary, bespoke colour, biometric access, and two distinct door types.
            </p>
          </ScrollReveal>
        </div>

        <div className="lb-signature">
          {signatureCollection.map((door, i) => (
            <ScrollReveal key={door.src} direction="up" delay={0.05}>
              <article className={`lb-feature ${i % 2 === 1 ? "lb-feature--flip" : ""}`}>
                <div className="lb-feature__image">
                  <Image
                    src={door.src}
                    alt={door.alt}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 900px) 100vw, 60vw"
                    className="lb-feature__img"
                    priority={i < 2}
                    placeholder="blur"
                    blurDataURL={LOOKBOOK_BLUR}
                  />
                </div>
                <div className="lb-feature__text">
                  <span className="lb-feature__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="lb-feature__title">{door.title}</h3>
                  <p className="lb-feature__caption">{door.caption}</p>
                  {door.spec && <p className="lb-feature__spec">{door.spec}</p>}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ────────────── DARK INTERLUDE 1 ────────────── */}
      <section className="lb-interlude">
        <div className="lb-interlude__image">
          <Image
            src="/images/hero/steelr-black-ornate-medallion-stone.jpg"
            alt="Black ornate steel door set within stone surround"
            fill
            priority
            placeholder="blur"
            blurDataURL={LOOKBOOK_BLUR}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="lb-interlude__overlay" />
        <blockquote className="lb-pullquote">
          <p>Engineered for permanence.</p>
          <footer>A twenty-five year structural warranty on the steel, a ten year warranty on the hardware, an aftercare team that never subcontracts.</footer>
        </blockquote>
      </section>

      {/* ────────────── BY STYLE ────────────── */}
      <section className="lb-section lb-section--narrow">
        <div className="lb-section__head">
          <ScrollReveal direction="up">
            <span className="lb-eyebrow">02 · By Style</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="lb-h2">Four vocabularies.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="lb-lede">
              Specifications cluster naturally into four families. The boundaries are
              permeable. Most clients land somewhere between two of them.
            </p>
          </ScrollReveal>
        </div>

        {[
          { title: "Contemporary", lede: "Flush faces, clean lines, minimal or concealed hardware. For architect-designed new-builds and modernised period properties.", doors: contemporaryDoors },
          { title: "Traditional", lede: "Panelled faces, heritage hardware, lion and doctor knockers. For Victorian and Edwardian terraces and country houses.", doors: traditionalDoors },
          { title: "Ornate", lede: "Medallions, checkerboard relief, gabled entrances, fluted detailing. For properties where the entrance carries the character of the facade.", doors: ornateDoors },
          { title: "Panelled and Double", lede: "Paired leaves, taller openings, formal geometry. For mansion blocks, gated developments and wide porticos.", doors: panelledDoors },
        ].map((group) => (
          <div key={group.title} className="lb-style-block">
            <ScrollReveal direction="up">
              <h3 className="lb-style__title">{group.title}</h3>
              <p className="lb-style__lede">{group.lede}</p>
            </ScrollReveal>
            <div className="lb-style__grid">
              {group.doors.map((d) => (
                <ScrollReveal key={d.src} direction="up" delay={0.05}>
                  <figure className="lb-tile">
                    <Image src={d.src} alt={d.alt} width={800} height={1200} sizes="(max-width: 900px) 50vw, 30vw" className="lb-tile__img" placeholder="blur" blurDataURL={LOOKBOOK_BLUR} />
                    <figcaption className="lb-tile__cap">{d.title}</figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ────────────── COLOUR STORY ────────────── */}
      <section className="lb-section lb-section--cream-deep">
        <div className="lb-section__head">
          <ScrollReveal direction="up">
            <span className="lb-eyebrow">03 · Colour Story</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="lb-h2">Any RAL, inside and out.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="lb-lede">
              Five families that recur in our work. Commissions rarely land on a
              catalogue colour. Most are hand-mixed against a reference swatch from
              the surrounding brick, stone or render.
            </p>
          </ScrollReveal>
        </div>

        <div className="lb-colour-grid">
          {colourStory.map((family) => (
            <ScrollReveal key={family.name} direction="up">
              <article className="lb-colour">
                <header className="lb-colour__head">
                  <h3 className="lb-colour__name">{family.name}</h3>
                  <p className="lb-colour__ral">{family.ral}</p>
                </header>
                <div className="lb-colour__images">
                  {family.doors.map((d) => (
                    <div className="lb-colour__image" key={d.src}>
                      <Image src={d.src} alt={d.alt} width={600} height={900} sizes="(max-width: 900px) 33vw, 20vw" className="lb-tile__img" placeholder="blur" blurDataURL={LOOKBOOK_BLUR} />
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ────────────── DARK INTERLUDE 2 — HARDWARE ────────────── */}
      <section className="lb-dark lb-dark--details">
        <div className="lb-section__head lb-section__head--light">
          <ScrollReveal direction="up">
            <span className="lb-eyebrow lb-eyebrow--light">04 · The Details</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="lb-h2 lb-h2--light">Hardware obsession.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="lb-lede lb-lede--light">
              Door furniture, access systems, locking mechanisms, hinges. The
              components most door companies subcontract, we either specify or
              make.
            </p>
          </ScrollReveal>
        </div>

        <div className="lb-details__grid">
          {hardwareDetails.map((d) => (
            <ScrollReveal key={d.src} direction="up">
              <figure className="lb-detail">
                <Image src={d.src} alt={d.alt} width={800} height={1000} sizes="(max-width: 900px) 100vw, 33vw" className="lb-detail__img" placeholder="blur" blurDataURL={LOOKBOOK_BLUR} />
                <figcaption className="lb-detail__cap">{d.label}</figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ────────────── PROCESS ────────────── */}
      <section className="lb-section">
        <div className="lb-section__head">
          <ScrollReveal direction="up">
            <span className="lb-eyebrow">05 · The Process</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="lb-h2">From consultation to installation.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="lb-lede">
              Typical specification takes four to six weeks. Manufacturing and finishing adds eight to ten. Installation, one day for a single-leaf door, two for doubles or sidelight configurations.
            </p>
          </ScrollReveal>
        </div>

        <ol className="lb-process">
          <ScrollReveal direction="up">
            <li>
              <span className="lb-process__num">I</span>
              <h3>Consultation</h3>
              <p>We visit the property. Full survey, photography of surround, discussion of brief and budget. No obligation to proceed.</p>
            </li>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <li>
              <span className="lb-process__num">II</span>
              <h3>Specification</h3>
              <p>Written specification covering style, colour, hardware, glazing, panel profile and security rating. Signed off with visual mock-up. No revisions limit until you are sure.</p>
            </li>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <li>
              <span className="lb-process__num">III</span>
              <h3>Manufacture</h3>
              <p>Hand-finished in our UK workshop. ISO 9001 certified. Every door tested against its specification before it leaves the shop floor.</p>
            </li>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <li>
              <span className="lb-process__num">IV</span>
              <h3>Installation</h3>
              <p>Fitted by our own team. DBS-checked. Single day for standard specifications; two days for double-leaf or sidelight configurations.</p>
            </li>
          </ScrollReveal>
        </ol>
      </section>

      {/* ────────────── CLOSING CTA ────────────── */}
{/* Inline enquiry panel — source=hub-lookbook */}
      <QuickEnquiry source="hub-lookbook" contextLabel="Lookbook" />
            <section className="lb-closing">
        <ScrollReveal direction="up">
          <span className="lb-eyebrow">Begin</span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="lb-closing__title">
            Your entrance
            <br />
            <em>awaits specification</em>.
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.25}>
          <p className="lb-closing__body">
            Book a consultation and we will visit the property, survey the surround and
            put together a written specification. No obligation to proceed.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <div className="lb-closing__actions">
            <TrackedLink href="/design-estimate" event="lookbook_cta_consultation" className="lb-cta lb-cta--primary">
              Book a consultation
            </TrackedLink>
            <TrackedLink href="tel:08008611450" event="lookbook_cta_phone" external className="lb-cta lb-cta--ghost">
              Speak to us · 0800 861 1450
            </TrackedLink>
          </div>
        </ScrollReveal>
        <LookbookActions />
      </section>
    </div>
  );
}
