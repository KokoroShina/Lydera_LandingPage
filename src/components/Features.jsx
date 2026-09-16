import Reveal from "./Reveal";

import AnotasiDepan from "../assets/features/anotasi/Anotasi_Depan.svg";
import AnotasiBelakang from "../assets/features/anotasi/Anotasi_Belakang.svg";
import Quizzer from "../assets/features/quizer/Quizzer.svg";
import Scriber from "../assets/features/Scriber/Scriber.svg";
import EvaluaizerDepan from "../assets/features/evaluaizer/Evaluaizer_Depan.svg";
import EvaluaizerBelakang from "../assets/features/evaluaizer/Evaluarize_Belakang.svg";
import Clarifer from "../assets/features/clarifer/Clarifer.svg";


/* ── Floating Badges ── */
function FloatingCard({ type }) {
  if (type === "annotation") {
    return (
      <>
        {/* Bottom-left: source file badge */}
        <div className="absolute -left-6 bottom-12 hidden w-44 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lydera-primary-soft)] text-base">
              📄
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Module.pdf</p>
              <p className="mt-0.5 text-[11px] text-slate-500">Original document</p>
            </div>
          </div>
        </div>

        {/* Top-right: accessible badge */}
        <div className="absolute -right-6 top-12 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-950/10 sm:block">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-600">✓</span>
            <span className="text-xs font-semibold text-slate-900">Accessible</span>
          </div>
        </div>

        {/* Bottom-right: screen reader badge */}
        <div className="absolute -right-6 bottom-16 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Screen Reader</p>
          <p className="mt-1 text-xs font-semibold text-[var(--lydera-primary)]">Ready ✓</p>
        </div>
      </>
    );
  }

  if (type === "quizzer") {
    return (
      <>
        {/* Bottom-right: taxonomy */}
        <div className="absolute -right-6 bottom-10 hidden w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Bloom's Taxonomy</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">Analyze</span>
            <span className="rounded-full bg-[var(--lydera-primary-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--lydera-primary)]">AI</span>
          </div>
        </div>

        {/* Top-left: questions generated */}
        <div className="absolute -left-6 top-14 hidden w-44 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Generated</p>
          <div className="mt-2 flex items-end gap-1">
            <span className="text-2xl font-bold text-slate-900">10</span>
            <span className="mb-0.5 text-xs text-slate-500">questions</span>
          </div>
        </div>
      </>
    );
  }

  if (type === "scriber") {
    return (
      <>
        {/* Bottom-left: math keyboard */}
        <div className="absolute -left-6 bottom-10 hidden w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Math Input</p>
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {["+", "−", "×", "÷", "√", "x²", "=", "(", ")", "π"].map((symbol) => (
              <span key={symbol} className="flex h-7 items-center justify-center rounded-lg bg-slate-50 text-[11px] font-medium text-slate-600 ring-1 ring-slate-100">
                {symbol}
              </span>
            ))}
          </div>
        </div>

        {/* Top-right: step counter */}
        <div className="absolute -right-6 top-14 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Steps</p>
          <div className="mt-2 flex items-end gap-1">
            <span className="text-2xl font-bold text-slate-900">4</span>
            <span className="mb-0.5 text-xs text-slate-500">recorded</span>
          </div>
        </div>
      </>
    );
  }

  if (type === "evaluaizer") {
    return (
      <>
        {/* Bottom-left: AI feedback */}
        <div className="absolute -left-6 bottom-12 hidden w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">AI Feedback</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">✓</span>
            <div>
              <p className="text-xs font-semibold text-slate-900">Step reviewed</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Reasoning analyzed</p>
            </div>
          </div>
        </div>

        {/* Top-right: accuracy badge */}
        <div className="absolute -right-6 top-12 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Accuracy</p>
          <div className="mt-2 flex items-end gap-1">
            <span className="text-2xl font-bold text-[var(--lydera-primary)]">92%</span>
          </div>
        </div>
      </>
    );
  }

  if (type === "clarifier") {
    return (
      <>
        {/* Bottom-right: source badge */}
        <div className="absolute -right-6 bottom-10 hidden w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Source</p>
          <div className="mt-3 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lydera-primary-soft)] text-xs">📄</div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Learning Module</p>
              <p className="mt-1 text-[10px] text-slate-500">Chapter 02 · Verified</p>
            </div>
          </div>
        </div>

        {/* Top-left: response badge */}
        <div className="absolute -left-6 top-14 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-950/10 sm:block">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--lydera-primary-soft)] text-xs text-[var(--lydera-primary)]">💬</span>
            <span className="text-xs font-semibold text-slate-900">AI Explained</span>
          </div>
        </div>
      </>
    );
  }

  return null;
}

