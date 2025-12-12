import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import CertificatesStrip from '@/components/CertificatesStrip';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Toilet en wc ontstoppen',
    text: 'We verhelpen overstromende of borrelende wc’s, controleren beluchting en testen de doorstroming.',
  },
  {
    title: 'Douche, bad en vloerput',
    text: 'Haren en zeepresten verwijderen we met verenmachine en hogedruk. We checken sifons en afloop.',
  },
  {
    title: 'Keukenafvoer en gootsteen',
    text: 'Vet- en etensresten pakken we aan met hogedruk, frezen en sifonreiniging zodat alles weer doorloopt.',
  },
  {
    title: 'Wasbak en wasmachineafvoer',
    text: 'We reinigen sifons en leidingen en voorkomen lekkage of terugslag van water bij gebruik.',
  },
  {
    title: 'Stank- en borrelproblemen',
    text: 'We controleren beluchting en afschot. Indien nodig doen we camera inspectie of rookproef.',
  },
  {
    title: 'Preventief onderhoud',
    text: 'Plan een reinigingsbeurt om nieuwe verstoppingen te voorkomen. Optioneel met rapportage.',
  },
];

const uspList = [
  'Binnen 30-45 minuten onderweg, 24/7 bereikbaar',
  'Prijs vooraf, geen verrassingen of verborgen toeslagen',
  'Hogedruk, verenmachine en camera op de bus',
  'Nette werkwijze: folie, beschermhoezen en schoon achterlaten',
  'Lokale monteurs in Gils en omliggende gemeenten',
];

const pains = [
  { title: 'Wc stroomt over of trekt lucht', text: 'We stoppen de aanvoer, ontstoppen en controleren standleiding en beluchting.' },
  { title: 'Doucheput borrelt en stinkt', text: 'We reinigen sifons en leidingen en checken afschot om stank en borrelen te stoppen.' },
  { title: 'Keukenafvoer loopt niet weg', text: 'Vet en zeep lossen we op met hogedruk en frezen. We testen met warm water en afwasmiddel.' },
  { title: 'Stank uit wastafel of wasmachine', text: 'We reinigen, controleren beluchting en voeren rookproef of camera uit indien nodig.' },
];

const steps = [
  { title: 'Bel 24/7 met monteur', text: 'We stellen gerichte vragen en geven direct een prijsindicatie en ETA.' },
  { title: 'Onderweg binnen 30-45 min', text: 'Monteur vertrekt met hogedruk, verenmachine en camera. Spoed krijgt prioriteit.' },
  { title: 'Ontstoppen & controleren', text: 'We maken de afvoer vrij, checken beluchting/afschot en tonen de oorzaak.' },
  { title: 'Testen & preventietips', text: 'We testen de doorstroming, geven advies en plannen desgewenst onderhoud.' },
];

