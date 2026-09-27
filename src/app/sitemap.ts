import type { MetadataRoute } from "next";
import { doors } from "@/data/doors";
import { posts } from "@/data/blog";
import { locations } from "@/data/locations";
import pageMtimes from "@/data/page-mtimes.json";

/**
 * lastmod = the date a page's content last really changed: the newest git
 * commit date among the files that render it (src/data/page-mtimes.json,
 * written by scripts/seo/page-mtimes.mjs in prebuild). Until 2026-09-27 every
 * static, collection and area URL used new Date(), so each deploy claimed 275
 * of 321 pages had changed that day. A URL with no known date is published
 * without a lastmod rather than with a false one. Blog posts keep their
 * hand-set dates (date, or dateModified for a material update), the same
 * dates their BlogPosting schema carries.
 */
const MT = pageMtimes as { files: Record<string, string>; areaFile: Record<string, string> };

function newest(dates: (string | undefined)[]): Date | undefined {
  let best: number | undefined;
  for (const iso of dates) {
    const t = iso ? Date.parse(iso) : NaN;
    if (!Number.isNaN(t) && (best === undefined || t > best)) best = t;
  }
  return best === undefined ? undefined : new Date(best);
}

const fileDates = (...files: (string | undefined)[]) => files.map((f) => (f ? MT.files[f] : undefined));

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://steelr.co.uk";

  const doorPages: MetadataRoute.Sitemap = doors.map((door) => ({
    url: `${baseUrl}/collection/${door.slug}`,
    lastModified: newest(fileDates("src/app/collection/[slug]/page.tsx", "src/data/doors.ts")),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = [...locations]
    .sort((a, b) => a.tier - b.tier)
    .map((loc) => ({
      url: `${baseUrl}/areas/${loc.slug}`,
      lastModified: newest(fileDates("src/app/areas/[slug]/page.tsx", MT.areaFile[loc.slug])),
      changeFrequency: "monthly" as const,
      priority: loc.type === "hub" ? 0.8 : 0.6,
    }));

  // Static routes take the date of their own page file; the blog index also
  // changes whenever a post is published (it lists titles, not post bodies).
  const staticDate = (url: string) => {
    const path = url.slice(baseUrl.length);
    const own = MT.files[path === "" ? "src/app/page.tsx" : `src/app${path}/page.tsx`];
    if (path === "/blog") return newest([own, ...posts.map((p) => p.date)]);
    return newest([own]);
  };

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/collection`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lookbook`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/security-specification`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fire-rated-doors`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/colours`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/collection/sidelights`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap`,
      changeFrequency: "weekly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ai-answers`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Phase 1D: SEO content pages
    {
      url: `${baseUrl}/bespoke-steel-front-doors-uk`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/luxury-steel-front-doors-uk`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insurance-approved-steel-front-doors-uk`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/heritage-steel-front-doors-uk`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sr3-residential-steel-door`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sr3-vs-sr4-residential-steel-doors-uk`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/steel-front-door-vs-composite`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uk-steel-doors-vs-imported`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/luxury-steel-entrance-door-london`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/thermally-broken-steel-front-door`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/secured-by-design-steel-front-door`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/steel-front-door-cost-uk`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pas-24-steel-entrance-door`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fire-rated-fd30-front-door`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lps-1673-attack-resistant-steel-door`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sr4-residential-steel-door`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bs-en-1627-rc4-residential-steel-door`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/housing-associations`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/developers`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/architects`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/property-managers`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...doorPages,
    {
      url: `${baseUrl}/areas`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...locationPages,
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: newest([post.date, post.dateModified]),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return entries.map((entry) => ("lastModified" in entry ? entry : { ...entry, lastModified: staticDate(entry.url) }));
}
