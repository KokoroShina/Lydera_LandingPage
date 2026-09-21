import Reveal from "./Reveal";
import {
  SpeakerHigh,
  SealCheck,
  BookOpenText,
  MapPin,
} from "@phosphor-icons/react";

function About() {
  const highlights = [
    {
      title: "Readable Math",
      description:
        "Formulas and symbols are turned into text that screen readers can speak clearly.",
      icon: <SpeakerHigh size={20} weight="regular" aria-hidden="true" />,
    },
    {
      title: "Teacher-Verified",
      description:
        "Teachers review AI-generated content before it reaches students.",
      icon: <SealCheck size={20} weight="regular" aria-hidden="true" />,
    },
    {
      title: "Grounded Answers",
      description:
        "The study assistant answers from the learning module and cites its source.",
      icon: <BookOpenText size={20} weight="regular" aria-hidden="true" />,
    },
  ];

  const stats = [
    { value: "5", label: "AI-powered features" },
    { value: "2", label: "Users: students & teachers" },
    { value: "1", label: "Partner school for field research" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-[var(--lydera-primary)]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">
                About Us
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-slate-950 sm:text-5xl"
            >
              Making math{" "}
              <span className="bg-gradient-to-r from-[var(--lydera-primary)] to-sky-500 bg-clip-text text-transparent">
                accessible.
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Lydera brings AI and accessibility together to make math
              learning easier for visually impaired students and the teachers
              who support them.
            </p>
          </div>
        </Reveal>

        {/* Story card + highlights */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <Reveal direction="left">
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/5 sm:p-10">
              <div>
                <p className="text-sm font-semibold text-[var(--lydera-primary)]">
                  Why we built this
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Built from real classroom needs.
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  We started by listening to students and teachers: how math
                  materials, exercises, and evaluations can become easier to
                  access in everyday learning.
                </p>
              </div>

              <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--lydera-primary-soft)] px-4 py-2 text-sm font-medium text-[var(--lydera-primary)]">
                <MapPin size={16} weight="regular" aria-hidden="true" />
                Field research at SLBN A Citeureup
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} direction="right">
                <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-[var(--lydera-primary)]/30 hover:shadow-lg hover:shadow-[var(--lydera-primary)]/5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--lydera-primary-soft)] text-[var(--lydera-primary)] transition-colors duration-300 group-hover:bg-[var(--lydera-primary)] group-hover:text-white">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={150}>
          <dl className="mt-14 grid gap-8 border-t border-slate-200 pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-bold tracking-tighter text-slate-950 sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm text-slate-600">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Closing line */}
        <Reveal delay={200}>
          <p className="mt-16 max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-slate-800 sm:text-2xl">
            Because learning math shouldn't be limited by how someone sees the
            world.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;