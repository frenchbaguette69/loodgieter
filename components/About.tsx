export default function About() {
  return (
    <section id="over" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex gap-4">
            <div className="w-2/3 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop"
                className="w-full h-64 object-cover rounded-sm"
                alt="Loodgieter aan het werk"
              />
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop"
                className="w-full h-48 object-cover rounded-sm"
                alt="Gereedschap"
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
                src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=400&auto=format&fit=crop"
                className="w-full h-40 object-cover rounded-sm mt-auto"
                alt="Loodgieter repareert leiding"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
              Wij bieden de <br />
              beste loodgietersservice
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Wij lossen lekkages, verstoppingen en installaties snel en vakkundig op. Heldere communicatie, nette afwerking en een vaste prijs vooraf: zo weet je precies waar je aan toe bent.
            </p>
            <a href="tel:+31851304693" className="bg-slate-950 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors inline-block">
              Bel direct +31 85 130 4693
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
