export interface Door {
  slug: string;
  src: string;
  alt: string;
  style: "Contemporary" | "Traditional" | "Double Doors";
  colour: string;
  features: string[];
  title: string;
  description: string;
}

function parseDoor(
  src: string,
  alt: string,
  style: "Contemporary" | "Traditional" | "Double Doors"
): Door {
  // Extract slug from filename: /images/gallery/steelr-black-contemporary-dual-sidelights.jpg → black-contemporary-dual-sidelights
  const filename = src.split("/").pop()!.replace(/\.(jpg|jpeg|png)$/, "");
  const slug = filename.replace("steelr-", "");

  // Extract colour from slug (first segment)
  const parts = slug.split("-");
  const colour = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

  // Extract features from alt text
  const features: string[] = [];
  const altLower = alt.toLowerCase();
  if (altLower.includes("lion knocker")) features.push("Lion Head Knocker");
  if (altLower.includes("ring knocker")) features.push("Ring Knocker");
  if (altLower.includes("square knocker")) features.push("Square Knocker");
  if (altLower.includes("brass")) features.push("Brass Hardware");
  if (altLower.includes("chrome")) features.push("Chrome Hardware");
  if (altLower.includes("gold inlay")) features.push("Gold Inlay");
  if (altLower.includes("sidelight")) features.push("Sidelights");
  if (altLower.includes("fanlight")) features.push("Fanlight");
  if (altLower.includes("frosted")) features.push("Frosted Glass");
  if (altLower.includes("stained glass")) features.push("Stained Glass");
  if (altLower.includes("glass") && !altLower.includes("frosted") && !altLower.includes("stained")) features.push("Glazed Panels");
  if (altLower.includes("ribbed")) features.push("Ribbed Panel");
  if (altLower.includes("panelled")) features.push("Panelled Design");
  if (altLower.includes("ornate")) features.push("Ornate Detailing");
  if (altLower.includes("arched")) features.push("Arched Surround");
  if (altLower.includes("double")) features.push("Double Doors");
  if (altLower.includes("columns")) features.push("Column Surround");
  if (altLower.includes("medallion")) features.push("Medallion Detail");
  if (altLower.includes("letterbox")) features.push("Integrated Letterbox");
  if (altLower.includes("lever handle")) features.push("Lever Handle");
  if (altLower.includes("bar handle")) features.push("Bar Handle");
  if (altLower.includes("sunburst")) features.push("Sunburst Design");
  if (altLower.includes("geometric")) features.push("Geometric Design");
  if (altLower.includes("fluted")) features.push("Fluted Detail");
  if (altLower.includes("horizontal")) features.push("Horizontal Lines");
  if (altLower.includes("oval window")) features.push("Oval Window");

  if (features.length === 0) features.push(style + " Design");

  // Generate a readable title
  const titleColour = colour;
  const titleStyle = style === "Double Doors" ? "Double" : style;
  const keyFeature = features[0];
  const title = `${titleColour} ${titleStyle} Steel Door with ${keyFeature}`;

  // Generate SEO description
  const featureList = features.slice(0, 3).join(", ").toLowerCase();
  const description = `Bespoke ${colour.toLowerCase()} ${style.toLowerCase()} steel entrance door featuring ${featureList}. SR3 security rated, manufactured in the UK to ISO 9001 standards. Fully customisable colour, hardware and glazing options.`;

  return { slug, src, alt, style, colour, features, title, description };
}

