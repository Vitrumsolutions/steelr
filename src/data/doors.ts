export interface DoorPageContent {
  /** ~50-80 words describing the visual character and craftsmanship of this specific door */
  aesthetic: string;
  /** ~30-50 words on the design heritage / inspiration / when this style works */
  inspiration: string;
  /** ~30-50 words on what kind of property and homeowner this door suits best */
  idealFor: string;
}

export interface Door {
  slug: string;
  src: string;
  alt: string;
  style: "Contemporary" | "Traditional" | "Double Doors";
  colour: string;
  features: string[];
  title: string;
  description: string;
  /** Optional rich per-door content (replaces the generic auto-description for SEO) */
  pageContent?: DoorPageContent;
  /** Optional override for CSS object-position on the collection card image.
   * Default behaviour is "center top" (anchors the top of the photo to the
   * 3:4 card). Override here for tall portrait shots where the door sits in
   * the middle or bottom of the photo and "center top" would crop the door
   * out of view. Examples: "center 75%", "center bottom", "center 60%". */
  objectPosition?: string;
  /** Skip Next.js image optimization for this door's hero on the detail page.
   * Set true for doors whose optimized derivatives are not cached at the
   * Vercel edge and are returning 402 from the optimizer (quota exhaustion).
   * The raw JPG from public/images/gallery/ is served directly. Slightly
   * larger transfer than an optimized AVIF/WebP, but the door detail page
   * actually renders. Audit by probing /_next/image at multiple widths;
   * if w=640 is cache=HIT but larger widths are 402, the door belongs here. */
  unoptimized?: boolean;
  /** Optional override for the door detail page hero aspect ratio. Default
   * (undefined) renders the image at its natural ratio (w-full h-auto).
   * Override here for tall portrait shots (natural ratio < ~0.6) where the
   * natural rendering produces an overly tall hero showing too much
   * surrounding context. The container becomes a fixed-aspect box and
   * object-cover + objectPosition crops to the door body. Examples:
   * "4/5" (close to lion-knocker's natural 0.81), "3/4" (more compact). */
  heroAspectRatio?: string;
}

