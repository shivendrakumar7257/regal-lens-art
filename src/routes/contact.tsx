import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RS Photography | Book Your Wedding" },
      {
        name: "description",
        content:
          "Reach RS Photography at +91 84688 90581 or send an enquiry to book your wedding photography & cinematography.",
      },
      { property: "og:title", content: "Contact — RS Photography" },
      {
        property: "og:description",
        content: "Begin your story with us. Call +91 84688 90581 or send an enquiry.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative pt-40 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="gold-divider mx-auto animate-fade-up">Begin</p>
          <h1 className="mt-6 font-serif-display text-5xl leading-tight md:text-7xl animate-fade-up delay-200">
            Let's create something <em className="text-gradient-gold not-italic">extraordinary</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground animate-fade-up delay-300">
            We accept a limited number of weddings each year. Share your story and we'll be in
            touch within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-px bg-border lg:grid-cols-5">
          {/* Info */}
          <Reveal className="bg-background lg:col-span-2">
            <div className="flex h-full flex-col gap-10 p-10 lg:p-14">
              <div>
                <p className="gold-divider">Direct</p>
                <h2 className="mt-6 font-serif-display text-3xl">Speak with us</h2>
              </div>

              <a
                href="tel:+918468890581"
                className="group block border-l-2 border-gold/40 pl-6 transition-all hover:border-gold"
              >
                <p className="font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  Call
                </p>
                <p className="mt-2 font-serif-display text-3xl text-gold transition-colors group-hover:text-foreground">
                  +91 84688 90581
                </p>
              </a>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4 text-foreground/85">
                  <Mail className="mt-0.5 h-4 w-4 text-gold" />
                  <a href="mailto:hello@rsphotography.in" className="hover:text-gold">
                    hello@rsphotography.in
                  </a>
                </div>
                <div className="flex items-start gap-4 text-foreground/85">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <span>Studio in India · Travelling worldwide</span>
                </div>
                <div className="flex items-start gap-4 text-foreground/85">
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  <span>WhatsApp available 9am – 9pm IST</span>
                </div>
              </div>

              <div className="mt-auto overflow-hidden border border-gold/20">
                <iframe
                  title="Studio location"
                  src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"
                  className="h-48 w-full grayscale-[0.6]"
                  loading="lazy"
                />
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
              className="flex h-full flex-col gap-6 p-10 lg:p-14"
            >
              <div>
                <p className="gold-divider">Enquire</p>
                <h2 className="mt-6 font-serif-display text-3xl">Tell us your story</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Wedding Date" name="date" type="date" />
              <Field label="Venue / City" name="venue" />

              <div>
                <label className="font-display text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  Tell Us More
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share a little about your celebration..."
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-display text-[10px] tracking-[0.32em] uppercase text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-gold"
              >
                {sent ? "Thank You — We'll Be In Touch" : "Send Enquiry"}
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
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