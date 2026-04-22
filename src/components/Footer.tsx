import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold font-display text-base text-gold">
                RS
              </span>
              <div>
                <p className="font-display text-sm tracking-[0.32em] text-gold">RS PHOTOGRAPHY</p>
                <p className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
                  Timeless Stories
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Crafting cinematic wedding films and timeless photographs for couples who value the
              art of remembering.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[11px] tracking-[0.32em] uppercase text-gold">
              Explore
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/portfolio" as const, label: "Portfolio" },
                { to: "/services" as const, label: "Services" },
                { to: "/about" as const, label: "About" },
                { to: "/contact" as const, label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] tracking-[0.32em] uppercase text-gold">
              Studio
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a href="tel:+918468890581" className="hover:text-gold">
                  +91 84688 90581
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />
                <a href="mailto:hello@rsphotography.in" className="hover:text-gold">
                  hello@rsphotography.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>Available worldwide</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] tracking-[0.32em] uppercase text-gold">
              Follow
            </h4>
            <p className="mt-6 text-sm text-muted-foreground">
              Daily moments and stories from behind the lens.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RS Photography. All rights reserved.</p>
          <p className="font-display text-gold">Crafted with elegance</p>
        </div>
      </div>
    </footer>
  );
}