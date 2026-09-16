import Reveal from "./Reveal";

function Partners() {
  const partners = [
    "Samsung",
    "Google",
    "Microsoft",
    "UNIKOM",
    "Codelabs",
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              PARTNER WITH
            </span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Growing accessibility together.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Lydera dikembangkan melalui kolaborasi dengan berbagai pihak
              untuk menciptakan pengalaman belajar yang lebih inklusif.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

            <div className="flex w-max animate-marquee items-center gap-12 sm:gap-20">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex h-16 min-w-[140px] items-center justify-center px-5"
                >
                  <span className="whitespace-nowrap text-xl font-bold tracking-tight text-slate-300 transition-colors duration-300 hover:text-slate-500 sm:text-2xl">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Partners;