/**
 * Google Analytics 4 site-wide tag.
 *
 * Renders nothing if NEXT_PUBLIC_GA_ID is not set, so the build is safe
 * to deploy before the GA4 property is created. Once the env var is set
 * (Vercel → Settings → Environment Variables), tracking activates on the
 * next deploy with no further code change.
 *
 * Uses raw <script> tags via dangerouslySetInnerHTML rather than
 * next/script. Reason: next/script's <Script id="..." strategy="afterInteractive">
 * inline-content pattern was observed not to execute on page load in
 * production builds — gtag.js loaded but window.gtag stayed undefined
 * and no page_view beacon fired. Plain script tags in <head> are the
 * canonical GA4 install and run reliably.
 *
 * Loads with `async` so it does not block page render. The /thank-you
 * page already fires gtag('event','generate_lead', ...) via
 * ThankYouTracking.tsx — that event lands in GA4 the moment this
 * component activates.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  const initScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${gaId}', {
      send_page_view: true,
      anonymize_ip: true,
    });
  `;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script dangerouslySetInnerHTML={{ __html: initScript }} />
    </>
  );
}
