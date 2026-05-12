import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone, MessageCircle, ShieldCheck, Sun, Truck, Droplet, Check, Star } from "lucide-react";
import { getProduct, products, TANK_IMAGE, PHONE, PHONE_TEL, waLink } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetail,
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Roto Tank Kenya` },
          { name: "description", content: `${loaderData.product.name} at ${loaderData.product.priceLabel}. Order via WhatsApp or call.` },
          { property: "og:image", content: TANK_IMAGE },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block text-accent">Back to products</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const orderMsg = `Hello Roto Tank! I'd like to order a ${product.name} (${product.priceLabel}). Please share next steps.`;

  return (
    <>
      <div className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pt-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent transition">
            <ArrowLeft className="w-4 h-4" /> Back to all tanks
          </Link>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full" />
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
                <img
                  src={TANK_IMAGE}
                  alt={product.name}
                  className="w-full max-w-md mx-auto animate-float drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div className="absolute -left-2 top-6 bg-accent text-accent-foreground rounded-2xl px-4 py-3 font-semibold shadow-xl">
                {product.capacity}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                <span className="ml-2 text-sm text-white/70">Rated 4.9 by 2,000+ customers</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance">{product.name}</h1>
              <p className="mt-4 text-white/70 max-w-md leading-relaxed">
                Premium UV-stabilized cylindrical tank, roto-moulded from
                food-grade polyethylene. Built seamless for zero leaks and
                designed to last decades under the African sun.
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-accent">{product.priceLabel}</span>
                <span className="text-sm text-white/50">VAT inclusive</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {["Food-grade polyethylene", "UV stabilized for African sun", "Seamless one-piece build", "10-year warranty"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> {f}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink(orderMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-7 py-4 font-semibold hover:brightness-110 transition shadow-2xl shadow-black/30"
                >
                  <MessageCircle className="w-5 h-5" /> Order via WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:brightness-110 transition shadow-2xl shadow-accent/20"
                >
                  <Phone className="w-5 h-5" /> Call to order
                </a>
              </div>
              <div className="mt-3 text-sm text-white/60">
                Or call us directly: <a className="text-accent font-semibold" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPECS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-3 gap-6">
        {[
          { icon: Droplet, t: "Capacity", d: product.capacity },
          { icon: ShieldCheck, t: "Material", d: "Food-grade PE" },
          { icon: Sun, t: "UV Rating", d: "Class A — Premium" },
        ].map((s) => (
          <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-secondary mb-4">
              <s.icon className="w-6 h-6 text-foreground" />
            </span>
            <div className="text-sm text-muted-foreground">{s.t}</div>
            <div className="font-display text-2xl font-bold mt-1">{s.d}</div>
          </div>
        ))}
      </section>

      {/* DETAILS */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">Why this tank</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The {product.name} is engineered for reliability. Whether you're
              storing water for a home, farm or business, every tank is built
              with the same uncompromising quality that has made Roto Tank
              Kenya's most trusted name in water storage.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { t: "Free delivery", d: "On orders above KSh 20,000 across Kenya." },
              { t: "10-year warranty", d: "Manufacturer-backed peace of mind." },
              { t: "Easy installation", d: "Lightweight design — easy to position on stands or ground." },
              { t: "Hygienic & safe", d: "Food-grade material keeps water pure." },
            ].map((b) => (
              <div key={b.t} className="flex gap-4 bg-card border border-border rounded-2xl p-5">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-accent text-accent-foreground shrink-0">
                  <Check className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold">{b.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-10 md:p-14">
          <div className="absolute inset-0 bg-radial-amber" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">Ready to order your {product.capacity} tank?</h3>
              <p className="mt-2 text-white/70">Talk to us on WhatsApp or call now — fast response guaranteed.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waLink(orderMsg)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 font-semibold hover:brightness-110">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold hover:brightness-110">
                <Phone className="w-5 h-5" /> Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">You may also like</h2>
          <Link to="/products" className="text-sm font-semibold hover:text-accent">View all</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
