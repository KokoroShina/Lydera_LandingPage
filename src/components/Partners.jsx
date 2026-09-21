import UnikomBanner from "../assets/marquee/unikom_banner.svg";
import CodelabsBanner from "../assets/marquee/codelabs_banner.png"; // ← sesuaikan nama file
import Reveal from "./Reveal";

const partners = [
  { name: "UNIKOM", logo: UnikomBanner },
  { name: "Codelabs", logo: CodelabsBanner },
];

function Partners() {
  // Duplicate the list so the loop is seamless
  const loop = [...partners, ...partners, ...partners, ...partners];

  return (
    <section
      className="overflow-hidden bg-white py-20 sm:py-24"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center sm:mb-12">
            <h2
              id="partners-heading"
              className="text-2xl font-semibold text-slate-850"
            >
              Partner With
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="group relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            <ul
              className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-24"
              aria-label="Partners"
            >
              {loop.map((partner, index) => {
                // Only the first set is exposed to assistive tech
                const isDuplicate = index >= partners.length;

                return (
                  <li
                    key={`${partner.name}-${index}`}
                    aria-hidden={isDuplicate}
                  >
                    <img
                      src={partner.logo}
                      alt={isDuplicate ? "" : `${partner.name} logo`}
                      className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-23"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Partners;
