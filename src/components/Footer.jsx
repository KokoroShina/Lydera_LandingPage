import Reveal from "./Reveal";

function Footer() {
  const links = [
    { label: "About Us", href: "#about" },
    { label: "Users", href: "#users" },
    { label: "How it Works", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="max-w-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2.5"
                aria-label="Lydera - Home"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg font-bold text-slate-950">
                  L
                </div>

                <span className="text-xl font-bold tracking-tight">
                  Lydera
                </span>
              </a>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Inclusive AI learning ecosystem yang membantu membuat
                pembelajaran matematika lebih mudah diakses bagi setiap siswa.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">
                EXPLORE
              </p>

              <nav className="mt-5 flex flex-col items-start gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-[var(--lydera-primary)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">
                GET STARTED
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Ingin mengetahui lebih lanjut tentang Lydera atau menjadi
                bagian dari perjalanan kami?
              </p>

              <a
                href="#cta"
                className="mt-5 inline-flex items-center rounded-full bg-[var(--lydera-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--lydera-primary-hover)]"
              >
                Coba Sekarang
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              © 2026 Lydera. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-xs text-slate-500 transition-colors duration-200 hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-xs text-slate-500 transition-colors duration-200 hover:text-white"
              >
                Terms
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;

