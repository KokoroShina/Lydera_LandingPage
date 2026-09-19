import Reveal from "./Reveal";

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
    icon: (
      <svg
        className="h-6 w-6"
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
    label: "For teachers",
    title: "Teachers & companions",
    description:
      "Prepare materials and see where each student needs help, without starting from scratch.",
    points: [
      "Turn PDF modules into accessible text, then review it",
      "Generate practice questions organized by Bloom's level",
      "See exactly which step of an answer went wrong",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
        />
      </svg>
    ),
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
                        <svg
                          className="mt-1 h-4 w-4 shrink-0 text-[var(--lydera-primary)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
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