/** Hand-written rich content per door (keyed by slug). Render via the [slug] template's pageContent block. */
export const doorPageContent: Record<string, DoorPageContent> = {
  "black-panelled-double-letterbox": {
    aesthetic: "A pair of jet-black double doors with a flush-panelled face and an integrated horizontal letterbox set into the meeting stiles. The understated geometry creates an emphatic, symmetrical entrance — equally at home framed by contemporary stonework or set into a Georgian portico. Hand-finished in our UK workshop with concealed multi-point locking.",
    inspiration: "Double-door entrances date back to the formal townhouses of the 18th century, where width signalled status. Our modern interpretation strips the design back to its essential proportions and materials.",
    idealFor: "Substantial detached homes, mansion blocks, gated developments, and any property where a single-leaf door would feel undersized against the architecture.",
  },
  "black-traditional-lion-knocker-open": {
    aesthetic: "A classic six-panel black steel door pictured in the open position, revealing the substantial frame depth and the polished brass lion-head knocker that sits proudly above the letterplate. The deep panel mouldings catch the light to create traditional shadow lines without the maintenance burden of timber.",
    inspiration: "The lion-head knocker has been a hallmark of English entrance doors since the Georgian era, traditionally cast in brass and signalling the dignity of the household within. We use solid forged brass with a heritage finish.",
    idealFor: "Victorian and Edwardian terraces, Georgian townhouses, conservation area properties, and period homes where the front door is a defining architectural feature.",
  },
  "teal-panelled-glass-hallway": {
    aesthetic: "A bold teal-painted steel door with a contemporary panelled face and an integrated obscure glass panel that draws daylight into the hallway beyond. The colour reads as confidently modern while the panel proportions remain quietly classical, making this a versatile design that bridges old and new.",
    inspiration: "Teal entrance doors have surged in popularity since the late 2010s as homeowners moved away from neutral palettes. The colour pairs beautifully with red brick, sandstone, and white-rendered facades.",
    idealFor: "Edwardian and 1930s semi-detached homes, modernised period terraces, and homeowners who want a confident colour statement without straying into novelty territory.",
  },
  "navy-traditional-vine-porch": {
    aesthetic: "A deep navy traditional steel door framed by a vine-covered porch in the photograph — the heritage panel design reads as instantly familiar while the navy finish brings a contemporary edge. Solid brass furniture and a polished kickplate complete the formal composition.",
    inspiration: "Navy is the modern alternative to black for period properties — it carries the same gravitas with slightly more warmth, and pairs particularly well with the soft brick tones of pre-war housing.",
    idealFor: "Edwardian and Arts & Crafts homes, country cottages with porches, and any property where black would feel too austere against soft natural stone or weathered brick.",
  },
  "navy-panelled-chrome-palms": {
    aesthetic: "A clean-lined navy panelled door with brushed chrome hardware, photographed against a backdrop of architectural palms. The hardware is deliberately minimal — a slimline lever and recessed escutcheon — letting the depth of the navy paintwork carry the visual weight.",
    inspiration: "The pairing of deep navy with chrome rather than brass is a contemporary signature, popularised in the 2010s through architect-designed mews houses and converted warehouses across London.",
    idealFor: "Modern townhouses, converted period properties with contemporary interiors, and Mediterranean-influenced homes where the cool palette works with white render and glazed terracotta.",
  },
  "black-contemporary-dual-sidelights": {
    aesthetic: "A flush-faced black contemporary steel door flanked by two full-height obscure glass sidelights — together creating a wide, gallery-like entrance composition that washes the hallway with daylight. The bar handle is a single vertical span in matching black steel.",
    inspiration: "The dual sidelight composition is a modern architectural device borrowed from gallery and museum entrances, where the side panels frame the door as the focal point while flooding the threshold with natural light.",
    idealFor: "Modern new-builds, contemporary architect-designed extensions, and substantial detached homes where the entrance hall is wide enough to make a feature of the additional glazing.",
  },
  "champagne-arched-geometric-double": {
    aesthetic: "A pair of champagne-finished steel doors with a striking arched head and geometric inlay panels — the kind of feature entrance you find on bespoke architect-designed villas. The champagne finish is a warm metallic that catches both daylight and lamplight in different ways through the day.",
    inspiration: "Arched entrances trace back to Roman and Venetian architecture, and remain a signal of luxury in modern residential design. Our arched steel doors are made to measure — the curve is structural, not applied.",
    idealFor: "Architect-designed villas, contemporary mansions, and luxury developments where a standard rectangular door would underwhelm against a tall ceiling or grand portico.",
  },
  "walnut-ribbed-columns": {
    aesthetic: "A walnut-finished steel door with vertical ribbed detailing, framed by classical columns in the photograph. The ribbed pattern creates a tactile vertical rhythm that draws the eye upward, while the warm walnut tone reads as natural timber from a distance.",
    inspiration: "Ribbed door panels were popularised in the mid-20th century by Scandinavian and Italian designers, who appreciated how vertical lines elongated the door visually and added structural rigidity to slim profiles.",
    idealFor: "Mid-century modern homes, contemporary properties with timber-framed extensions, and clients who want the look of natural walnut without the warping, swelling and refinishing requirements of real hardwood.",
  },
  "black-ornate-double-gable": {
    aesthetic: "A pair of black ornate double steel doors set within a tall gabled entrance porch. The panel design includes traditional raised mouldings and an ornate central rosette, with substantial brass pull handles centred on each leaf.",
    inspiration: "Gabled entrance porches are a defining feature of English Arts & Crafts and neo-Tudor housing, originally designed to shelter visitors from the rain while announcing the home with a formal frame.",
    idealFor: "Arts & Crafts homes, mock-Tudor villas, gated executive estates, and substantial detached properties built between 1900 and 1939 where the original timber doors have reached the end of their life.",
  },
  "black-ornate-circular-fluted": {
    aesthetic: "A black ornate steel door featuring a circular fluted detail at the centre — a sunburst-like motif that creates an architectural focal point without overwhelming the rest of the panel design. Polished brass furniture frames the composition.",
    inspiration: "Circular fluted detailing draws on Art Deco and early modernist design, where geometric centrepieces became a way of bringing decorative interest to otherwise restrained panel doors.",
    idealFor: "Art Deco and 1930s properties, Hollywood Regency-influenced homes, and any property where the homeowner wants a single decorative flourish without going fully ornate.",
  },
  "black-panelled-ring-knocker-recessed": {
    aesthetic: "A black panelled steel door with a substantial ring knocker mounted on a recessed escutcheon plate. The ring knocker is forged in solid brass with an oxidised antique finish, and sits flush against the door face when not in use to preserve the clean panelled lines.",
    inspiration: "Ring knockers predate Georgian door furniture by centuries, originating in medieval church and monastery doors where they served as both knocker and pull handle. Our forged ring is both functional and a heritage statement.",
    idealFor: "Country houses, gatehouse cottages, ecclesiastical conversions, and any property with a slightly austere, monastic architectural language.",
  },
  "grey-panelled-stone-surround": {
    aesthetic: "A pale grey panelled steel door set within a deep stone surround. The grey reads as soft and architectural rather than cold, and the panel proportions are kept simple to let the surrounding stonework carry the visual interest.",
    inspiration: "Cool greys were largely absent from British front doors until the 2000s, when Farrow & Ball's heritage palette made architectural greys mainstream. They work especially well against natural stone where the tonal harmony is restrained.",
    idealFor: "Cotswold-stone properties, restored period cottages, gated estates with stone-clad gatehouses, and any home where the surround is architecturally significant in its own right.",
  },
  "olive-panelled-ring-knocker-sidelight": {
    aesthetic: "An olive-toned panelled steel door with a brass ring knocker and a single full-height sidelight panel. The olive finish is a nature-derived green that reads as quietly refined rather than bold — closer to British country-house chic than a statement colour.",
    inspiration: "Olive and sage greens have a long history in English country houses, traditionally used on garden room doors and orangery entrances to harmonise with the landscape beyond.",
    idealFor: "Country houses, listed cottages within gardens, properties on rural estates, and clients drawn to the muted heritage greens of National Trust paint palettes.",
  },
  "cream-panelled-chrome-sidelight": {
    aesthetic: "A warm cream panelled steel door with brushed chrome hardware and a slimline sidelight that brings additional light to a narrow entrance hall. The cream tone is a soft off-white — never stark — and pairs cleanly with both red brick and white render.",
    inspiration: "Cream front doors were the dominant colour for Edwardian and inter-war suburban housing, where they signalled bright respectability against red brick. Our cream finish revives that tradition with modern thermal performance.",
    idealFor: "Edwardian and 1930s suburban semis, refurbished period terraces, coastal homes, and any property where the goal is a bright, welcoming entrance rather than a dark statement.",
  },
  "black-contemporary-ribbed-topiary": {
    aesthetic: "A jet black contemporary steel door with vertical ribbed detailing across the full face — no panels, no glass, just a continuous rhythm of vertical lines. Photographed flanked by sculpted topiary that emphasises the door's architectural verticality.",
    inspiration: "Full-height ribbed doors are a signature of contemporary architect-designed homes, where the absence of panels and glazing creates a sculptural, almost minimalist threshold.",
    idealFor: "Architect-designed contemporary homes, luxury new-builds in private developments, modernist properties, and any home where the entrance is intended to read as a piece of architecture in its own right.",
  },
  "taupe-panelled-dual-sidelights": {
    aesthetic: "A warm taupe panelled steel door flanked by two full-height obscure glass sidelights. The taupe tone is a sophisticated mid-brown that bridges traditional and contemporary palettes — neither timber-imitating nor stark grey.",
    inspiration: "Taupe and mushroom tones have become a staple of high-end British residential design over the past decade, originating in interior paint palettes and migrating outward to entrance doors and exterior joinery.",
    idealFor: "Refurbished Edwardian and 1930s homes with neutral exterior palettes, coastal properties, and clients who want warmth without the maintenance of real timber finishes.",
  },
  "black-contemporary-sunburst": {
    aesthetic: "A black contemporary steel door with a striking sunburst pattern radiating from a central point — one of our most distinctive designs. The sunburst is achieved through routed grooves filled with a contrasting metallic finish that catches the light.",
    inspiration: "The sunburst motif is iconically Art Deco, popularised on cinema and ballroom entrances of the 1920s and 30s. Our contemporary interpretation strips it back to a single bold radial pattern.",
    idealFor: "Art Deco properties, Miami-modern revival homes, glamorous townhouses, and clients who want a genuinely show-stopping entrance feature that still reads as a single coherent design.",
  },
  "grey-panelled-lever-handle": {
    aesthetic: "A graphite grey panelled steel door fitted with a slimline brushed-chrome lever handle. The grey is a warm anthracite tone that works as a softer alternative to true black, and the lever handle replaces the traditional knob for a distinctly contemporary feel.",
    inspiration: "Lever handles on entrance doors are a Continental European convention that has crossed into the UK over the past 20 years, particularly on architect-designed and Scandinavian-influenced homes.",
    idealFor: "Modern new-builds, Scandinavian-influenced properties, accessible homes (lever handles are easier to operate than knobs), and clients drawn to a Northern European aesthetic.",
  },
  "cobalt-ornate-lion-knocker": {
    aesthetic: "A bold cobalt blue ornate steel door with a polished brass lion-head knocker as the centrepiece. The cobalt tone is a confident, deeply saturated blue — not navy, not pastel — that creates an unmistakable street presence.",
    inspiration: "Bold cobalt and royal blues were popular on Georgian doors before being displaced by more sober tones. Their revival in the past decade signals a return to confident heritage colours.",
    idealFor: "Georgian townhouses, Victorian terraces in conservation areas, properties on white-rendered streets where the colour pops against the surroundings, and homeowners who want a memorable, identifiable front door.",
  },
  "olive-traditional-arched-surround": {
    aesthetic: "An olive-green traditional steel door framed within an arched stone surround. The arch is structural — the door head curves to match — creating a continuous flowing line from threshold to keystone. Solid brass furniture finishes the composition.",
    inspiration: "Arched entrances are a defining feature of Tuscan, Provençal, and Mediterranean Revival architecture, often paired with muted olive and sage tones drawn from the surrounding landscape.",
    idealFor: "Mediterranean Revival villas, Provençal-style country homes, properties with original arched stone surrounds, and clients drawn to a Continental architectural language.",
  },
  "olive-traditional-brass-pendant": {
    aesthetic: "A traditional olive-green steel door illuminated from above by a brass pendant lantern. The olive and brass pairing reads as classically English country house — the kind of entrance composition you find on quiet rural lanes and gated drives.",
    inspiration: "Brass pendant lanterns above entrance doors are a hallmark of English manor houses and rectories, traditionally lit by gas and now by warm-toned LED bulbs to recreate the same atmosphere.",
    idealFor: "Country manor houses, restored rectories and vicarages, listed buildings in conservation areas, and substantial detached homes where the entrance is set back from the street.",
  },
  "black-contemporary-panelled-sidelights": {
    aesthetic: "A black contemporary steel door with subtle horizontal panelling and full-height obscure glass sidelights on both sides. The panels are flush rather than raised — a contemporary detail that keeps the overall composition clean and architectural.",
    inspiration: "Horizontal panelling is a modernist update of the traditional vertical six-panel door, popular on architect-designed homes from the 1960s onward. Combined with sidelights, it reads as decisively contemporary.",
    idealFor: "Architect-designed contemporary homes, modern new-builds, mid-century revival properties, and any home where the entrance is intended to read as quietly modern rather than ornately traditional.",
  },
  "black-ornate-medallion-sidelights": {
    aesthetic: "A black ornate steel door with a central medallion detail and full-height sidelights. The medallion is a circular brass casting at eye level — a single decorative flourish on an otherwise restrained panelled face.",
    inspiration: "Central medallions on entrance doors trace back to Italian Renaissance villas, where they often featured family crests or classical motifs. Our medallions are blank by default, ready for bespoke crests on commission.",
    idealFor: "Italianate Victorian villas, Edwardian gentleman's residences, listed buildings undergoing sympathetic restoration, and clients commissioning a family crest as a bespoke detail.",
  },
  "black-traditional-wide-frosted": {
    aesthetic: "A wide-format black traditional steel door with a frosted glass panel across the upper half. The wider-than-standard proportions are designed for grand Victorian and Edwardian entrances where standard door widths look undersized.",
    inspiration: "Wide entrance doors with frosted glass tops were a feature of Victorian and Edwardian terraces designed for the prosperous middle class — the frosted glass let light into the hallway while preserving privacy from the street.",
    idealFor: "Victorian and Edwardian terraces with wider-than-standard door openings, restored townhouses, and properties where the original timber door was wider than the modern off-the-shelf standard.",
  },
  "sage-traditional-arched-brick": {
    aesthetic: "A sage-green traditional steel door set into an arched red-brick surround. The sage tone is a muted heritage green that harmonises with both the brick and any surrounding planting — a quietly elegant choice for older properties.",
    inspiration: "Sage green originated as a National Trust heritage colour, used on listed building joinery to evoke the muted greens of 18th and 19th century paint formulations. It pairs particularly well with weathered red brick.",
    idealFor: "Restored Victorian terraces, country cottages with brick surrounds, listed buildings in conservation areas, and clients drawn to the muted heritage green family.",
  },
  "black-traditional-stained-glass": {
    aesthetic: "A black traditional steel door with a stained glass panel set into the upper half — the panel can be made to order with any decorative pattern, including replicas of original Victorian and Edwardian designs.",
    inspiration: "Stained and leaded glass panels were a defining feature of Victorian and Edwardian entrance doors, often featuring botanical motifs, geometric patterns, or family monograms. We work with traditional stained glass makers to recreate or design new panels.",
    idealFor: "Listed Victorian and Edwardian properties, restored period homes where the original stained glass has been damaged or lost, and clients commissioning a bespoke panel as a personal feature.",
  },
  "black-ornate-checkerboard-canopy": {
    aesthetic: "A black ornate steel door with raised panel detailing, framed by a stone canopy and a black-and-white checkerboard tile threshold. The composition is unmistakably Edwardian — formal, symmetrical, and slightly theatrical.",
    inspiration: "Encaustic checkerboard tiles and stone door canopies were a defining feature of late Victorian and Edwardian middle-class housing, designed to project an air of formal respectability from the street.",
    idealFor: "Late Victorian and Edwardian terraces with original tile thresholds, properties undergoing period-correct restoration, and homes in conservation areas where the entrance composition is part of the listed character.",
  },
  "navy-panelled-lanterns-fanlight": {
    aesthetic: "A navy panelled steel door with brass coach lanterns flanking the frame and a Georgian-style fanlight above. The classic Georgian composition is reinterpreted in modern materials — same proportions, same furniture, vastly improved thermal and security performance.",
    inspiration: "Fanlights and flanking coach lanterns are the defining features of Georgian terraced housing across Bath, Bristol, Edinburgh and London. The original timber doors typically lasted 200 years; ours are designed to outlast the building itself.",
    idealFor: "Georgian townhouses, Bath and Bristol terraces, Edinburgh New Town properties, and any listed building requiring a sympathetic period-correct replacement.",
  },
  "sage-panelled-arched-wreath": {
    aesthetic: "A sage-green panelled steel door with an arched head, photographed dressed with a seasonal wreath. The arched profile is structural, not applied — the door head and frame curve together for a continuous architectural line.",
    inspiration: "Arched panel doors with wreaths recall the country-house entrances of the Cotswolds and Home Counties — particularly during winter, when the wreath becomes a focal element of the kerb appeal.",
    idealFor: "Country cottages, gated estate gatehouses, properties with arched stone or brick surrounds, and homeowners who decorate their entrance for the seasons.",
  },
  "black-ornate-lion-knocker-sidelights": {
    aesthetic: "A black ornate steel door with a polished brass lion-head knocker and full-height sidelights either side. The combination of ornate panelled face, period brass furniture, and modern sidelight glazing bridges traditional and contemporary in a single composition.",
    inspiration: "Sidelight panels were originally added to Victorian doors to bring light into deep, narrow hallways. Pairing them with traditional panel doors creates a hybrid that respects period character while improving daily livability.",
    idealFor: "Victorian and Edwardian terraces with deep hallways, period townhouses where the original door was solid and gloomy, and any restoration project that needs to balance heritage appearance with modern light levels.",
  },
  "black-panelled-sidelights-palms": {
    aesthetic: "A jet-black panelled steel door framed by full-height sidelights and architectural palms. The composition is modern and Mediterranean-influenced — clean lines, deep shadow, dramatic foliage. Hardware is brushed chrome for a contemporary edge.",
    inspiration: "The pairing of black entrance doors with architectural palm planting is a Beverly Hills and South Florida convention that has crossed to high-end British contemporary homes over the past decade.",
    idealFor: "Modern villas, contemporary homes with landscape-led front gardens, coastal properties on the south coast, and clients influenced by California or Mediterranean residential design.",
  },
  "black-traditional-lion-knocker-fanlight": {
    aesthetic: "A traditional black six-panel steel door with a substantial brass lion-head knocker and a Georgian-style fanlight above the frame. The fanlight is real glazing, not decorative — it functions as a daylight source for the hallway while preserving the period composition.",
    inspiration: "The combination of lion knocker, six-panel door and fanlight is the most recognisable Georgian entrance composition in British architecture, surviving largely unchanged for 250 years on the most historically important streets.",
    idealFor: "Georgian terraces in protected conservation areas, listed buildings, and any property where the entrance is part of a historically significant streetscape that demands period-correct restoration.",
  },
  "taupe-panelled-chrome-dual-sidelights": {
    aesthetic: "A warm taupe panelled steel door with brushed chrome hardware and full-height sidelights flanking the frame. The taupe tone reads as a sophisticated alternative to grey or beige — neither cold nor washed out.",
    inspiration: "Warm neutral palettes have dominated high-end residential design since the early 2010s, replacing the cool greys of the previous decade. Taupe sits at the intersection of warmth and architectural restraint.",
    idealFor: "Modernised Edwardian and 1930s homes, contemporary new-builds with warm exterior palettes, and clients who want sophistication without the starkness of black or the predictability of grey.",
  },
  "black-traditional-chrome-interior": {
    aesthetic: "A black traditional panelled steel door photographed from the interior side, showing the brushed chrome handle, hinges and concealed multi-point lock mechanism. The interior face is finished to the same standard as the exterior — there is no 'back' to a SteelR door.",
    inspiration: "Interior-grade finishing on entrance doors is a hallmark of luxury manufacturing — most production doors are finished only on the visible exterior face. Our interior is engineered as part of the home's interior design language.",
    idealFor: "Open-plan homes where the door is visible from main living areas, properties with feature hallways, and clients who specify the interior finish as carefully as the exterior.",
  },
  "red-traditional-lion-knocker": {
    aesthetic: "A vivid red traditional steel door with a polished brass lion-head knocker. The red is a deep British pillar-box tone — confident, instantly recognisable, and rich with associations to Georgian and Victorian street furniture.",
    inspiration: "Red front doors have a long history in British residential design, from Georgian merchants signalling prosperity through to the iconic red doors of Westminster and Whitehall. The colour symbolises welcome, wealth, and confidence.",
    idealFor: "Georgian and Victorian townhouses, properties on traditional terraced streets, country cottages, and clients who want a confident, memorable colour that anchors itself to British heritage rather than international trends.",
  },
  "black-traditional-ring-knocker-open": {
    aesthetic: "A black traditional steel door pictured in the open position, showing the substantial brass ring knocker and the depth of the door slab itself. The open view reveals the engineering — the multi-chamber steel core, the hinges, the rebate detailing.",
    inspiration: "Ring knockers have a longer history than the more familiar lion-head knocker, dating back to medieval ironwork. Our forged brass rings combine that heritage form with modern manufacturing precision.",
    idealFor: "Country houses, gatehouse cottages, ecclesiastical conversions (church and chapel barn conversions), and properties with a slightly austere, monastic, or arts-and-crafts architectural language.",
  },
  "black-contemporary-ribbed-open": {
    aesthetic: "A black contemporary ribbed steel door pictured in the open position. The ribbed exterior is structural rather than decorative — vertical channels add stiffness to the slim profile and create a tactile, architectural character.",
    inspiration: "Ribbed contemporary doors trace their lineage to mid-century modern architecture, where Italian and Scandinavian designers used vertical ribbing to bring rhythm and depth to slim, functional door profiles.",
    idealFor: "Mid-century modern homes, contemporary architect-designed properties, modernist conversions, and any home where the door is intended to read as a single sculptural object rather than a panelled traditional element.",
  },
  "black-traditional-columns-mansion": {
    aesthetic: "A grand black traditional steel door framed by classical columns supporting a stone portico. The columns are part of the property architecture, not the door — but the door is sized and proportioned to anchor the entire composition with the right gravitas.",
    inspiration: "Columned entrances are a defining feature of Georgian and neo-Georgian mansion architecture, originally drawn from classical Greek and Roman temple porticoes.",
    idealFor: "Georgian and neo-Georgian mansion houses, country estates, embassies and consulates, and any substantial detached property where the entrance is the architectural centrepiece of the facade.",
  },
  "black-ornate-medallion-driveway": {
    aesthetic: "A black ornate steel door with a central brass medallion, photographed from a sweeping gravel driveway. The medallion sits at eye level — a single decorative anchor on an otherwise formal panelled face.",
    inspiration: "The combination of formal panelled door, central medallion and gravel driveway is the canonical English country-house arrival sequence, designed to provide a quietly impressive moment as visitors approach on foot.",
    idealFor: "Country houses with gravel drives, gated executive estates, restored manor houses, and any property where the visitor experience begins with a long approach to the front door.",
  },
  "black-ornate-lion-knocker-gable": {
    aesthetic: "A black ornate steel door with a brass lion-head knocker, set into a tall gabled porch entrance. The gable creates a dramatic vertical frame that draws the eye upward, while the door anchors the composition at street level.",
    inspiration: "Gabled porches are a hallmark of late Victorian and Edwardian Arts & Crafts housing, designed to give weight and shelter to the front entrance while expressing the steep roof pitches of the period.",
    idealFor: "Arts & Crafts homes, mock-Tudor villas, neo-vernacular new-builds, and substantial Edwardian properties built between 1900 and 1925.",
  },
  "black-traditional-double-columns": {
    aesthetic: "A pair of black traditional double steel doors framed by classical columns. Double-leaf doors with column surrounds are reserved for the largest properties — the proportions only work where the facade has the height and presence to support them.",
    inspiration: "Double doors with columns are the most formal entrance composition in residential architecture, originating in 17th and 18th century country houses and embassies. They signal that this is no ordinary home.",
    idealFor: "Country mansions, neo-Georgian estate houses, embassies, members' clubs, and any property where the architectural language is unambiguously formal and grand.",
  },
  "black-traditional-glazed-double": {
    aesthetic: "A pair of black traditional double steel doors with glazed upper panels. The glass brings daylight into the entrance hall while the lower solid panels maintain security and privacy. The glazing can be clear, frosted, or stained to specification.",
    inspiration: "Glazed double doors emerged in late Victorian and Edwardian residential architecture as homeowners sought to bring light into deeper hallways without losing the formality of a double-leaf entrance.",
    idealFor: "Late Victorian and Edwardian villas, restored country houses, large detached homes with substantial entrance halls, and any property where the architecture demands double doors but the hallway is too dark for solid leaves.",
  },
  "black-traditional-lion-knocker-sidelights-garden": {
    aesthetic: "A black traditional steel door with a brass lion-head knocker, full-height sidelights, and a mature garden visible in the photograph. The composition combines formal period door furniture with the daylight-loving sidelights that make modern hallways feel bright.",
    inspiration: "Pairing traditional panel doors with sidelights is a uniquely British compromise — keeping the period character of the front while smuggling in the daylight-flooded hallways that modern homeowners expect.",
    idealFor: "Victorian and Edwardian villas with mature gardens, country cottages with deep hallways, period homes where the original solid timber door made the entrance hall gloomy, and any restoration project balancing heritage and livability.",
  },
  "charcoal-contemporary-horizontal-double": {
    aesthetic: "A pair of charcoal grey contemporary double steel doors with horizontal panel detailing. The horizontal lines visually widen the entrance and read as decisively modern — a contemporary alternative to the traditional vertical six-panel composition.",
    inspiration: "Horizontal panel doors are a signature of mid-century modern and contemporary architecture, where they reject the traditional vertical-panel convention in favour of a wider, more architectural visual rhythm.",
    idealFor: "Contemporary new-builds, mid-century modern homes, architect-designed mansions, and properties where the front facade is wider than tall and benefits from a horizontal entrance composition.",
  },
  "charcoal-traditional-oval-window-lantern": {
    aesthetic: "A charcoal traditional steel door with an oval window and a brass coach lantern mounted above. The oval is a less common door window shape — softer than rectangular, more architectural than circular — and it works particularly well on Edwardian and Arts & Crafts properties.",
    inspiration: "Oval and elliptical door windows were popularised by Edwardian architects who borrowed the form from classical Italian villas. The shape brings light into the hallway while remaining decorative rather than purely functional.",
    idealFor: "Edwardian semi-detached homes, Arts & Crafts properties, restored villas, and clients drawn to less common period window shapes.",
  },
  "cream-traditional-lion-knocker-topiary": {
    aesthetic: "A warm cream traditional steel door with a brass lion-head knocker, photographed flanked by sculpted topiary. The cream-and-brass combination reads as quintessentially English country house — bright, welcoming, and quietly formal.",
    inspiration: "Cream front doors with brass furniture are a country-house convention dating back to the Edwardian era, when bright entrance doors signalled prosperity and respectability against red brick or render.",
    idealFor: "Country cottages, restored Edwardian semis, vicarages and rectories, and any home where a black or navy door would feel too formal against soft brick or render.",
  },
  "espresso-contemporary-gold-inlay": {
    aesthetic: "An espresso-brown contemporary steel door with a slim gold inlay running vertically down the centre. The inlay is a single architectural detail — restrained, precise, and quietly luxurious. The espresso tone reads as a contemporary alternative to walnut or chestnut timber finishes.",
    inspiration: "Metallic inlays on entrance doors are a contemporary luxury convention, drawn from high-end Italian furniture design where brass, gold and copper accents are used sparingly to elevate restrained material palettes.",
    idealFor: "Contemporary mansions, luxury new-builds, Italian-inspired homes, and clients drawn to a quietly opulent design language that uses one decorative gesture rather than many.",
  },
  "grey-contemporary-horizontal-slots": {
    aesthetic: "A graphite grey contemporary steel door with horizontal slot detailing across the face. The slots are precision-cut and read as architectural rather than decorative — a single design gesture rather than applied ornament.",
    inspiration: "Slotted contemporary doors are a hallmark of architect-designed homes from the 2000s onward, where designers borrowed industrial detailing from museum and gallery architecture to create distinctly modern residential entrances.",
    idealFor: "Architect-designed contemporary homes, gallery-influenced residences, modernist conversions, and clients drawn to industrial-modern detailing.",
  },
  "navy-contemporary-square-knocker": {
    aesthetic: "A deep navy contemporary steel door with a chunky square knocker — a contemporary reinterpretation of the traditional brass knocker, scaled up and squared off for a distinctly modern feel. Hardware is brushed chrome or brass to specification.",
    inspiration: "Square knockers are a contemporary update of traditional brass door furniture, popularised by architect-designed homes where the goal is to acknowledge tradition while clearly signalling modernity.",
    idealFor: "Contemporary new-builds with traditional touches, architect-designed homes, modernised period properties, and clients who want hardware that feels both familiar and modern.",
  },
  "sage-contemporary-bar-handle-sidelight": {
    aesthetic: "A sage green contemporary steel door with a full-height brushed bar handle and a single full-height sidelight panel. The sage tone is a muted heritage green that works as a calm, confident colour against natural materials.",
    inspiration: "Full-height bar handles are a contemporary convention drawn from gallery and museum entrances, where the goal is to make the door feel substantial and architectural at first touch.",
    idealFor: "Contemporary architect-designed homes, modernised period properties with garden-led colour palettes, and clients drawn to the muted heritage green family rendered in distinctly modern hardware.",
  },
  "navy-traditional-brass-knocker-vine": {
    aesthetic: "A deep navy traditional steel door with polished brass furniture, photographed against a vine-covered porch. The navy reads as a confident alternative to black on traditional properties, and the vine adds the kind of natural softness that makes period homes feel lived-in.",
    inspiration: "Navy with brass is a quintessentially English country house pairing, traditionally found on coaching inns, gentleman's residences, and rural rectories where the navy harmonises with weathered brick and stone.",
    idealFor: "Country houses, restored rectories and vicarages, listed buildings in rural conservation areas, and properties where the entrance is partially shaded by climbing planting.",
  },
  "blue-panelled-brass-hardware-flat": {
    aesthetic: "A clean royal blue panelled steel door with polished brass hardware. The flat panel detailing is restrained — no raised mouldings, no ornate centrepieces — letting the bold blue carry the visual weight on its own.",
    inspiration: "Flat-panelled doors with bold colours are a Scandinavian and Continental European convention, where homeowners often pair vivid blues with brass or copper hardware against white or pastel render.",
    idealFor: "Modernised period properties, Continental-inspired homes, coastal cottages, and clients drawn to confident colour rendered in restrained, quietly elegant detailing.",
  },
  "black-panelled-chrome-sidelights-interior": {
    aesthetic: "A black panelled steel door with brushed chrome hardware and full-height sidelights, photographed from the interior side. The interior view shows how the daylight from the sidelights washes the entrance hall — a key reason this composition is so popular on modern homes.",
    inspiration: "Photographing entrance doors from the interior is a relatively recent convention in residential photography, reflecting how homeowners increasingly think about the inside-out experience of arriving home.",
    idealFor: "Open-plan modern homes, properties with feature entrance halls, and clients who specify the interior view of the front door as carefully as the exterior.",
  },
  "white-panelled-sidelights-hallway": {
    aesthetic: "A bright white panelled steel door flanked by full-height sidelights, photographed showing the hallway beyond. The white finish is a soft architectural off-white — never stark — that brightens narrow entrance halls and pairs cleanly with both red brick and pale render.",
    inspiration: "White entrance doors have been popular in Mediterranean and coastal residential architecture for centuries, recently crossing into mainstream British design as homeowners seek lighter, brighter front facades.",
    idealFor: "Coastal homes, white-rendered properties, brightened-up Edwardian and 1930s suburban semis, and any home where the goal is a bright, welcoming entrance that makes the hallway feel larger.",
  },
};

