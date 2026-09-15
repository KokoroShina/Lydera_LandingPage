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
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
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

        {/* User Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {users.map((user) => (
            <article
              key={user.number}
              className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-950/5 sm:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-400">
                  {user.number}
                </span>

                <span className="text-sm font-medium text-slate-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {user.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  {user.description}
                </p>
              </div>

              {/* Points */}
              <ul className="mt-8 space-y-4">
                {user.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Users;