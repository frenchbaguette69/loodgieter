import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import CertificatesStrip from '@/components/CertificatesStrip';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Preventief rioolonderhoud',
    text: 'Planmatige reiniging en inspectie om verstoppingen, stank of verzakkingen te voorkomen.',
  },
  {
    title: 'Riool camera inspectie',
    text: "HD-camera's lokaliseren scheuren, wortelgroei en verzakkingen zonder hak- of breekwerk.",
  },
  {
    title: 'Hogedruk rioolreiniging',
    text: 'Grondige reiniging met hogedruk en frezen voor hardnekkige aanslag of vetophoping.',
  },
  {
    title: 'Geur- en stankonderzoek',
    text: 'We traceren stankbronnen met rook- of kleurstofproeven en lossen het structureel op.',
  },
  {
    title: 'Inspectierapport & advies',
    text: 'Duidelijk rapport met bevindingen, camerabeelden en plan van aanpak voor herstel of preventie.',
  },
  {
    title: 'VvE, horeca & zakelijk',
    text: 'Contracten voor periodiek onderhoud, inclusief rapportage en vaste responstijden.',
  },
];

const benefits = [
  'Voorkom verstoppingen en dure noodreparaties',
  'Volledig inzicht met camerabeelden en rapportage',
  'Werkzaam buiten openingstijden of afgesproken tijdslot',
  'Gecertificeerde monteurs en gekeurde apparatuur',
  'Transparante prijzen en duidelijke scope vooraf',
];

const steps = [
  {
    title: 'Intake & planning',
    text: 'We inventariseren jouw locatie en plannen onderhoud zonder bedrijfsvoering te storen.',
  },
  {
    title: 'Camera inspectie',
    text: 'We brengen het riool in kaart, lokaliseren knelpunten en leggen vast met video.',
  },
  {
    title: 'Reiniging & herstel',
    text: 'Hogedruk, frezen of lokaal herstel. We testen doorstroming en ventilatie.',
  },
  {
    title: 'Rapport & preventie',
    text: 'Je ontvangt bevindingen, advies en onderhoudsfrequentie op maat.',
  },
];

