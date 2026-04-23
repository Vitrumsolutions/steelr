import Script from "next/script";

/**
 * Google Analytics 4 site-wide tag.
 *
 * Renders nothing if NEXT_PUBLIC_GA_ID is not set, so the build is safe
 * to deploy before the GA4 property is created. Once the env var is set
 * (Vercel → Settings → Environment Variables), tracking activates on the
 * next deploy with no further code change.
 *
 * The /thank-you page already fires `gtag('event','generate_lead', ...)`
 * via ThankYouTracking — that event will start landing in GA4 the moment
 * this component activates, with no further wiring needed.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            send_page_view: true,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
