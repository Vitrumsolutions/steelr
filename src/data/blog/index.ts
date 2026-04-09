export type { BlogPost } from "./types";

import steelVsCompositeDoors from "./posts/steel-vs-composite-doors";
import whatIsSr3SecurityRating from "./posts/what-is-sr3-security-rating";
import choosingEntranceDoorColour from "./posts/choosing-entrance-door-colour";
import securedByDesignDoors from "./posts/secured-by-design-doors";
import steelEntranceDoorsCostUk from "./posts/steel-entrance-doors-cost-uk";
import steelEntranceDoorsArchitectsSpecifiers from "./posts/steel-entrance-doors-architects-specifiers";
import bestFrontDoorsPeriodProperties from "./posts/best-front-doors-period-properties";
import steelVsTimberEntranceDoors from "./posts/steel-vs-timber-entrance-doors";
import howToImproveHomeSecurityUk from "./posts/how-to-improve-home-security-uk";
import frontDoorDesignTrends2026 from "./posts/front-door-design-trends-2026";
import bestAreasLondonPeriodPropertyRenovations from "./posts/best-areas-london-period-property-renovations";
import steelDoorsCountryHomesGuide from "./posts/steel-doors-country-homes-guide";
import conservationAreaDoorRequirementsUk from "./posts/conservation-area-door-requirements-uk";
import steelEntranceDoorsPricingFactors from "./posts/steel-entrance-doors-pricing-factors";
import steelVsAluminiumFrontDoors from "./posts/steel-vs-aluminium-front-doors";
import bestFrontDoorHomeSecurity from "./posts/best-front-door-home-security";
import frontDoorIdeasDesignTrends from "./posts/front-door-ideas-design-trends";

import pas24DoorsExplainedUkHomeowners from "./posts/pas-24-doors-explained-uk-homeowners";
import type { BlogPost } from "./types";

// Sorted by date descending (newest first) so the latest posts appear first
// in the blog listing and "related posts" sections.
export const posts: BlogPost[] = [
  steelVsCompositeDoors,
  whatIsSr3SecurityRating,
  choosingEntranceDoorColour,
  securedByDesignDoors,
  steelEntranceDoorsCostUk,
  steelEntranceDoorsArchitectsSpecifiers,
  bestFrontDoorsPeriodProperties,
  steelVsTimberEntranceDoors,
  howToImproveHomeSecurityUk,
  frontDoorDesignTrends2026,
  bestAreasLondonPeriodPropertyRenovations,
  steelDoorsCountryHomesGuide,
  conservationAreaDoorRequirementsUk,
  steelEntranceDoorsPricingFactors,
  steelVsAluminiumFrontDoors,
  bestFrontDoorHomeSecurity,
  frontDoorIdeasDesignTrends,
  pas24DoorsExplainedUkHomeowners,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
