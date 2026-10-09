import { useEffect, useState } from "react";
import { List, X, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";
import Logo from "../assets/logos/Logos.svg";

// ganti dengan email tim yang beneran dipantau
const CONTACT_EMAIL = "tim@lydera.com";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnBlue, setIsOnBlue] = useState(false);

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Users", href: "#users" },
    { label: "How it Works", href: "#features" },
    { label: "Benefit", href: "#benefits" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Navbar berubah jadi biru saat #cta atau <footer> berada di bawah navbar
  useEffect(() => {
    const targets = [
      document.getElementById("cta"),
      document.querySelector("footer"),
    ].filter(Boolean);

    if (targets.length === 0) return;

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setIsOnBlue(visible.size > 0);
      },
      {
        rootMargin: `0px 0px -${Math.max(window.innerHeight - 80, 0)}px 0px`,
        threshold: 0,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const headerClasses = isOnBlue
    ? "border-white/15 bg-[var(--lydera-primary)] shadow-none"
    : isScrolled
    ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
    : "border-transparent bg-white/80 backdrop-blur-md";

  const brandTextClass = isOnBlue ? "text-white" : "text-slate-900";

  const navLinkClass = isOnBlue
    ? "text-white/85 hover:text-white"
    : "text-slate-600 hover:text-[var(--lydera-primary)]";

  const underlineClass = isOnBlue
    ? "after:bg-white"
    : "after:bg-[var(--lydera-primary)]";

  const focusRing = isOnBlue
    ? "focus-visible:outline-white"
    : "focus-visible:outline-[var(--lydera-primary)]";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 motion-reduce:transition-none ${headerClasses}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo + Brand */}
        <a
          href="#"
          onClick={closeMenu}
          className={`flex items-center gap-1 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${focusRing}`}
          aria-label="Lydera - Back to top"
        >
          <img
            src={Logo}
            alt=""
            className={`h-14 w-14 object-contain transition-[filter] duration-300 motion-reduce:transition-none ${
              isOnBlue ? "brightness-0 invert" : ""
            }`}
          />
          <span
            className={`text-xl font-bold tracking-tighter transition-colors duration-300 motion-reduce:transition-none ${brandTextClass}`}
          >
            Lydera
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded text-sm font-medium transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none ${navLinkClass} ${underlineClass} ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none lg:hidden ${focusRing} ${
            isOnBlue
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-slate-200 text-slate-900 hover:bg-slate-100"
          }`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={20} weight="bold" aria-hidden="true" />
          ) : (
            <List size={20} weight="bold" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        inert={isMenuOpen ? undefined : ""}
        className={`overflow-hidden border-t transition-all duration-300 motion-reduce:transition-none lg:hidden ${
          isOnBlue
            ? "border-white/15 bg-[var(--lydera-primary)]"
            : "border-slate-100 bg-white"
        } ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-6 py-5 lg:px-8"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`border-b py-3.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${focusRing} ${
                  isOnBlue
                    ? "border-white/15 text-white/90 hover:text-white"
                    : "border-slate-100 text-slate-700 hover:text-[var(--lydera-primary)]"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none ${
                  isOnBlue
                    ? "bg-white text-[var(--lydera-primary)] hover:bg-white/90 focus-visible:outline-white"
                    : "bg-[var(--lydera-primary)] text-white hover:bg-[var(--lydera-primary-hover)] focus-visible:outline-[var(--lydera-primary)]"
                }`}
              >
                <EnvelopeSimple size={18} weight="regular" aria-hidden="true" />
                Contact the team
                <ArrowRight
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>

              <p
                className={`text-sm ${
                  isOnBlue ? "text-white/70" : "text-slate-500"
                }`}
              >
                {CONTACT_EMAIL}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;