const faqs = [
  {
    q: 'Wanneer kies ik voor rioolonderhoud?',
    a: 'Bij terugkerende verstoppingen, stank, verzakkingen of als preventieve maatregel voor VvE, horeca of retail.',
  },
  {
    q: 'Wat kost een camera inspectie?',
    a: 'We geven vooraf een prijs op basis van meters, bereikbaarheid en rapportagewensen. Geen verborgen kosten.',
  },
  {
    q: 'Kan onderhoud buiten openingstijden?',
    a: 'Ja. We plannen vroeg, laat of in het weekend zodat jouw gasten of klanten geen hinder ervaren.',
  },
  {
    q: 'Krijg ik beelden en rapportage?',
    a: 'Ja. We leveren camerabeelden en een beknopt rapport met oorzaak, locatie en advies.',
  },
  {
    q: 'Doen jullie ook directe ontstoppingen?',
    a: 'Zeker. Bij acute verstopping schakelen we de 24/7 ontstoppingsdienst in en koppelen dit aan een onderhoudsplan.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rioolhulp Gils - Rioolonderhoud & Inspectie',
  url: 'https://rioolhulp-gils.nl/rioolonderhoud-inspectie',
  telephone: '+31851091112',
  description:
    'Rioolonderhoud en camera inspectie voor woningen, VvE, horeca en bedrijven. Preventie, hogedrukreiniging en rapportage in Gils en omgeving.',
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
    name: 'Rioolonderhoud & Inspectie',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title },
    })),
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: 'Rioolonderhoud & Inspectie | Rioolhulp Gils',
  description:
    'Voorkom verstoppingen en stank met rioolonderhoud, camera inspectie en hogedrukreiniging. Rapportage en preventie voor woningen, VvE, horeca en bedrijven.',
  alternates: {
    canonical: '/rioolonderhoud-inspectie',
  },
  openGraph: {
    title: 'Rioolonderhoud & Inspectie | Rioolhulp Gils',
    description:
      'Camera inspectie, hogedruk rioolreiniging en preventief onderhoud. Rapportage en advies voor particulieren en bedrijven.',
    url: 'https://rioolhulp-gils.nl/rioolonderhoud-inspectie',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RioolonderhoudInspectiePage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <Script
          id="rioolonderhoud-inspectie-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">Preventie</span>
                <span>Rioolonderhoud & inspectie</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Rioolonderhoud en <br />
                camera inspectie op maat
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                Voorkom verstoppingen en stank met planmatig rioolonderhoud, camerainspectie en hogedrukreiniging. Rioolhulp Gils levert rapportage, advies en werkt desgewenst buiten openingstijden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851091112"
                  className="bg-lime-300 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-400/40"
                >
                  BEL DIRECT voor onderhoud: 085 109 1112
                </a>
                <a
                  href="#services"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Bekijk diensten
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Camera inspectie</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Hogedruk & frezen</div>
                <div className="p-3 rounded border border-slate-200 bg-slate-50">Rapportage & advies</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/rioolhulp.jpg"
                  alt="Inspectie en onderhoud door Rioolhulp Gils"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Preventief onderhoud en inspectie</div>
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

        <section id="services" className="w-full bg-slate-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Onze aanpak</p>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2">Onderhoud, inspectie en advies</h2>
                <p className="text-base text-slate-600 mt-3 max-w-2xl">
                  We combineren camera inspectie met gerichte reiniging en leveren een helder rapport. Zo voorkom je uitval, wateroverlast en stankklachten.
                </p>
              </div>
              <a
                href="tel:+31851091112"
                className="self-start bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
              >
                BEL DIRECT: 085 109 1112
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white border border-slate-200 rounded-md p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
                  id={service.title.toLowerCase().includes('camera') ? 'camera-inspectie' : service.title.toLowerCase().includes('reiniging') ? 'reiniging' : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Stap voor stap</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Zo leveren we inzicht en preventie</h2>
              <p className="text-base text-slate-600 max-w-xl">
                Heldere stappen, vaste contactpersoon en rapportage met beelden. Zo hou je grip op je riool en planning.
              </p>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-lime-50 text-slate-900 rounded-md p-8 space-y-6 border border-lime-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center font-semibold">
                  24/7
                </div>
                <div>
                  <p className="text-sm text-slate-600 uppercase tracking-wide">Contact & planning</p>
                  <p className="text-2xl font-semibold text-slate-900">085 109 1112</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Bel voor onderhoud, inspectie of een quickscan. We plannen direct en stemmen af op jouw openingstijden. Bij spoed schakelen we onze 24/7 ontstoppingsdienst in.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="p-3 rounded bg-white border border-slate-200">Camera rapportage</div>
                <div className="p-3 rounded bg-white border border-slate-200">Hogedruk & frezen</div>
                <div className="p-3 rounded bg-white border border-slate-200">Preventief schema</div>
                <div className="p-3 rounded bg-white border border-slate-200">Keurmerken op orde</div>
              </div>
              <a
                href="tel:+31851091112"
                className="inline-flex items-center justify-center bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
              >
                BEL DIRECT: 085 109 1112
              </a>
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Branches</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Particulier én zakelijk</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We helpen woningen, VvE&apos;s, horeca en kantoren. We stemmen frequentie, tijdstip en rapportage af zodat je altijd inzicht hebt in de staat van je riool.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded border border-slate-200 bg-white">
                  <h3 className="text-lg font-semibold">VvE & vastgoed</h3>
                  <p className="text-sm text-slate-600">Periodieke inspectie en reiniging met rapportage per pand.</p>
                </div>
                <div className="p-4 rounded border border-slate-200 bg-white">
                  <h3 className="text-lg font-semibold">Horeca & retail</h3>
                  <p className="text-sm text-slate-600">Vetophoping en stank voorkomen met gericht onderhoud buiten piekuren.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
              <h3 className="text-xl font-semibold">Keurmerken & garanties</h3>
              <p className="text-sm text-slate-600">
                We werken volgens de strengste veiligheids- en hygiënestandaarden. Plaats hier de keurmerklogo&apos;s of links naar certificaten.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">Techniek Nederland</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">VCA</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">RIOOL Inspectie</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">Preventieplan</span>
              </div>
              <a
                href="tel:+31851091112"
                className="inline-flex items-center justify-center bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
              >
                BEL DIRECT: 085 109 1112
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full bg-white py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">FAQ</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Veelgestelde vragen</h2>
              <p className="text-base text-slate-600">Alles over rioolonderhoud, inspectie en preventie.</p>
            </div>
            <div className="divide-y divide-slate-200 border border-slate-200 rounded-md">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{faq.q}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-md p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Hulp nodig?</p>
                <h3 className="text-xl font-semibold">BEL DIRECT: 085 109 1112</h3>
                <p className="text-sm text-slate-600">BEL DIRECT 085 109 1112 of vraag een inspectie aan.</p>
              </div>
              <a
                href="tel:+31851091112"
                className="bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
              >
                BEL DIRECT 085 109 1112
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