const faqs = [
  {
    q: 'Hoe snel kunnen jullie komen?',
    a: 'Meestal zijn we binnen 30-45 minuten onderweg. We bevestigen dit direct telefonisch.',
  },
  {
    q: 'Wat kost een ontstopping?',
    a: 'Je krijgt vooraf een prijsindicatie. We bespreken opties als camera inspectie of frezen voordat we starten.',
  },
  {
    q: 'Moet er gehakt of gebroken worden?',
    a: 'In de meeste gevallen niet. We werken via bestaande aansluitingen. Breken gebeurt alleen in overleg als het echt nodig is.',
  },
  {
    q: 'Kunnen jullie ook ’s avonds of in het weekend?',
    a: 'Ja, we zijn 24/7 bereikbaar. Ook buiten kantooruren helpen we zonder dat je lang hoeft te wachten.',
  },
  {
    q: 'Geven jullie ook preventief advies?',
    a: 'Zeker. Na het ontstoppen delen we tips en kunnen we een onderhoudsbeurt plannen om herhaling te voorkomen.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rioolhulp Gils - Toilet, badkamer & keuken ontstoppen',
  url: 'https://rioolhulp-gils.nl/toilet-badkamer-keuken-ontstoppen',
  telephone: '+31851091112',
  description:
    'Van wc tot douche en gootsteen: we maken afvoeren direct vrij met hogedruk, verenmachine en camera. 24/7 bereikbaar in Gils en omgeving.',
  image: '/assets/rioolhulp.jpg',
  areaServed: {
    '@type': 'Place',
    name: 'Gils',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  offers: {
    '@type': 'OfferCatalog',
    name: 'Toilet, badkamer & keuken ontstoppen',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title },
    })),
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: 'Toilet, badkamer & keuken ontstoppen | Rioolhulp Gils',
  description:
    'Van wc tot douche en gootsteen: we maken afvoeren direct vrij en zorgen dat alles weer doorloopt. 24/7 bereikbaar met hogedruk, verenmachine en camera.',
  alternates: {
    canonical: '/toilet-badkamer-keuken-ontstoppen',
  },
  openGraph: {
    title: 'Toilet, badkamer & keuken ontstoppen | Rioolhulp Gils',
    description:
      'Direct hulp bij verstopte wc, douche of gootsteen. Binnen 30-45 minuten onderweg, 24/7, met hogedruk en camera inspectie.',
    url: 'https://rioolhulp-gils.nl/toilet-badkamer-keuken-ontstoppen',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToiletBadkamerKeukenOntstoppenPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <Script
          id="toilet-badkamer-keuken-ontstoppen-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">24/7</span>
                <span>Toilet, badkamer & keuken</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Toilet, badkamer & keuken ontstoppen
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                Van wc tot douche en gootsteen: we maken afvoeren direct vrij en zorgen dat alles weer doorloopt. Binnen 30-45 minuten onderweg, ook ’s nachts en in het weekend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851091112"
                  className="bg-lime-300 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-400/40"
                >
                  BEL DIRECT 24/7: 085 109 1112
                </a>
                <a
                  href="#diensten"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Bekijk diensten
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Hogedruk & verenmachine</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Camera inspectie mogelijk</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Nette werkwijze</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/toiletontstoppen.jpg"
                  alt="Afvoer en toilet ontstoppen in badkamer"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Alles weer doorlopend</div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {uspList.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="diensten" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Wat we doen</p>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Directe hulp bij verstopte afvoeren</h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  We ontstoppen, reinigen en testen je toilet, douche, bad en keukenafvoer. Indien nodig gebruiken we camera of rookproef om de oorzaak te vinden en herhaling te voorkomen.
                </p>
              </div>
              <a
                href="tel:+31851091112"
                className="bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
              >
                BEL DIRECT: 085 109 1112
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white border border-slate-200 rounded-sm p-6 space-y-3 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v12m-6-6h12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Herken je dit?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Typische klachten</h2>
              <p className="text-sm text-slate-600">
                We lossen het op zonder rommel en geven advies hoe je herhaling voorkomt. Ook ’s avonds of in het weekend beschikbaar.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {pains.map((item) => (
                <div key={item.title} className="bg-white border border-slate-200 rounded-sm p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Werkwijze</p>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Zo pakken we jouw verstopping aan</h2>
              </div>
              <a href="#faq" className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                Bekijk FAQ
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="bg-white border border-slate-200 rounded-sm p-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">{index + 1}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-20 bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Veelgestelde vragen</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Alles over afvoer ontstoppen</h2>
              <p className="text-sm text-slate-600">
                Staat jouw vraag er niet bij? Bel direct; je spreekt meteen een monteur die kan meedenken over planning en kosten.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="bg-slate-50 border border-slate-200 rounded-sm p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Direct contact</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Binnen 30 minuten onderweg of ingepland op jouw moment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We werken netjes, beschermen je vloer en laten alles schoon achter. Bel nu voor directe hulp of plan een afspraak wanneer het jou past.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+31851091112"
                className="bg-lime-300 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-400/40"
              >
                BEL DIRECT 24/7: 085 109 1112
              </a>
              <a
                href="/ontstoppingsdienst"
                className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900 hover:bg-slate-800 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Meer diensten
              </a>
            </div>
          </div>
        </section>
      </main>
      <CertificatesStrip />
      <Footer />
    </>
  );
}
