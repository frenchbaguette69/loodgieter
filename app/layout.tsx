import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rioolhulp Gils | 24/7 Ontstoppingsdienst, Rioolonderhoud & Camera Inspectie',
  description:
    'Rioolhulp Gils biedt 24/7 ontstoppingsdienst, rioolonderhoud, riool camera inspectie, spoed ontstoppingsservice, rioolreiniging en preventieve service in Gils en omgeving.',
  keywords: [
    'rioolhulp Gils',
    'ontstoppingsdienst 24/7',
    'rioolonderhoud',
    'riool camera inspectie',
    'rioolreiniging',
    'toilet ontstoppen',
    'wc ontstoppen',
    'badkamer afvoer ontstoppen',
    'keuken afvoer ontstoppen',
    'spoed rioolservice',
  ],
  metadataBase: new URL('https://rioolhulp-gils.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rioolhulp Gils | 24/7 Ontstoppingsdienst & Rioolservice',
    description:
      '24/7 spoed rioolservice voor verstoppingen, onderhoud, camera inspectie en preventie. Rioolhulp Gils staat direct voor je klaar.',
    url: 'https://rioolhulp-gils.nl',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/assets/RIOOLHULP-GILS-og.png',
        width: 1200,
        height: 630,
        alt: 'Rioolhulp Gils',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/RIOOLHULP-GILS-og.png',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16701586220"
        />
        <Script id="gtag-aw-16701586220" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16701586220');
          `}
        </Script>
        <Script id="gtag-report-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16701586220/dNA-COCVytAbEKz295s-',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Script id="gtag-call-whatsapp-conversion" strategy="afterInteractive">
          {`
            (function() {
              if (window.__gtagCallHandlerBound) return;
              window.__gtagCallHandlerBound = true;

              const sendCallConversion = (url) => {
                const redirect = () => {
                  if (url) window.location.href = url;
                };

                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'conversion', {
                    send_to: 'AW-16701586220/Db_sCOmvu9AbEKz295s-',
                    value: 1.0,
                    currency: 'EUR',
                    event_callback: redirect,
                  });
                  setTimeout(redirect, 1000);
                } else {
                  redirect();
                }
              };

              const handleClick = (event) => {
                const anchor = event.target.closest('a[href]');
                if (!anchor) return;

                const href = anchor.getAttribute('href') || '';
                const isCall = href.startsWith('tel:+31851091112');
                const isWhatsApp = href.includes('wa.me/31851091112');
                if (!isCall && !isWhatsApp) return;

                event.preventDefault();
                sendCallConversion(href);
              };

              document.addEventListener('click', handleClick);
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
