import Reveal from "./Reveal";

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
    <section id="features" className="bg-slate-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
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
        </Reveal>

        <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-32 lg:mt-28 lg:space-y-36">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={feature.number}
                className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24"
              >
                <Reveal
                  direction={isReversed ? "right" : "left"}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="text-sm font-semibold text-slate-400">
                        {feature.number}
                      </span>

                      <span className="h-px w-8 bg-slate-300" />

                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {feature.label}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
                      {feature.description}
                    </p>

                    <div className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      Explore feature
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  direction={isReversed ? "left" : "right"}
                  delay={100}
                  className={
                    isReversed
                      ? "lg:order-1 lg:justify-self-start"
                      : "lg:justify-self-end"
                  }
                >
                  <div className="flex justify-center">
                    <div className="relative w-[225px] sm:w-[270px]">
                      <div className="rounded-[2.25rem] border-[7px] border-slate-950 bg-slate-950 p-1.5 shadow-2xl shadow-slate-950/15">
                        <div className="relative overflow-hidden rounded-[1.8rem] bg-white">
                          <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950" />

                          <div className="min-h-[460px] bg-slate-50 px-4 pb-5 pt-12 sm:min-h-[500px] sm:px-5 sm:pb-6 sm:pt-14">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="h-2.5 w-16 rounded-full bg-slate-200" />
                                <div className="mt-2 h-4 w-28 rounded-full bg-slate-900" />
                              </div>

                              <div className="h-8 w-8 rounded-full bg-slate-200" />
                            </div>

                            <div className="mt-6 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:mt-7 sm:p-5">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-[11px] font-bold text-white sm:h-10 sm:w-10 sm:text-xs">
                                  {feature.number}
                                </div>

                                <div>
                                  <div className="h-2.5 w-24 rounded-full bg-slate-900" />
                                  <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
                                </div>
                              </div>

                              <div className="mt-6 space-y-3">
                                <div className="h-3 w-full rounded-full bg-slate-100" />
                                <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                                <div className="h-3 w-4/6 rounded-full bg-slate-100" />
                              </div>

                              <div className="mt-6 rounded-2xl bg-slate-100 p-3 sm:p-4">
                                <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                                <div className="mt-3 h-14 rounded-xl bg-white sm:h-16" />
                              </div>

                              <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="h-11 rounded-xl bg-slate-100 sm:h-12" />
                                <div className="h-11 rounded-xl bg-slate-100 sm:h-12" />
                              </div>
                            </div>

                            <div className="mt-4 flex items-center justify-around rounded-2xl bg-white px-3 py-3.5 ring-1 ring-slate-100 sm:mt-5 sm:py-4">
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`absolute -bottom-5 ${
                          isReversed ? "-right-5" : "-left-5"
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
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;