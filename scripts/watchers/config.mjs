// SteelR nightly-watcher configuration.
// Edit this file to add/remove watched URLs and tune thresholds.
// All times in the workflow are UTC; UK local = UTC+1 in BST, UTC in GMT.

// SteelR canonical is NON-www (Vitrums is www). Verified against
// next.config.mjs redirect rule + src/app/layout.tsx canonical.
export const SITE_ORIGIN = "https://steelr.co.uk";

export const WATCHED_PAGES = [
  { path: "/", type: "homepage", minWords: 400 },

  // Core navigation pages
  { path: "/collection", type: "page", minWords: 300 },
  { path: "/about", type: "page", minWords: 300 },
  { path: "/process", type: "page", minWords: 600 },
  { path: "/contact", type: "page", minWords: 400 },
  // 4-step form UI, not a content page — low floor catches "page broken/blank"
  // without flagging the inherently-short multi-step UI.
  { path: "/design-estimate", type: "page", minWords: 100 },
  { path: "/colours", type: "page", minWords: 300 },
  { path: "/security", type: "page", minWords: 400 },
  { path: "/security-specification", type: "page", minWords: 400 },
  { path: "/fire-rated-doors", type: "page", minWords: 400 },
  { path: "/thank-you", type: "page", minWords: 80 },

  // 10 Phase 1D topic pages (load-bearing for AI citation per CLAUDE.md)
  { path: "/bespoke-steel-front-doors-uk", type: "hub", minWords: 1200 },
  { path: "/sr3-residential-steel-door", type: "hub", minWords: 1200 },
  { path: "/pas-24-steel-entrance-door", type: "hub", minWords: 1200 },
  { path: "/secured-by-design-steel-front-door", type: "hub", minWords: 1200 },
  { path: "/thermally-broken-steel-front-door", type: "hub", minWords: 1200 },
  { path: "/fire-rated-fd30-front-door", type: "hub", minWords: 1200 },
  { path: "/steel-front-door-vs-composite", type: "hub", minWords: 1200 },
  { path: "/uk-steel-doors-vs-imported", type: "hub", minWords: 1200 },
  { path: "/luxury-steel-entrance-door-london", type: "hub", minWords: 1200 },
  { path: "/steel-front-door-cost-uk", type: "hub", minWords: 1200 },

  // 5 area hubs — Bucks-regression case shows these must be watched.
  // Hub-content quality rule mandates 250+ unique words.
  { path: "/areas/london", type: "hub", minWords: 250 },
  { path: "/areas/buckinghamshire", type: "hub", minWords: 250 },
  { path: "/areas/surrey", type: "hub", minWords: 250 },
  { path: "/areas/hertfordshire", type: "hub", minWords: 250 },
  { path: "/areas/kent", type: "hub", minWords: 250 },

  // 3 representative area leaves
  { path: "/areas/kensington", type: "page", minWords: 200 },
  { path: "/areas/cobham", type: "page", minWords: 200 },
  { path: "/areas/beaconsfield", type: "page", minWords: 200 },

  // Top blog posts (slugs verified live 2026-05-18)
  { path: "/blog/sr4-lps-1175-commercial-grade-residential", type: "blog", minWords: 1500 },
  { path: "/blog/secured-by-design-homes-guide-2026", type: "blog", minWords: 800 },
  { path: "/blog/bespoke-entrance-doors-uk-guide", type: "blog", minWords: 800 },
];

export const INTEGRITY_FILES = [
  { path: "/robots.txt",     mustContain: "Sitemap:",         minBytes: 200 },
  { path: "/llms.txt",       mustContain: "SteelR",           minBytes: 10000 },
  { path: "/llms-full.txt",  mustContain: "Blog Excerpts",    minBytes: 70000 },
  { path: "/sitemap.xml",    mustContain: "<urlset",          minBytes: 30000 },
];

// Two canaries: contact form + estimate form. Both run daily.
export const FORM_CANARIES = [
  {
    url: `${SITE_ORIGIN}/api/contact`,
    label: "contact form",
    payload: {
      name: "Canary Test - please ignore",
      phone: "0000000000",
      email: "canary@steelr.co.uk",
      postcode: "UB10 8AP",
      propertyType: "Not specified",
      doorStyle: "To be discussed",
      message: "[CANARY] Automated daily form-endpoint health check. Ignore.",
      source: "watcher-canary",
    },
  },
  {
    url: `${SITE_ORIGIN}/api/estimate`,
    label: "estimate form",
    payload: {
      name: "Canary Test - please ignore",
      phone: "0000000000",
      email: "canary@steelr.co.uk",
      postcode: "UB10 8AP",
      propertyType: "Replacement",
      doorStyle: "Contemporary",
      message: "[CANARY] Automated daily estimate-endpoint health check. Ignore.",
      source: "watcher-canary",
    },
  },
];

export const THRESHOLDS = {
  sitemapUrlDropPct: 5,
  llmsFileShrinkPct: 10,
  contentDriftWarnHashes: true,
};

export const ALERT_EMAIL = {
  to: "info@supplywindows.co.uk",
  from: "noreply@steelr.co.uk",
  subjectPrefix: "[SteelR Watchers]",
};
