import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Droplet } from "lucide-react";
import { PHONE, PHONE_TEL, waLink } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent text-accent-foreground">
              <Droplet className="w-5 h-5" />
            </span>
            <span className="font-display text-xl font-bold text-white">ROTO TANK</span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium UV-stabilized water storage tanks built for Kenyan homes,
            farms and industries. Trusted by thousands across the country.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-accent">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-accent"><Phone className="w-4 h-4 text-accent" />{PHONE}</a></li>
            <li><a href={waLink("Hello Roto Tank, I'd like to order.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent"><MessageCircle className="w-4 h-4 text-accent" />WhatsApp</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" />sales@rototank.co.ke</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" />Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Roto Tank Kenya. All rights reserved.</span>
          <span>Built for clean water, every day.</span>
        </div>
      </div>
    </footer>
  );
}
