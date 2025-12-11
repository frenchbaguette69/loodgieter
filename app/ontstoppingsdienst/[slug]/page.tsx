import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import plaatsenList from '@/app/data/plaatsen';

type Params = { slug: string };

const services = [
  '24/7 ontstoppingsdienst voor wc, riool en afvoer',
  'Camera inspectie zonder hak- of breekwerk',
  'Hogedruk rioolreiniging en frezen',
  'Preventief onderhoud voor VvE, horeca en bedrijven',
  'Spoedservice binnen 30-45 minuten onderweg',
];

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const placeEntries = plaatsenList.map((name) => ({ name, slug: slugify(name) }));

function getPlace(slug: string) {
  return placeEntries.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return placeEntries.map((place) => ({ slug: place.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const place = getPlace(params.slug);
  if (!place) return {};

  const path = `/ontstoppingsdienst/${params.slug}`;
  const title = `Ontstoppingsdienst in ${place.name} | Rioolhulp Gils`;
  const description =
    `24/7 rioolhulp in ${place.name}: ontstoppingsdienst, camera inspectie en hogedrukreiniging. Binnen 30-45 minuten onderweg, transparante prijzen en nette oplevering.`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `https://rioolhulp-gils.nl${path}`,
      siteName: 'Rioolhulp Gils',
      locale: 'nl_NL',
      type: 'website',
    },
  };
}

export default function PlaatsPage({ params }: { params: Params }) {
  const place = getPlace(params.slug);
  if (!place) return notFound();

  const path = `/ontstoppingsdienst/${params.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Rioolhulp Gils - ${place.name}`,
    url: `https://rioolhulp-gils.nl${path}`,
    telephone: '+31 85 130 4693',
    description:
      `Rioolservice in ${place.name}: 24/7 ontstoppingsdienst, camera inspectie, hogedrukreiniging en preventief onderhoud.`,
    areaServed: { '@type': 'City', name: place.name },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    ],
  };

  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <Script
          id={`schema-${params.slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">24/7</span>
                <span>Ontstoppingsdienst in {place.name}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Ontstoppingsdienst <br />
                en rioolinspectie in {place.name}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Binnen 30-45 minuten onderweg in {place.name} en omgeving. Camera inspectie, hogedrukreiniging en preventief onderhoud met duidelijke prijzen en nette oplevering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851304693"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-sky-500/30 transition-colors"
                >
                  Bel 24/7: +31 85 130 4693
                </a>
                <a
                  href="/contact"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Vraag een planning aan
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white/70">
                <div className="p-3 rounded border border-white/10 bg-white/5">Binnen 30-45 min onderweg</div>
                <div className="p-3 rounded border border-white/10 bg-white/5">Camera & hogedruk</div>
                <div className="p-3 rounded border border-white/10 bg-white/5">Geen verborgen kosten</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/werkbus.jpg"
                  alt={`Werkbus van Rioolhulp Gils in ${place.name}`}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Altijd bereikbaar in {place.name}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Spoed of onderhoud? We plannen direct en werken buiten openingstijden als het moet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Diensten in {place.name}</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">
                Alles voor een vrij doorlopende afvoer
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Van wc tot standleiding: we ontstoppen, reinigen en inspecteren. We laten alles schoon achter en delen preventietips.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item) => (
                <div key={item} className="bg-white border border-slate-200 rounded-sm p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Waarom in {place.name}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Lokale monteurs, snelle respons
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We kennen {place.name} en omliggende wijken. Daardoor zijn we snel ter plaatse en stemmen we planning en communicatie goed af.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-4">Binnen 30-45 min onderweg in {place.name}</div>
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-4">Camera inspectie voor en na reiniging</div>
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-4">Transparante prijs vooraf</div>
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-4">Netjes gewerkt, schoon achtergelaten</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
