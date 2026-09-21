import Reveal from "./Reveal";
import { SpeakerHigh, ClipboardText, Check } from "@phosphor-icons/react";

const users = [
  {
    label: "For students",
    title: "Visually impaired students",
    description:
      "Study math independently, with content that reads clearly through a screen reader.",
    points: [
      "Modules and symbols read aloud correctly",
      "Practice questions and step-by-step feedback",
      "Ask questions and get answers that cite the module",
    ],
    icon: <SpeakerHigh size={24} weight="regular" aria-hidden="true" />,
  },
  {
    label: "For teachers",
    title: "Teachers & companions",
    description:
      "Prepare materials and see where each student needs help, without starting from scratch.",
    points: [
      "Turn PDF modules into accessible text, then review it",
      "Generate practice questions organized by Bloom's level",
      "See exactly which step of an answer went wrong",
    ],
    icon: <ClipboardText size={24} weight="regular" aria-hidden="true" />,
  },
];

function Users() {
  return (
    <section
      id="users"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="users-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">Users</span>
            </div>

            <h2
              id="users-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-slate-950 sm:text-5xl"
            >
              Built for the people who learn and teach.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Lydera supports both sides of the classroom: the student who
              learns, and the teacher who guides.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {users.map((user, index) => (
            <li key={user.title}>
              <Reveal
                direction={index === 0 ? "left" : "right"}
                delay={index * 100}
              >
                <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-8 transition-colors duration-300 hover:border-[var(--lydera-primary)]/40 sm:p-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lydera-primary-soft)] text-[var(--lydera-primary)]">
                      {user.icon}
                    </div>

                    <span className="text-sm font-medium text-slate-500">
                      {user.label}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {user.title}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                    {user.description}
                  </p>

                  <ul className="mt-8 space-y-3.5 border-t border-slate-100 pt-8">
                    {user.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <Check
                          size={16}
                          weight="bold"
                          className="mt-1 shrink-0 text-[var(--lydera-primary)]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Users;