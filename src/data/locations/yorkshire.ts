import { Location } from "./types";

export const yorkshireLocations: Location[] = [
  {
    slug: "yorkshire",
    name: "Yorkshire",
    region: "North East England",
    type: "hub",
    tier: 1,
    description:
      "Yorkshire is England's largest historic county and covers three distinct sub-regions: the West Riding around Leeds, Sheffield and the Pennine industrial valleys; the North Riding incorporating York, Harrogate and the Yorkshire Dales National Park; and the East Riding running to the Yorkshire coast. The prestige residential market centres on Harrogate (HG1 to HG3) as the Victorian spa town with its Stray, the Duchy Estate and Pannal conservation areas. York (YO1 to YO31) carries Grade I listed minster conservation, the city-walls Roman context, plus the substantial Edwardian villa stock around Bishopthorpe, Heworth and Fulford. Ilkley (LS29), Wetherby (LS22) and the North Yorkshire Dales villages provide rural prestige. Leeds (LS6 to LS17) brings the Roundhay (LS17) and Headingley (LS6) Victorian-Edwardian villa belts plus the executive new-build Alwoodley (LS17) and Adel (LS16) market. Sheffield (S10 to S11) provides the Ranmoor and Fulwood prestige market plus Whirlow (S11) within Peak District National Park boundary. The Yorkshire Dales National Park covers much of the rural west of the county with strict conservation oversight, while the North York Moors National Park extends across the north-east. Coastal Yorkshire combines Scarborough (YO11 to YO12), Whitby (YO21) and Bridlington (YO15 to YO16). SteelR bespoke steel front doors are specified across all three markets: heritage-profiled designs in matched Yorkshire-stone RAL finishes for Harrogate Stray and York minster-quarter conservation streets, traditional six-panel layouts for the Yorkshire Dales National Park village context, Arts and Crafts adaptations for the Roundhay and Headingley Victorian villas, and pivot-format contemporary doors for the Leeds and Sheffield new-build executive estates. Every door carries BS EN 1627:2011 RC4 single leaf, unglazed certification as Standard, with LPS 1175 SR3 (LPCB Enhanced upgrade) and SR4 (Commercial-grade upgrade) available, FD30S fire rating, and thermally broken construction. Survey, manufacture and install from our UK facility with no regional surcharge to Yorkshire postcodes.",
    localFeatures: [
      "Harrogate HG1 to HG3, Victorian spa town with the Stray, Duchy Estate and Pannal conservation areas",
      "York YO1 to YO31, Grade I listed minster city with Roman walls conservation context",
      "Ilkley LS29 and Wetherby LS22, North Yorkshire prestige market towns",
      "Leeds LS6 to LS17 with Roundhay LS17 and Headingley LS6 Victorian-Edwardian villa belts",
      "Alwoodley LS17 and Adel LS16, executive new-build belt within Leeds prestige residential market",
      "Sheffield S10 to S11 with Ranmoor and Fulwood as the Sheffield prestige market",
      "Whirlow S11, Sheffield property within the Peak District National Park boundary",
      "Yorkshire Dales National Park covering much of the rural west of the county with strict conservation oversight",
      "North York Moors National Park covering the north-east of Yorkshire",
      "Coastal Yorkshire: Scarborough YO11 to YO12, Whitby YO21, Bridlington YO15 to YO16",
      "Substantial Edwardian and Victorian villas across HG1 Harrogate Stray and LS17 Roundhay requiring heritage-profiled steel entrance configurations with matched Yorkshire-stone RAL finishes",
      "Pennine-edge stone farmhouses and converted barns across Yorkshire Dales and North York Moors postcodes",
    ],
    faqs: [
      {
        question:
          "Do you cover the full Yorkshire region including the Dales, the East Riding coast and Sheffield?",
        answer:
          "Yes. We treat the historic Yorkshire region (West, North and East Ridings, plus the city of York and the Sheffield district) as a single service region from our UK facility. Survey, manufacture and install run with no regional surcharge to Harrogate HG1, York YO1, Leeds LS17, Sheffield S10, Ilkley LS29, Wetherby LS22, Whirlow S11, Scarborough YO11, Whitby YO21, or any other Yorkshire postcode. Coastal properties at Whitby, Scarborough and Bridlington receive marine-grade powder coating as standard. Typical lead time from first survey to installed door is approximately eight weeks regardless of postcode.",
      },
      {
        question:
          "What is the planning position on installing a SteelR door in the Yorkshire Dales National Park, North York Moors National Park or a Yorkshire conservation area?",
        answer:
          "The Yorkshire Dales National Park and North York Moors National Park operate strict conservation regimes administered by the respective National Park Authorities. York city centre within the walls operates a comparable regime including listed building consent within the minster quarter. Harrogate Stray, Duchy Estate and the Sheffield Ranmoor conservation areas operate strict planning controls. Within a National Park, conservation area or on a listed building, change to the front elevation typically requires planning permission or listed building consent. A SteelR steel door can secure approval where the design respects original proportions with traditional six-panel layouts, period-correct ironmongery, heritage RAL colour matched to local Yorkshire stonework, and no visible certification marks. We advise on the application in-house.",
      },
      {
        question:
          "What is the typical lead time to installed door for HG1, YO1 or LS17 postcodes?",
        answer:
          "Eight to twelve weeks from first enquiry to finished installed door. Six to eight of those weeks are manufacturing in our UK facility. One to two weeks are the survey and design process. Installation itself is typically a single day for a single-leaf door and two days for a double-door or sidelight configuration. There is no regional surcharge for Yorkshire postcodes and the install team are SteelR employees, DBS-checked and directly employed.",
      },
      {
        question:
          "Does my Yorkshire property need SR3 or SR4, and which insurers in the county recognise it?",
        answer:
          "BS EN 1627 RC4 single leaf, unglazed is the SteelR Standard tier on every door and is recognised by mainstream UK home insurers as a meaningful upgrade over PAS 24 alone. LPS 1175 SR3 (the LPCB Enhanced upgrade, five-minute power-tool resistance) is widely specified on properties in HG1 Harrogate, LS17 Roundhay, S10 Sheffield Ranmoor, and the high-value North Yorkshire Dales estates where contents values exceed insurer thresholds. SR4 (Commercial-grade, ten-minute power-tool resistance) is typically only specified on country house portfolios or rural addresses with documented attempted-intrusion history. Most Yorkshire specifications sit at RC4 Standard or RC4 plus SR3.",
      },
    ],
    heroImage: "/images/gallery/steelr-black-traditional-wide-frosted.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-traditional-columns-mansion.jpg",
      "/images/gallery/steelr-grey-panelled-stone-surround.jpg",
      "/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg",
      "/images/gallery/steelr-black-ornate-double-gable.jpg",
      "/images/gallery/steelr-sage-traditional-arched-brick.jpg",
      "/images/gallery/steelr-taupe-panelled-chrome-dual-sidelights.jpg",
    ],
    nearbyAreaSlugs: ["leeds", "harrogate", "york", "sheffield", "ilkley"],
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "Leeds has reinvented itself as a northern powerhouse, and its residential areas reflect that transformation. The stone villas of Headingley along Shire Oak Road and North Lane have stood since the late Victorian boom, many now Grade II listed and subject to the conservation constraints of the Headingley Hill area. In Roundhay, substantial Edwardian semis line Street Lane, Wetherby Road and The Avenue with deep-set porches crying out for front doors that respect their original proportions. The prestigious LS17 postcodes covering Alwoodley and Moortown favour gated executive homes where owners upgrade to BS EN 1627 RC4 Standard steel entrance doors with LPS 1175 SR3, SR4 and LPS 1673 upgrades in RAL 9005 Jet Black or RAL 7016 Anthracite, often with brushed brass or chrome ironmongery. SteelR works with Leeds homeowners, architects and main contractors from the LS6 inner suburbs out to the LS22 Wetherby belt, with every door manufactured to PAS 24:2022 and Secured by Design approval, and the LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (with LPS 1673 Ultra-high also available by enquiry) available for higher exposure properties.",
    localFeatures: [
      "Victorian stone villas in Headingley, Far Headingley and Meanwood (LS6)",
      "Edwardian semis with deep-set porches along Street Lane, Roundhay (LS8)",
      "Contemporary waterfront apartments in Holbeck Urban Village and Granary Wharf",
      "Executive detached homes in Alwoodley, Moortown and Adel (LS17)",
      "Conservation area properties around Headingley Hill, Chapel Allerton and Oakwood",
    ],
    heroImage: "/images/gallery/steelr-black-contemporary-panelled-sidelights.jpg",
    galleryImages: [
      "/images/gallery/steelr-grey-contemporary-horizontal-slots.jpg",
      "/images/gallery/steelr-black-panelled-ring-knocker-recessed.jpg",
      "/images/gallery/steelr-navy-panelled-chrome-palms.jpg",
      "/images/gallery/steelr-black-traditional-chrome-interior.jpg",
    ],
    nearbyAreaSlugs: ["harrogate", "ilkley", "wetherby", "york", "yorkshire"],
  },
  {
    slug: "harrogate",
    name: "Harrogate",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "Harrogate exudes elegance, from the sweeping 200 acres of The Stray to the immaculate stone terraces lining its garden districts. The Duchy Estate within the HG1 and HG2 postcodes is one of northern England's most exclusive residential enclaves, with properties along Cornwall Road, Lancaster Park Road and Rutland Drive regularly exchanging at seven-figure values. The Montpellier Quarter and streets around Valley Gardens carry significant conservation protection, and many Victorian and Edwardian villas are Grade II listed with original leaded fanlights still in place. SteelR bespoke steel entrance doors suit Harrogate's refined character, with ogee and reeded panel profiles, arched fanlight heads and period-appropriate ironmongery in brushed brass, polished chrome or matt black, finished in RAL 9002 Grey White, RAL 7012 Basalt Grey or a bespoke heritage colour. Every door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard (with LPS 1175 SR3, SR4 and LPS 1673 available as upgrades), with LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available for higher security specifications.",
    localFeatures: [
      "Victorian stone terraces overlooking The Stray (HG1)",
      "Substantial Edwardian detached homes in the Duchy Estate (HG1 and HG2)",
      "Country houses and converted farms across Nidderdale AONB",
      "Modern executive developments off Leeds Road and Wetherby Road",
      "Grade II listed properties in Montpellier Quarter and around Valley Gardens",
    ],
    heroImage: "/images/gallery/steelr-black-ornate-checkerboard-canopy.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-traditional-lion-knocker-sidelights-garden.jpg",
      "/images/gallery/steelr-cream-traditional-lion-knocker-topiary.jpg",
      "/images/gallery/steelr-navy-panelled-lanterns-fanlight.jpg",
      "/images/gallery/steelr-black-ornate-circular-fluted.jpg",
    ],
    nearbyAreaSlugs: ["knaresborough", "ripon", "ilkley", "wetherby", "leeds"],
  },
  {
    slug: "york",
    name: "York",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "York's ancient city walls enclose one of the richest concentrations of listed heritage in the UK, with over 1,500 protected buildings within the ring. Georgian townhouses line Bootham, St Paul's Square and Clifton in the YO30 postcode, while the YO31 and YO1 streets around Monkgate and Gillygate feature pristine Regency terraces under strict conservation controls. Beyond the walls, suburbs such as Bishopthorpe, Heslington and Fulford in YO10 and YO23 offer generous detached family homes on quiet, tree-lined roads. SteelR bespoke steel entrance doors are manufactured to meet the stringent requirements of York's 35 conservation areas, with hand-finished ogee panel profiles, arched or rectangular fanlights with leaded glazing bars, and heritage ironmongery that satisfies City of York Council planning officers. Finishes include RAL 7024 Graphite Grey, RAL 6009 Fir Green and RAL 8017 Chocolate Brown. Every door delivers BS EN 1627:2011 RC4 single leaf, unglazed as Standard with LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade) available, PAS 24:2022 certification, Secured by Design approval, and FD30S fire and smoke rating as standard, with LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available.",
    localFeatures: [
      "Georgian townhouses in Bootham, Clifton and St Paul's Square (YO30)",
      "Victorian terraces in The Groves, South Bank and Fulford (YO10 and YO23)",
      "Detached family homes in Bishopthorpe, Copmanthorpe and Heslington",
      "Grade I and Grade II listed buildings within the city walls (YO1)",
      "Conservation area compliance across 35 designated York zones",
    ],
    heroImage: "/images/gallery/steelr-black-traditional-stained-glass.jpg",
    galleryImages: [
      "/images/gallery/steelr-olive-traditional-arched-surround.jpg",
      "/images/gallery/steelr-black-ornate-medallion-sidelights.jpg",
      "/images/gallery/steelr-sage-panelled-arched-wreath.jpg",
      "/images/gallery/steelr-charcoal-traditional-oval-window-lantern.jpg",
    ],
    nearbyAreaSlugs: ["wetherby", "harrogate", "leeds", "yorkshire"],
  },
  {
    slug: "ilkley",
    name: "Ilkley",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "Nestled between Ilkley Moor and the River Wharfe, the LS29 postcode is one of Yorkshire's most sought-after addresses and a consistent top-five UK town in quality-of-life rankings. Handsome stone villas along Queens Road, Grove Road and Wells Road reflect Ilkley's Victorian spa-town heritage, many Grade II listed and set within the Ilkley Conservation Area. Ben Rhydding Drive, Bolling Road and Crossbeck Road feature substantial Edwardian detached homes on generous plots, while hillside plots above the town support architect-designed contemporary houses with full-height glazing and bold steel entrance door specifications. SteelR bespoke steel front doors suit Ilkley's premium housing market with robust 1.5mm to 2.0mm steel construction that withstands exposed Wharfedale weather, finished in RAL 7016 Anthracite Grey, RAL 9005 Jet Black or a dual-colour heritage sage. Every door carries PAS 24:2022 certification, BS EN 1627:2011 RC4 single leaf, unglazed as Standard with LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade) available, Secured by Design approval, and FD30S fire and smoke rating, with LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available for exposed rural plots.",
    localFeatures: [
      "Victorian stone villas with deep porches along The Grove and Wells Road",
      "Substantial Edwardian detached homes in Ben Rhydding (LS29)",
      "Converted mill buildings along the River Wharfe",
      "Architect-designed contemporary homes on Wharfedale hillside plots",
      "Grade II listed properties in the Ilkley Conservation Area",
    ],
    heroImage: "/images/gallery/steelr-olive-traditional-brass-pendant.jpg",
    galleryImages: [
      "/images/gallery/steelr-grey-panelled-lever-handle.jpg",
      "/images/gallery/steelr-black-contemporary-ribbed-topiary.jpg",
      "/images/gallery/steelr-sage-contemporary-bar-handle-sidelight.jpg",
      "/images/gallery/steelr-walnut-ribbed-columns.jpg",
    ],
    nearbyAreaSlugs: ["leeds", "harrogate", "knaresborough", "yorkshire"],
  },
  {
    slug: "wetherby",
    name: "Wetherby",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "Wetherby sits at the crossroads of Yorkshire's prime commuter belt within the LS22 and LS23 postcodes, its Georgian coaching-town character preserved in the honey-coloured stone buildings along High Street, Market Place and North Street. Surrounding villages including Collingham, Linton, Boston Spa and Bramham feature period stone cottages and modern executive estates that attract senior professionals working across Leeds, York and Harrogate. Streets such as Deighton Road, Beech Avenue and Walton Road in the LS22 district support premium detached homes where owners specify BS EN 1627 RC4 Standard steel entrance doors with LPS 1175 SR3, SR4 and LPS 1673 upgrades with traditional ogee panels and fanlight glazing. SteelR offers Wetherby homeowners a distinguished threshold that enhances both period and contemporary properties, with finishes in RAL 6005 Moss Green, RAL 5008 Grey Blue or a bespoke heritage shade, and hardware in polished brass or satin chrome. Every door is manufactured to PAS 24:2022, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard (with LPS 1175 SR3, SR4 and LPS 1673 available as upgrades), FD30S fire and smoke rated, and Secured by Design approved, with LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (with LPS 1673 Ultra-high also available by enquiry) available.",
    localFeatures: [
      "Georgian stone townhouses in the Wetherby market centre (LS22)",
      "Executive detached homes in Boston Spa, Bramham and Collingham (LS23)",
      "Period stone cottages in surrounding Wharfe valley villages",
      "New-build executive estates with double-height entrance lobbies",
      "Conservation area properties around the market square and Bridge Foot",
    ],
    heroImage: "/images/gallery/steelr-taupe-panelled-dual-sidelights.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-traditional-glazed-double.jpg",
      "/images/gallery/steelr-espresso-contemporary-gold-inlay.jpg",
      "/images/gallery/steelr-cream-panelled-chrome-sidelight.jpg",
      "/images/gallery/steelr-black-ornate-lion-knocker-gable.jpg",
    ],
    nearbyAreaSlugs: ["york", "harrogate", "leeds", "knaresborough", "ripon"],
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "Sheffield's dramatic hillside setting means many of its finest homes enjoy sweeping views across the Don and Sheaf valleys toward the Peak District National Park. The stone-built properties of Ranmoor, Endcliffe, Fulwood and Dore across the S10 and S17 postcodes represent some of South Yorkshire's most prestigious residential addresses, with Fulwood Road, Riverdale Road and Whirlowdale Road supporting seven-figure detached homes. Owners here face prevailing westerly winds off the Peak District and specify front doors that perform to exposure category C wind and water ratings. SteelR steel entrance doors deliver uncompromising weather resistance alongside the refined aesthetics that Sheffield's leafy suburbs demand, with 70mm thermally broken leaves achieving U-values from 0.9 W/m2K, BS EN 1627:2011 RC4 single leaf, unglazed as Standard with LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade) available as standard, PAS 24:2022 certification, Secured by Design approval, and LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available. Finishes in RAL 7022 Umbra Grey, RAL 8019 Grey Brown or dual-colour heritage schemes suit both Victorian stone villas and Arts and Crafts properties.",
    localFeatures: [
      "Victorian stone villas in Ranmoor and Endcliffe (S10)",
      "Arts and Crafts detached homes in Dore and Totley (S17)",
      "Converted cutlery works and industrial buildings in Kelham Island (S3)",
      "Executive developments in Fulwood, Lodge Moor and Bents Green",
      "Peak District fringe properties facing category C wind exposure",
    ],
    heroImage: "/images/gallery/steelr-black-contemporary-sunburst.jpg",
    galleryImages: [
      "/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg",
      "/images/gallery/steelr-black-panelled-sidelights-palms.jpg",
      "/images/gallery/steelr-red-traditional-lion-knocker.jpg",
      "/images/gallery/steelr-navy-contemporary-square-knocker.jpg",
    ],
    nearbyAreaSlugs: ["leeds", "yorkshire", "york"],
  },
  {
    slug: "knaresborough",
    name: "Knaresborough",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "Knaresborough's dramatic gorge setting and twelfth-century castle ruins make the HG5 postcode one of Yorkshire's most visually striking towns. Steep streets leading down to the River Nidd including High Street, Kirkgate and Briggate are lined with Georgian townhouses, Grade II listed Victorian cottages and handsome stone-built family homes, many within the Knaresborough Conservation Area. Detached homes in Scriven, Calcutt and along Boroughbridge Road offer more generous plots, while barn conversions in surrounding agricultural hamlets such as Farnham and Arkendale feature characterful oak-framed openings that benefit from bespoke steel entrance doors. SteelR doors suit Knaresborough's heritage streetscapes with traditional ogee panel profiles, arched fanlights, and ironmongery in polished brass, antique bronze or satin chrome that Harrogate Borough Council conservation officers approve alongside concealed multi-point locking systems. Finishes include RAL 6003 Olive Green, RAL 7016 Anthracite or heritage sage. Every door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified (with LPS 1175 SR3, SR4 and LPS 1673 upgrades available), Secured by Design approved, and FD30S fire and smoke rated, with LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (with LPS 1673 Ultra-high also available by enquiry) available.",
    localFeatures: [
      "Georgian and Regency townhouses on the High Street and Kirkgate (HG5)",
      "Grade II listed stone cottages on sloping riverside streets",
      "Detached family homes in Scriven, Calcutt and along Boroughbridge Road",
      "Barn conversions in Farnham, Arkendale and surrounding hamlets",
      "Conservation area properties overlooking the Nidd Gorge",
    ],
    heroImage: "/images/gallery/steelr-black-traditional-lion-knocker-fanlight.jpg",
    galleryImages: [
      "/images/gallery/steelr-cobalt-ornate-lion-knocker.jpg",
      "/images/gallery/steelr-olive-panelled-ring-knocker-sidelight.jpg",
      "/images/gallery/steelr-black-ornate-double-gable.jpg",
      "/images/gallery/steelr-teal-panelled-glass-hallway.jpg",
    ],
    nearbyAreaSlugs: ["harrogate", "ripon", "wetherby", "ilkley", "yorkshire"],
  },
  {
    slug: "ripon",
    name: "Ripon",
    region: "Yorkshire",
    type: "area",
    parentSlug: "yorkshire",
    tier: 3,
    description:
      "England's smallest city punches well above its weight architecturally, with Grade I listed Ripon Cathedral anchoring a market square ringed by handsome Georgian facades across the HG4 postcode. Residential streets radiate outwards into stone-built Victorian terraces along Allhallowgate, North Street and Kirkgate, while nearby villages such as Studley Royal, Bishop Monkton, Sharow and Littlethorpe offer country-house living within easy reach of Harrogate, York and the A1(M). The area sits on the edge of the Nidderdale AONB and the Fountains Abbey and Studley Royal UNESCO World Heritage Site, meaning many properties carry listed status and strict conservation controls. SteelR bespoke steel entrance doors provide Ripon homeowners with a front door that matches the civic pride this ancient city is known for, with hand-finished ogee and beaded panel profiles, arched fanlight glazing and period-appropriate hardware. Finishes include RAL 9002 Grey White, RAL 7012 Basalt Grey and bespoke heritage colours. Every door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard (with LPS 1175 SR3, SR4 and LPS 1673 available as upgrades), Secured by Design approved, and FD30S fire and smoke rated, with LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (with LPS 1673 Ultra-high also available by enquiry) available.",
    localFeatures: [
      "Georgian stone townhouses around the Ripon market square (HG4)",
      "Grade II listed Victorian terraces on Allhallowgate and North Street",
      "Country homes and estate cottages near Fountains Abbey and Studley Royal",
      "Modern detached family homes in Littlethorpe, Sharow and Bishop Monkton",
      "Conservation area properties within the Cathedral precinct",
    ],
    heroImage: "/images/gallery/steelr-champagne-arched-geometric-double.jpg",
    galleryImages: [
      "/images/gallery/steelr-black-traditional-double-columns.jpg",
      "/images/gallery/steelr-black-ornate-medallion-driveway.jpeg",
      "/images/gallery/steelr-taupe-panelled-chrome-dual-sidelights.jpg",
      "/images/gallery/steelr-black-traditional-ring-knocker-open.jpg",
    ],
    nearbyAreaSlugs: ["harrogate", "knaresborough", "wetherby", "yorkshire"],
  },
];
