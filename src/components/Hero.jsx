function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        
        {/* Hero Content */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
            <span className="text-xs font-semibold tracking-[0.16em] text-slate-600">
              INCLUSIVE AI LEARNING ECOSYSTEM
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Accessible Math Learning,
            <span className="block text-slate-500">
              Without Limits.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Lydera adalah ekosistem pembelajaran matematika berbasis AI
            yang dirancang untuk membuat proses belajar lebih mudah diakses,
            interaktif, dan bermakna bagi siswa tunanetra serta guru dan
            pendampingnya.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-950/10"
            >
              Coba Sekarang
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-slate-950"
            >
              Pelajari cara kerja Lydera
              <span className="ml-2">↓</span>
            </a>
          </div>

          {/* Small Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-100 pt-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Accessible by Design
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Dibangun dengan aksesibilitas sebagai fondasi
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                AI-Powered Learning
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Pembelajaran yang lebih adaptif
              </p>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Decorative background */}
          <div className="absolute h-72 w-72 rounded-full bg-slate-100 blur-3xl sm:h-96 sm:w-96" />

          {/* Phone Mockup */}
          <div className="relative w-[260px] sm:w-[290px]">
            <div className="rounded-[2.5rem] border-[8px] border-slate-950 bg-slate-950 p-1 shadow-2xl shadow-slate-950/20">
              
              {/* Dynamic Island / Speaker */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white">
                <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

                {/* Phone Screen */}
                <div className="min-h-[520px] bg-slate-50 px-5 pb-7 pt-14">
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">
                        Selamat datang,
                      </p>
                      <p className="mt-1 text-lg font-bold text-slate-950">
                        Lydera
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      L
                    </div>
                  </div>

                  {/* Learning Card */}
                  <div className="mt-7 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-xs font-medium text-slate-500">
                      Sedang belajar
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-slate-950">
                      Matematika
                    </h3>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-3/5 rounded-full bg-slate-900" />
                    </div>

                    <div className="mt-3 flex justify-between text-xs text-slate-500">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>
                  </div>

                  {/* AI Assistant */}
                  <div className="mt-4 rounded-3xl bg-slate-900 p-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm">
                        AI
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          Asisten Belajar
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          Siap membantu
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-300">
                      Ada yang ingin kamu pelajari hari ini?
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                      <p className="text-xs font-medium text-slate-500">
                        Latihan
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        12 Soal
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                      <p className="text-xs font-medium text-slate-500">
                        Modul
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        4 Materi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accessibility Badge */}
            <div className="absolute -left-8 bottom-16 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-950/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm">
                  ♿
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Accessibility
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Built for everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;