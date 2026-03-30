export type { Location } from "./types";

import { londonLocations } from "./london";
import { buckinghamshireLocations } from "./buckinghamshire";
import { surreyLocations } from "./surrey";
import { hertfordshireLocations } from "./hertfordshire";
import { kentLocations } from "./kent";
import { essexLocations } from "./essex";
import { berkshireLocations } from "./berkshire";
import { oxfordshireLocations } from "./oxfordshire";
import { cheshireLocations } from "./cheshire";
import { manchesterLocations } from "./manchester";
import { birminghamLocations } from "./birmingham";
import { yorkshireLocations } from "./yorkshire";
import { southWestLocations } from "./south-west";
import { hampshireLocations } from "./hampshire";
import { sussexLocations } from "./sussex";
import { scotlandLocations } from "./scotland";
import { otherCitiesLocations } from "./other-cities";

import type { Location } from "./types";

export const locations: Location[] = [
  ...londonLocations,
  ...buckinghamshireLocations,
  ...surreyLocations,
  ...hertfordshireLocations,
  ...kentLocations,
  ...essexLocations,
  ...berkshireLocations,
  ...oxfordshireLocations,
  ...cheshireLocations,
  ...manchesterLocations,
  ...birminghamLocations,
  ...yorkshireLocations,
  ...southWestLocations,
  ...hampshireLocations,
  ...sussexLocations,
  ...scotlandLocations,
  ...otherCitiesLocations,
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getChildLocations(parentSlug: string): Location[] {
  return locations.filter((l) => l.parentSlug === parentSlug);
}

export function getHubLocations(): Location[] {
  return locations.filter((l) => l.type === "hub");
}

export function getNearbyLocations(slug: string): Location[] {
  const loc = getLocationBySlug(slug);
  if (!loc) return [];

  if (loc.nearbyAreaSlugs.length > 0) {
    return loc.nearbyAreaSlugs
      .map(getLocationBySlug)
      .filter(Boolean) as Location[];
  }

  if (loc.parentSlug) {
    return locations
      .filter((l) => l.parentSlug === loc.parentSlug && l.slug !== slug)
      .slice(0, 5);
  }

  return [];
}

/** Get unique region names in display order */
export function getRegions(): string[] {
  const seen = new Set<string>();
  const regions: string[] = [];
  for (const loc of locations) {
    if (loc.type === "hub" && !seen.has(loc.region)) {
      seen.add(loc.region);
      regions.push(loc.region);
    }
  }
  return regions;
}

/** Get all locations grouped by their parent hub slug */
export function getLocationsByHub(): Map<string, Location[]> {
  const map = new Map<string, Location[]>();
  for (const loc of locations) {
    if (loc.type === "area" && loc.parentSlug) {
      const arr = map.get(loc.parentSlug) || [];
      arr.push(loc);
      map.set(loc.parentSlug, arr);
    }
  }
  return map;
}
