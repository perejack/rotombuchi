import { Link } from "@tanstack/react-router";
import { Eye, ShoppingCart } from "lucide-react";
import { Product, TANK_IMAGE } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/60 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
      <div className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-wider font-bold bg-ink text-white px-2.5 py-1 rounded-full">
        {product.capacity}
      </div>
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block relative aspect-square bg-gradient-to-br from-secondary to-background overflow-hidden">
        <img
          src={TANK_IMAGE}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
      </Link>
      <div className="p-5">
        <h3 className="font-display font-semibold text-base leading-tight">{product.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold text-foreground">{product.priceLabel}</span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center justify-center gap-2 bg-ink text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-ink/85 transition"
          >
            <ShoppingCart className="w-4 h-4" /> Order Now
          </Link>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent hover:text-accent px-4 py-2.5 rounded-full text-sm font-semibold transition"
          >
            <Eye className="w-4 h-4" /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
