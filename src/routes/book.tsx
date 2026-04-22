import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Phone, Send, Calendar, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/wedding-3.jpg";
import detailsImg from "@/assets/details-1.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session — RS Photography | Reserve Your Wedding Date" },
      {
        name: "description",
        content:
          "Reserve your date with RS Photography. Choose a bespoke wedding photography & cinematography package and begin your story.",
      },
      { property: "og:title", content: "Book a Session — RS Photography" },
      {
        property: "og:description",
        content: "Reserve your wedding date. Bespoke packages, limited availability.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: BookPage,
});

const packages = [
  {
    name: "Essence",
    tagline: "Intimate weddings",
    price: "₹ 1,25,000",
    duration: "1 Day Coverage",
    features: [
      "Lead photographer",
      "8 hours of coverage",
      "300+ edited photographs",
      "Online private gallery",
      "Highlight reel (60s)",
    ],
  },
  {
    name: "Royale",
    tagline: "Most loved",
    price: "₹ 2,75,000",
    duration: "2 Days Coverage",
    features: [
      "Lead photographer + cinematographer",
      "Full event coverage",
      "600+ edited photographs",
      "Cinematic 4K wedding film",
      "Pre-wedding portrait session",
      "Premium hardcover album",
    ],
    featured: true,
  },
  {
    name: "Maharaja",
    tagline: "The complete experience",
    price: "On request",
    duration: "3+ Days Coverage",
    features: [
      "Full creative team (3+ artists)",
      "All ceremonies & functions",
      "Aerial & drone cinematography",
      "Feature wedding film + teaser + reel",
      "Pre-wedding destination shoot",
      "Heirloom album & parents' albums",
      "Dedicated wedding day producer",
    ],
  },
];

const steps = [
  { num: "01", title: "Enquire", desc: "Share your date, venue and a glimpse of your story." },
  { num: "02", title: "Consult", desc: "We meet over a call to design the perfect coverage." },
  { num: "03", title: "Reserve", desc: "Confirm your date with a 25% retainer — we hold only one wedding per date." },
  { num: "04", title: "Celebrate", desc: "We arrive early, blend in, and capture every heartbeat." },
];