/* ── Stat Pill ── */
function StatPill({ label, value, accent }) {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl px-5 py-3 ${
        accent
          ? "bg-[var(--lydera-primary)] text-white"
          : "bg-white text-slate-900 ring-1 ring-slate-200"
      }`}
    >
      <span className="text-xl font-bold">{value}</span>
      <span
        className={`mt-0.5 text-[10px] font-medium uppercase tracking-wide ${
          accent ? "opacity-80" : "text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Feature Visual ── */
function FeatureVisual({ feature }) {
  const isDouble = !!feature.secondaryImage;

  return (
    <div
      className={`relative flex min-h-[520px] items-center justify-center overflow-visible rounded-[2rem] p-8 sm:min-h-[580px] sm:p-12 ${
        feature.surface === "soft"
          ? "bg-[var(--lydera-primary-soft)]"
          : "bg-white ring-1 ring-slate-200"
      }`}
    >
      {/* Background math decorations */}
      {feature.decor === "math" && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
          <span className="absolute left-6 top-10 text-5xl font-bold text-blue-100/70">x²</span>
          <span className="absolute right-8 top-20 text-4xl font-bold text-blue-100/70">√x</span>
          <span className="absolute bottom-14 left-10 text-3xl font-bold text-blue-100/70">∑</span>
          <span className="absolute bottom-20 right-10 text-4xl font-bold text-blue-100/70">π</span>
          <span className="absolute left-1/2 top-8 -translate-x-1/2 text-3xl font-bold text-blue-100/50">∫</span>
        </div>
      )}

      {/* Background dot decorations */}
      {feature.decor === "dots" && (
        <div className="pointer-events-none absolute inset-0 rounded-[2rem]">
          {["left-10 top-14", "right-14 top-20", "bottom-18 left-18", "bottom-10 right-10", "left-1/2 top-1/3", "right-1/3 bottom-1/3"].map((pos, i) => (
            <span
              key={pos}
              className={`absolute ${pos} ${
                i % 2 === 0 ? "h-3 w-3 bg-blue-200/80" : "h-2 w-2 bg-blue-100/80"
              } rounded-full`}
            />
          ))}
        </div>
      )}

      {/* Soft radial glow behind the phone(s), keeps things feeling premium without going dark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl sm:h-96 sm:w-96"
        style={{ background: "radial-gradient(circle, var(--lydera-primary-soft), transparent 70%)" }}
      />

      {/* Dual images */}
      {isDouble ? (
        <div className="relative h-[440px] w-full max-w-[520px] sm:h-[500px]">
          {/* Back card — shifted right of center, slightly rotated */}
          <img
            src={feature.secondaryImage}
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-0 w-[210px] -translate-x-[25%] -translate-y-1/2 rotate-[7deg] drop-shadow-2xl sm:w-[260px]"
          />

          {/* Front card — shifted left of center, counter-rotated */}
          <img
            src={feature.image}
            alt={`${feature.title} interface`}
            className="absolute left-1/2 top-1/2 z-10 w-[210px] -translate-x-[75%] -translate-y-1/2 rotate-[-7deg] drop-shadow-2xl sm:w-[260px]"
          />

          {feature.floatingType && <FloatingCard type={feature.floatingType} />}
        </div>
      ) : (
        /* Single image */
        <div className="relative flex w-full flex-col items-center gap-8">
          {feature.stats && (
            <div className="flex items-center gap-3">
              {feature.stats.map((s) => (
                <StatPill key={s.label} {...s} />
              ))}
            </div>
          )}

          <div className="relative">
            <img
              src={feature.image}
              alt={`${feature.title} interface`}
              className="relative z-10 w-[220px] drop-shadow-2xl sm:w-[270px]"
            />
            {feature.floatingType && <FloatingCard type={feature.floatingType} />}
          </div>

          {feature.bottomLabel && (
            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 ring-1 ring-slate-200">
              <span className="text-sm font-medium text-slate-700">{feature.bottomLabel}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Features() {
  const features = [
    {
      number: "01",
      title: "Annoter",
      description:
        "Converts an uploaded PDF module to extract text and transform tables, images, and math notations into linear text that can be read aloud by a screen reader using artificial intelligence, which teachers then review and validate before it reaches students.",
      label: "Accessible Content",
      image: AnotasiDepan,
      secondaryImage: AnotasiBelakang,
      floatingType: "annotation",
      surface: "white",
    },
    {
      number: "02",
      title: "Quizzer",
      description:
        "Helps teachers create multiple choice exam questions complete with answer keys and justifications directly using artificial intelligence from an uploaded module, with difficulty based on Bloom's Taxonomy and learning outcomes. Teachers can then directly edit any question, answer, or justification before saving and publishing it to students.",
      label: "AI Question Generator",
      image: Quizzer,
      floatingType: "quizzer",
      surface: "soft",
      stats: [
        { label: "Questions", value: "10", accent: true },
        { label: "Difficulty", value: "C4", accent: false },
        { label: "Auto", value: "AI", accent: false },
      ],
    },
    {
      number: "03",
      title: "Scriber",
      description:
        "Provides an accessible digital workspace where students can record, review, and correct each step of their calculations using a custom keyboard that makes mathematical notations easy to input and ensures they are accurately interpreted by screen readers.",
      label: "Digital Workspace",
      image: Scriber,
      floatingType: "scriber",
      surface: "white",
      decor: "math",
    },
    {
      number: "04",
      title: "Evaluaizer",
      description:
        "Shows whether students' answers are correct or incorrect and provides a clear justification for each result. When students use Digital Scratchwork, the feature provides deeper analysis of their calculation steps to identify where their reasoning went wrong, rather than only showing the final mistake.",
      label: "AI Evaluation",
      image: EvaluaizerDepan,
      secondaryImage: EvaluaizerBelakang,
      floatingType: "evaluaizer",
      surface: "soft",
    },
    {
      number: "05",
      title: "Clarifier",
      description:
        "Helps students understand difficult or unclear sections of their learning modules by providing further explanations and answering follow-up questions. It uses teacher-curated modules as its primary source, with reliable external resources available for additional context when needed.",
      label: "RAG Learning Assistant",
      image: Clarifer,
      floatingType: "clarifier",
      surface: "white",
      decor: "dots",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--lydera-primary)]">
              HOW IT WORKS
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              One ecosystem. Five ways to make math easier.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Setiap fitur Lydera dirancang untuk membantu menghilangkan
              hambatan dalam proses belajar matematika, mulai dari mengakses
              materi hingga memahami hasil pembelajaran.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-32 lg:mt-28 lg:space-y-36">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={feature.number}
                className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  direction={isReversed ? "right" : "left"}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="text-sm font-semibold text-[var(--lydera-primary)]">
                        {feature.number}
                      </span>

                      <span className="h-px w-8 bg-[var(--lydera-primary-soft-hover)]" />

                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lydera-primary)]/70">
                        {feature.label}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
                      {feature.description}
                    </p>

                    <div className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--lydera-primary)] transition-colors hover:text-[var(--lydera-primary-hover)]">
                      Explore feature
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  direction={isReversed ? "left" : "right"}
                  delay={100}
                  className={
                    isReversed
                      ? "lg:order-1 lg:justify-self-start"
                      : "lg:justify-self-end"
                  }
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