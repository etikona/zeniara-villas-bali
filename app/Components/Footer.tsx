export function Footer() {
  return (
    <footer className="bg-zen-ink py-14 text-zen-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center lg:px-10">
        <div>
          <p className="font-display text-lg tracking-widest text-zen-cream">
            ZENIARA
          </p>
          <p className="mt-2 font-body text-sm">
            A development by Nura Development, Bali.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 font-body text-sm">
          <a href="#concept" className="hover:text-zen-cream">
            Concept
          </a>
          <a href="#gallery" className="hover:text-zen-cream">
            Gallery
          </a>
          <a href="#invest" className="hover:text-zen-cream">
            Invest
          </a>
          <a href="#location" className="hover:text-zen-cream">
            Location
          </a>
          <a href="#contact" className="hover:text-zen-cream">
            Contact
          </a>
        </nav>

        <div className="font-mono text-xs uppercase tracking-widest">
          <p>@zeniaravillas</p>
          <p className="mt-2 text-zen-cream/40">
            © {new Date().getFullYear()} Zeniara Villas
          </p>
        </div>
      </div>
    </footer>
  );
}
