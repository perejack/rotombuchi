import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tanks.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Water Storage Tanks"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent-light" />
            <span className="text-sm font-semibold">Kenya's #1 Water Storage Solution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in">
            Premium Water
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white">
              Storage Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
            High-quality cylindrical tanks from 1,000L to 24,000L. Durable, reliable, 
            and competitively priced for homes, businesses, and industrial applications.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {[
              { icon: CheckCircle, text: "5-Year Warranty" },
              { icon: Truck, text: "Free Delivery*" },
              { icon: Shield, text: "Food Grade Safe" },
            ].map((feature, index) => (
              <div key={index} className="glass-effect rounded-2xl px-6 py-3 hover:bg-white/20 transition-smooth">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-lg">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-elegant hover-scale rounded-2xl"
              >
                View Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect border-2 border-white/40 text-white hover:bg-white/20 font-bold px-10 py-6 text-lg rounded-2xl"
            >
              Call +254751639896
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto animate-fade-in">
            {[
              { number: "5000+", label: "Tanks Delivered" },
              { number: "500+", label: "Happy Customers" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover:bg-white/20 transition-smooth">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center glass-effect">
          <div className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;