function BookPage() {
  const [selected, setSelected] = useState<string>("Royale");
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Reserve your date with RS Photography"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 luxury-overlay" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-[11px] tracking-[0.45em] text-gold animate-fade-up">
            ✦  RESERVE YOUR DATE  ✦
          </p>
          <h1 className="mt-8 font-serif-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up delay-200">
            Book Your <em className="text-gradient-gold not-italic">Session</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/80 animate-fade-up delay-500">
            We accept a limited number of weddings each year. Begin your story below.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-32 lg:px-12">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="gold-divider mx-auto">The Journey</p>
          <h2 className="mt-6 font-serif-display text-4xl md:text-6xl">
            Four steps to <em className="text-gradient-gold not-italic">forever</em>
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100} className="bg-background">
              <div className="group flex h-full flex-col gap-4 p-10 transition-colors duration-700 hover:bg-card">
                <p className="font-display text-3xl text-gold/40 transition-colors group-hover:text-gold">
                  {s.num}
                </p>
                <h3 className="font-serif-display text-2xl text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-border bg-card px-6 py-32 lg:px-12">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="gold-divider mx-auto">Investment</p>
          <h2 className="mt-6 font-serif-display text-4xl md:text-6xl">
            Choose your <em className="text-gradient-gold not-italic">experience</em>
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Every package is bespoke. Select a starting point — we will tailor it to your story.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {packages.map((p, i) => {
            const active = selected === p.name;
            return (
              <Reveal key={p.name} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => setSelected(p.name)}
                  className={`group relative flex h-full w-full flex-col gap-6 border p-10 text-left transition-all duration-700 ${
                    active
                      ? "border-gold bg-background shadow-[var(--shadow-gold)] -translate-y-1"
                      : "border-gold/20 bg-background hover:border-gold/60"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold px-4 py-1 font-display text-[9px] tracking-[0.32em] uppercase text-primary-foreground">
                      Most Loved
                    </span>
                  )}
                  <div>
                    <p className="font-display text-[10px] tracking-[0.32em] uppercase text-gold">
                      {p.tagline}
                    </p>
                    <h3 className="mt-3 font-serif-display text-4xl text-foreground">{p.name}</h3>
                  </div>

                  <div className="border-y border-border py-5">
                    <p className="font-serif-display text-3xl text-gradient-gold">{p.price}</p>
                    <p className="mt-1 font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      {p.duration}
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm text-foreground/85">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={2} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto inline-flex items-center justify-center gap-2 border px-6 py-3 font-display text-[10px] tracking-[0.32em] uppercase transition-all duration-500 ${
                      active
                        ? "border-gold bg-gold text-primary-foreground"
                        : "border-gold/40 text-gold group-hover:border-gold"
                    }`}
                  >
                    {active ? (
                      <>
                        <Check className="h-3.5 w-3.5" /> Selected
                      </>
                    ) : (
                      "Select"
                    )}
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="form" className="relative isolate overflow-hidden px-6 py-32 lg:px-12">
        <img
          src={detailsImg}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-background/85" />

        <div className="mx-auto grid max-w-6xl gap-px bg-border lg:grid-cols-5">
          {/* Summary */}
          <Reveal className="bg-background lg:col-span-2">
            <div className="flex h-full flex-col gap-8 p-10 lg:p-12">
              <div>
                <p className="gold-divider">Your Reservation</p>
                <h2 className="mt-6 font-serif-display text-3xl">A few details</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share your wedding details and we'll respond within 24 hours with availability
                  and next steps.
                </p>
              </div>

              <div className="border border-gold/30 bg-card p-6">
                <p className="font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  Selected Package
                </p>
                <p className="mt-2 flex items-center gap-3 font-serif-display text-2xl text-gold">
                  <Sparkles className="h-5 w-5" strokeWidth={1.2} />
                  {selected}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4 text-foreground/85">
                  <Calendar className="mt-0.5 h-4 w-4 text-gold" />
                  <span>Reply within 24 hours</span>
                </div>
                <div className="flex items-start gap-4 text-foreground/85">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <span>Available across India & worldwide</span>
                </div>
                <a
                  href="tel:+918468890581"
                  className="flex items-start gap-4 text-foreground/85 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  <span>+91 84688 90581 — speak with us directly</span>
                </a>
              </div>

              <div className="mt-auto border-t border-border pt-6">
                <p className="font-serif-display text-base italic text-foreground/80">
                  "We hold only one wedding per date — your story is never shared."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150} className="bg-background lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex h-full flex-col gap-6 p-10 lg:p-12"
            >
              <div>
                <p className="gold-divider">Reserve</p>
                <h2 className="mt-6 font-serif-display text-3xl">Begin your booking</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Bride's Name" name="bride" required />
                <Field label="Groom's Name" name="groom" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Wedding Date" name="date" type="date" required />
                <Field label="Venue / City" name="venue" required />
              </div>

              <div>
                <label className="font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  Events to Cover
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Engagement",
                    "Mehendi",
                    "Sangeet",
                    "Haldi",
                    "Wedding",
                    "Reception",
                    "Pre-Wedding",
                  ].map((ev) => (
                    <Chip key={ev} label={ev} name={ev} />
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  Tell Us About Your Wedding
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Theme, guests, special requests..."
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group mt-4 inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-gold disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Reservation Received
                  </>
                ) : (
                  <>
                    Confirm Booking Request
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Prefer to chat?{" "}
                <Link to="/contact" className="text-gold hover:underline">
                  Visit contact
                </Link>{" "}
                or call{" "}
                <a href="tel:+918468890581" className="text-gold hover:underline">
                  +91 84688 90581
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function Chip({ label, name }: { label: string; name: string }) {
  const [on, setOn] = useState(false);
  return (
    <label
      className={`cursor-pointer border px-4 py-2 font-display text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
        on
          ? "border-gold bg-gold text-primary-foreground"
          : "border-gold/30 text-foreground/80 hover:border-gold hover:text-gold"
      }`}
    >
      <input
        type="checkbox"
        name={name}
        className="sr-only"
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
      />
      {label}
    </label>
  );
}