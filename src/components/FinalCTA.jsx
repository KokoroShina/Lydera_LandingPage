import Reveal from "./Reveal";
import { DeviceMobile, ArrowRight } from "@phosphor-icons/react";

// Ganti dengan link Google Drive kamu
const DOWNLOAD_URL = "#";

function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[var(--lydera-primary)] px-6 py-24 text-center sm:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Decorative stars (same language as the Hero mockup box) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute left-[8%] top-[14%] text-xl text-white/20">✦</span>
        <span className="absolute right-[10%] top-[18%] text-3xl text-white/25">✦</span>
        <span className="absolute bottom-[16%] left-[14%] text-lg text-white/20">✦</span>
        <span className="absolute bottom-[14%] right-[8%] text-xl text-white/25">✦</span>
        <span className="absolute left-1/2 top-[10%] text-sm text-white/15">✦</span>
      </div>

      <Reveal>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-white"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-white/90">
              Start with Lydera
            </span>
          </div>

          <h2
            id="cta-heading"
            className="text-4xl font-bold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl"
          >
            Open the door to math,
            <span className="block">without limits.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Let's build a more inclusive, accessible way to learn math, where
            every student can grow to their potential.
          </p>

        <div className="mt-10 flex flex-col items-center gap-4">
  {/* CTA "Try Lydera" disembunyikan sementara, belum siap */}

  
</div>
        </div>
      </Reveal>
    </section>
  );
}

export default FinalCTA;