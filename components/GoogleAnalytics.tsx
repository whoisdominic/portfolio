import Script from "next/script";

const GoogleAnalytics: React.FC<{ measurementId: string }> = ({
  measurementId,
}) => (
  <>
    {/* Load gtag.js */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
    />
    {/* Initialize Google Analytics */}
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
