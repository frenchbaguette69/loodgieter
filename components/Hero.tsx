export default function Hero() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-950 leading-[1.1]">
          24/7 rioolhulp <br />
          en ontstoppings- <br />
          dienst.
        </h1>
        <div className="flex flex-col gap-8 lg:pt-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="/assets/werkbus.jpg"
                alt="Werkbus van Rioolhulp Gils"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/toiletontstoppen.jpg"
                alt="Toilet ontstoppen"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/keukenafvoer.jpg"
                alt="Keukenafvoer reinigen"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-sky-500 flex items-center justify-center text-white text-xs font-medium">
                +
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">18k+ verstoppingen verholpen door Rioolhulp Gils</p>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Rioolhulp Gils is jouw rioolpartner voor spoed, onderhoud en inspectie. Eén telefoontje en onze ontstoppingsdienst staat bij je deur.
          </p>
          <div>
            <a href="tel:+31851304693" className="bg-sky-500 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/30 inline-block">
              24/7 bereikbaar: +31 85 130 4693
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[500px] rounded-sm overflow-hidden group cursor-pointer">
        <img
          src="/assets/rioolhulp.jpg"
          alt="Loodgieter aan het werk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        </div>
      </div>
    </header>
  );
}
