import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { gallery, type Category } from "@/data/gallery";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — RS Photography | Wedding & Cinematic Stories" },
      {
        name: "description",
        content:
          "An evolving collection of weddings, pre-wedding shoots and candid moments captured by RS Photography.",
      },
      { property: "og:title", content: "Portfolio — RS Photography" },
      {
        property: "og:description",
        content: "Weddings, pre-wedding & candid stories — a luxury portfolio.",
      },
    ],
  }),
  component: PortfolioPage,
});

const filters: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All Stories" },
  { key: "weddings", label: "Weddings" },
  { key: "pre-wedding", label: "Pre-Wedding" },
  { key: "candid", label: "Candid" },
];

function PortfolioPage() {
  const [active, setActive] = useState<"all" | Category>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (active === "all" ? gallery : gallery.filter((g) => g.category === active)),
    [active]
  );

  return (
    <>
      <section className="relative pt-40 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="gold-divider mx-auto animate-fade-up">Portfolio</p>
          <h1 className="mt-6 font-serif-display text-5xl leading-tight md:text-7xl animate-fade-up delay-200">
            A Gallery of <em className="text-gradient-gold not-italic">Forever</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground animate-fade-up delay-300">
            Every frame is a heartbeat preserved. Browse our curated stories — click any image to
            view in full screen.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 px-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2.5 font-display text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
                active === f.key
                  ? "bg-gold text-primary-foreground"
                  : "border border-gold/30 text-foreground/80 hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 pb-32 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((img, i) => (
            <Reveal key={`${img.src}-${active}`} delay={(i % 6) * 80} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setOpenIdx(i)}
                className="img-zoom group relative block w-full overflow-hidden bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="p-6">
                    <p className="font-display text-[9px] tracking-[0.32em] uppercase text-gold">
                      {img.category}
                    </p>
                    <p className="mt-1 font-serif-display text-xl text-foreground">{img.alt}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {openIdx !== null && (
        <Lightbox
          images={items}
          index={openIdx}
          onClose={() => setOpenIdx(null)}
          onPrev={() => setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
          onNext={() => setOpenIdx((i) => (i === null ? null : (i + 1) % items.length))}
        />
      )}
    </>
  );
}