import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import CertificatesStrip from '@/components/CertificatesStrip';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'HD rioolcamera inspectie',
    text: 'Realtime beeld van leidingen, bochten en aansluitingen om scheuren, wortelgroei of verzakking te vinden.',
  },
  {
    title: 'Precisie lokalisatie',
    text: 'Met zender en ontvanger bepalen we exacte diepte en locatie. Minder graafwerk en lagere kosten.',
  },
  {
    title: 'Geur- en stankonderzoek',
    text: 'Rook- of kleurstofproeven in combinatie met camera om lekkages en open verbindingen te vinden.',
  },
  {
    title: 'Inspectierapport met video',
    text: 'Duidelijk rapport inclusief videofragmenten, foto’s en hersteladvies voor verzekering of beheerder.',
  },
  {
    title: 'Hogedrukreiniging & frezen',
    text: 'Vooraf of na inspectie reinigen we leidingen zodat de beelden scherp zijn en problemen direct verhelpen.',
  },
  {
    title: 'Voor VvE, horeca & utiliteit',
    text: 'Planmatig inspecteren buiten openingstijden met vaste aanspreekpunten en SLAs.',
  },
];

const benefits = [
  'Geen onnodig hak- of breekwerk door precieze lokalisatie',
  'Video en rapportage bruikbaar voor verzekering en aannemer',
  'Snelle diagnose bij terugkerende verstoppingen of stank',
  'Gekeurde apparatuur en gecertificeerde monteurs',
  'Beschikbaar 24/7 bij spoed of wateroverlast',
];

const painPoints = [
  {
    title: 'Terugkerende verstopping',
    text: 'We zien direct of vet, boomwortels of verzakking de oorzaak is en lossen het gericht op.',
  },
  {
    title: 'Stank uit afvoer of kruipruimte',
    text: 'Met rook- of kleurstofproef plus camera vinden we lekken in standleiding of sifons.',
  },
  {
    title: 'Verbouwing of oplevering',
    text: 'Controleer nieuwe leidingwerk en documenteer voor de aannemer of verzekering.',
  },
  {
    title: 'Zakelijke continuïteit',
    text: 'Inspectie buiten openingstijden voorkomt omzetverlies en klachten van gasten of huurders.',
  },
];

const steps = [
  { title: 'Intake en prijs vooraf', text: 'We bespreken locatie, diameter en bereikbaarheid en delen een vaste prijsindicatie.' },
  { title: 'Inspectie en reiniging', text: 'Indien nodig reinigen we eerst. Daarna brengen we leidingen in beeld met HD-camera en zender.' },
  { title: 'Analyse en rapport', text: 'We markeren bevindingen, meten diepte en locatie en verzamelen foto’s en video.' },
  { title: 'Herstel & preventie', text: 'We geven advies of voeren direct herstel uit met frezen, reparatie of relining-partner.' },
];

const faqs = [
  {
    q: 'Wanneer kies ik voor een riool camera inspectie?',
    a: 'Bij terugkerende verstoppingen, stank, verzakkingen, na een verbouwing of wanneer je inzicht wilt voor verzekering of aankoopkeuring.',
  },
  {
    q: 'Hoe verloopt de prijsopgave?',
    a: 'We vragen naar meters, diameter en bereikbaarheid. Je krijgt vooraf een vaste prijsindicatie en eventuele opties voor rapportage.',
  },
  {
    q: 'Kan de inspectie zonder breekwerk?',
    a: 'Ja. We gebruiken rioolcamera’s en zenders die via bestaande aansluitingen worden ingebracht. Breken is alleen nodig bij zware constructieve schade.',
  },
  {
    q: 'Krijg ik beelden en rapport?',
    a: 'Ja. We leveren video, foto’s en een kort rapport met locatie, oorzaak en advies. Geschikt voor verzekeraar of aannemer.',
  },
  {
    q: 'Werken jullie ook buiten openingstijden?',
    a: 'Zeker. Voor horeca, retail en VvE plannen we vroeg, laat of in het weekend zodat gasten en huurders geen hinder hebben.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rioolhulp Gils - Riool camera inspectie',
  url: 'https://rioolhulp-gils.nl/riool-camera-inspectie',
  telephone: '+31851091112',
  description:
    'Riool camera inspectie met HD-video, lokalisatie en rapportage. Voor woningen, VvE, horeca en bedrijven in Gils en omgeving. 24/7 beschikbaar.',
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
    name: 'Riool camera inspectie',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title },
    })),
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: 'Riool camera inspectie | Rioolhulp Gils',
  description:
    'HD rioolcamera, lokalisatie en rapportage zonder breekwerk. Snelle diagnose bij verstopping, stank of verzakking. 24/7 inzetbaar in Gils en omgeving.',
  alternates: {
    canonical: '/riool-camera-inspectie',
  },
  openGraph: {
    title: 'Riool camera inspectie | Rioolhulp Gils',
    description:
      'Zicht op jouw riool met HD-camera, rapport en hersteladvies. Voor woningen, VvE en bedrijven. Direct beschikbaar, ook buiten openingstijden.',
    url: 'https://rioolhulp-gils.nl/riool-camera-inspectie',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RioolCameraInspectiePage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <Script
          id="riool-camera-inspectie-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">Inspectie</span>
                <span>Riool camera & rapportage</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Direct inzicht met<br />
                riool camera inspectie
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                HD-camera, zender en rapportage voor een snelle diagnose zonder breekwerk. We vinden de oorzaak van stank of verstopping, geven advies en kunnen direct reinigen of herstellen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851091112"
                  className="bg-lime-300 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-400/40"
                >
                  BEL DIRECT voor inspectie: 085 109 1112
                </a>
                <a
                  href="#diensten"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Diensten en rapportage
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Lokalisatie zonder breken</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Video + rapport</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Beschikbaar 24/7</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/voorbereidingbadkamer.jpg"
                  alt="Voorbereiding voor camera inspectie in badkamer"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Scherp beeld, minder graafwerk</div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {benefits.map((item) => (
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
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Camera inspectie, lokalisatie en rapportage</h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  We combineren HD-camera’s, rookproeven en zenders. Zo zie je exact waar leidingen liggen, wat de oorzaak is en hoe we het oplossen. Optioneel leveren we een rapport voor verzekeraar, aannemer of VvE.
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
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Voor wie?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Herken je dit?</h2>
              <p className="text-sm text-slate-600">
                We lossen terugkerende klachten op, onderbouwen schade voor verzekeringen en maken verborgen leidingen zichtbaar voor renovatie of beheer.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item) => (
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
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Zo pakken we het aan</h2>
              </div>
              <a href="#faq" className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                Bekijk veelgestelde vragen
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
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Alles over riool camera inspectie</h2>
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
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Plan direct</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Binnen 30 minuten onderweg of ingepland op jouw moment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We zijn lokaal aanwezig in Gils en omgeving. Bel voor spoed of plan een inspectie buiten openingstijden. Altijd een duidelijke prijs vooraf.
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
                href="/ontstoppingsdienst#camera-inspectie"
                className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900 hover:bg-slate-800 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Bekijk voorbeelden
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
