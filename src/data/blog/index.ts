export type { BlogPost } from "./types";

// Cannibalisation cleanup 22 Apr 2026 — these imports removed:
//   steelVsCompositeDoors (thin, redirects to composite-vs-steel-doors-2026-updated-comparison)
//   steelEntranceDoorsCostUk (redirects to how-much-do-steel-doors-cost-uk)
//   frontDoorDesignTrends2026 (thin, redirects to modern-front-door-ideas-inspiration-2026)
//   steelEntranceDoorsPricingFactors (redirects to how-much-do-steel-doors-cost-uk)
//   frontDoorIdeasDesignTrends (thin, redirects to modern-front-door-ideas-inspiration-2026)
import whatIsSr3SecurityRating from "./posts/what-is-sr3-security-rating";
import choosingEntranceDoorColour from "./posts/choosing-entrance-door-colour";
// Removed 22 Apr 2026 — cannibalised with thicker siblings, 308-redirected in next.config.mjs:
//   securedByDesignDoors → secured-by-design-homes-guide-2026
//   steelEntranceDoorsArchitectsSpecifiers → specifying-steel-doors-architects-guide-2026
import bestFrontDoorsPeriodProperties from "./posts/best-front-doors-period-properties";
import steelVsTimberEntranceDoors from "./posts/steel-vs-timber-entrance-doors";
import howToImproveHomeSecurityUk from "./posts/how-to-improve-home-security-uk";
import bestAreasLondonPeriodPropertyRenovations from "./posts/best-areas-london-period-property-renovations";
import steelDoorsCountryHomesGuide from "./posts/steel-doors-country-homes-guide";
import conservationAreaDoorRequirementsUk from "./posts/conservation-area-door-requirements-uk";
import steelVsAluminiumFrontDoors from "./posts/steel-vs-aluminium-front-doors";
import bestFrontDoorHomeSecurity from "./posts/best-front-door-home-security";
import pas24DoorsExplainedUkHomeowners from "./posts/pas-24-doors-explained-uk-homeowners";
import bespokeEntranceDoorsUkGuide from "./posts/bespoke-entrance-doors-uk-guide";
import steelDoorsConservationAreasPlanningGuide from "./posts/steel-doors-conservation-areas-planning-guide";

// New posts (2 written + 23 from staged)
import howMuchDoSteelDoorsCostUk from "./posts/how-much-do-steel-doors-cost-uk";
import areSteelDoorsWorthItUk from "./posts/are-steel-doors-worth-it-uk";
import frontDoorSecurityRatingsComparedSr1ToSr3 from "./posts/front-door-security-ratings-compared-sr1-to-sr3";
import steelEntranceDoorThermalPerformanceUValues from "./posts/steel-entrance-door-thermal-performance-u-values";
import ralColoursFrontDoorsCompleteGuide from "./posts/ral-colours-front-doors-complete-guide";
import fireRatedFrontDoorsUkRegulationsGuide from "./posts/fire-rated-front-doors-uk-regulations-guide";
import bestFrontDoorsNewBuildsUk from "./posts/best-front-doors-new-builds-uk";
import steelVsFibreglassDoorsUkComparison from "./posts/steel-vs-fibreglass-doors-uk-comparison";
import frontDoorHardwareFinishesBrassChromeBlack from "./posts/front-door-hardware-finishes-brass-chrome-black";
import homeInsuranceDoorSecurityRatingsUk from "./posts/home-insurance-door-security-ratings-uk";
import specifyingSteelDoorsArchitectsGuide2026 from "./posts/specifying-steel-doors-architects-guide-2026";
import frontDoorsLondonTownhousesGuide from "./posts/front-doors-london-townhouses-guide";
import steelVsUpvcFrontDoorsComparison from "./posts/steel-vs-upvc-front-doors-comparison";
import steelEntranceDoorsSurreyProperties from "./posts/steel-entrance-doors-surrey-properties";
import doubleFrontDoorsProsConsGuide from "./posts/double-front-doors-pros-cons-guide";
import smartLocksSteelEntranceDoorsGuide from "./posts/smart-locks-steel-entrance-doors-guide";
import bestBurglarProofFrontDoorsUk from "./posts/best-burglar-proof-front-doors-uk";
import frontDoorReplacementGuideUkHomeowners from "./posts/front-door-replacement-guide-uk-homeowners";
import steelEntranceDoorsBuckinghamshireHomes from "./posts/steel-entrance-doors-buckinghamshire-homes";
import modernFrontDoorIdeasInspiration2026 from "./posts/modern-front-door-ideas-inspiration-2026";
import steelEntranceDoorsKentProperties from "./posts/steel-entrance-doors-kent-properties";
import compositeVsSteelDoors2026UpdatedComparison from "./posts/composite-vs-steel-doors-2026-updated-comparison";
import periodPropertyFrontDoorUltimateGuide from "./posts/period-property-front-door-ultimate-guide";
import springHomeImprovementFrontDoorUpgrade from "./posts/spring-home-improvement-front-door-upgrade";
import securedByDesignHomesGuide2026 from "./posts/secured-by-design-homes-guide-2026";
import sr4Lps1175CommercialGradeResidential from "./posts/sr4-lps-1175-commercial-grade-residential";
import luxuryFrontDoorsUkBuyerGuide from "./posts/luxury-front-doors-uk-buyer-guide";

