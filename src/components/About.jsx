import Reveal from "./Reveal";

function About() {
  const highlights = [
    {
      title: "Accessible by Design",
      description:
        "Aksesibilitas menjadi bagian dari fondasi Lydera, bukan sekadar fitur tambahan.",
    },
    {
      title: "AI-Powered Learning",
      description:
        "Teknologi AI membantu menghadirkan pengalaman belajar yang lebih adaptif dan personal.",
    },
    {
      title: "Research-Based",
      description:
        "Pengembangan Lydera berangkat dari kebutuhan nyata dalam proses pembelajaran siswa tunanetra.",
    },
  ];

  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-500">
              ABOUT US
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Making Math More Accessible.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Lydera hadir untuk menjawab tantangan pembelajaran matematika
              bagi siswa tunanetra. Kami menggabungkan teknologi AI,
              aksesibilitas, dan pendekatan pembelajaran yang berpusat pada
              kebutuhan pengguna.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal direction="left">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200/80 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                01
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-950">
                Berangkat dari kebutuhan nyata
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Pengembangan Lydera didasarkan pada pemahaman terhadap
                pengalaman belajar siswa tunanetra, termasuk bagaimana materi
                matematika, soal, dan proses evaluasi dapat menjadi lebih
                mudah diakses.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Salah satu proses penggalian kebutuhan dilakukan bersama
                lingkungan pendidikan luar biasa, termasuk SLBN A Citeureup,
                untuk memahami tantangan yang dihadapi siswa dan pendamping
                dalam pembelajaran matematika.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} direction="right">
                <div className="border-b border-slate-200 pb-5 last:border-b-0">
                  <div className="flex gap-4">
                    <span className="pt-0.5 text-xs font-semibold text-slate-400">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-20 border-t border-slate-200 pt-8">
            <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
              Karena belajar matematika seharusnya tidak dibatasi oleh cara
              seseorang melihat dunia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;