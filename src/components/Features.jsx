import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

// ── Import asset fitur ──
import AnotasiDepan from "../assets/features/anotasi/Anotasi_Depan.svg";
import AnotasiBelakang from "../assets/features/anotasi/Anotasi_Belakang.svg";
import Quizzer from "../assets/features/quizer/Quizzer.svg";
import Scriber from "../assets/features/Scriber/Scriber.svg";
import EvaluaizerDepan from "../assets/features/evaluaizer/Evaluaizer_Depan.svg";
import EvaluaizerBelakang from "../assets/features/evaluaizer/Evaluarize_Belakang.svg";
import Clarifer from "../assets/features/clarifer/Clarifer.svg";

/* ─────────────────────────────────────────────────────────────
   CUSTOM HOOK: PARALLAX SCROLL
   Mockup HP bergerak naik-turun halus saat di-scroll.
   Mati otomatis kalau pengguna mengaktifkan reduced motion.
*/
function useParallax() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let frame;
    const handleScroll = () => {
      if (!ref.current) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = ref.current.getBoundingClientRect();
        const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
        // Batasi offset biar gerakannya halus
        setOffset(Math.max(-18, Math.min(18, distance * 0.035)));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, offset };
}

/* ─────────────────────────────────────────────────────────────
   FEATURE VISUAL: KOTAK BIRU + MOCKUP HP
   Kotak biru & mockup HP punya ukuran INDEPENDEN.
   (Bagian ini sengaja tidak diubah.)
*/
function FeatureVisual({ feature }) {
  const isDouble = Boolean(feature.secondaryImage);
  const { ref, offset } = useParallax();

  return (
    <div
      ref={ref}
      // ── KOTAK BIRU (UKURAN FIX) ──
      className="relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--lydera-primary)]"
      style={{
        // Tinggi kotak FIX — adjust di sini
        height: isDouble ? "520px" : "460px",
        // Lebar maksimal kotak FIX — adjust di sini
        maxWidth: isDouble ? "500px" : "420px",
        // Shadow halus biar kotak "ngambang"
        boxShadow: "0 18px 45px rgba(37, 99, 235, 0.18)",
      }}
    >
      {/* ── DEKORASI BINTANG ── */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
        aria-hidden="true"
      >
        <span className="absolute left-6 top-8 text-xl text-white/20">✦</span>
        <span className="absolute right-8 top-16 text-3xl text-white/25">
          ✦
        </span>
        <span className="absolute bottom-12 left-10 text-lg text-white/20">
          ✦
        </span>
        <span className="absolute bottom-8 right-8 text-xl text-white/25">
          ✦
        </span>
        <span className="absolute left-1/2 top-8 text-sm text-white/15">✦</span>
      </div>

      {/* ── MOCKUP HP (UKURAN INDEPENDEN) ── */}
      <div
        className="relative z-10 flex items-center justify-center motion-safe:animate-feature-float"
        style={{
          // Lebar container mockup FIX — adjust di sini
          width: isDouble ? "340px" : "280px",
          // Tinggi container mockup FIX — adjust di sini
          height: isDouble ? "440px" : "400px",
          transform: `translateY(${offset}px)`,
        }}
      >
        {isDouble ? (
          // ── DOUBLE PHONE LAYOUT ──
          <div className="relative flex h-full w-full items-center justify-center">
            {/* HP Belakang */}
            <img
              src={feature.secondaryImage}
              alt=""
              aria-hidden="true"
              className="relative z-0 w-full scale-[1.1] -translate-x-[-90%] rotate-[5deg] drop-shadow-[0_24px_28px_rgba(15,23,42,0.34)]"
            />

            {/* HP Depan */}
            <img
              src={feature.image}
              alt={`${feature.title} interface`}
              className="relative z-10 -ml-[10%] w-full scale-[1.2] translate-x-[-50%] rotate-[-5deg] drop-shadow-[0_28px_32px_rgba(15,23,42,0.4)]"
            />
          </div>
        ) : (
          // ── SINGLE PHONE LAYOUT ──
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            {/* Stats pills (khusus Quizzer) */}
            {feature.stats && (
              <div className="mb-4 flex items-center gap-2">
                {feature.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`flex min-w-14 flex-col items-center rounded-xl px-2.5 py-1.5 ${
                      stat.accent
                        ? "bg-white text-[var(--lydera-primary)]"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    <span className="text-base font-bold">{stat.value}</span>
                    <span className="text-[8px] font-medium uppercase tracking-wide opacity-80">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <img
              src={feature.image}
              alt={`${feature.title} interface`}
              className="w-full scale-[1.3] drop-shadow-[0_28px_32px_rgba(15,23,42,0.4)]"
              style={{
                transform: `translate(${feature.imageOffsetX || "0%"}, ${
                  feature.imageOffsetY || "0%"
                })`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   KOMPONEN UTAMA: FEATURES SECTION
   Layout selang-seling:
   - Fitur 01, 03, 05 → Teks KIRI, Gambar KANAN
   - Fitur 02, 04     → Gambar KIRI, Teks KANAN
*/
function Features() {
  const features = [
    {
      id: "annoter",
      number: "01",
      title: "Annoter",
      audience: "For teachers",
      label: "Accessible Content",
      summary:
        "Turns an uploaded PDF module into text a screen reader can read aloud, reviewed by teachers before it reaches students.",
      points: [
        "Extracts text, tables, images, and math notation",
        "Converts everything into linear, readable text",
        "Teachers validate the result before publishing",
      ],
      image: AnotasiDepan,
      secondaryImage: AnotasiBelakang,
    },
    {
      id: "quizzer",
      number: "02",
      title: "Quizzer",
      audience: "For teachers",
      label: "AI Question Generator",
      summary:
        "Generates multiple-choice questions from an uploaded module, complete with answer keys and justifications.",
      points: [
        "Difficulty based on Bloom's Taxonomy and learning outcomes",
        "Every question, answer, and justification is editable",
        "Save and publish to students when ready",
      ],
      image: Quizzer,
      imageOffsetX: "10%",
    },
    {
      id: "scriber",
      number: "03",
      title: "Scriber",
      audience: "For students",
      label: "Digital Workspace",
      summary:
        "An accessible workspace where students write out each step of their calculations.",
      points: [
        "Custom keyboard for entering math notation easily",
        "Notation is interpreted accurately by screen readers",
        "Record, review, and correct every step",
      ],
      image: Scriber,
      imageOffsetX: "25%",
    },
    {
      id: "evaluaizer",
      number: "04",
      title: "Evaluaizer",
      audience: "For students & teachers",
      label: "AI Evaluation",
      summary:
        "Shows whether an answer is correct and explains why, down to the step where the reasoning went wrong.",
      points: [
        "Clear justification for every result",
        "Analyzes calculation steps from Digital Scratchwork",
        "Finds where the mistake started, not just the final error",
      ],
      image: EvaluaizerDepan,
      secondaryImage: EvaluaizerBelakang,
    },
    {
      id: "clarifier",
      number: "05",
      title: "Clarifier",
      audience: "For students",
      label: "RAG Learning Assistant",
      summary:
        "A study assistant that explains unclear parts of a module and answers follow-up questions.",
      points: [
        "Answers from teacher-curated modules first",
        "Reliable external resources for extra context",
        "Ask follow-up questions until it makes sense",
      ],
      image: Clarifer,
      imageOffsetX: "25%",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
      aria-labelledby="features-heading"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-[var(--lydera-primary)]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── HEADER SECTION ── */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">
                How It Works
              </span>
            </div>

            <h2
              id="features-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-slate-950 sm:text-5xl"
            >
              One ecosystem.{" "}
              <span className="bg-gradient-to-r from-[var(--lydera-primary)] to-sky-500 bg-clip-text text-transparent">
                Five ways to make math easier.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Each Lydera feature removes a barrier in learning math, from
              accessing materials to understanding results.
            </p>
          </div>
        </Reveal>

        {/* ── NAVIGASI RINGKAS (5 chip) ── */}
        <Reveal delay={100}>
          <nav aria-label="Jump to feature" className="mt-10">
            <ul className="flex flex-wrap gap-2.5">
              {features.map((feature) => (
                <li key={feature.id}>
                  <a
                    href={`#${feature.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-[var(--lydera-primary)]/40 hover:text-[var(--lydera-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lydera-primary)]"
                  >
                    <span className="text-xs font-bold text-[var(--lydera-primary)]">
                      {feature.number}
                    </span>
                    {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        {/* ── DAFTAR FITUR ── */}
        <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-32 lg:mt-28 lg:space-y-40">
          {features.map((feature, index) => {
            // Selang-seling: index ganjil = reversed (gambar kiri)
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={feature.id}
                id={feature.id}
                aria-labelledby={`${feature.id}-title`}
                className="grid scroll-mt-28 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24"
              >
                {/* ── KOLOM TEKS ── */}
                <Reveal
                  direction={isReversed ? "right" : "left"}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <div className="max-w-xl">
                    {/* Nomor + label */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-sm font-bold text-[var(--lydera-primary)]">
                        {feature.number}
                      </span>
                      <span
                        className="h-px w-8 bg-[var(--lydera-primary)]/30"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-slate-600">
                        {feature.label}
                      </span>
                    </div>

                    {/* Judul + chip peran */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                      <h3
                        id={`${feature.id}-title`}
                        className="text-3xl font-bold tracking-tighter text-slate-950 sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
                      >
                        {feature.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-[var(--lydera-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--lydera-primary)]">
                        {feature.audience}
                      </span>
                    </div>

                    {/* Ringkasan */}
                    <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-slate-700 sm:text-lg">
                      {feature.summary}
                    </p>

                    {/* Poin-poin */}
                    <ul className="mt-6 space-y-3">
                      {feature.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                        >
                          <span
                            className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--lydera-primary-soft)] text-[var(--lydera-primary)]"
                            aria-hidden="true"
                          >
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* ── KOLOM MOCKUP HP (KOTAK BIRU) ── */}
                <Reveal
                  direction={isReversed ? "left" : "right"}
                  delay={100}
                  className={isReversed ? "lg:order-1" : ""}
                >
                  <FeatureVisual feature={feature} />
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;