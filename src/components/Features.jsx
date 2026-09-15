function Features() {
  const features = [
    {
      number: "01",
      title: "Anotasi Modul",
      description:
        "Mengubah modul PDF menjadi teks yang lebih mudah diakses oleh screen reader. Hasil anotasi dapat diverifikasi oleh guru sebelum digunakan siswa.",
      label: "Accessible Content",
    },
    {
      number: "02",
      title: "Pembuatan Soal Otomatis",
      description:
        "Membantu guru menghasilkan soal latihan berdasarkan materi pembelajaran dan tingkat kognitif Bloom’s Taxonomy.",
      label: "AI Question Generator",
    },
    {
      number: "03",
      title: "Custom Keyboard Digital",
      description:
        "Menyediakan keyboard khusus untuk membantu siswa memasukkan simbol matematika dan ekspresi LaTeX dengan lebih mudah.",
      label: "Math Input",
    },
    {
      number: "04",
      title: "Scratchwork Digital",
      description:
        "Ruang kerja digital untuk mencatat dan menyelesaikan proses perhitungan matematika secara bertahap.",
      label: "Digital Workspace",
    },
    {
      number: "05",
      title: "Analisis Hasil Ujian",
      description:
        "Menganalisis jawaban siswa dan memberikan evaluasi langkah demi langkah untuk membantu memahami proses penyelesaian soal.",
      label: "AI Evaluation",
    },
    {
      number: "06",
      title: "Chatbot Asisten Belajar",
      description:
        "Asisten belajar berbasis RAG yang membantu menjawab pertanyaan siswa berdasarkan sumber pembelajaran yang relevan dan dilengkapi sitasi.",
      label: "RAG Learning Assistant",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            One ecosystem. Six ways to make math easier.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Setiap fitur Lydera dirancang untuk membantu menghilangkan
            hambatan dalam proses belajar matematika, mulai dari mengakses
            materi hingga memahami hasil pembelajaran.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 space-y-28 sm:mt-28 sm:space-y-40">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={feature.number}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24"
              >
                {/* Text */}
                <div
                  className={`max-w-xl ${
                    isReversed ? "lg:order-2 lg:justify-self-end" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-400">
                      {feature.number}
                    </span>

                    <span className="h-px w-10 bg-slate-300" />

                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {feature.label}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {feature.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {feature.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Explore feature
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>

                {/* Phone Mockup */}
                <div
                  className={`flex ${
                    isReversed
                      ? "lg:order-1 lg:justify-self-start"
                      : "lg:justify-self-end"
                  } justify-center`}
                >
                  <div className="relative w-[250px] sm:w-[280px]">
                    {/* Phone */}
                    <div className="rounded-[2.5rem] border-[7px] border-slate-950 bg-slate-950 p-1.5 shadow-2xl shadow-slate-950/15">
                      <div className="relative overflow-hidden rounded-[2rem] bg-white">
                        {/* Dynamic Island */}
                        <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

                        {/* Screen */}
                        <div className="min-h-[500px] bg-slate-50 px-5 pb-6 pt-14">
                          {/* Fake App Header */}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="h-2.5 w-16 rounded-full bg-slate-200" />
                              <div className="mt-2 h-4 w-28 rounded-full bg-slate-900" />
                            </div>

                            <div className="h-8 w-8 rounded-full bg-slate-200" />
                          </div>

                          {/* Feature Screen */}
                          <div className="mt-7 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
                                {feature.number}
                              </div>

                              <div>
                                <div className="h-2.5 w-24 rounded-full bg-slate-900" />
                                <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
                              </div>
                            </div>

                            {/* Placeholder Content */}
                            <div className="mt-7 space-y-3">
                              <div className="h-3 w-full rounded-full bg-slate-100" />
                              <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                              <div className="h-3 w-4/6 rounded-full bg-slate-100" />
                            </div>

                            <div className="mt-7 rounded-2xl bg-slate-100 p-4">
                              <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                              <div className="mt-3 h-16 rounded-xl bg-white" />
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3">
                              <div className="h-12 rounded-xl bg-slate-100" />
                              <div className="h-12 rounded-xl bg-slate-100" />
                            </div>
                          </div>

                          {/* Bottom Navigation */}
                          <div className="mt-5 flex items-center justify-around rounded-2xl bg-white px-3 py-4 ring-1 ring-slate-100">
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Small Decorative Label */}
                    <div
                      className={`absolute -bottom-5 ${
                        isReversed ? "-right-6" : "-left-6"
                      } hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-950/5 sm:block`}
                    >
                      <p className="text-xs font-semibold text-slate-900">
                        Lydera App
                      </p>

                      <p className="mt-1 text-[11px] text-slate-500">
                        {feature.label}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;