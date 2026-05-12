import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Droplet } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_TEL } from "@/lib/products";

export function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-ink text-brand-foreground border-b border-white/10">
      {/* Top utility bar — phone always visible, even on small */}
      <div className="bg-black/60 text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-3">
          <span className="hidden sm:inline text-white/70">
            Kenya's trusted water storage tanks
          </span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent/80 transition"
          >
            <span className="grid place-items-center w-6 h-6 rounded-full bg-accent text-accent-foreground">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span className="tracking-wide">{PHONE}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent text-accent-foreground shadow-lg shadow-accent/20 group-hover:rotate-6 transition">
            <Droplet className="w-5 h-5" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">ROTO TANK</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Kenya</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-white/80 hover:text-accent transition relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition shadow-lg shadow-accent/20"
          >
            Shop Tanks
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-white/15"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-white/80 hover:bg-white/5"
                activeProps={{ className: "text-accent bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
            >
              Shop Tanks
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
