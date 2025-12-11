export default function Testimonial() {
  return (
    <section id="reviews" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/assets/toiletontstoppen.jpg"
              className="w-full h-[500px] object-cover rounded-sm grayscale-[20%]"
              alt="Toilet ontstoppen bij een klant"
            />
            <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-white p-6 shadow-2xl max-w-sm rounded-sm border border-slate-100">
              <div className="flex gap-1 text-sky-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed italic">
                &quot;Binnen een uur stonden ze voor de deur. Netjes gewerkt, alles uitgelegd en de prijs was wat vooraf afgesproken was.&quot;
              </p>
              <p className="font-semibold text-slate-900 text-sm">Braydon Butler</p>
            </div>
          </div>
          <div className="pl-0 lg:pl-12">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
              Dé oplossing voor al je riool- en ontstoppingswerk
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              We combineren snelle responstijden met duurzame oplossingen. Of het nu gaat om onderhoud, camerainspecties of een acute verstopping: Rioolhulp Gils regelt het zonder gedoe.
            </p>
            <a href="tel:+31851304693" className="bg-slate-950 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors inline-block">
              Bel voor hulp: +31 85 130 4693
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
