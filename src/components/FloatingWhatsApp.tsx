import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/products";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello Roto Tank! I'd like to know more.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-3 bg-whatsapp text-white pl-3 pr-5 py-3 rounded-full shadow-2xl shadow-black/30 animate-pulse-ring hover:scale-105 transition">
        <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15">
          <MessageCircle className="w-5 h-5" />
        </span>
        <span className="font-semibold text-sm whitespace-nowrap">Talk to us</span>
      </div>
    </a>
  );
}
