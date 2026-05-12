import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

function ProductsIndexPage() {
  return (
    <>
      <section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="relative mx-auto max-w-7xl px-4">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Shop</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold text-balance max-w-2xl">
            Our complete tank range
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            Premium cylindrical tanks engineered for every Kenyan household,
            farm and industry.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}

export default ProductsIndexPage;
