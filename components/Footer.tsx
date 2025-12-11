export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter uppercase text-slate-950">Rioolhulp Gils</div>
            <p className="text-sm text-slate-500 leading-relaxed">
              rioolhulp-gils.nl is jouw partner voor rioolontstopping, onderhoud en inspectie. Snel ter plaatse, duidelijke communicatie en werk waar je op kunt bouwen.
            </p>
            <a href="tel:+31851304693" className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors w-fit inline-block">
              24/7 hulp: +31 85 130 4693
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wide uppercase mb-4">Bedrijf</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="/ontstoppingsdienst" className="hover:text-slate-900 transition-colors">24/7 Ontstoppingsdienst</a>
              <a href="/rioolonderhoud-inspectie" className="hover:text-slate-900 transition-colors">Rioolonderhoud &amp; Inspectie</a>
              <a href="#over" className="hover:text-slate-900 transition-colors">Over ons</a>
              <a href="#diensten" className="hover:text-slate-900 transition-colors">Diensten</a>
              <a href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</a>
              <a href="/contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wide uppercase mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <span className="text-slate-900 font-medium">Regio Gils & omgeving</span>
              <a href="tel:+31851304693" className="hover:text-slate-900 transition-colors">+31 85 130 4693</a>
              <a href="mailto:service@rioolhulp-gils.nl" className="hover:text-slate-900 transition-colors">service@rioolhulp-gils.nl</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Rioolhulp Gils. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
