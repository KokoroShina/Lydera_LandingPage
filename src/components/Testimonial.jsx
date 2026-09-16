import Reveal from "./Reveal";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              TESTIMONIALS
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Built with learners, not just for them.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Lydera terus dikembangkan berdasarkan kebutuhan dan pengalaman
              pengguna. Cerita dari siswa, guru, dan pendamping akan menjadi
              bagian penting dalam perjalanan kami.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-sm sm:p-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Coming from our pilot
              </span>
            </div>

            <div className="mt-8">
              <p className="text-2xl font-medium leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
                “Cerita dan pengalaman pengguna Lydera akan hadir di sini
                setelah proses pilot bersama sekolah dan pendamping
                pembelajaran.”
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-400">
                ?
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Siswa / Guru / Pendamping
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Lydera Pilot Program
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-7 max-w-xl text-xs leading-5 text-slate-400">
            Kami memilih untuk menampilkan pengalaman pengguna yang nyata
            daripada membuat testimonial sebelum proses pilot dilakukan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;