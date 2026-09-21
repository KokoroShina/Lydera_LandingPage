import BenefitImage from "../assets/benefits/images.jpg";
import Reveal from "./Reveal";
import {
  Student,
  SpeakerHigh,
  UsersThree,
  ChatsCircle,
} from "@phosphor-icons/react";

const benefits = [
  {
    title: "Learn independently",
    description:
      "Students study, practice, and explore math on their own.",
    icon: <Student size={20} weight="regular" aria-hidden="true" />,
  },
  {
    title: "Content that's easy to follow",
    description:
      "Modules become screen-reader-friendly text, so math is easier to access.",
    icon: <SpeakerHigh size={20} weight="regular" aria-hidden="true" />,
  },
  {
    title: "Support for teachers",
    description:
      "Create questions, manage modules, and follow each student's progress.",
    icon: <UsersThree size={20} weight="regular" aria-hidden="true" />,
  },
  {
    title: "Feedback that explains",
    description:
      "See which step went wrong, not just whether the final answer is right.",
    icon: <ChatsCircle size={20} weight="regular" aria-hidden="true" />,
  },
];

function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
      aria-labelledby="benefits-heading"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-[var(--lydera-primary)]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">
                Benefits
              </span>
            </div>

            <h2
              id="benefits-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-slate-950 sm:text-5xl"
            >
              More than accessible.{" "}
              <span className="bg-gradient-to-r from-[var(--lydera-primary)] to-sky-500 bg-clip-text text-transparent">
                Designed to empower.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Lydera makes math easier to access, and supports students and
              teachers throughout the learning process.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* Image (full-bleed) */}
          <Reveal direction="left">
            <div
              className="relative overflow-hidden rounded-[2rem] bg-slate-100"
              style={{
                // Tinggi gambar FIX — adjust di sini
                height: "520px",
                boxShadow: "0 18px 45px rgba(37, 99, 235, 0.12)",
              }}
            >
              <img
                src={BenefitImage}
                alt="Lydera learning ecosystem in use"
                className="h-full w-full object-cover object-center"
                // Kalau bagian penting gambar terpotong, ubah object-center
                // jadi object-top / object-bottom / object-left / object-right
              />
            </div>
          </Reveal>

          {/* Benefit list */}
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {benefits.map((benefit, index) => (
              <li key={benefit.title}>
                <Reveal delay={index * 100}>
                  <div className="group flex gap-5 py-6 sm:gap-6 sm:py-7">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--lydera-primary-soft)] text-[var(--lydera-primary)] transition-colors duration-300 group-hover:bg-[var(--lydera-primary)] group-hover:text-white"
                      aria-hidden="true"
                    >
                      {benefit.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Benefits;