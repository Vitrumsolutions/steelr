import { Location } from "./types";

export const scotlandLocations: Location[] = [
  {
    slug: "scotland",
    name: "Scotland",
    region: "Scotland",
    type: "hub",
    tier: 1,
    description:
      "Scotland's built heritage spans baronial castles, Georgian New Towns, and striking contemporary architecture, all set against landscapes of extraordinary drama. From the sandstone terraces of Edinburgh to the granite grandeur of Aberdeen, Scottish homeowners expect entrance doors that endure harsh winters and coastal weather without sacrificing elegance. SteelR serves Scotland with bespoke steel doors engineered for the climate and designed to honour the nation's proud architectural traditions.",
    heroImage: "/images/gallery/steelr-black-traditional-wide-frosted.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-ornate-lion-knocker-gable.jpg",
      "/images/gallery/steelr-navy-panelled-lanterns-fanlight.jpg",
      "/images/gallery/steelr-grey-panelled-stone-surround.jpg",
      "/images/gallery/steelr-walnut-ribbed-columns.jpg",
      "/images/gallery/steelr-black-traditional-double-columns.jpg",
      "/images/gallery/steelr-charcoal-traditional-oval-window-lantern.jpg",
    ],
    nearbyAreaSlugs: ["edinburgh", "glasgow", "st-andrews", "aberdeen"],
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    region: "Scotland",
    type: "area",
    parentSlug: "scotland",
    tier: 3,
    description:
      "Edinburgh divides neatly between the medieval Old Town's tenement closes and the Georgian perfection of the New Town, both UNESCO World Heritage sites. Moray Place crescents, Heriot Row doorways, and the grand villas of Morningside and The Grange present some of Britain's most architecturally demanding entrance requirements. SteelR creates bespoke steel doors for Edinburgh homes that satisfy the city's rigorous planning standards while delivering exceptional thermal performance against Scotland's biting east-coast winters.",
    localFeatures: [
      "Georgian townhouses in the New Town and Stockbridge",
      "Victorian and Edwardian villas in Morningside and The Grange",
      "Sandstone detached homes in Corstorphine and Cramond",
      "Contemporary developments in Quartermile and the waterfront",
    ],
    heroImage: "/images/gallery/steelr-black-traditional-lion-knocker-fanlight.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-ornate-lion-knocker-sidelights.jpg",
      "/images/gallery/steelr-navy-panelled-chrome-palms.jpg",
      "/images/gallery/steelr-sage-traditional-arched-brick.jpg",
      "/images/gallery/steelr-black-traditional-chrome-interior.jpg",
    ],
    nearbyAreaSlugs: ["st-andrews", "glasgow", "scotland", "aberdeen"],
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    type: "area",
    parentSlug: "scotland",
    tier: 3,
    description:
      "Glasgow's architectural legacy rivals any European city, from the Charles Rennie Mackintosh masterpieces to the red sandstone tenements of the West End and the grand terraces of Park Circus. Hyndland, Pollokshields, and Bearsden offer substantial Victorian and Edwardian homes where a bespoke steel entrance door makes a powerful first impression. SteelR designs for Glasgow balance the city's celebrated decorative tradition with clean modern engineering, creating doors as bold and distinctive as the city itself.",
    localFeatures: [
      "Red sandstone tenement flats in the West End and Southside",
      "Victorian and Edwardian villas in Hyndland and Pollokshields",
      "Grand terraced houses around Park Circus and Woodlands",
      "Detached family homes in Bearsden, Milngavie, and Newton Mearns",
    ],
    heroImage: "/images/gallery/steelr-black-ornate-circular-fluted.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-contemporary-sunburst.jpg",
      "/images/gallery/steelr-teal-panelled-glass-hallway.jpg",
      "/images/gallery/steelr-grey-contemporary-horizontal-slots.jpg",
      "/images/gallery/steelr-black-panelled-ring-knocker-recessed.jpg",
    ],
    nearbyAreaSlugs: ["edinburgh", "scotland", "st-andrews", "aberdeen"],
  },
  {
    slug: "st-andrews",
    name: "St Andrews",
    region: "Scotland",
    type: "area",
    parentSlug: "scotland",
    tier: 3,
    description:
      "St Andrews is a town of exceptional character, where medieval ruins, a world-famous university, and the spiritual home of golf converge along windswept Fife coastline. The dignified stone houses of South Street and The Scores, along with the prosperous homes surrounding the Old Course, represent some of Scotland's most coveted addresses. SteelR provides St Andrews homeowners with steel entrance doors that withstand the North Sea elements while reflecting the town's timeless dignity and scholarly elegance.",
    localFeatures: [
      "Medieval and Georgian stone townhouses along South Street",
      "Substantial Victorian villas near The Scores and the harbour",
      "Prestigious properties overlooking the Old Course links",
      "Converted period homes in the surrounding East Neuk villages",
    ],
    heroImage: "/images/gallery/steelr-olive-traditional-arched-surround.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-traditional-stained-glass.jpg",
      "/images/gallery/steelr-cream-panelled-chrome-sidelight.jpg",
      "/images/gallery/steelr-sage-panelled-arched-wreath.jpg",
      "/images/gallery/steelr-black-ornate-medallion-sidelights.jpg",
    ],
    nearbyAreaSlugs: ["edinburgh", "glasgow", "scotland", "aberdeen"],
  },
  {
    slug: "aberdeen",
    name: "Aberdeen",
    region: "Scotland",
    type: "area",
    parentSlug: "scotland",
    tier: 3,
    description:
      "Aberdeen's granite architecture gives the Granite City an unmistakable silver-grey character that sparkles in the northern light. The imposing Victorian terraces of Rubislaw Den and the handsome houses of Cults and Milltimber reflect the prosperity that oil and centuries of maritime trade have brought to this resilient coastal city. SteelR engineers entrance doors for Aberdeen homes that stand up to the demanding North Sea climate, with finishes chosen to complement the distinctive tones of local granite stonework.",
    localFeatures: [
      "Victorian granite villas in Rubislaw Den and Queen's Cross",
      "Detached granite homes in Cults, Milltimber, and Bieldside",
      "Georgian townhouses along Bon Accord Crescent and Crown Street",
      "Contemporary developments along the beach esplanade and harbour",
    ],
    heroImage: "/images/gallery/steelr-grey-panelled-stone-surround.jpg",
    galleryImages: [
      "/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg",
      "/images/gallery/steelr-black-contemporary-ribbed-topiary.jpg",
      "/images/gallery/steelr-taupe-panelled-dual-sidelights.jpg",
      "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
    ],
    nearbyAreaSlugs: ["edinburgh", "st-andrews", "scotland", "glasgow"],
  },
];
