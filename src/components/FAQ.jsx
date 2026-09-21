import { useState } from "react";
import Reveal from "./Reveal";
import { Plus, ArrowRight } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What is Lydera?",
    answer:
      "Lydera is an AI-powered math learning ecosystem that makes math easier to access for visually impaired students, and supports the teachers and companions who guide them.",
  },
  {
    question: "Who can use Lydera?",
    answer:
      "Visually impaired students are the primary users, together with the teachers and companions involved in their learning.",
  },
  {
    question: "Does it work with a screen reader?",
    answer:
      "Yes. Lydera has been used with TalkBack, and math notation is turned into text that can be read aloud clearly.",
  },
  {
    question: "Which devices does Lydera support?",
    answer: "Lydera is currently available for Android devices only.",
  },
  {
    question: "Does Lydera use AI?",
    answer:
      "Yes. AI helps convert modules into accessible text, generate questions, evaluate answers step by step, and power the study assistant.",
  },
  {
    question: "Who checks the AI?",
    answer:
      "Teachers do. They review and validate AI-generated modules and questions before anything reaches students.",
  },
  {
    question: "Can teachers create their own questions?",
    answer:
      "Yes. Teachers can write questions from scratch, or generate them from a module and edit anything before publishing.",
  },
  {
    question: "Can the chatbot answer everything?",
    answer:
      "No. It answers from teacher-curated modules first, with reliable external sources for extra context, so its answers depend on the materials available in the system.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
      aria-labelledby="faq-heading"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[var(--lydera-primary)]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* ── Header ── */}
        <Reveal>
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[var(--lydera-primary)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-600">FAQ</span>
            </div>

            <h2
              id="faq-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tighter text-slate-950 sm:text-5xl"
            >
              Questions,{" "}
              <span className="bg-gradient-to-r from-[var(--lydera-primary)] to-sky-500 bg-clip-text text-transparent">
                answered.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A few things you might want to know before getting to know Lydera
              better.
            </p>
          </div>
        </Reveal>

        {/* ── Accordion ── */}
        <Reveal delay={100}>
          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lydera-primary)]"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span
                        className={`text-base font-semibold transition-colors duration-200 motion-reduce:transition-none sm:text-lg ${
                          isOpen
                            ? "text-[var(--lydera-primary)]"
                            : "text-slate-900 group-hover:text-[var(--lydera-primary)]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none ${
                          isOpen
                            ? "rotate-45 border-[var(--lydera-primary)] bg-[var(--lydera-primary)] text-white"
                            : "border-slate-300 text-slate-600 group-hover:border-[var(--lydera-primary)] group-hover:text-[var(--lydera-primary)]"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={16} weight="bold" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    inert={isOpen ? undefined : ""}
                    className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ── Contact CTA ── */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-[2rem] bg-slate-50 px-8 py-10 text-center ring-1 ring-slate-200/80">
            <p className="text-xl font-semibold tracking-tight text-slate-950">
              Still have questions?
            </p>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Send us an email and we'll get back to you.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&to=raehanathaiya@gmail.com"
              target="_blank"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--lydera-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--lydera-primary)]/25 ring-1 ring-inset ring-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--lydera-primary-hover)] hover:shadow-xl hover:shadow-[var(--lydera-primary)]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lydera-primary)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Email us
              <span
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <ArrowRight size={16} weight="bold" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;