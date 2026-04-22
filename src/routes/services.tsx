import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Heart, Film, Plane } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import detailsImg from "@/assets/details-1.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — RS Photography | Wedding, Cinema & Drone" },
      {
        name: "description",
        content:
          "Bespoke wedding photography, pre-wedding shoots, cinematic films and aerial coverage by RS Photography.",
      },
      { property: "og:title", content: "Services — RS Photography" },
      {
        property: "og:description",
        content: "Photography, cinema, pre-wedding and drone — crafted for the discerning couple.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Heart,
    title: "Wedding Photography",
    desc: "Editorial, candid and traditional coverage of every sacred moment — from haldi to vidaai.",
  },
  {
    Icon: Camera,
    title: "Pre-Wedding Shoots",
    desc: "Cinematic destinations, intimate locations — your love story before the celebration begins.",
  },
  {
    Icon: Film,
    title: "Cinematic Films",
    desc: "4K cinematic wedding films scored to emotion — feature edits, teasers and reels.",
  },
  {
    Icon: Plane,
    title: "Aerial & Drone",
    desc: "Sweeping aerial cinematography that frames your venue, mandap and celebration in scale.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="gold-divider mx-auto animate-fade-up">What We Offer</p>
          <h1 className="mt-6 font-serif-display text-5xl leading-tight md:text-7xl animate-fade-up delay-200">
            Crafted <em className="text-gradient-gold not-italic">Experiences</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground animate-fade-up delay-300">
            From the first glance to the final dance, every service is curated to feel as singular
            as your story.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="bg-background">
              <div className="group relative flex h-full flex-col gap-6 p-10 lg:p-14">
                <div className="flex h-16 w-16 items-center justify-center border border-gold text-gold transition-all duration-700 group-hover:bg-gold group-hover:text-primary-foreground">
                  <s.Icon className="h-7 w-7" strokeWidth={1.2} />
                </div>
                <div>
                  <h3 className="font-serif-display text-3xl text-foreground">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <span className="font-display text-[10px] tracking-[0.32em] uppercase text-gold">
                    Bespoke Packages
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-32 lg:px-12">
        <img
          src={detailsImg}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-background/70" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="gold-divider mx-auto">Begin</p>
          <h2 className="mt-6 font-serif-display text-4xl md:text-6xl">
            Let's craft your <em className="text-gradient-gold not-italic">timeless story</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Limited weddings each year. We'd love to hear about yours.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center border border-gold bg-gold px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-gold"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}