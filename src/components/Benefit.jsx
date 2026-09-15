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
    <section id="benefits" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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

        {/* Benefits Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          {/* Visual */}
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 p-8 sm:p-10">
            <div className="flex min-h-[460px] flex-col justify-between">
              {/* Top Label */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                  LYDERA ECOSYSTEM
                </span>

                <span className="text-xs font-medium text-slate-400">
                  2026
                </span>
              </div>

              {/* Main Visual */}
              <div className="relative flex flex-1 items-center justify-center">
                {/* Background Circle */}
                <div className="absolute h-64 w-64 rounded-full bg-white sm:h-72 sm:w-72" />

                {/* Person Placeholder */}
                <div className="relative z-10">
                  <div className="mx-auto h-24 w-24 rounded-full bg-slate-300" />

                  <div className="mx-auto mt-3 h-40 w-52 rounded-t-[5rem] bg-slate-900 sm:h-44 sm:w-60" />

                  {/* Floating Card */}
                  <div className="absolute -right-16 top-8 w-40 rounded-2xl bg-white p-4 shadow-xl shadow-slate-950/10">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-slate-900" />

                      <div>
                        <div className="h-2 w-16 rounded-full bg-slate-900" />
                        <div className="mt-1.5 h-1.5 w-10 rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-full w-4/5 rounded-full bg-slate-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Text */}
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

          {/* Benefits List */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group py-7 first:pt-8 last:pb-8"
              >
                <div className="flex gap-6">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;