import type { BlogPost } from "./types";
import steelFrontDoorsWithSidelightsUkBuyersGuide from "./posts/steel-front-doors-with-sidelights-uk-buyers-guide";

// Sorted by date descending (newest first) so the latest posts appear first
// in the blog listing and "related posts" sections.
export const posts: BlogPost[] = [
  luxuryFrontDoorsUkBuyerGuide,
  whatIsSr3SecurityRating,
  choosingEntranceDoorColour,
  bestFrontDoorsPeriodProperties,
  steelVsTimberEntranceDoors,
  howToImproveHomeSecurityUk,
  bestAreasLondonPeriodPropertyRenovations,
  steelDoorsCountryHomesGuide,
  conservationAreaDoorRequirementsUk,
  steelVsAluminiumFrontDoors,
  bestFrontDoorHomeSecurity,
  pas24DoorsExplainedUkHomeowners,
  bespokeEntranceDoorsUkGuide,
  steelDoorsConservationAreasPlanningGuide,
  howMuchDoSteelDoorsCostUk,
  areSteelDoorsWorthItUk,
  frontDoorSecurityRatingsComparedSr1ToSr3,
  steelEntranceDoorThermalPerformanceUValues,
  ralColoursFrontDoorsCompleteGuide,
  fireRatedFrontDoorsUkRegulationsGuide,
  bestFrontDoorsNewBuildsUk,
  steelVsFibreglassDoorsUkComparison,
  frontDoorHardwareFinishesBrassChromeBlack,
  homeInsuranceDoorSecurityRatingsUk,
  specifyingSteelDoorsArchitectsGuide2026,
  frontDoorsLondonTownhousesGuide,
  steelVsUpvcFrontDoorsComparison,
  steelEntranceDoorsSurreyProperties,
  doubleFrontDoorsProsConsGuide,
  smartLocksSteelEntranceDoorsGuide,
  bestBurglarProofFrontDoorsUk,
  frontDoorReplacementGuideUkHomeowners,
  steelEntranceDoorsBuckinghamshireHomes,
  modernFrontDoorIdeasInspiration2026,
  steelEntranceDoorsKentProperties,
  compositeVsSteelDoors2026UpdatedComparison,
  periodPropertyFrontDoorUltimateGuide,
  springHomeImprovementFrontDoorUpgrade,
  securedByDesignHomesGuide2026,
  sr4Lps1175CommercialGradeResidential,
  steelFrontDoorsWithSidelightsUkBuyersGuide,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
