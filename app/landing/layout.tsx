import type { Metadata } from 'next';
import Script from 'next/script';

// Meta Pixel — scoped to /landing only. This layout renders for that route
// alone, so the pixel never loads on the rest of the site.
// Pixel IDs are not secrets: they are visible in client-side code on every
// page that fires them, so this is deliberately a plain constant rather than
// an env var that could silently go missing in a deploy.
const META_PIXEL_ID = '1735091511124702';

export const metadata: Metadata = {
  title: 'FeeSlayers -- 2 Weeks Free Facebook Ad Management',
  description:
    "See if FeeSlayers is the right fit for your business. We'll run your Facebook ads for 2 weeks at no cost. If you don't see results, you walk away.",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      {children}
    </>
  );
}
