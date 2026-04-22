import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        transparent
          ? "bg-transparent py-6"
          : "bg-background/85 backdrop-blur-xl py-3 border-b border-border"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold font-display text-sm transition-all duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
            RS
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-xs tracking-[0.32em] text-gold">RS PHOTOGRAPHY</span>
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              Timeless Stories
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative font-display text-[11px] tracking-[0.3em] uppercase text-foreground/85 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/book"
          className="hidden items-center gap-2 border border-gold px-5 py-2.5 font-display text-[10px] tracking-[0.3em] uppercase text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground lg:inline-flex"
        >
          Book Session
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="text-gold lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[80vh] border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-border/40 py-4 font-serif-display text-2xl text-foreground/90 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="mt-6 border border-gold bg-gold px-6 py-4 text-center font-display text-xs tracking-[0.3em] uppercase text-primary-foreground"
          >
            Book Session
          </Link>
          <a
            href="tel:+918468890581"
            className="mt-3 border border-gold/40 px-6 py-4 text-center font-display text-xs tracking-[0.3em] uppercase text-gold"
          >
            +91 84688 90581
          </a>
        </nav>
      </div>
    </header>
  );
}