import Reveal from "./Reveal";

function FinalCTA() {
  return (
    <section id="cta" className="bg-slate-950 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              START WITH LYDERA
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Buka Pintu Matematika
              <span className="block text-slate-400">
                Tanpa Batas Bersama Lydera.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Mari membangun pengalaman belajar matematika yang lebih inklusif,
              mudah diakses, dan dapat membantu setiap siswa berkembang sesuai
              potensinya.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[var(--lydera-primary)] px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-[var(--lydera-primary-hover)] hover:shadow-lg hover:shadow-[var(--lydera-primary)]/20"
            >
              Coba Sekarang
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--lydera-primary)] transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              Kenali Lydera
              <span className="ml-2">↑</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mx-auto mt-16 max-w-xl border-t border-white/10 pt-6">
            <p className="text-xs leading-5 text-slate-500">
              Inclusive technology. Meaningful learning. A more accessible
              future.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCTA;
