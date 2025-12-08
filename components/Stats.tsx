export default function Stats() {
  return (
    <section className="w-full bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-300">
          <div className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-semibold text-sky-500 tracking-tight mb-2">1.25k</div>
            <div className="text-sm font-medium text-slate-600">Succesvolle projecten</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-semibold text-sky-500 tracking-tight mb-2">1.24k</div>
            <div className="text-sm font-medium text-slate-600">Tevreden klanten</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-semibold text-sky-500 tracking-tight mb-2">250+</div>
            <div className="text-sm font-medium text-slate-600">Vakmensen</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl lg:text-5xl font-semibold text-sky-500 tracking-tight mb-2">100%</div>
            <div className="text-sm font-medium text-slate-600">Kwaliteit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
