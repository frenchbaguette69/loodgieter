import type { Metadata } from 'next';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CertificatesStrip from '@/components/CertificatesStrip';

const uspList = [
  '24/7 bereikbaar, binnen 30-45 minuten onderweg',
  'Transparante tarieven vooraf, geen verrassingen',
  'Gecertificeerde monteurs en moderne apparatuur',
  'Rioolcamera inspectie zonder hak- en breekwerk',
  'Hogedrukreiniging en preventief onderhoud',
];

const serviceCards = [
  {
    title: 'Toilet en wc ontstoppen',
    text: 'Directe hulp bij verstopte wc of overstromend toilet. We maken de afvoer vrij en controleren de oorzaak.',
    id: 'toilet',
  },
  {
    title: 'Rioolontstopping & reiniging',
    text: 'Hogedrukreiniging en frezen voor hardnekkige rioolverstoppingen. Inclusief test op doorstroming.',
    id: 'reiniging',
  },
  {
    title: 'Keuken- en badkamerafvoer',
    text: 'Verstopte gootsteen, douche of bad? We ontstoppen, reinigen sifons en geven preventietips.',
    id: 'afvoer',
  },
  {
    title: 'Spoedservice 24/7',
    text: 'Dag en nacht inzetbaar bij wateroverlast of stankoverlast. Altijd met spoedslot.',
    id: 'spoed',
  },
  {
    title: 'Riool camera inspectie',
    text: 'Met HD-camera lokaliseren we scheuren, verzakkingen of wortelgroei zonder onnodig graafwerk.',
    id: 'camera-inspectie',
  },
  {
    title: 'Preventief rioolonderhoud',
    text: 'Planmatig onderhoud voor VvE, horeca en retail zodat verstoppingen geen kans krijgen.',
    id: 'preventie',
  },
];

const steps = [
  {
    title: 'Bel 24/7',
    text: 'We stellen direct de juiste vragen en plannen een monteur in. Spoed krijgt voorrang.',
  },
  {
    title: 'Onderweg binnen 30-45 min',
    text: 'Een lokale monteur vertrekt met camera, hogedruk en verenmachine.',
  },
  {
    title: 'Diagnose & prijs vooraf',
    text: 'We delen de oorzaak en de prijs voordat we starten. Geen verborgen kosten.',
  },
  {
    title: 'Oplossen + preventietips',
    text: 'Na het ontstoppen testen we de doorstroming en geven advies om herhaling te voorkomen.',
  },
];

const faqs = [
  {
    q: 'Hoe snel zijn jullie ter plaatse bij spoed?',
    a: 'In de meeste gevallen zijn we binnen 30 tot 45 minuten onderweg. Je spreekt altijd direct met een monteur.',
  },
  {
    q: 'Werken jullie echt 24/7?',
    a: "Ja, ook 's nachts, in het weekend en op feestdagen. De spoedservice heeft een vaste bereikbaarheidslijn.",
  },
  {
    q: 'Wat kost een ontstoppingsdienst?',
    a: 'We geven vooraf een duidelijke prijsindicatie. Geen voorrijkosten verrassingen en geen verborgen toeslagen zonder overleg.',
  },
  {
    q: 'Moet ik hak- en breekwerk verwachten?',
    a: 'Meestal niet. Met camera-inspectie en hogedruk kunnen we 9 van de 10 verstoppingen zonder breken oplossen.',
  },
  {
    q: "Helpen jullie ook bedrijven en VvE's?",
    a: "Ja, we werken voor particulieren, VvE's, horeca, retail en kantoren. Contracten voor preventief onderhoud zijn mogelijk.",
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rioolhulp Gils - 24/7 Ontstoppingsdienst',
  url: 'https://rioolhulp-gils.nl/ontstoppingsdienst',
  telephone: '+31851091112',
  description:
    '24/7 ontstoppingsdienst voor wc, riool, keuken- en badkamerafvoer. Spoedservice, camera inspectie en preventief onderhoud in Gils en omgeving.',
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
    name: '24/7 Ontstoppingsdienst',
    itemListElement: serviceCards.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title },
    })),
  },
  sameAs: [],
};

