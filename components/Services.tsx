export default function Services() {
  return (
    <section id="diensten" className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 leading-tight max-w-xl">
            Van druppelende kraan <br /> tot gesprongen leiding
          </h2>
          <p className="text-sm text-slate-500 max-w-sm text-right md:text-right">
            Kleine verstopping of grote lekkage? Wij lossen het veilig en professioneel op met de juiste materialen en een nette afwerking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative h-[400px] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Zakelijke projecten"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-sky-500 p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 3h-8M12 3v4" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg leading-none">Zakelijk</h4>
                    <span className="text-xs opacity-90">Diensten</span>
                  </div>
                </div>
                <div className="bg-white w-8 h-8 flex items-center justify-center text-sky-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9-9M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-sm bg-slate-900 text-white">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
              className="w-full h-full object-cover opacity-20"
              alt="Woningen"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6">
                    <path d="M3 9l9 7 9-7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg leading-none">Particulier</h4>
                  <span className="text-xs opacity-70">Diensten</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-300 mb-4">
                  Zorg voor een comfortabel huis met betrouwbare leidingen. Een greep uit onze werkzaamheden:
                </p>
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4 text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Loodgietersreparaties & installaties
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4 text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Riool- en afvoerreiniging
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4 text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Cv-ketels en boilers
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4 text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Aanleg water- en gasleidingen
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4 text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Pomp- en afvoersystemen
                  </li>
                </ul>
              </div>
              <div className="bg-white w-8 h-8 flex items-center justify-center text-slate-900 self-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="group relative h-[400px] overflow-hidden rounded-sm">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
              className="w-full h-full object-cover"
              alt="Spoed"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-sky-500 p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg leading-none">Spoed</h4>
                    <span className="text-xs opacity-90">Diensten</span>
                  </div>
                </div>
                <div className="bg-white w-8 h-8 flex items-center justify-center text-sky-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9-9M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="tel:+31851304693" className="bg-slate-950 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors inline-block">
            Bel voor alle diensten: +31 85 130 4693
          </a>
        </div>
      </div>
    </section>
  );
}
