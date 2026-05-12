import { Link } from "react-router-dom";
import { TANK_IMAGE } from "@/lib/products";
import { Award, Users, Truck, Sparkles } from "lucide-react";

function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Our Story</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold text-balance">
            Built on trust. <span className="text-accent">Engineered to last.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            For over two decades, Roto Tank has supplied Kenya with the most
            reliable water storage solutions — engineered for the African sun
            and built for everyday life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-secondary rounded-3xl p-10">
          <img src={TANK_IMAGE} alt="Roto Tank" className="w-full max-w-md mx-auto" />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold text-balance">From a single tank to a national name.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            What started as a mission to provide clean, reliable water storage
            for Kenyan families has grown into one of the country's most
            trusted brands. Today, Roto Tank serves homes, schools, farms and
            industries across all 47 counties.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every tank we make is roto-moulded from food-grade,
            UV-stabilized polyethylene — seamless, hygienic, and engineered
            to last decades.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">What drives us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, t: "Quality first", d: "Every tank passes rigorous QC before leaving our facility." },
              { icon: Users, t: "Customer focused", d: "Real people, real support — when you need us." },
              { icon: Truck, t: "Reliable delivery", d: "Nationwide delivery with care, every time." },
              { icon: Sparkles, t: "Built to last", d: "10-year warranty backs our manufacturing promise." },
            ].map((v) => (
              <div key={v.t} className="bg-card border border-border rounded-2xl p-6">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-ink text-white mb-4">
                  <v.icon className="w-6 h-6" />
                </span>
                <h3 className="font-semibold text-lg">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