/**
 * Per-door flag: skip Next.js image optimization on the detail page.
 *
 * Vercel's image optimizer is rejecting fresh transformations (HTTP 402)
 * because the project's monthly transformation quota is exhausted. Older
 * doors continue to render because their (image, width, format) variants
 * were cached at the CDN edge before the quota was hit. The newest doors
 * never reached the cache and now stay broken until quota resets.
 *
 * Doors listed here serve their raw JPG directly via Next.js <Image
 * unoptimized={true}> on the door detail page. Slightly larger transfer
 * (~200-300 KB raw vs ~50 KB optimized) but the page actually renders.
 *
 * Audit method: HEAD/GET /_next/image?url=...&w=N&q=80 with a browser-style
 * Accept header. If w=640 returns 200 cache=HIT but w=1080 returns 402,
 * the door's larger srcset variants aren't cached and the door belongs in
 * this set. Re-audit and prune entries when Vercel quota resets.
 */
export const doorImageUnoptimized: Set<string> = new Set([
  // Six newest doors. Confirmed via per-width probe on 2026-04-27: only
  // w=640 cached at the edge; w=750/828/1080/1200/1920/2048/3840 all 402.
  // Browser srcset on desktop viewports requests w=750+ and finds nothing
  // serveable, so the detail page hero renders blank.
  "black-traditional-doctor-knocker-canopy",
  "black-traditional-doctor-knocker-railings",
  "navy-traditional-brass-fanlight",
  "black-panelled-double-fingerprint",
  "black-traditional-timber-canopy",
  "black-panelled-grille-sidelights",
]);

