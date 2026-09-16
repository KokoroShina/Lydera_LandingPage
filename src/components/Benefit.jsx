import Reveal from "./Reveal";

function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Belajar lebih mandiri",
      description:
        "Siswa dapat mengakses materi, mengerjakan latihan, dan mengeksplorasi konsep matematika dengan dukungan teknologi yang dirancang untuk aksesibilitas.",
    },
    {
      number: "02",
      title: "Materi lebih mudah dipahami",
      description:
        "Konten pembelajaran dapat diolah menjadi format yang lebih ramah screen reader sehingga informasi matematika lebih mudah diakses.",
    },
    {
      number: "03",
      title: "Guru lebih mudah mendampingi",
      description:
        "Guru dan pendamping mendapatkan alat untuk membuat soal, mengelola materi, serta memahami perkembangan belajar siswa.",
    },
    {
      number: "04",
      title: "Feedback yang lebih bermakna",
      description:
        "Analisis berbasis AI membantu memberikan evaluasi terhadap proses pengerjaan, bukan hanya melihat jawaban akhir.",
    },
  ];

  return (
    <section id="benefits" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              BENEFITS
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              More than accessible.
              <span className="block text-slate-500">
                Designed to empower.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Lydera tidak hanya membantu membuat matematika lebih mudah
              diakses, tetapi juga mendukung siswa dan pendamping sepanjang
              proses pembelajaran.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 p-7 sm:p-10">
              <div className="flex min-h-[390px] flex-col justify-between sm:min-h-[460px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                    LYDERA ECOSYSTEM
                  </span>

                  <span className="text-xs font-medium text-slate-400">
                    2026
                  </span>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute h-56 w-56 rounded-full bg-white sm:h-72 sm:w-72" />

                  <div className="relative z-10 w-[220px] rounded-[2rem] border-[6px] border-slate-950 bg-slate-950 p-1.5 shadow-2xl shadow-slate-950/10 sm:w-[250px]">
                    <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                      <div className="px-4 pb-5 pt-10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="h-2 w-12 rounded-full bg-slate-200" />
                            <div className="mt-2 h-3.5 w-20 rounded-full bg-slate-900" />
                          </div>

                          <div className="h-7 w-7 rounded-full bg-slate-200" />
                        </div>

                        <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                          <div className="h-2.5 w-20 rounded-full bg-slate-900" />

                          <div className="mt-4 h-20 rounded-xl bg-slate-100">
                            <div className="mx-auto pt-6 text-center text-2xl font-semibold text-slate-300">
                              ∑
                            </div>
                          </div>

                          <div className="mt-4 flex gap-2">
                            <div className="h-2.5 flex-1 rounded-full bg-slate-100" />
                            <div className="h-2.5 w-10 rounded-full bg-slate-200" />
                          </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="h-12 rounded-xl bg-white ring-1 ring-slate-100" />
                          <div className="h-12 rounded-xl bg-white ring-1 ring-slate-100" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-2 top-1/2 hidden w-36 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-bold text-white">
                        AI
                      </div>

                      <div>
                        <div className="h-2 w-14 rounded-full bg-slate-900" />
                        <div className="mt-1.5 h-1.5 w-9 rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-full w-4/5 rounded-full bg-slate-900" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Learning without barriers.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Technology that adapts to the learner.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.number} delay={index * 100}>
                <article className="group py-6 first:pt-7 last:pb-7 sm:py-7">
                  <div className="flex gap-5 sm:gap-6">
                    <span className="pt-1 text-xs font-semibold text-slate-400">
                      {benefit.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                          {benefit.title}
                        </h3>

                        <span className="shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-slate-900">
                          →
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;