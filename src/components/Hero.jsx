import Reveal from "./Reveal";
import HeroFront from "../assets/hero/Hero_1.svg";
import HeroBack from "../assets/hero/Hero_2.svg";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background: soft blue glow + faint dot grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[var(--lydera-primary)]/[0.07] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(148 163 184 / 0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:gap-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Text Column (Left) */}
        <Reveal direction="left">
          <div className="max-w-xl">
            {/* Tiny eyebrow line */}
            <div className="mb-6 inline-flex items-center gap-2.5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-sm font-medium text-slate-600">
                Built for visually impaired students
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-5xl font-bold leading-[1.05] tracking-tighter text-slate-950 sm:text-6xl lg:text-[4.25rem]"
            >
              Math learning,
              <span className="block bg-gradient-to-r from-[var(--lydera-primary)] to-sky-500 bg-clip-text pb-1 text-transparent">
                without visual barriers.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              An AI-powered learning ecosystem that turns math modules,
              exercises, and evaluations into content that visually impaired
              students and their teachers can access with ease.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--lydera-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--lydera-primary)]/25 ring-1 ring-inset ring-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--lydera-primary-hover)] hover:shadow-xl hover:shadow-[var(--lydera-primary)]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lydera-primary)]"
              >
                Try Lydera

                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <a
                href="#features"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:text-[var(--lydera-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lydera-primary)]"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] text-[var(--lydera-primary)] shadow-sm transition-all duration-200 group-hover:border-[var(--lydera-primary)]/40 group-hover:shadow-md"
                  aria-hidden="true"
                >
                  ▶
                </span>

                See how it works
              </a>
            </div>
          </div>
        </Reveal>

        {/* Phone Mockup Column (Right) */}
        <Reveal direction="right" delay={150}>
          <div
            className="relative mx-auto flex items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--lydera-primary)]"
            style={{
              height: "560px",
              maxWidth: "480px",
              width: "100%",
              boxShadow: "0 18px 45px rgba(37, 99, 235, 0.18)",
            }}
          >
            {/* Decorative stars */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
              aria-hidden="true"
            >
              <span className="absolute left-6 top-8 text-xl text-white/20">
                ✦
              </span>

              <span className="absolute right-8 top-16 text-3xl text-white/25">
                ✦
              </span>

              <span className="absolute bottom-8 right-8 text-xl text-white/25">
                ✦
              </span>
            </div>

            {/* Phone mockups */}
            <div
              className="relative z-10 flex items-center justify-center"
              style={{
                width: "340px",
                height: "460px",
              }}
            >
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Back phone */}
                <img
                  src={HeroBack}
                  alt="Lydera app screen on the back phone"
                  className="relative z-0 w-full scale-[1.3] -translate-x-[-80%] rotate-[0deg] drop-shadow-[0_24px_30px_rgba(15,23,42,0.34)]"
                />

                {/* Front phone */}
                <img
                  src={HeroFront}
                  alt="Lydera app dashboard on the front phone"
                  className="relative z-10 -ml-[37%] w-full scale-[1.3] translate-x-[-20%] rotate-[0deg] drop-shadow-[0_28px_36px_rgba(15,23,42,0.4)]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;