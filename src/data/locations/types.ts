export interface Location {
  slug: string;
  name: string;
  region: string;
  type: "hub" | "area";
  parentSlug?: string;
  tier: 1 | 2 | 3;
  description: string;
  localFeatures?: string[];
  heroImage: string;
  galleryImages: string[];
  nearbyAreaSlugs: string[];
  faqs?: { question: string; answer: string }[];
}
