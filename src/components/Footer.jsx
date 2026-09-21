// Samakan path ini dengan import logo di Navbar
import LyderaLogo from "../assets/logos/logos.svg";
import { EnvelopeSimple } from "@phosphor-icons/react";

function Footer() {
  const links = [
    { label: "About Us", href: "#about" },
    { label: "Users", href: "#users" },
    { label: "How it Works", href: "#features" },
    { label: "Benefit", href: "#benefits" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="border-t border-white/15 bg-[var(--lydera-primary)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label="Lydera - Back to top"
            >
              <img
                src={LyderaLogo}
                alt=""
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold tracking-tighter">
                Lydera
              </span>
            </a>

            <p className="mt-5 text-sm leading-relaxed text-white/85">
              An inclusive AI learning ecosystem that makes math easier to
              access for every student.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>

            <nav
              aria-label="Footer"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded text-sm text-white/85 transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="mailto:raehanathaiya@gmail.com"
                className="inline-flex items-center gap-2.5 rounded text-sm text-white/85 transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
              >
                <EnvelopeSimple
                  size={16}
                  weight="regular"
                  className="shrink-0"
                  aria-hidden="true"
                />
                raehanathaiya@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/15 pt-7">
          <p className="text-xs text-white/75">
            © 2026 Lydera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;