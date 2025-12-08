export default function Navigation() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-tighter uppercase text-slate-950">Loodgieter.</div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
        <a href="#" className="text-sky-500">Home</a>
        <a href="#over" className="hover:text-slate-900 transition-colors">Over ons</a>
        <a href="#diensten" className="hover:text-slate-900 transition-colors">Diensten</a>
        <a href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</a>
        <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
      </div>
      <a href="tel:+31851304693" className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
        Bel nu +31 85 130 4693
      </a>
    </nav>
  );
}
