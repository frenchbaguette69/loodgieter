export default function About() {
  return (
    <section id="over" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-4">
            <div className="w-2/3 space-y-4">
              <img
                src="/assets/werkbus.jpg"
                className="w-full h-64 object-cover rounded-sm"
                alt="Werkbus van Rioolhulp Gils op locatie"
              />
              <img
                src="/assets/voorbereidingbadkamer.jpg"
                className="w-full h-48 object-cover rounded-sm"
                alt="Voorbereiding badkamer voor rioolwerk"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <div className="bg-white border-l-2 border-sky-500 pl-4 py-8 h-full flex flex-col justify-center">
                <span className="text-5xl font-semibold text-sky-500 tracking-tight block mb-2">25</span>
                <span className="text-sm uppercase tracking-widest text-slate-900 font-medium vertical-rl" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Jaar ervaring
                </span>
              </div>
              <img
                src="/assets/keukenafvoer.jpg"
                className="w-full h-40 object-cover rounded-sm mt-auto"
                alt="Reiniging van een keukenafvoer"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
              Wij bieden de <br />
              beste rioolservice
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Rioolhulp Gils lost verstoppingen, stankproblemen en inspecties snel en vakkundig op. Heldere communicatie, nette afwerking en een vaste prijs vooraf: zo weet je precies waar je aan toe bent.
            </p>
            <a href="tel:+31851091112" className="bg-lime-300 text-slate-900 px-8 py-3 rounded-full text-base font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-400/40 inline-block">
              BEL DIRECT: 085 109 1112
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
