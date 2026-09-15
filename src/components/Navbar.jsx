function Navbar() {
    const navItems = [
        {label: "About Us", href: "#about"},
        {label: "Users", href : "#users"},
        { label: "How it Works", href: "#features" },
        { label: "Benefit", href: "#benefits" },
        { label: "Testimonial", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* { section logo nya } */}
                <a 
                href="#"
                className="flex items-center gap-2.5"
                aria-label="Lydera - Home"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                        L
                    </div>

                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        Lydera
                    </span>
                </a>

                {/* {Dekstok Navigation nya lagu lagu apa yang cocok sama kamu? laguwah awowkw} */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item) => (
                        <a 
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* {CTA} */}

                <a 
                href="#cta"
                className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 hover:text-shadow-slate-900/10 lg:inline-flex"
                > Coba Sekarang</a>

                {/* Mobile Menu Button */}
                <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
                aria-label="Buka menu"
                >
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
                >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar;