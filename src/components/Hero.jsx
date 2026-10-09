import Reveal from "./Reveal";
import { ArrowDown } from "@phosphor-icons/react";
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
                href="#features"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--lydera-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--lydera-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lydera-primary)] motion-reduce:transition-none"
              >
                See how it works
                <ArrowDown
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Phone Mockup Column (Right) */}
        <Reveal direction="right" delay={150}>
          <div
            className="relative mx-auto flex items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--lydera-primary)] lg:mr-0"
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
                {/* Back phone (dekoratif, tidak perlu dibacakan screen reader) */}
                <img
                  src={HeroBack}
                  alt=""
                  aria-hidden="true"
                  className="relative z-0 w-full translate-x-[80%] scale-[1.3] rotate-[0deg] drop-shadow-[0_24px_30px_rgba(15,23,42,0.34)]"
                />

                {/* Front phone */}
                <img
                  src={HeroFront}
                  alt="Lydera app dashboard showing modules and exams"
                  className="relative z-10 -ml-[37%] w-full translate-x-[-20%] scale-[1.3] rotate-[0deg] drop-shadow-[0_28px_36px_rgba(15,23,42,0.4)]"
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