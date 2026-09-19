import BenefitImage from "../assets/benefits/images.jpg";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "Learn independently",
    description:
      "Students study, practice, and explore math on their own.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Content that's easy to follow",
    description:
      "Modules become screen-reader-friendly text, so math is easier to access.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
    ),
  },
  {
    title: "Support for teachers",
    description:
      "Create questions, manage modules, and follow each student's progress.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Feedback that explains",
    description:
      "See which step went wrong, not just whether the final answer is right.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        />
      </svg>
    ),
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