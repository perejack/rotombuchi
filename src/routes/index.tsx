import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, Droplet, Sun, Award, Star, Phone } from "lucide-react";
import { products, TANK_IMAGE, PHONE, PHONE_TEL, waLink } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Trusted across Kenya
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[0.95] text-balance">
              Clean water,
              <span className="block text-accent">stored to last.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
              Premium UV-stabilized roto-moulded tanks engineered for Kenya's
              sun. From 1,000L homes to 24,000L industries — built to outlast.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold shadow-2xl shadow-accent/30 hover:brightness-110 transition"
              >
                Browse Tanks
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white hover:bg-white/10 transition backdrop-blur"
              >
                <Phone className="w-4 h-4 text-accent" /> {PHONE}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                <span className="ml-2">4.9/5 from 2,000+ customers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full" />
            <div className="relative animate-float">
              <img
                src={TANK_IMAGE}
                alt="Roto Tank cylindrical water tanks lineup"
                className="w-full max-w-xl mx-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div className="absolute -left-2 top-8 hidden sm:block bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 text-sm">
              <div className="text-accent font-semibold">UV Stabilized</div>
              <div className="text-white/70 text-xs">Built for Kenyan sun</div>
            </div>
            <div className="absolute -right-2 bottom-8 hidden sm:block bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 text-sm">
              <div className="text-accent font-semibold">10-Year Warranty</div>
              <div className="text-white/70 text-xs">Premium quality</div>
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="relative border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { icon: ShieldCheck, label: "Food-grade plastic" },
              { icon: Sun, label: "UV protected" },
              { icon: Truck, label: "Nationwide delivery" },
              { icon: Award, label: "10-yr warranty" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 text-white/80">
                <f.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl" />
          <div className="relative bg-ink text-white rounded-3xl p-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <img src={TANK_IMAGE} alt="Roto Tank" className="relative w-full max-w-sm mx-auto" />
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">About Roto Tank</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
            Engineered in Kenya, built to last decades.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            For over two decades Roto Tank has supplied homes, schools, farms
            and industries with the most reliable water storage on the market.
            Every tank is roto-moulded from food-grade, UV-stabilized
            polyethylene — seamless, hygienic and ready for the African sun.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "20+", l: "Years experience" },
              { n: "50K+", l: "Tanks delivered" },
              { n: "47", l: "Counties served" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-secondary p-5">
                <div className="font-display text-3xl font-bold text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent transition"
          >
            Our story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Featured</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">Best-selling tanks</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 font-semibold hover:text-accent transition">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Our Range</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">Every size, every need</h2>
          <p className="mt-4 text-muted-foreground">
            From compact 1,000L tanks for small homes to 24,000L industrial
            giants — find the perfect fit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Why Roto Tank</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">The difference is in the build.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Droplet, t: "Pure & safe", d: "Food-grade polyethylene keeps water clean and odour-free." },
              { icon: Sun, t: "UV stabilized", d: "Engineered to withstand harsh African sun for decades." },
              { icon: ShieldCheck, t: "Seamless build", d: "One-piece roto-moulding means no joints, no leaks." },
              { icon: Truck, t: "Free delivery", d: "Nationwide delivery on orders above KSh 20,000." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-accent/60 hover:-translate-y-1 transition">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent text-accent-foreground mb-4">
                  <f.icon className="w-6 h-6" />
                </span>
                <h3 className="font-semibold text-lg">{f.t}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink to-black p-10 md:p-16 text-white">
          <div className="absolute inset-0 bg-radial-amber opacity-70" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
                Need help choosing the right tank?
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Talk to our experts. We'll recommend the perfect size for your
                household, business or farm.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={waLink("Hello, I need help choosing a tank.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-7 py-4 font-semibold hover:brightness-110 transition">
                Chat on WhatsApp
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold hover:brightness-110 transition">
                <Phone className="w-4 h-4" /> Call now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
