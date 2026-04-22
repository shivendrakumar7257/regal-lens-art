import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Camera, Film, Plane, Quote, Phone } from "lucide-react";
import hero from "@/assets/hero-wedding.jpg";
import { gallery } from "@/data/gallery";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Photography — Capturing Timeless Love Stories" },
      {
        name: "description",
        content:
          "Luxury wedding photography & cinematography. RS Photography crafts royal, cinematic stories for couples who value the art of remembering.",
      },
      { property: "og:title", content: "RS Photography — Capturing Timeless Love Stories" },
      {
        property: "og:description",
        content: "Royal weddings. Cinematic films. Captured with elegance.",
      },
    ],
  }),
  component: Index,
});

const featured = [
  { ...gallery[0], category: "Weddings", to: "/portfolio" as const },
  { ...gallery[6], category: "Pre-Wedding", to: "/portfolio" as const },
  { ...gallery[8], category: "Candid", to: "/portfolio" as const },
];

const services = [
  { Icon: Heart, title: "Wedding Photography", desc: "Editorial & traditional coverage" },
  { Icon: Camera, title: "Pre-Wedding Shoots", desc: "Cinematic destination stories" },
  { Icon: Film, title: "Cinematic Films", desc: "4K wedding films & teasers" },
  { Icon: Plane, title: "Aerial & Drone", desc: "Sweeping aerial cinematography" },
];

const testimonials = [
  {
    quote:
      "RS Photography didn't just capture our wedding — they captured the soul of it. Every frame feels like a painting.",
    name: "Aanya & Vikram",
    place: "Udaipur, India",
  },
  {
    quote:
      "We have looked at our album a hundred times and still find new emotions. Truly cinematic, truly royal.",
    name: "Priya & Arjun",
    place: "Jaipur, India",
  },
  {
    quote:
      "From the first call to the final delivery — pure elegance. Our families still talk about the film.",
    name: "Ishita & Rohan",
    place: "Goa, India",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Royal Indian wedding couple at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 luxury-overlay" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-[11px] tracking-[0.45em] text-gold animate-fade-up">
            ✦  RS PHOTOGRAPHY  ✦
          </p>
          <h1 className="mt-8 font-serif-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-[7rem] animate-fade-up delay-200">
            Capturing
            <br />
            <em className="text-gradient-gold not-italic">Timeless</em> Love Stories
          </h1>
          <p className="mt-8 max-w-xl text-base text-foreground/80 animate-fade-up delay-500">
            Royal weddings. Cinematic films. Crafted for the discerning couple.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row animate-fade-up delay-700">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-gold"
            >
              View Portfolio
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-foreground transition-all duration-500 hover:border-gold hover:text-gold"
            >
              Book Your Date
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center animate-scroll-hint">
          <p className="font-display text-[9px] tracking-[0.4em] uppercase text-foreground/70">
            Scroll
          </p>
          <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-32 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="gold-divider mx-auto">Welcome</p>
          <h2 className="mt-6 font-serif-display text-4xl leading-tight md:text-6xl">
            A boutique studio devoted to the
            <em className="text-gradient-gold not-italic"> art of remembering</em>.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            We are storytellers who believe a wedding is not a single day, but a constellation of
            small, fleeting moments — strung together by love. Every frame is patient. Every film,
            cinematic. Every story, yours.
          </p>
        </Reveal>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 pb-32 lg:px-12">
        <Reveal className="mx-auto mb-16 max-w-7xl text-center">
          <p className="gold-divider mx-auto">Featured Stories</p>
          <h2 className="mt-6 font-serif-display text-4xl md:text-6xl">
            Recent <em className="text-gradient-gold not-italic">Chapters</em>
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.alt} delay={i * 150}>
              <Link to={p.to} className="img-zoom group relative block aspect-[3/4] overflow-hidden">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-display text-[10px] tracking-[0.32em] uppercase text-gold">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-serif-display text-3xl text-foreground">{p.alt}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-[10px] tracking-[0.3em] uppercase text-foreground/80 transition-colors group-hover:text-gold">
                    View Story
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 border border-gold px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
          >
            Explore Full Portfolio
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={gallery[3].src}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <Reveal className="max-w-3xl text-center">
            <Quote className="mx-auto h-10 w-10 text-gold" strokeWidth={1} />
            <p className="mt-8 font-serif-display text-2xl italic leading-relaxed text-foreground md:text-4xl">
              "We don't capture weddings.
              <br />
              <span className="text-gradient-gold">We preserve heartbeats.</span>"
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-32 lg:px-12">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="gold-divider mx-auto">Services</p>
          <h2 className="mt-6 font-serif-display text-4xl md:text-6xl">
            Crafted for <em className="text-gradient-gold not-italic">every moment</em>
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="bg-background">
              <div className="group flex h-full flex-col items-center gap-5 p-10 text-center transition-colors duration-700 hover:bg-card">
                <div className="flex h-14 w-14 items-center justify-center border border-gold text-gold transition-all duration-700 group-hover:bg-gold group-hover:text-primary-foreground">
                  <s.Icon className="h-6 w-6" strokeWidth={1.2} />
                </div>
                <h3 className="font-serif-display text-xl text-foreground">{s.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="font-display text-[10px] tracking-[0.32em] uppercase text-gold transition-colors hover:text-foreground"
          >
            All Services →
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-card px-6 py-32 lg:px-12">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="gold-divider mx-auto">Kind Words</p>
          <h2 className="mt-6 font-serif-display text-4xl md:text-6xl">
            Loved by <em className="text-gradient-gold not-italic">our couples</em>
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col gap-6 border border-gold/20 bg-background p-10 transition-all duration-700 hover:border-gold hover:shadow-[var(--shadow-gold)]">
                <Quote className="h-6 w-6 text-gold" strokeWidth={1} />
                <blockquote className="flex-1 font-serif-display text-lg italic leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption>
                  <p className="font-serif-display text-base text-gold">{t.name}</p>
                  <p className="mt-1 font-display text-[9px] tracking-[0.32em] uppercase text-muted-foreground">
                    {t.place}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden px-6 py-32 lg:px-12">
        <img
          src={gallery[5].src}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-background/80" />
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="gold-divider mx-auto">Begin Your Story</p>
          <h2 className="mt-6 font-serif-display text-4xl leading-tight md:text-6xl">
            Reserve your date with
            <em className="text-gradient-gold not-italic"> RS Photography</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            We accept a limited number of weddings each year to give every story the artistry it
            deserves.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+918468890581"
              className="inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 84688 90581
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-foreground transition-all duration-500 hover:border-gold hover:text-gold"
            >
              Send an Enquiry
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
