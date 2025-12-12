import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CertificatesStrip from '@/components/CertificatesStrip';

const services = [
  {
    title: 'Toilet en wc ontstoppen',
    text: 'Overstromende wc of borrelende afvoer? We ontstoppen direct en testen de doorstroming.',
  },
  {
    title: 'Rioolreiniging & frezen',
    text: 'Hogedrukreiniging en frezen voor hardnekkige riool- en standleidingverstoppingen.',
  },
  {
    title: 'Camera inspectie bij spoed',
    text: 'HD-camera en lokalisatie om de oorzaak te vinden zonder onnodig hak- of breekwerk.',
  },
  {
    title: 'Keuken- en badkamerafvoer',
    text: 'Verstopte gootsteen, douche of bad? We reinigen sifons, sifonpot en leidingen.',
  },
  {
    title: 'Pomp en kelder noodhulp',
    text: 'Wateroverlast? We zetten noodpompen en verhelpen verstoppingen in kruipruimte of kelder.',
  },
  {
    title: 'Preventie na spoed',
    text: 'Na het ontstoppen geven we advies en plannen onderhoud of reiniging om herhaling te voorkomen.',
  },
];

const uspList = [
  'Binnen 30-45 minuten onderweg, 24/7 bereikbaar',
  'Transparante prijs vooraf, geen verrassingen',
  'Gekeurde hogedruk, verenmachine en camera op de bus',
  'Herstel en reiniging in één bezoek waar mogelijk',
  'Lokale monteurs in Gils en omliggende gemeenten',
];

const pains = [
  { title: 'Plaswater stijgt of wc loopt over', text: 'We stoppen de aanvoer, ontstoppen en controleren beluchting en standleiding.' },
  { title: 'Stank en borrelende afvoer', text: 'Camera en rookproef om lekkages of verzakkingen te vinden en gericht te herstellen.' },
  { title: 'Wateroverlast in kelder of kruipruimte', text: 'Noodpomp en hogedrukreiniging om schade te beperken en afvoer vrij te maken.' },
  { title: 'Weekend of nachtelijke storing', text: '24/7 bereikbaar met eigen monteurs en spoedslot. Direct telefonisch prijsvoorstel.' },
];

const steps = [
  { title: 'Bel 24/7 rechtstreeks met monteur', text: 'We stellen gerichte vragen en geven direct een prijsindicatie.' },
  { title: 'Binnen 30-45 minuten onderweg', text: 'Monteur vertrekt met camera, hogedruk en verenmachine. Spoed krijgt prioriteit.' },
  { title: 'Diagnose & akkoord', text: 'We delen de oorzaak, aanpak en prijs voordat we starten. Geen verborgen kosten.' },
  { title: 'Oplossen & preventietips', text: 'Ontstoppen, reinigen, testen en advies om herhaling te voorkomen. Rapportage op verzoek.' },
];

const faqs = [
  {
    q: 'Hoe snel zijn jullie ter plaatse?',
    a: 'In de meeste gevallen binnen 30 tot 45 minuten onderweg vanuit de regio. We bevestigen dit direct telefonisch.',
  },
  {
    q: 'Werken jullie echt 24/7, ook in het weekend?',
    a: "Ja, dag en nacht. Ook op feestdagen is de spoedlijn bemand en rijdt er een monteur met volledige uitrusting.",
  },
  {
    q: 'Krijg ik vooraf een prijs?',
    a: 'We geven telefonisch een duidelijke indicatie en bespreken eventuele opties zoals camera-inspectie of frezen.',
  },
  {
    q: 'Moet er gehakt worden?',
    a: 'Meestal niet. Met camera en lokalisatie lossen we 9 van de 10 verstoppingen zonder breekwerk op. Breken gebeurt alleen in overleg.',
  },
  {
    q: 'Doen jullie ook preventief onderhoud?',
    a: 'Ja. Na de spoedklus plannen we onderhoud of reiniging in zodat verstoppingen geen kans krijgen.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rioolhulp Gils - Spoed ontstoppingsservice',
  url: 'https://rioolhulp-gils.nl/spoed-ontstoppingsservice',
  telephone: '+31851091112',
  description:
    "Spoed ontstoppingsservice voor wc, riool en afvoer. Binnen 30-45 minuten onderweg, 24/7 bereikbaar. Hogedruk, camera inspectie en noodpompen in Gils en omgeving.",
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
    name: 'Spoed ontstoppingsservice',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title },
    })),
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: 'Spoed ontstoppingsservice | Rioolhulp Gils',
  description:
    "Binnen no-time op locatie bij acuut riool- of afvoerleed, ook 's nachts en in het weekend. Hogedruk, camera inspectie en noodpompen, 24/7 beschikbaar.",
  alternates: {
    canonical: '/spoed-ontstoppingsservice',
  },
  openGraph: {
    title: 'Spoed ontstoppingsservice | Rioolhulp Gils',
    description:
      "Acuut rioolprobleem? Binnen 30-45 minuten onderweg, 24/7. Hogedruk, camera inspectie en noodpompen voor wc, riool en afvoer.",
    url: 'https://rioolhulp-gils.nl/spoed-ontstoppingsservice',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpoedOntstoppingsservicePage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <Script
          id="spoed-ontstoppingsservice-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">24/7</span>
                <span>Spoed ontstoppingsservice</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Spoed ontstoppingsservice
                <br />
                Binnen no-time op locatie
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                Acuut riool- of afvoerleed? We zijn binnen 30-45 minuten onderweg, ook 's nachts en in het weekend. Direct bereikbaar met eigen monteurs, hogedrukreiniging en camera inspectie aan boord.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851091112"
                  className="bg-lime-300 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-400/40"
                >
                  BEL DIRECT 24/7: 085 109 1112
                </a>
                <a
                  href="#faq"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Veelgestelde vragen
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Binnen 30-45 min onderweg</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Geen verborgen kosten</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Camera & hogedruk op de bus</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/werkbus.jpg"
                  alt="Werkbus van Rioolhulp Gils voor spoedrit"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Binnen 30-45 minuten onderweg</div>
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

        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Waar we bij helpen</p>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Directe hulp bij riool- en afvoerproblemen</h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Eén telefoontje en we staan voor je deur. Onze monteurs hebben camera, hogedruk en noodpompen bij zich en geven vooraf duidelijkheid over prijs en aanpak.
                </p>
              </div>
              <a
                href="tel:+31851091112"
                className="bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
              >
                BEL DIRECT 24/7: 085 109 1112
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
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Typische spoedgevallen</h2>
              <p className="text-sm text-slate-600">
                We beperken waterschade, vinden de oorzaak en lossen het direct op. Na afloop geven we advies voor preventie.
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
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Zo werken we bij spoed</h2>
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
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Alles over spoed ontstoppingsservice</h2>
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
                Bel voor directe inzet of plan een tijdslot. We werken netjes, geven vooraf duidelijkheid en laten alles schoon achter.
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
