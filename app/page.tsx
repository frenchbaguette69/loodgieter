import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Rioolhulp Gils',
  url: 'https://rioolhulp-gils.nl',
  telephone: '+31 85 130 4693',
  description:
    'Rioolhulp Gils biedt 24/7 ontstoppingsdienst, rioolonderhoud, camera inspectie, spoedservice, rioolreiniging en preventieve afvoerreiniging.',
  image: '/assets/rioolhulp.jpg',
  areaServed: {
    '@type': 'City',
    name: 'Gils',
  },
  serviceArea: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gils',
      addressCountry: 'NL',
    },
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  makesOffer: {
    '@type': 'OfferCatalog',
    name: 'Riooldiensten',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 ontstoppingsdienst' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rioolonderhoud & inspectie' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riool camera inspectie' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spoed ontstoppingsservice' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rioolreiniging en preventie' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toilet en wc ontstoppen' } },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Badkamer en keuken afvoer ontstoppen' },
      },
    ],
  },
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <Script
        id="rioolhulp-gils-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonial />
      <WhyChooseUs />
      <Stats />
      <Footer />
    </>
  );
}