/**
 * Per-door override for the door detail page hero container's aspect ratio.
 *
 * The default detail-page hero renders at the source image's natural ratio
 * (w-full h-auto). For most doors this looks correct. The newest six are
 * shot at a 9:20 (~0.45) ratio with extensive context above and below the
 * door, which renders as a tower nearly twice as tall as the older doors.
 *
 * Doors listed here force a fixed aspect-ratio container on the hero,
 * with object-cover + the existing objectPosition cropping to the door
 * body. Match the visual rhythm of the older portrait doors (natural
 * ratio ~0.75-0.85, e.g. lion-knocker-open at 0.81) by using "4/5".
 *
 * objectPosition for the crop is read from doorImagePosition above.
 */
export const doorHeroAspect: Record<string, string> = {
  "black-traditional-doctor-knocker-canopy": "4/5",
  "black-traditional-doctor-knocker-railings": "4/5",
  "navy-traditional-brass-fanlight": "4/5",
  "black-panelled-double-fingerprint": "4/5",
  "black-traditional-timber-canopy": "4/5",
  "black-panelled-grille-sidelights": "4/5",
};

/**
 * Per-door objectPosition overrides for the 3:4 collection card image.
 *
 * The card container in src/app/collection/page.tsx (and sibling pages) is
 * a 3:4 portrait. Most door photos in src/images/gallery/ also carry a
 * roughly 3:4 natural ratio, so the default "center top" positioning fits
 * cleanly. A handful of newer photos are very tall (natural ratio ~0.45,
 * roughly 9:20) where the door sits in the middle or lower portion of the
 * frame with sky, canopy or upper-storey building above. With "center top"
 * those cards anchor the top of the photo and crop the door out of view.
 *
 * Each entry below names the slug, the natural aspect ratio, and the
 * value chosen so the door body lands inside the visible 3:4 crop.
 */
