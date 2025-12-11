import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Rioolhulp Gils',
  description:
    'Neem direct contact op voor spoed, onderhoud of inspectie. Bel 24/7 of stuur een bericht via het formulier. Rioolhulp Gils reageert snel.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Rioolhulp Gils',
    description:
      'Bel 24/7 of stuur een bericht voor spoed, onderhoud of camera inspectie. We reageren snel en plannen direct in.',
    url: 'https://rioolhulp-gils.nl/contact',
    siteName: 'Rioolhulp Gils',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white text-slate-900">
        <section className="bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-wide">
                <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full">24/7</span>
                <span>Contact & planning</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
                Snel contact met <br />
                Rioolhulp Gils
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Bel direct bij spoed of plan een afspraak voor onderhoud en inspectie. We reageren snel en geven altijd vooraf duidelijkheid over aanpak en prijs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+31851304693"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-sky-500/30 transition-colors"
                >
                  Bel 24/7: +31 85 130 4693
                </a>
                <a
                  href="mailto:service@rioolhulp-gils.nl"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  service@rioolhulp-gils.nl
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white/70">
                <div className="p-3 rounded border border-white/10 bg-white/5">Binnen 30-45 min onderweg</div>
                <div className="p-3 rounded border border-white/10 bg-white/5">Geen verborgen kosten</div>
                <div className="p-3 rounded border border-white/10 bg-white/5">Ook buiten openingstijden</div>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative bg-white text-slate-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/assets/werkbus.jpg"
                  alt="Werkbus van Rioolhulp Gils onderweg naar een klus"
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rioolhulp Gils</div>
                  <div className="text-2xl font-semibold">Altijd bereikbaar</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Spoed, onderhoud of inspectie? Eén belletje of bericht en we plannen direct in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contact</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">
                Stuur een bericht of plan een afspraak
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Laat je gegevens achter en beschrijf de klacht. We reageren snel, delen de prijsindicatie en plannen een monteur in. Bij spoed graag ook bellen.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">24/7 telefonisch</p>
                <a href="tel:+31851304693" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                  +31 85 130 4693
                </a>
                <p className="pt-2 font-semibold text-slate-900">E-mail</p>
                <a href="mailto:service@rioolhulp-gils.nl" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
                  service@rioolhulp-gils.nl
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
