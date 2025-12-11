import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
