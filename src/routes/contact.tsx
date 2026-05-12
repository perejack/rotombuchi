import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_TEL, waLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Roto Tank Kenya" },
      { name: "description", content: "Get in touch with Roto Tank Kenya. Call, WhatsApp, or email us." },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Get in touch</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold text-balance">Let's talk water.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Questions, custom orders or bulk pricing — our team is ready to
            help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-3 gap-5">
        {[
          { icon: Phone, title: "Call us", value: PHONE, href: `tel:${PHONE_TEL}` },
          { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: waLink("Hello Roto Tank!") },
          { icon: Mail, title: "Email", value: "sales@rototank.co.ke", href: "mailto:sales@rototank.co.ke" },
        ].map((c) => (
          <a
            key={c.title}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group bg-card border border-border rounded-3xl p-8 hover:border-accent hover:-translate-y-1 transition"
          >
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-accent text-accent-foreground mb-5 group-hover:scale-110 transition">
              <c.icon className="w-6 h-6" />
            </span>
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="mt-1 text-muted-foreground">{c.value}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 grid md:grid-cols-2 gap-5">
        <div className="bg-card border border-border rounded-3xl p-8">
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-secondary mb-4">
            <MapPin className="w-6 h-6" />
          </span>
          <h3 className="font-display text-2xl font-bold">Visit us</h3>
          <p className="mt-2 text-muted-foreground">
            Industrial Area, Nairobi, Kenya
          </p>
        </div>
        <div className="bg-card border border-border rounded-3xl p-8">
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-secondary mb-4">
            <Clock className="w-6 h-6" />
          </span>
          <h3 className="font-display text-2xl font-bold">Working hours</h3>
          <p className="mt-2 text-muted-foreground">Mon – Sat: 8:00 AM — 6:00 PM</p>
          <p className="text-muted-foreground">Sun: Closed</p>
        </div>
      </section>
    </>
  );
}