export const doors: Door[] = [
  { src: "/images/gallery/steelr-black-panelled-double-letterbox.jpg", alt: "Black panelled double steel door with letterbox", style: "Double Doors" },
  { src: "/images/gallery/steelr-black-traditional-lion-knocker-open.jpg", alt: "Black traditional steel door with lion knocker open", style: "Traditional" },
  { src: "/images/gallery/steelr-teal-panelled-glass-hallway.jpg", alt: "Teal panelled steel door with glass hallway view", style: "Contemporary" },
  { src: "/images/gallery/steelr-navy-traditional-vine-porch.jpg", alt: "Navy traditional steel door with vine-covered porch", style: "Traditional" },
  { src: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg", alt: "Navy panelled steel door with chrome hardware and palms", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-contemporary-dual-sidelights.jpg", alt: "Black contemporary steel door with dual sidelights", style: "Contemporary" },
  { src: "/images/gallery/steelr-champagne-arched-geometric-double.jpg", alt: "Champagne arched geometric double steel doors", style: "Double Doors" },
  { src: "/images/gallery/steelr-walnut-ribbed-columns.jpg", alt: "Walnut ribbed steel door with classical columns", style: "Traditional" },
  { src: "/images/gallery/steelr-black-ornate-double-gable.jpg", alt: "Black ornate double steel doors with gable entrance", style: "Double Doors" },
  { src: "/images/gallery/steelr-black-ornate-circular-fluted.jpg", alt: "Black ornate steel door with circular fluted design", style: "Traditional" },
  { src: "/images/gallery/steelr-black-panelled-ring-knocker-recessed.jpg", alt: "Black panelled steel door with ring knocker recessed", style: "Traditional" },
  { src: "/images/gallery/steelr-grey-panelled-stone-surround.jpg", alt: "Grey panelled steel door with stone surround", style: "Contemporary" },
  { src: "/images/gallery/steelr-olive-panelled-ring-knocker-sidelight.jpg", alt: "Olive panelled steel door with ring knocker and sidelight", style: "Traditional" },
  { src: "/images/gallery/steelr-cream-panelled-chrome-sidelight.jpg", alt: "Cream panelled steel door with chrome hardware and sidelight", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-contemporary-ribbed-topiary.jpg", alt: "Black contemporary ribbed steel door with topiary", style: "Contemporary" },
  { src: "/images/gallery/steelr-taupe-panelled-dual-sidelights.jpg", alt: "Taupe panelled steel door with dual sidelights", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-contemporary-sunburst.jpg", alt: "Black contemporary steel door with sunburst design", style: "Contemporary" },
  { src: "/images/gallery/steelr-grey-panelled-lever-handle.jpg", alt: "Grey panelled steel door with lever handle", style: "Contemporary" },
  { src: "/images/gallery/steelr-cobalt-ornate-lion-knocker.jpg", alt: "Cobalt blue ornate steel door with lion knocker", style: "Traditional" },
  { src: "/images/gallery/steelr-olive-traditional-arched-surround.jpg", alt: "Olive traditional steel door with arched surround", style: "Traditional" },
  { src: "/images/gallery/steelr-olive-traditional-brass-pendant.jpg", alt: "Olive traditional steel door with brass pendant light", style: "Traditional" },
  { src: "/images/gallery/steelr-black-contemporary-panelled-sidelights.jpg", alt: "Black contemporary panelled steel door with sidelights", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-ornate-medallion-sidelights.jpg", alt: "Black ornate steel door with medallion and sidelights", style: "Traditional" },
  { src: "/images/gallery/steelr-black-traditional-wide-frosted.jpg", alt: "Black traditional wide steel door with frosted glass", style: "Traditional" },
  { src: "/images/gallery/steelr-sage-traditional-arched-brick.jpg", alt: "Sage traditional steel door with arched brick surround", style: "Traditional" },
  { src: "/images/gallery/steelr-black-traditional-stained-glass.jpg", alt: "Black traditional steel door with stained glass", style: "Traditional" },
  { src: "/images/gallery/steelr-black-ornate-checkerboard-canopy.jpg", alt: "Black ornate steel door with checkerboard step and canopy", style: "Traditional" },
  { src: "/images/gallery/steelr-navy-panelled-lanterns-fanlight.jpg", alt: "Navy panelled steel door with lanterns and fanlight", style: "Traditional" },
  { src: "/images/gallery/steelr-sage-panelled-arched-wreath.jpg", alt: "Sage panelled steel door with arched surround and wreath", style: "Traditional" },
  { src: "/images/gallery/steelr-black-ornate-lion-knocker-sidelights.jpg", alt: "Black ornate steel door with lion knocker and sidelights", style: "Traditional" },
  { src: "/images/gallery/steelr-black-panelled-sidelights-palms.jpg", alt: "Black panelled steel door with sidelights and palms", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-traditional-lion-knocker-fanlight.jpg", alt: "Black traditional steel door with lion knocker and fanlight", style: "Traditional" },
  { src: "/images/gallery/steelr-taupe-panelled-chrome-dual-sidelights.jpg", alt: "Taupe panelled steel door with chrome dual sidelights", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-traditional-chrome-interior.jpg", alt: "Black traditional steel door with chrome hardware interior view", style: "Contemporary" },
  { src: "/images/gallery/steelr-red-traditional-lion-knocker.jpg", alt: "Red traditional steel door with lion knocker", style: "Traditional" },
  { src: "/images/gallery/steelr-black-traditional-ring-knocker-open.jpg", alt: "Black traditional steel door with ring knocker open", style: "Traditional" },
  { src: "/images/gallery/steelr-black-contemporary-ribbed-open.jpeg", alt: "Black contemporary ribbed steel door open view", style: "Contemporary" },
  { src: "/images/gallery/steelr-black-traditional-columns-mansion.jpg", alt: "Black traditional steel door with columns on mansion", style: "Traditional" },
  { src: "/images/gallery/steelr-black-ornate-medallion-driveway.jpeg", alt: "Black ornate steel door with medallion on driveway", style: "Traditional" },
  { src: "/images/gallery/steelr-black-ornate-lion-knocker-gable.jpg", alt: "Black ornate steel door with lion knocker and gable", style: "Traditional" },
  { src: "/images/gallery/steelr-black-traditional-double-columns.jpg", alt: "Black traditional double steel doors with columns", style: "Double Doors" },
  { src: "/images/gallery/steelr-black-traditional-glazed-double.jpg", alt: "Black traditional glazed double steel doors", style: "Double Doors" },
  { src: "/images/gallery/steelr-black-traditional-lion-knocker-sidelights-garden.jpg", alt: "Black traditional steel door with lion knocker sidelights and garden", style: "Traditional" },
  { src: "/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg", alt: "Charcoal contemporary horizontal double steel doors", style: "Double Doors" },
  { src: "/images/gallery/steelr-charcoal-traditional-oval-window-lantern.jpg", alt: "Charcoal traditional steel door with oval window and lantern", style: "Traditional" },
  { src: "/images/gallery/steelr-cream-traditional-lion-knocker-topiary.jpg", alt: "Cream traditional steel door with lion knocker and topiary", style: "Traditional" },
  { src: "/images/gallery/steelr-espresso-contemporary-gold-inlay.jpg", alt: "Espresso contemporary steel door with gold inlay detail", style: "Contemporary" },
  { src: "/images/gallery/steelr-grey-contemporary-horizontal-slots.jpg", alt: "Grey contemporary steel door with horizontal slots", style: "Contemporary" },
  { src: "/images/gallery/steelr-navy-contemporary-square-knocker.jpg", alt: "Navy contemporary steel door with square knocker", style: "Contemporary" },
  { src: "/images/gallery/steelr-sage-contemporary-bar-handle-sidelight.jpg", alt: "Sage contemporary steel door with bar handle and sidelight", style: "Contemporary" },
  { src: "/images/gallery/steelr-navy-traditional-brass-knocker-vine.jpeg", alt: "Navy traditional steel door with brass knocker and vine-covered porch", style: "Traditional" },
  { src: "/images/gallery/steelr-blue-panelled-brass-hardware-flat.jpg", alt: "Blue panelled steel door with brass hardware detail", style: "Traditional" },
  { src: "/images/gallery/steelr-black-panelled-chrome-sidelights-interior.jpeg", alt: "Black panelled steel door with chrome handle and sidelights interior view", style: "Contemporary" },
  { src: "/images/gallery/steelr-white-panelled-sidelights-hallway.jpg", alt: "White panelled steel door with sidelights in hallway", style: "Contemporary" },
].map((d) => parseDoor(d.src, d.alt, d.style as Door["style"]));

export function getDoorBySlug(slug: string): Door | undefined {
  return doors.find((d) => d.slug === slug);
}

export function getRelatedDoors(door: Door, count = 3): Door[] {
  // Same style first, then same colour, excluding current
  const sameStyle = doors.filter((d) => d.slug !== door.slug && d.style === door.style);
  const sameColour = sameStyle.filter((d) => d.colour === door.colour);
  const rest = sameStyle.filter((d) => d.colour !== door.colour);
  return [...sameColour, ...rest].slice(0, count);
}
