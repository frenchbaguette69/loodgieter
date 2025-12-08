export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter uppercase text-slate-950">Loodgieter.</div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Betrouwbare loodgieter en klussers uit de buurt. Snel ter plaatse, duidelijke communicatie en werk waar je op kunt bouwen.
            </p>
            <a href="tel:+31851304693" className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors w-fit inline-block">
              Bel nu +31 85 130 4693
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wide uppercase mb-4">Bedrijf</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="#over" className="hover:text-slate-900 transition-colors">Over ons</a>
              <a href="#diensten" className="hover:text-slate-900 transition-colors">Diensten</a>
              <a href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wide uppercase mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <span className="text-slate-900 font-medium">Amsterdam, Nederland</span>
              <a href="tel:+31851304693" className="hover:text-slate-900 transition-colors">+31 85 130 4693</a>
              <a href="mailto:hello@plumber.com" className="hover:text-slate-900 transition-colors">hello@plumber.com</a>
              <div className="flex items-center gap-3 text-slate-400">
                <a href="#" className="hover:text-slate-900 transition-colors">Facebook</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Loodgieter. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
