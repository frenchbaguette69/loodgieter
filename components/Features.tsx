export default function Features() {
  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6 text-sky-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Betrouwbare vakkennis</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Jarenlange ervaring en gecertificeerde monteurs zorgen voor vakwerk bij elke klus, groot of klein.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6 text-sky-500">
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">24/7 bereikbaar</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Spoed? We zijn dag en nacht bereikbaar om verstoppingen en lekkages direct op te lossen.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6 text-sky-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Transparante prijzen</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Geen verrassingen: vooraf een duidelijke prijs zodat je precies weet waar je aan toe bent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
