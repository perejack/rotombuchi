import { Phone, Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Gradient Bar */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-2.5 px-4">
        <div className="container mx-auto flex justify-center items-center gap-2 text-sm font-semibold">
          <Phone className="w-4 h-4" />
          <span>Call us: +254751639896</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="glass-effect sticky top-0 z-50 shadow-elegant border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-foreground">Roto Tank</span>
                <span className="text-xs text-muted-foreground font-medium">Premium Storage</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-semibold px-4 py-2 rounded-xl hover:bg-primary/10"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Contact */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+254751639896"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+254751639896</span>
              </a>
              <Button 
                className="bg-gradient-to-r from-primary to-accent text-white font-bold shadow-glow hover:shadow-accent hover-scale rounded-xl"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10 shadow-elegant">
            <div className="container mx-auto px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-smooth font-semibold py-3 px-4 rounded-xl hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border/50">
                <a
                  href="tel:+254751639896"
                  className="flex items-center gap-2 text-sm mb-4 font-semibold text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+254751639896</span>
                </a>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-glow rounded-xl"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;