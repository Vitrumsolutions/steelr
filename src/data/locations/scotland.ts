import { Location } from "./types";

export const scotlandLocations: Location[] = [
  {
    slug: "scotland",
    name: "Scotland",
    region: "Scotland",
    type: "hub",
    tier: 1,
    description:
      "Scotland combines four distinct residential markets within a single country and operates a separate planning and building-control regime from England. Edinburgh (EH1 to EH17) is a UNESCO World Heritage Site (the Old Town and New Town together), governed by City of Edinburgh Council with substantial Grade A and Grade B listed property across the New Town (EH2, EH3) Georgian terraces, Stockbridge (EH3) and the prestige residential belts of Morningside (EH10), Murrayfield (EH12) and Cramond (EH4). Glasgow (G1 to G77) carries the Glasgow West End (G12) prestige market with Charles Rennie Mackintosh and Greek Thomson architectural context, plus the south-side prestige residential belt around Pollokshields (G41). St Andrews (KY16) brings Royal and Ancient Golf Club prestige and substantial period stock. Aberdeen (AB10 to AB25) is the granite city with substantial Victorian and Edwardian residential stock around Rubislaw, Queens Cross and Bieldside. The Highlands and Islands market extends from Inverness (IV1 to IV3) through the Highland Council area to the West Coast properties of Skye, Mull and the Argyll coast. Scotland's listed building system uses Categories A, B and C (not Grade I and II as in England), administered by Historic Environment Scotland and the local councils. The Cairngorms National Park covers a substantial part of the central Highlands. SteelR bespoke steel front doors are specified across all four markets: heritage-profiled designs in matched-sandstone or matched-granite RAL finishes for Edinburgh New Town and Aberdeen Rubislaw conservation streets, large-format configurations for the Glasgow West End townhouses and Murrayfield mansions, marine-grade powder-coat specifications for the West Coast and Argyll seafront properties, and thermal-upgrade configurations for the Highland and Cairngorms-edge addresses with extreme winter exposure. Every door carries BS EN 1627:2011 RC4 single leaf, unglazed certification as Standard, with LPS 1175 SR3 (LPCB Enhanced upgrade) and SR4 (Commercial-grade upgrade) available, FD30S fire rating, and thermally broken construction. Survey, manufacture and install from our UK facility with no regional surcharge to Scottish mainland postcodes.",
    localFeatures: [
      "Edinburgh EH1 to EH17, UNESCO World Heritage Site with Old Town and New Town Grade A and B listed property",
      "Edinburgh New Town (EH2, EH3) Georgian terraces around Charlotte Square, Drummond Place and Heriot Row",
      "Morningside EH10, Murrayfield EH12 and Cramond EH4, prestige Edinburgh residential belts",
      "Glasgow West End G12, Charles Rennie Mackintosh and Greek Thomson architectural context",
      "Pollokshields G41, south-side Glasgow prestige Victorian and Edwardian villa market",
      "St Andrews KY16, Royal and Ancient Golf Club prestige plus university-town period stock",
      "Aberdeen AB10 to AB25 granite city with Rubislaw, Queens Cross and Bieldside prestige residential belts",
      "Inverness IV1 to IV3, Highland capital and gateway to the Cairngorms",
      "Cairngorms National Park covering substantial Highland property requiring extreme winter-exposure specification",
      "West Coast and Argyll coastal property: Oban, Tobermory and the Skye properties requiring marine-grade powder coating",
      "Scotland operates Category A, B and C listed building grading administered by Historic Environment Scotland (not English Grade I and II)",
      "Substantial sandstone and granite period properties across Edinburgh, Glasgow and Aberdeen requiring heritage-profiled steel entrance configurations in matched RAL finishes",
    ],
    faqs: [
      {
        question:
          "Do you cover Glasgow, Aberdeen and the Highlands as well as Edinburgh?",
        answer:
          "Yes. We treat the whole of mainland Scotland as a single service region from our UK facility. Survey, manufacture and install run with no regional surcharge to Edinburgh EH1, Glasgow G1, St Andrews KY16, Aberdeen AB10, Inverness IV1, or any other Scottish mainland postcode. Highland and West Coast properties may add a short additional surveyor travel day. Coastal properties receive marine-grade powder coating as standard. Typical lead time from first survey to installed door is approximately eight weeks regardless of postcode.",
      },
      {
        question:
          "What is the planning position on installing a SteelR door in the Edinburgh UNESCO World Heritage Site or a Scottish Category A listed building?",
        answer:
          "Edinburgh Old Town and New Town form a UNESCO World Heritage Site administered by City of Edinburgh Council with input from Historic Environment Scotland. Scotland uses a Category A, B and C listed-building grading system distinct from England's Grade I and II. Most central Edinburgh property is Category A or B listed and changing the front door requires listed building consent. The Cairngorms National Park operates a separate conservation regime. Within a World Heritage Site, National Park, conservation area or on a listed building, change to the front elevation typically requires planning permission or listed building consent from Historic Environment Scotland or the relevant local council. A SteelR steel door can secure approval where the design respects original proportions with traditional six-panel layouts, period-correct ironmongery, heritage RAL colour matched to local sandstone or granite, and no visible certification marks. We advise on the application in-house.",
      },
      {
        question:
          "What is the typical lead time to installed door for EH1, G12 or AB10 postcodes?",
        answer:
          "Around eight weeks from first enquiry to finished installed door. Around six of those weeks are manufacturing in our UK facility. One to two weeks are the survey and design process. Installation itself is typically a single day for a single-leaf door and two days for a double-door or sidelight configuration. There is no regional surcharge for Scottish mainland postcodes and the install team are SteelR employees, DBS-checked and directly employed.",
      },
      {
        question:
          "Does my Scottish property need SR3 or SR4, and which insurers in Scotland recognise it?",
        answer:
          "BS EN 1627 RC4 single leaf, unglazed is the SteelR Standard tier on every door and is recognised by mainstream UK home insurers as a meaningful upgrade over PAS 24 alone. LPS 1175 SR3 (the LPCB Enhanced upgrade, five-minute power-tool resistance) is widely specified on properties in Edinburgh EH2 New Town, EH10 Morningside, Glasgow G12 West End, and Aberdeen AB10 Rubislaw where contents values exceed insurer thresholds. SR4 (Commercial-grade, ten-minute power-tool resistance) is typically only specified on country house portfolios, Highland estate property or addresses with documented attempted-intrusion history. Most Scottish specifications sit at RC4 Standard or RC4 plus SR3, with thermal-upgrade configurations for Highland and Cairngorms-edge addresses.",
      },
    ],
    heroImage: "/images/gallery/steelr-grey-panelled-stone-surround.jpg",
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
      "Edinburgh divides neatly between the medieval Old Town's tenement closes and the Georgian perfection of the New Town, both UNESCO World Heritage sites. The EH3 postcode covering Moray Place, Heriot Row, Ann Street and Great King Street contains some of Europe's finest Georgian architecture, with City of Edinburgh Council enforcing strict conservation controls including Article 4 Directions. Victorian and Edwardian villas in Morningside (EH10), The Grange (EH9) and Merchiston feature deep-set porches with original fanlights, while sandstone detached homes in Corstorphine (EH12) and Cramond (EH4) offer more generous plots. Quartermile and the Fountainbridge waterfront support contemporary developments where bolder steel door specifications suit the architecture. SteelR creates bespoke steel entrance doors for Edinburgh that satisfy the city's rigorous planning standards with hand-finished ogee panels, arched Georgian fanlights and period ironmongery in polished brass or antique bronze. Finishes include RAL 9005 Jet Black, RAL 7016 Anthracite and RAL 6009 Fir Green. Every door delivers exceptional thermal performance against Scotland's biting east-coast winters, with U-values from 0.9 W/m2K, PAS 24:2022 certification, BS EN 1627:2011 RC4 single leaf, unglazed as Standard with LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade) available, Secured by Design approval, and LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available.",
    localFeatures: [
      "Georgian townhouses in the New Town, Stockbridge and Moray Place (EH3)",
      "Victorian and Edwardian villas in Morningside, The Grange and Merchiston (EH9 and EH10)",
      "Sandstone detached homes in Corstorphine, Cramond and Barnton (EH4 and EH12)",
      "Contemporary developments in Quartermile, Fountainbridge and the waterfront",
      "UNESCO World Heritage properties under Article 4 Direction controls",
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
      "Glasgow's architectural legacy rivals any European city, from the Charles Rennie Mackintosh masterpieces to the red sandstone tenements of the West End and the grand terraces of Park Circus. The G12 postcode covering Hyndland, Dowanhill and Kelvinside contains some of Scotland's most prized period housing, with villas along Crown Road, Hughenden Road and Great Western Road regularly exchanging above the two million pound mark. Pollokshields in G41 offers substantial Victorian and Edwardian detached homes on leafy plots, while Park Circus and Woodlands in G3 feature Grade A listed Georgian terraces under strict conservation controls. Detached family homes in the G61 Bearsden, G62 Milngavie and G77 Newton Mearns suburbs favour more contemporary specifications. SteelR designs for Glasgow balance the city's celebrated decorative tradition with clean modern engineering, offering hand-finished ogee panels, arched fanlights, geometric leaded glazing and bold ironmongery in polished chrome, brushed brass or matt black. Finishes include RAL 9005 Jet Black, RAL 3004 Purple Red and RAL 7024 Graphite Grey. Every door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard (with LPS 1175 SR3, SR4 and LPS 1673 available as upgrades), Secured by Design approved, FD30S fire rated, and LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available.",
    localFeatures: [
      "Red sandstone tenement flats in the West End (G12) and Southside (G41)",
      "Victorian and Edwardian villas in Hyndland, Kelvinside and Pollokshields",
      "Grade A listed Georgian terraces around Park Circus and Woodlands (G3)",
      "Detached family homes in Bearsden, Milngavie and Newton Mearns (G61, G62, G77)",
      "Charles Rennie Mackintosh influenced Arts and Crafts properties",
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
      "St Andrews is a town of exceptional character within the KY16 postcode, where medieval cathedral ruins, the oldest university in Scotland and the spiritual home of golf converge along the windswept Fife coastline. Dignified stone houses line South Street, Market Street and The Scores, many Grade A and Grade B listed within the St Andrews Conservation Area, while prosperous homes surrounding the Old Course and along Gibson Place rank among Scotland's most coveted addresses. The surrounding East Neuk villages of Crail, Anstruther and Pittenweem add characterful fishermen's cottages and substantial Edwardian villas to the local market. SteelR provides St Andrews homeowners with bespoke steel entrance doors that withstand North Sea salt spray and exposure category C wind loading, with 70mm thermally broken leaves finished in RAL 7012 Basalt Grey, RAL 9005 Jet Black or a bespoke heritage shade. Period-appropriate fanlights, ogee panels and ironmongery in polished brass or antique bronze satisfy Fife Council conservation officers. Every SteelR door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, Secured by Design approved, FD30S fire and smoke rated, with LPS 1175 SR3 (Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available on every door.",
    localFeatures: [
      "Medieval and Georgian stone townhouses along South Street and Market Street (KY16)",
      "Grade A listed Victorian villas near The Scores and the Cathedral precinct",
      "Prestigious properties overlooking the Old Course and Swilcan Bridge",
      "Converted fishermen's cottages and villas in Crail, Anstruther and the East Neuk",
      "Conservation area compliance within the St Andrews historic core",
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
      "Aberdeen's granite architecture gives the Granite City an unmistakable silver-grey character that sparkles in the northern light. The imposing Victorian terraces of Rubislaw Den North and South in the AB15 postcode represent some of Scotland's most prestigious residential streets, with the surrounding Queen's Cross and Queens Road properties trading at the top of the Aberdeen market. Detached granite homes in Cults, Milltimber and Bieldside along the AB15 and AB14 corridor reflect the prosperity that oil and centuries of maritime trade have brought to this resilient coastal city. Georgian townhouses line Bon Accord Crescent, Crown Street and Golden Square in AB10 under strict conservation controls, while contemporary developments along the beach esplanade and harbour support bolder steel door specifications. SteelR engineers entrance doors for Aberdeen that stand up to demanding North Sea climate and exposure category C wind loading, with finishes chosen to complement local silver-grey granite. Specifications include RAL 9005 Jet Black, RAL 7016 Anthracite Grey and RAL 8019 Grey Brown with brushed chrome or stainless steel ironmongery. Every door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified (with LPS 1175 SR3, SR4 and LPS 1673 upgrades available), Secured by Design approved, FD30S fire rated, and LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available.",
    localFeatures: [
      "Victorian granite villas in Rubislaw Den North and South (AB15)",
      "Detached granite homes in Cults, Milltimber and Bieldside (AB14 and AB15)",
      "Georgian townhouses along Bon Accord Crescent and Crown Street (AB10)",
      "Contemporary developments along the beach esplanade and harbour (AB11 and AB24)",
      "Exposed coastal properties requiring category C wind and water resistance",
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
