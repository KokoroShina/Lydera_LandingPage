import Reveal from "./Reveal";

function Users() {
  const users = [
    {
      number: "01",
      title: "Siswa Tunanetra",
      description:
        "Mendapatkan pengalaman belajar matematika yang lebih mudah diakses, interaktif, dan mendukung proses belajar secara mandiri.",
      points: [
        "Mengakses materi dalam format yang ramah screen reader",
        "Berlatih dengan soal yang dapat disesuaikan",
        "Mendapatkan bantuan AI selama proses belajar",
      ],
    },
    {
      number: "02",
      title: "Guru / Pendamping",
      description:
        "Membantu guru dan pendamping memahami proses belajar siswa melalui materi, pembuatan soal, dan analisis hasil pembelajaran.",
      points: [
        "Membuat dan menyesuaikan soal pembelajaran",
        "Memantau serta menganalisis hasil ujian",
        "Mendampingi siswa dengan informasi yang lebih terstruktur",
      ],
    },
  ];

  return (
    <section id="users" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--lydera-primary)]">
              WHO IS IT FOR?
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Designed around the people who learn and teach.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Lydera dirancang untuk mendukung dua sisi utama dalam proses
              pembelajaran: siswa sebagai pembelajar dan guru atau pendamping
              sebagai fasilitator.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lydera-primary)] hover:bg-[var(--lydera-primary-soft)] hover:shadow-xl hover:shadow-[var(--lydera-primary)/5] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--lydera-primary)]">
                  {users[0].number}
                </span>

                <span className="text-sm font-medium text-[var(--lydera-primary)] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <div className="mt-16">
                <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {users[0].title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  {users[0].description}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {users[0].points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lydera-primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <article className="group h-full rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lydera-primary)] hover:bg-[var(--lydera-primary-soft)] hover:shadow-xl hover:shadow-[var(--lydera-primary)/5] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-400 group-hover:text-[var(--lydera-primary)] transition-colors duration-300">
                  {users[1].number}
                </span>

                <span className="text-sm font-medium text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--lydera-primary)]">
                  →
                </span>
              </div>

              <div className="mt-16">
                <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {users[1].title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  {users[1].description}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {users[1].points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lydera-primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Users;