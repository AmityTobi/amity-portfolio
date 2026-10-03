export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-[calc(100%-2rem)] max-w-6xl items-center justify-between sm:h-16 sm:w-[calc(100%-3rem)]">
        <a
          href="#top"
          aria-label="Amity Ekoyi, home"
          className="shrink-0 text-[13px] font-semibold tracking-[-0.02em] text-slate-950 sm:text-sm"
        >
          Amity Ekoyi
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-3 text-[13px] text-slate-600 min-[360px]:gap-4 sm:gap-7 sm:text-sm"
        >
          <a href="#work" className="transition-colors hover:text-slate-950">
            Work
          </a>

          <a href="#about" className="transition-colors hover:text-slate-950">
            About
          </a>

          <a href="#contact" className="transition-colors hover:text-slate-950">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
