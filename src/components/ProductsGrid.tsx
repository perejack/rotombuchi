import { products } from "@/types/product";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsGrid = () => {
  // Show featured products (first 6)
  const featuredProducts = products.slice(0, 6);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute inset-0 gradient-mesh-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Featured Products</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Our Premium
            <span className="block mt-2 text-gradient-secondary">
              Water Tanks
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our range of high-quality cylindrical tanks designed for durability, 
            reliability, and long-lasting performance.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white font-bold px-10 py-6 text-lg shadow-glow hover:shadow-accent hover-scale rounded-2xl"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;