export const metadata: Metadata = {
  title: '24/7 Ontstoppingsdienst | Rioolhulp Gils',
  description:
    'Direct hulp nodig bij een verstopping? Rioolhulp Gils biedt 24/7 ontstoppingsdienst, rioolreiniging, camera inspectie en spoedservice in Gils en omgeving.',
  alternates: {
    canonical: '/ontstoppingsdienst',
  },
  openGraph: {
    title: '24/7 Ontstoppingsdienst | Rioolhulp Gils',
    description:
      'Spoed rioolservice: wc ontstoppen, rioolreiniging, camera inspectie en preventief onderhoud. Altijd bereikbaar, snel ter plaatse.',
    url: 'https://rioolhulp-gils.nl/ontstoppingsdienst',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OntstoppingsdienstPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
      <Script
        id="ontstoppingsdienst-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section id="spoed" className="bg-gradient-to-r from-lime-50 via-white to-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs uppercase tracking-wide">
              <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">24/7</span>
              <span>Spoed ontstoppingsdienst</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              24/7 ontstoppingsdienst <br />
              voor wc, riool en afvoer
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              Direct hulp nodig? Rioolhulp Gils staat dag en nacht paraat met ervaren monteurs, camera-inspectie en
              hogedrukreiniging. Transparante prijs vooraf en snel ter plaatse in Gils en omgeving.
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
              <div className="p-3 rounded border border-slate-200 bg-slate-50">Camera-inspectie op voorraad</div>
            </div>
          </div>
          <div className="relative h-full">
            <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/assets/werkbus.jpg"
                alt="Werkbus van Rioolhulp Gils onderweg naar spoedklus"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                <div className="text-2xl font-semibold">Spoedhulp aan huis of bedrijf</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {uspList.map((usp) => (
                    <li key={usp} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                      <span>{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Onze diensten</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2">24/7 ontstoppingsdiensten</h2>
              <p className="text-base text-slate-600 mt-3 max-w-2xl">
                Alles voor een vrij stromend riool: van wc ontstoppen tot volledige rioolreiniging. We werken netjes,
                snel en geven preventietips zodat problemen wegblijven.
              </p>
            </div>
            <a
              href="tel:+31851091112"
              className="self-start bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
            >
              BEL DIRECT 24/7: 085 109 1112
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                id={service.id}
                className="bg-white border border-slate-200 rounded-md p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">
                    24/7
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{service.text}</p>
                <span className="text-sm font-semibold text-sky-600">Snel ter plaatse</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Zo werken wij</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Binnen 4 stappen opgelost</h2>
            <p className="text-base text-slate-600 max-w-xl">
              We combineren snelheid met een vaste werkwijze. Zo weet je vooraf waar je aan toe bent en krijg je een
              duurzame oplossing.
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
                <p className="text-sm text-slate-600 uppercase tracking-wide">Spoedlijn</p>
                <p className="text-2xl font-semibold text-slate-900">085 109 1112</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Bel ons direct. We checken telefonisch de situatie en sturen een monteur met het juiste materiaal. Ook
              beschikbaar voor nacht- en weekenddienst.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="p-3 rounded bg-white border border-slate-200">Gils en omgeving</div>
              <div className="p-3 rounded bg-white border border-slate-200">Camera-inspectie mogelijk</div>
              <div className="p-3 rounded bg-white border border-slate-200">Hogedrukreiniging</div>
              <div className="p-3 rounded bg-white border border-slate-200">Keurmerken op orde</div>
            </div>
            <a
              href="tel:+31851091112"
              className="inline-flex items-center justify-center bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
            >
              BEL DIRECT 24/7: 085 109 1112
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Regio & responstijd</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Snel ter plaatse in Gils en omgeving</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We rijden vanuit Gils naar omliggende gemeenten en industrieterreinen. We plannen direct de dichtstbijzijnde monteur in
              zodat we binnen 30-45 minuten onderweg zijn. Voor bedrijfspanden en horeca stemmen we af zodat je bedrijfsvoering zo min mogelijk hinder heeft.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold">Particulier</h3>
                <p className="text-sm text-slate-600">Woningen, appartementen, studentenhuizen. Geen voorrijkosten verrassingen.</p>
              </div>
              <div className="p-4 rounded border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold">Zakelijk</h3>
                <p className="text-sm text-slate-600">Horeca, retail, VvE en kantoren. Optioneel onderhoudscontract en periodieke reiniging.</p>
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
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">24/7 Service</span>
            </div>
            <a
              href="tel:+31851091112"
              className="inline-flex items-center justify-center bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
            >
              BEL DIRECT 24/7: 085 109 1112
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Veelgestelde vragen</h2>
            <p className="text-base text-slate-600">Alles wat je wilt weten over onze 24/7 ontstoppingsdienst.</p>
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
              <p className="text-sm text-slate-600">Altijd bereikbaar voor spoed en advies.</p>
            </div>
            <a
              href="tel:+31851091112"
              className="bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-400/40"
            >
              BEL DIRECT 24/7: 085 109 1112
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
