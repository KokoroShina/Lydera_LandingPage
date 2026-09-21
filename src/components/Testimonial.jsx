import Reveal from "./Reveal";
import { Quotes, User } from "@phosphor-icons/react";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
      aria-labelledby="testimonials-heading"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lydera-primary)]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          <div>
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">
                Testimonial
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tighter text-slate-950 sm:text-5xl"
            >
              Built with learners,{" "}
              <span className="bg-gradient-to-r from-[var(--lydera-primary)] to-sky-500 bg-clip-text text-transparent">
                not just for them.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Lydera is shaped by the needs and experiences of the people who
              use it. Stories from students, teachers, and companions will
              become an important part of our journey.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <figure className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm">
            <div className="relative p-8 sm:p-10">
              <Quotes
                size={128}
                weight="fill"
                className="absolute -left-2 -top-4 text-[var(--lydera-primary)]/[0.06]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-slate-600">
                    Coming soon
                  </span>
                </div>

                <blockquote className="mt-8">
                  <p className="text-2xl font-medium leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
                    Real experiences from students and teachers will appear
                    here soon.
                  </p>
                </blockquote>

                <figcaption className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--lydera-primary-soft)] text-[var(--lydera-primary)]"
                    aria-hidden="true"
                  >
                    <User size={20} weight="regular" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Student / Teacher
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Name and school to be added
                    </p>
                  </div>
                </figcaption>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;