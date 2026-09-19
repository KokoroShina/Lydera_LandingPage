import { useEffect, useState, useRef } from "react";
import Logo from "../assets/logos/Logos.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnDark, setIsOnDark] = useState(false); // <- state baru

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Users", href: "#users" },
    { label: "How it Works", href: "#features" },
    { label: "Benefit", href: "#benefits" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Deteksi apakah section #cta sedang terlihat
  useEffect(() => {
    const ctaSection = document.getElementById("cta");
    if (!ctaSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aktifkan dark mode navbar kalau section cta masuk viewport
        // rootMargin negatif atas biar transisi terjadi pas navbar "menyentuh" section
        setIsOnDark(entry.isIntersecting && entry.intersectionRatio > 0.15);
      },
      {
        rootMargin: "-80px 0px 0px 0px", // offset tinggi navbar
        threshold: [0, 0.15, 0.5, 1],
      }
    );

    observer.observe(ctaSection);

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Kelas dinamis berdasarkan isOnDark
  const headerClasses = isOnDark
    ? "border-white/10 bg-slate-950/90 shadow-lg backdrop-blur-md"
    : isScrolled
    ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
    : "border-transparent bg-white/80 backdrop-blur-md";

  const brandTextClass = isOnDark ? "text-white" : "text-slate-900";
  const navLinkClass = isOnDark
    ? "text-slate-300 hover:text-[var(--lydera-primary)]"
    : "text-slate-600 hover:text-[var(--lydera-primary)]";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${headerClasses}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo + Brand */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Lydera - Home"
        >
          <img
            src={Logo}
            alt="Lydera Logo"
            className="h-20 w-20 object-contain"
          />
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${brandTextClass}`}
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
              className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-[var(--lydera-primary)] after:transition-all after:duration-300 hover:after:w-full ${navLinkClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden rounded-full bg-[var(--lydera-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--lydera-primary-hover)] hover:shadow-lg hover:shadow-[var(--lydera-primary)/10] lg:inline-flex"
        >
          Coba Sekarang
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
            isOnDark
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-slate-200 text-slate-900 hover:bg-slate-100"
          }`}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          isOnDark
            ? "border-white/10 bg-slate-950"
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
                className={`border-b py-3.5 text-sm font-medium transition-colors duration-200 hover:text-[var(--lydera-primary)] ${
                  isOnDark
                    ? "border-white/10 text-slate-300"
                    : "border-slate-100 text-slate-700"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#cta"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--lydera-primary)] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--lydera-primary-hover)]"
            >
              Coba Sekarang
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;