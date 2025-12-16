import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <ProductsGrid />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-foreground via-primary to-secondary text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-black text-xl">R</span>
                </div>
                <div>
                  <span className="font-black text-2xl">Roto Tank</span>
                  <p className="text-xs text-white/70">Premium Storage</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Kenya's trusted provider of premium water storage solutions. 
                Quality tanks for residential, commercial, and industrial use.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-smooth backdrop-blur-sm">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-smooth backdrop-blur-sm">
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-smooth backdrop-blur-sm">
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-black text-xl mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#products" className="block text-white/80 hover:text-white transition-smooth font-semibold hover:translate-x-2 duration-300">
                  → Products
                </a>
                <a href="#about" className="block text-white/80 hover:text-white transition-smooth font-semibold hover:translate-x-2 duration-300">
                  → About Us
                </a>
                <a href="#contact" className="block text-white/80 hover:text-white transition-smooth font-semibold hover:translate-x-2 duration-300">
                  → Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-black text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold mb-1">Phone</p>
                    <p className="text-white font-bold">+254751639896</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold mb-1">Location</p>
                    <p className="text-white font-bold">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <span className="text-lg">🕐</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold mb-1">Hours</p>
                    <p className="text-white font-bold">Mon-Sat 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/70 text-sm font-medium">
                © 2024 Roto Tank. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-smooth font-medium">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white transition-smooth font-medium">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
