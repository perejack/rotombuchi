import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, ShieldCheck, Sun, Truck, Droplet, Check, Star } from "lucide-react";
import { getProduct, products, TANK_IMAGE, PHONE, PHONE_TEL, waLink } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug);
  
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold">Product not found</h1>
          <p className="mt-4 text-muted-foreground">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products" className="mt-6 inline-block text-accent hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="bg-ink text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="relative mx-auto max-w-7xl px-4">
          <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-accent">
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </Link>
          <div className="bg-secondary rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-2xl p-6">
                <img src={TANK_IMAGE} alt={product.name} className="w-full max-w-md mx-auto" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-balance">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold text-primary mt-2">{product.priceLabel}</p>
                <p className="text-muted-foreground mt-4">{product.capacity}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
