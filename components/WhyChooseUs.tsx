export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                De perfecte oplossing voor al je rioolwerk
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                We denken mee, plannen strak in en werken opgeruimd. Met duidelijke afspraken vooraf, keurmerken op orde en nazorg waar nodig.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-xl bg-sky-500 text-white flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Scherpe prijzen</h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    Altijd vooraf een heldere prijsopgave en geen verborgen kosten.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-xl bg-sky-500 text-white flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Ervaren vakmensen</h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    Gediplomeerde monteurs die snel schakelen en netjes opleveren.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <img
              src="/assets/keukenafvoer.jpg"
              className="absolute top-0 right-0 w-3/4 h-3/5 object-cover rounded-sm z-10"
              alt="Keukenafvoer reinigen"
            />
            <div className="absolute bottom-0 left-0 w-3/5 h-2/5 bg-white p-4 z-20">
              <img
                src="/assets/voorbereidingbadkamer.jpg"
                className="w-full h-full object-cover rounded-sm shadow-xl"
                alt="Badkamer voorbereiden voor rioolwerk"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
