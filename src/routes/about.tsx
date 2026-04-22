import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-1.jpg";
import candid from "@/assets/candid-2.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — RS Photography | The Storytellers Behind the Lens" },
      {
        name: "description",
        content:
          "Meet RS Photography — a boutique wedding studio dedicated to emotion, elegance and artistry.",
      },
      { property: "og:title", content: "About — RS Photography" },
      {
        property: "og:description",
        content: "A boutique studio devoted to capturing love with cinematic elegance.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <p className="gold-divider">Our Story</p>
            <h1 className="mt-6 font-serif-display text-5xl leading-[1.05] md:text-7xl">
              Photographs that breathe <em className="text-gradient-gold not-italic">emotion</em>.
            </h1>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                RS Photography is a boutique studio devoted to the art of remembering. We believe a
                wedding is not a single day — it is a constellation of small, fleeting moments
                strung together by love.
              </p>
              <p>
                For over a decade we have travelled across India and beyond, photographing weddings
                with the patience of a documentarian and the eye of a fine artist. No staged
                smiles. No rushed frames. Only stories told in light.
              </p>
              <p className="font-serif-display text-lg italic text-foreground">
                "We don't capture weddings. We preserve heartbeats."
              </p>
            </div>
            <Link
              to="/portfolio"
              className="mt-10 inline-flex items-center gap-3 font-display text-[10px] tracking-[0.32em] uppercase text-gold"
            >
              <span className="h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
              View Our Work
            </Link>
          </Reveal>

          <Reveal delay={200} className="relative">
            <div className="relative">
              <img
                src={portrait}
                alt="RS Photography signature portrait"
                loading="lazy"
                className="relative z-10 h-[600px] w-full object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
              />
              <img
                src={candid}
                alt="Behind the lens"
                loading="lazy"
                className="absolute -bottom-12 -left-12 z-20 hidden h-56 w-44 object-cover border-4 border-background shadow-[0_20px_60px_-20px_rgba(200,169,106,0.4)] sm:block"
              />
              <div className="absolute -right-6 -top-6 z-0 h-full w-full border border-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-3">
          {[
            { stat: "12+", label: "Years of Storytelling" },
            { stat: "350+", label: "Weddings Captured" },
            { stat: "40+", label: "Destinations Travelled" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <p className="font-serif-display text-6xl text-gradient-gold">{s.stat}</p>
              <p className="mt-3 font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}