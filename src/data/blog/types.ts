export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  /**
   * Optional ISO date string of the most recent material update to this post's
   * content. When omitted, falls back to `date` for schema dateModified.
   * Set this when re-publishing a post with updated facts/figures/references
   * to send a freshness signal to Google + AI engines.
   */
  dateModified?: string;
  /**
   * Optional author name. Defaults to "SteelR Technical Team" when omitted.
   * Set to a named individual ("Mani Sandhu") on YMYL posts (security, fire,
   * insurance, regulatory) for stronger E-E-A-T signal.
   */
  author?: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  content: string;
}
