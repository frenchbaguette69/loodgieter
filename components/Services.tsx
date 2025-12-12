export default function Services() {
  const services = [
    {
      title: '24/7 ontstoppingsdienst',
      description: 'Directe hulp bij verstoppingen, lekkages en overstromingen. Altijd een monteur standby.',
      href: '/ontstoppingsdienst',
    },
    {
      title: 'Rioolonderhoud & inspectie',
      description: 'Periodiek onderhoud voorkomt verstoppingen en stank. We plannen in zonder jouw bedrijfsvoering te storen.',
      href: '/rioolonderhoud-inspectie',
    },
    {
      title: 'Riool camera inspectie',
      description: 'Met camera-inspectie vinden we snel de oorzaak van rioolproblemen zonder hak- of breekwerk.',
      href: '/riool-camera-inspectie',
    },
    {
      title: 'Spoed ontstoppingsservice',
      description: "Binnen no-time op locatie bij acuut riool- of afvoerleed, ook 's nachts en in het weekend.",
      href: '/spoed-ontstoppingsservice',
    },
    {
      title: 'Rioolreiniging en preventie',
      description: 'Hogedrukreiniging en preventieve behandelingen houden leidingen schoon en veilig.',
      href: '/rioolreiniging-preventie',
    },
    {
      title: 'Toilet, badkamer & keuken ontstoppen',
      description: 'Van wc tot douche en gootsteen: we maken afvoeren direct vrij en zorgen dat alles weer doorloopt.',
      href: '/toilet-badkamer-keuken-ontstoppen',
    },
  ];

  return (
    <section id="diensten" className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 leading-tight max-w-xl">
            Alle riooldiensten onder één dak
          </h2>
          <p className="text-sm text-slate-500 max-w-sm text-right md:text-right">
            Rioolhulp Gils combineert spoed, onderhoud en inspectie. Wij lossen het veilig en professioneel op met de juiste materialen en een nette afwerking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group bg-white p-6 rounded-sm border border-slate-200 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 hover:border-sky-200"
            >
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7M4 5l7 7-7 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-slate-900 group-hover:text-slate-950 transition-colors">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
              <span className="text-sm font-semibold text-sky-600 group-hover:text-sky-700 transition-colors">
                Bekijk dienst
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Keurmerken & garanties</h3>
            <p className="text-sm text-slate-600 mb-4">
              Toon hier keurmerken en certificeringen. Wij werken volgens de strengste veiligheids- en hygiënestandaarden.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">Techniek Nederland</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">VCA</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">RIOOL Inspectie</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">24/7 Service</span>
            </div>
          </div>
          <div className="bg-lime-50 text-slate-900 p-6 rounded-sm flex flex-col justify-between gap-4 border border-lime-100">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-700 mb-2">Spoed nodig?</p>
              <h3 className="text-2xl font-semibold leading-tight">Binnen 30 minuten onderweg naar jouw locatie</h3>
              <p className="text-sm text-slate-700 mt-3">Bel voor directe rioolhulp of plan onderhoud in wanneer het jou uitkomt.</p>
            </div>
            <a href="tel:+31851091112" className="bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors shadow-md shadow-lime-300/40 w-fit">
              BEL DIRECT: 085 109 1112
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
