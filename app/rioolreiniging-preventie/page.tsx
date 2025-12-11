import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Hogedruk rioolreiniging',
    text: 'We verwijderen vet, kalk en aanslag met hogedruk en roterende spuitkoppen voor maximale doorstroming.',
  },
  {
    title: 'Frezen van harde blokkades',
    text: 'Voor betonresten, wortels of harde aanslag gebruiken we ketting- en veerfrezen zonder hak- of breekwerk.',
  },
  {
    title: 'Preventieve onderhoudsbeurt',
    text: 'Planmatig reinigen van standleidingen, keukenafvoeren en hoofdriolering voor woningen, VvE en horeca.',
  },
  {
    title: 'Vetafscheider en keukenlijn',
    text: 'Reiniging en inspectie van vetafscheiders en keukenlijnen om stank en verstopping te voorkomen.',
  },
  {
    title: 'Beluchting en doorstroming',
    text: 'Controle van beluchting en afschot; we testen de doorstroming zodat water en lucht vrij kunnen bewegen.',
  },
  {
    title: 'Inspectie + rapportage',
    text: 'Camera-inspectie voor en na reiniging met video en advies, bruikbaar voor beheerder of verzekeraar.',
  },
];

const uspList = [
  'Hogedruk, frezen en camera op de bus',
  'Planmatig onderhoud buiten openingstijden',
  'Transparante prijs en duidelijk plan van aanpak',
  'Gekeurde apparatuur en gecertificeerde monteurs',
  'Lokaal in Gils en omliggende gemeenten',
];

const pains = [
  { title: 'Terugkerende verstoppingen', text: 'We reinigen en inspecteren om vet, zeep en kalkaanslag structureel te verwijderen.' },
  { title: 'Stankoverlast in keuken of toilet', text: 'Reiniging en beluchtingscontrole voorkomen sifon-trekken en nare geuren.' },
  { title: 'Na verbouwing of oplevering', text: 'We reinigen restanten beton of gips en controleren leidingen met camera en rapportage.' },
  { title: 'Horeca en VvE klachten', text: 'Planmatig onderhoud en vaste responstijden voorkomen klachten van gasten en bewoners.' },
];

const steps = [
  { title: 'Inventarisatie & prijs vooraf', text: 'We bespreken diameters, bereikbaarheid en gewenste rapportage en delen een vaste indicatie.' },
  { title: 'Reiniging & frezen', text: 'Hogedruk, ketting- of veerfrezen op maat van jouw leidingdiameter. We spoelen en testen direct.' },
  { title: 'Inspectie & rapport', text: 'Camera-inspectie voor of na de reiniging met video, foto’s en advies voor preventie.' },
  { title: 'Planning preventie', text: 'We leggen een onderhoudsfrequentie vast en plannen buiten openingstijden als gewenst.' },
];

const faqs = [
  {
    q: 'Hoe vaak moet ik rioolreiniging laten doen?',
    a: 'Dat hangt af van gebruik. Horeca en VvE plannen vaak jaarlijks, woningen om de paar jaar of bij klachten. We adviseren op maat.',
  },
  {
    q: 'Moet er gebroken worden?',
    a: 'In 9 van de 10 gevallen niet. We reinigen via bestaande aansluitingen en controleren met camera. Breken gebeurt alleen in overleg.',
  },
  {
    q: 'Werken jullie buiten openingstijden?',
    a: 'Ja. Voor horeca, retail en kantoren plannen we vroeg, laat of in het weekend zodat gasten en klanten geen hinder hebben.',
  },
  {
    q: 'Kan ik beelden en rapportage krijgen?',
    a: 'Ja. We leveren video en een kort rapport met bevindingen, oorzaak en advies. Handig voor beheerder of verzekeraar.',
  },
  {
    q: 'Doen jullie ook spoed?',
    a: 'Zeker. Bij acute verstopping schakelen we onze 24/7 spoed ontstoppingsservice in. Daarna plannen we preventie.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rioolhulp Gils - Rioolreiniging & preventie',
  url: 'https://rioolhulp-gils.nl/rioolreiniging-preventie',
  telephone: '+31 85 130 4693',
  description:
    'Hogedruk rioolreiniging, frezen en preventief onderhoud voor woningen, VvE, horeca en bedrijven. Inclusief camera-inspectie en rapportage.',
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
    name: 'Rioolreiniging & preventie',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title },
    })),
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: 'Rioolreiniging en preventie | Rioolhulp Gils',
  description:
    'Hogedrukreiniging en preventieve behandelingen houden leidingen schoon en veilig. Inclusief frezen, camera-inspectie en rapportage voor woningen, VvE, horeca en bedrijven.',
  alternates: {
    canonical: '/rioolreiniging-preventie',
  },
  openGraph: {
    title: 'Rioolreiniging en preventie | Rioolhulp Gils',
    description:
      'Hogedruk rioolreiniging, frezen en preventief onderhoud met camera-inspectie. Planmatig en buiten openingstijden mogelijk.',
    url: 'https://rioolhulp-gils.nl/rioolreiniging-preventie',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RioolreinigingPreventiePage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <Script
          id="rioolreiniging-preventie-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">Preventie</span>
                <span>Rioolreiniging & onderhoud</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Rioolreiniging en preventie
                <br />
                voor blijvende doorstroming
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Hogedrukreiniging en preventieve behandelingen houden leidingen schoon en veilig. We reinigen, frezen en inspecteren met camera zodat verstoppingen geen kans krijgen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851304693"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-sky-500/30 transition-colors"
                >
                  Plan reiniging: +31 85 130 4693
                </a>
                <a
                  href="#diensten"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Bekijk diensten
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white/70">
                <div className="p-3 rounded border border-white/10 bg-white/5">Hogedruk & frezen</div>
                <div className="p-3 rounded border border-white/10 bg-white/5">Camera rapportage</div>
                <div className="p-3 rounded border border-white/10 bg-white/5">Planmatig onderhoud</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/keukenafvoer.jpg"
                  alt="Reiniging van keukenafvoer met hogedruk"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Veilige leidingen, minder verstoppingen</div>
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
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Reiniging, frezen en preventief onderhoud</h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  We combineren hogedruk, frezen en camera-inspectie. Zo verwijderen we aanslag, voorkomen stank en geven inzicht met rapportage voor beheerder of verzekeraar.
                </p>
              </div>
              <a
                href="tel:+31851304693"
                className="bg-slate-950 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Plan onderhoud
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
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Typische onderhoudsklachten</h2>
              <p className="text-sm text-slate-600">
                Met planmatig reinigen en inspecteren voorkom je verstoppingen, stank en schade. We stemmen planning af op jouw agenda.
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
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">Zo pakken we reiniging aan</h2>
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

        <section id="faq" className="w-full py-20 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Veelgestelde vragen</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Alles over rioolreiniging en preventie</h2>
              <p className="text-sm text-white/70">
                Staat jouw vraag er niet bij? Bel direct; je spreekt meteen een monteur die kan meedenken over planning en kosten.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="bg-white/5 border border-white/10 rounded-sm p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{item.a}</p>
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
                We plannen onderhoud wanneer het jou past, ook buiten openingstijden. Altijd een duidelijke prijs en rapportage achteraf.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+31851304693"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-sky-500/30 transition-colors"
              >
                Bel 24/7: +31 85 130 4693
              </a>
              <a
                href="/ontstoppingsdienst#reiniging"
                className="bg-slate-950 text-white hover:bg-slate-800 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Spoed nodig?
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
