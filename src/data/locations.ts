export interface Location {
  slug: string;
  city: string;
  region: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
}

export const locations: Location[] = [
  {
    slug: "london",
    city: "London",
    region: "Greater London",
    description:
      "From Georgian townhouses in Kensington to contemporary new-builds in Canary Wharf, London properties demand entrance doors that match their architectural stature. SteelR supplies bespoke steel entrance doors across every London borough, engineered to complement period facades and modern developments alike. Our doors are specified by architects and homeowners who understand that a London home deserves security, craftsmanship and design without compromise.",
    heroImage: "/images/gallery/steelr-black-traditional-double-columns.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-ornate-lion-knocker-sidelights.jpg",
      "/images/gallery/steelr-black-traditional-lion-knocker-fanlight.jpg",
      "/images/gallery/steelr-cream-traditional-lion-knocker-topiary.jpg",
    ],
  },
  {
    slug: "manchester",
    city: "Manchester",
    region: "Greater Manchester",
    description:
      "Manchester's rich industrial heritage meets contemporary living across neighbourhoods like Didsbury, Altrincham and Hale. From red-brick Victorian terraces to sleek city-centre apartments, the city's architecture is as varied as it is characterful. SteelR manufactures bespoke steel entrance doors that honour Manchester's heritage while delivering modern security and thermal performance to homeowners across the region.",
    heroImage: "/images/gallery/steelr-black-contemporary-ribbed-topiary.jpg",
    galleryImages: [
      "/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg",
      "/images/gallery/steelr-black-contemporary-sunburst.jpg",
      "/images/gallery/steelr-grey-contemporary-horizontal-slots.jpg",
    ],
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    region: "West Midlands",
    description:
      "As the UK's second city, Birmingham boasts an impressive range of residential architecture, from the elegant Edwardian villas of Moseley and Harborne to the luxury new-build developments across the Jewellery Quarter. SteelR crafts bespoke steel entrance doors for Birmingham homeowners who value both the city's heritage character and the uncompromising security that only a steel door can provide.",
    heroImage: "/images/gallery/steelr-black-ornate-double-gable.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-ornate-medallion-sidelights.jpg",
      "/images/gallery/steelr-black-ornate-circular-fluted.jpg",
      "/images/gallery/steelr-red-traditional-lion-knocker.jpg",
    ],
  },
  {
    slug: "edinburgh",
    city: "Edinburgh",
    region: "Scotland",
    description:
      "Edinburgh's World Heritage architecture, from the sandstone crescents of the New Town to the grand detached homes of Morningside and Corstorphine, calls for entrance doors of exceptional quality. SteelR's bespoke steel doors are engineered to withstand Scotland's climate while complementing the city's distinguished stone facades. Each door is manufactured to your exact specification with finishes suited to Edinburgh's unique architectural character.",
    heroImage: "/images/gallery/steelr-olive-traditional-arched-surround.jpg",
    galleryImages: [
      "/images/gallery/steelr-olive-traditional-brass-pendant.jpg",
      "/images/gallery/steelr-sage-traditional-arched-brick.jpg",
      "/images/gallery/steelr-black-traditional-stained-glass.jpg",
    ],
  },
  {
    slug: "leeds",
    city: "Leeds",
    region: "West Yorkshire",
    description:
      "Leeds combines Victorian grandeur with ambitious modern development, from the stone-built terraces of Headingley to the executive homes of Roundhay and Alwoodley. SteelR provides bespoke steel entrance doors to homeowners across Leeds and West Yorkshire, delivering doors that respect the region's strong architectural identity while offering SR3-rated security and outstanding thermal insulation for the Yorkshire climate.",
    heroImage: "/images/gallery/steelr-black-panelled-ring-knocker-recessed.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
      "/images/gallery/steelr-grey-panelled-lever-handle.jpg",
      "/images/gallery/steelr-grey-panelled-stone-surround.jpg",
    ],
  },
  {
    slug: "bristol",
    city: "Bristol",
    region: "South West England",
    description:
      "Bristol's colourful architectural landscape ranges from the Georgian splendour of Clifton to the vibrant Victorian streets of Redland and Southville. The city's creative spirit extends to its homes, where individuality is prized. SteelR manufactures bespoke steel entrance doors for Bristol homeowners who want a front door as distinctive as their property, with the security and engineering quality to match the city's finest residences.",
    heroImage: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg",
    galleryImages: [
      "/images/gallery/steelr-navy-panelled-lanterns-fanlight.jpg",
      "/images/gallery/steelr-cobalt-ornate-lion-knocker.jpg",
      "/images/gallery/steelr-navy-contemporary-square-knocker.jpg",
    ],
  },
  {
    slug: "surrey",
    city: "Surrey",
    region: "South East England",
    description:
      "Surrey is home to some of the most prestigious residential addresses in the United Kingdom, from the exclusive estates of Weybridge and Virginia Water to the period properties of Guildford and Farnham. SteelR's bespoke steel entrance doors are the natural choice for Surrey homeowners who expect the very highest standards of design, security and craftsmanship for their properties.",
    heroImage: "/images/gallery/steelr-taupe-panelled-chrome-dual-sidelights.jpg",
    galleryImages: [
      "/images/gallery/steelr-taupe-panelled-dual-sidelights.jpg",
      "/images/gallery/steelr-champagne-arched-geometric-double.jpg",
      "/images/gallery/steelr-cream-panelled-chrome-sidelight.jpg",
    ],
  },
  {
    slug: "cheshire",
    city: "Cheshire",
    region: "North West England",
    description:
      "Cheshire's affluent villages and towns, from Alderley Edge and Wilmslow to Knutsford and Prestbury, feature some of the finest residential properties in the north of England. Grand gated homes and beautifully restored period houses define the area's character. SteelR supplies bespoke steel entrance doors to Cheshire homeowners who demand the perfect combination of security, elegance and bespoke craftsmanship.",
    heroImage: "/images/gallery/steelr-espresso-contemporary-gold-inlay.jpg",
    galleryImages: [
      "/images/gallery/steelr-walnut-ribbed-columns.jpg",
      "/images/gallery/steelr-black-traditional-glazed-double.jpg",
      "/images/gallery/steelr-black-traditional-lion-knocker-sidelights-garden.jpg",
    ],
  },
  {
    slug: "kent",
    city: "Kent",
    region: "South East England",
    description:
      "Known as the Garden of England, Kent offers a rich tapestry of residential architecture, from the oast houses and period cottages of the Weald to the executive homes of Sevenoaks and Tunbridge Wells. SteelR manufactures bespoke steel entrance doors for Kent homeowners seeking to enhance their property's kerb appeal and security with a door that is truly made to measure.",
    heroImage: "/images/gallery/steelr-sage-panelled-arched-wreath.jpg",
    galleryImages: [
      "/images/gallery/steelr-sage-contemporary-bar-handle-sidelight.jpg",
      "/images/gallery/steelr-olive-panelled-ring-knocker-sidelight.jpg",
      "/images/gallery/steelr-charcoal-traditional-oval-window-lantern.jpg",
    ],
  },
  {
    slug: "essex",
    city: "Essex",
    region: "East of England",
    description:
      "Essex encompasses a wide range of residential styles, from the historic market towns of Saffron Walden and Dedham to the commuter-belt executive homes of Brentwood and Chelmsford. SteelR crafts bespoke steel entrance doors for Essex homeowners who want to make a statement at their front door, combining the county's aspirational style with SR3-rated security and precision UK manufacturing.",
    heroImage: "/images/gallery/steelr-black-contemporary-panelled-sidelights.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-contemporary-dual-sidelights.jpg",
      "/images/gallery/steelr-black-traditional-chrome-interior.jpg",
      "/images/gallery/steelr-teal-panelled-glass-hallway.jpg",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
