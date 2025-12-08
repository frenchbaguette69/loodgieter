export default function Hero() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-950 leading-[1.1]">
          Toegewijde <br />
          loodgieter- en <br />
          klusservice.
        </h1>
        <div className="flex flex-col gap-8 lg:pt-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-sky-500 flex items-center justify-center text-white text-xs font-medium">
                +
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">18k+ tevreden klanten door heel Nederland</p>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Wij fixen lekkages, verstoppingen, cv- en elektra-klussen snel en netjes. Eén telefoontje en we staan voor je deur.
          </p>
          <div>
            <a href="tel:+31851304693" className="bg-sky-500 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/30 inline-block">
              Bel nu +31 85 130 4693
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[500px] rounded-sm overflow-hidden group cursor-pointer">
        <img
          src="/rioolhulp.jpg"
          alt="Loodgieter aan het werk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        </div>
      </div>
    </header>
  );
}
