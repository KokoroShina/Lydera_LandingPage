import { useState } from "react";
import Reveal from "./Reveal";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Apa itu Lydera?",
      answer:
        "Lydera adalah ekosistem pembelajaran matematika berbasis AI yang dirancang untuk meningkatkan aksesibilitas bagi siswa tunanetra serta membantu guru dan pendamping dalam proses pembelajaran.",
    },
    {
      question: "Siapa yang dapat menggunakan Lydera?",
      answer:
        "Lydera dirancang untuk siswa tunanetra sebagai pengguna utama, serta guru dan pendamping yang terlibat dalam proses pembelajaran.",
    },
    {
      question: "Apakah Lydera menggunakan AI?",
      answer:
        "Ya. AI digunakan pada beberapa bagian ekosistem Lydera, seperti pembuatan soal, analisis hasil ujian, dan chatbot asisten belajar. Setiap fitur memiliki tujuan yang berbeda dalam mendukung proses pembelajaran.",
    },
    {
      question: "Apakah Lydera dapat digunakan dengan screen reader?",
      answer:
        "Lydera dirancang dengan mempertimbangkan kebutuhan aksesibilitas, termasuk penggunaan screen reader dan format konten yang lebih mudah dinavigasi oleh pengguna tunanetra.",
    },
    {
      question: "Apakah guru dapat membuat soal sendiri?",
      answer:
        "Ya. Guru dapat memanfaatkan fitur pembuatan soal otomatis untuk membantu menghasilkan latihan berdasarkan materi dan tingkat kognitif yang dibutuhkan, kemudian menyesuaikannya sesuai kebutuhan.",
    },
    {
      question: "Apakah chatbot Lydera bisa menjawab semua pertanyaan?",
      answer:
        "Chatbot Lydera dirancang sebagai asisten belajar berbasis RAG yang menggunakan sumber pembelajaran relevan sebagai konteks jawaban. Karena itu, kemampuannya bergantung pada sumber dan materi yang tersedia di dalam sistem.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Beberapa hal yang mungkin ingin kamu ketahui sebelum mulai
              mengenal Lydera lebih jauh.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base font-semibold text-slate-900 sm:text-lg hover:text-[var(--lydera-primary)] transition-colors">
                      {faq.question}
                    </span>

<span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--lydera-primary)] text-[var(--lydera-primary)] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;