/**
 * Single source of truth for SteelR Google reviews.
 *
 * Used by:
 * - layout.tsx — aggregateRating in LocalBusiness JSON-LD (only emitted when
 *   reviews.length > 0, to avoid GSC schema errors on empty rating)
 * - /thank-you page — review CTA visibility (TODO if needed in future)
 * - any future /reviews page
 *
 * To add a new review after it lands on GBP:
 *   node scripts/reviews/append-review.mjs "review text" "Customer Name"
 *   node scripts/reviews/append-review.mjs "review text" "Customer Name" --highlight
 *
 * The --highlight flag pins to a future homepage strip; keep exactly 3 highlighted.
 *
 * Currently EMPTY because GBP has 0 reviews as of 25 April 2026. Once the first
 * review lands, append it here (or via the script) and aggregateRating schema
 * will start emitting on the next deploy.
 */

export type Review = {
  text: string;
  name: string;
  /** ISO date YYYY-MM-DD when the Google review landed. */
  date?: string;
  /** True = pin to homepage 3-card strip (when that strip is built). */
  highlight?: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [];

export const highlightedReviews: Review[] = reviews.filter((r) => r.highlight);

export const totalReviews = reviews.length;

export const averageRating =
  reviews.length > 0
    ? Math.round(
        (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10
      ) / 10
    : null;

/**
 * Returns aggregateRating schema fragment for LocalBusiness JSON-LD.
 * Returns null when there are no reviews (so the schema block is omitted
 * rather than emitted with bad data — Google flags missing fields as errors).
 */
export function getAggregateRatingSchema() {
  if (reviews.length === 0 || averageRating === null) return null;
  return {
    "@type": "AggregateRating",
    ratingValue: averageRating,
    reviewCount: totalReviews,
    bestRating: 5,
    worstRating: 1,
  };
}