export const doorImagePosition: Record<string, string> = {
  // Tall portrait, canopy at top, door under the canopy, mid-low.
  "black-traditional-doctor-knocker-canopy": "center 75%",
  // Tall portrait, railings frame the door which sits mid-low in frame.
  "black-traditional-doctor-knocker-railings": "center 70%",
  // Tall portrait, double doors low in frame, sidelights and brick above.
  "black-panelled-double-fingerprint": "center 75%",
  // Tall portrait, timber canopy occupies upper half, door beneath.
  "black-traditional-timber-canopy": "center 80%",
  // Tall portrait, ceiling lantern at top, door visible mid-frame.
  "black-panelled-grille-sidelights": "center 60%",
};

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
  if (altLower.includes("doctor knocker")) features.push("Doctor Knocker");
  if (altLower.includes("brass")) features.push("Brass Hardware");
  if (altLower.includes("chrome")) features.push("Chrome Hardware");
  if (altLower.includes("gold inlay")) features.push("Gold Inlay");
  if (altLower.includes("sidelight")) features.push("Sidelights");
  if (altLower.includes("fanlight")) features.push("Fanlight");
  if (altLower.includes("frosted")) features.push("Frosted Glass");
  if (altLower.includes("stained glass")) features.push("Stained Glass");
  if (altLower.includes("glass") && !altLower.includes("frosted") && !altLower.includes("stained")) features.push("Glazed Panels");
  if (altLower.includes("ribbed")) features.push("Ribbed Panel");
  if (altLower.includes("panelled") || altLower.includes("5-panel") || altLower.includes("4-panel")) features.push("Panelled Design");
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
  if (altLower.includes("fingerprint") || altLower.includes("keypad")) features.push("Fingerprint Access");
  if (altLower.includes("grille")) features.push("Decorative Grille");
  if (altLower.includes("timber canopy")) features.push("Timber Canopy");
  if (altLower.includes("tiled canopy")) features.push("Tiled Canopy");
  if (altLower.includes("railings")) features.push("Iron Railings");

  if (features.length === 0) features.push(style + " Design");

  // Build a unique title by combining colour, style, primary feature, and a
  // distinguishing context word mined from the slug.  The slug is always unique
  // so we extract the "tail" — the part after colour-style — and look for a
  // recognisable context word that differentiates this door from others sharing
  // the same colour + style + primary feature.
  const titleColour = colour;
  const titleStyle = style === "Double Doors" ? "Double" : style;
  const keyFeature = features[0];

  // Slug tail: everything after the colour segment, with style words removed
  const slugTail = parts.slice(1).join("-")
    .replace(/\b(contemporary|traditional|ornate|panelled)\b/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");

  // Map of slug keywords → readable context phrases for title disambiguation
  const contextMap: Record<string, string> = {
    "open": "Open View",
    "gable": "Gable Porch",
    "garden": "Garden Setting",
    "driveway": "Driveway Setting",
    "mansion": "Mansion Portico",
    "interior": "Interior View",
    "hallway": "Hallway View",
    "topiary": "Topiary Setting",
    "palms": "Palm Setting",
    "vine": "Vine Porch",
    "porch": "Vine Porch",
    "canopy": "Canopy Entrance",
    "wreath": "Arched Wreath",
    "brick": "Brick Surround",
    "stone": "Stone Surround",
    "pendant": "Pendant Lantern",
    "lantern": "Coach Lanterns",
    "lanterns": "Coach Lanterns",
    "dual": "Dual Sidelights",
    "wide": "Wide Format",
    "columns": "Column Surround",
    "glazed": "Glazed Panels",
    "recessed": "Recessed Escutcheon",
    "flat": "Flat Panel",
    "slots": "Slot Detail",
    "checkerboard": "Checkerboard Step",
    "circular": "Circular Fluted",
    "letterbox": "Integrated Letterbox",
  };

  // Collect ALL matching context phrases from slug tail (ordered by specificity).
  // Skip phrases whose keyword already appears in the primary feature (e.g. don't
  // append "Canopy Entrance" when the key feature is already "Timber Canopy").
  const keyFeatureLower = keyFeature.toLowerCase();
  const contextPhrases: string[] = [];
  for (const [keyword, phrase] of Object.entries(contextMap)) {
    if (
      slugTail.includes(keyword) &&
      phrase !== keyFeature &&
      !keyFeatureLower.includes(keyword)
    ) {
      contextPhrases.push(phrase);
    }
  }

  // Also collect secondary features (features[1], features[2], ...) that differ from primary
  const secondaryFeatures = features.slice(1);

  // Build title: use context phrase first, secondary feature as fallback.
  // Store extras for deduplication pass below.
  let title: string;
  if (contextPhrases.length > 0) {
    title = `${titleColour} ${titleStyle} Steel Door with ${keyFeature} — ${contextPhrases[0]}`;
  } else if (secondaryFeatures.length > 0) {
    title = `${titleColour} ${titleStyle} Steel Door with ${keyFeature} & ${secondaryFeatures[0]}`;
  } else {
    title = `${titleColour} ${titleStyle} Steel Door with ${keyFeature}`;
  }

  // Generate SEO description
  const featureList = features.slice(0, 3).join(", ").toLowerCase();
  const description = `Bespoke ${colour.toLowerCase()} ${style.toLowerCase()} steel entrance door featuring ${featureList}. SR3 security rated, manufactured in the UK to ISO 9001 standards. Fully customisable colour, hardware and glazing options.`;

  // Attach hand-written rich content if present for this slug
  const pageContent = doorPageContent[slug];

  // Attach a card-image objectPosition override if the natural photo
  // composition needs the card to anchor somewhere other than the top.
  const objectPosition = doorImagePosition[slug];

  // Skip Next.js image optimization on the detail page when the door's
  // optimized derivatives are not cached at the Vercel edge.
  const unoptimized = doorImageUnoptimized.has(slug) || undefined;

  // Force a fixed aspect-ratio container on the detail page hero when the
  // source image is much taller than the natural display rhythm of older
  // doors. Crop with object-cover + objectPosition.
  const heroAspectRatio = doorHeroAspect[slug];

  return { slug, src, alt, style, colour, features, title, description, pageContent, objectPosition, unoptimized, heroAspectRatio };
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
  { src: "/images/gallery/steelr-black-traditional-doctor-knocker-canopy.jpg", alt: "Black traditional 5-panel steel door with doctor knocker under tiled canopy", style: "Traditional" },
  { src: "/images/gallery/steelr-black-traditional-doctor-knocker-railings.jpg", alt: "Black traditional 5-panel steel door with doctor knocker and wrought iron railings", style: "Traditional" },
  { src: "/images/gallery/steelr-navy-traditional-brass-fanlight.jpg", alt: "Navy traditional 4-panel steel door with brass hardware and number 102 fanlight", style: "Traditional" },
  { src: "/images/gallery/steelr-black-panelled-double-fingerprint.jpg", alt: "Black panelled double steel doors with brass knockers and fingerprint access", style: "Double Doors" },
  { src: "/images/gallery/steelr-black-traditional-timber-canopy.jpg", alt: "Black traditional steel door with timber canopy on brick terrace", style: "Traditional" },
  { src: "/images/gallery/steelr-black-panelled-grille-sidelights.jpg", alt: "Black contemporary panelled steel door with bar handle, decorative grille and sidelights", style: "Contemporary" },
].map((d) => parseDoor(d.src, d.alt, d.style as Door["style"]));

// Deduplication pass: if any doors still share a title after parseDoor,
// append a secondary feature or slug-based suffix to make them unique.
(function deduplicateTitles() {
  const seen = new Map<string, number>();
  for (const door of doors) {
    const count = (seen.get(door.title) ?? 0) + 1;
    seen.set(door.title, count);
    if (count > 1) {
      // Find a distinguishing secondary feature or slug fragment
      const extra = door.features.find(f => !door.title.includes(f));
      if (extra) {
        door.title = door.title.includes("—")
          ? `${door.title} & ${extra}`
          : `${door.title} — ${extra}`;
      } else {
        // Last resort: use a readable slug fragment
        const slugWords = door.slug.split("-").slice(-2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        door.title = `${door.title} — ${slugWords}`;
      }
    }
  }
})();

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
