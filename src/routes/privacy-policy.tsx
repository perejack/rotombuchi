import { createFileRoute } from "@tanstack/react-router";
import { Shield, Eye, Lock, Database } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Roto Tank Kenya" },
      { name: "description", content: "Roto Tank Kenya's privacy policy - how we collect, use, and protect your personal information." },
    ],
  }),
});

function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Legal</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold text-balance">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information when you visit our website 
            or purchase our products.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Information We Collect
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website or WhatsApp</li>
                  <li>Request a quote or place an order</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out forms on our website</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, 
                  physical address, and any other information you choose to provide.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                How We Use Your Information
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process your orders and provide customer service</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you information about our products and services</li>
                  <li>Improve our website and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <Lock className="w-8 h-8 text-primary" />
                Data Security
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to 
                  protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <Database className="w-8 h-8 text-primary" />
                Third-Party Services
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We may share your information with trusted third-party service 
                  providers who assist us in operating our website, conducting our 
                  business, or servicing customers. These providers are contractually 
                  obligated to protect your information.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Your Rights</h2>
              <div className="text-muted-foreground space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Our website uses cookies to enhance your experience. Cookies are 
                  small files stored on your device that help us analyze website traffic 
                  and improve our services. You can choose to disable cookies through 
                  your browser settings.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Policy Updates</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We may update this privacy policy from time to time. We will notify 
                  you of any changes by posting the new policy on this page and updating 
                  the "Last updated" date.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-2xl p-6 mt-12">
              <h3 className="font-semibold text-xl mb-3">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p><strong>Phone:</strong> +254 736 698 594</p>
                <p><strong>Email:</strong> info@rototank.co.ke</p>
                <p><strong>Address:</strong> Nairobi, Kenya</p>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground pt-8 border-t">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
