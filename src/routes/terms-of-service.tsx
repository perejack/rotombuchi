import { createFileRoute } from "@tanstack/react-router";
import { FileText, ShoppingCart, Shield, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServicePage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Roto Tank Kenya" },
      { name: "description", content: "Roto Tank Kenya's terms of service - legal terms and conditions for using our website and purchasing our products." },
    ],
  }),
});

function TermsOfServicePage() {
  return (
    <>
      <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-amber" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Legal</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl font-bold text-balance">
            Terms of <span className="text-accent">Service</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            These terms and conditions govern your use of our website and the 
            purchase of products from Roto Tank Kenya. By using our services, 
            you agree to these terms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Acceptance of Terms
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  By accessing and using the Roto Tank Kenya website, you accept 
                  and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <ShoppingCart className="w-8 h-8 text-primary" />
                Products and Services
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Roto Tank Kenya specializes in the manufacture and sale of 
                  high-quality water storage tanks. Our products include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cylindrical water tanks (1,000L to 24,000L)</li>
                  <li>UV-stabilized polyethylene tanks</li>
                  <li>Food-grade storage solutions</li>
                  <li>Custom tank solutions</li>
                </ul>
                <p>
                  All products are manufactured according to Kenyan standards and 
                  come with a 10-year warranty against manufacturing defects.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Pricing and Payment</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  All prices are quoted in Kenyan Shillings (KES) and are inclusive 
                  of applicable taxes. We reserve the right to modify prices at any 
                  time without prior notice.
                </p>
                <p>
                  Payment methods accepted include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mobile money (M-Pesa, Airtel Money)</li>
                  <li>Bank transfers</li>
                  <li>Cash on delivery</li>
                  <li>Cheques (corporate clients only)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Delivery and Shipping</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We offer nationwide delivery across Kenya. Delivery times vary 
                  based on location and order size:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nairobi metropolitan area: 2-3 business days</li>
                  <li>Major towns: 3-5 business days</li>
                  <li>Remote areas: 5-7 business days</li>
                </ul>
                <p>
                  Delivery charges apply based on distance and order size. 
                  Free delivery is available for orders above 50,000 KES within Nairobi.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Warranty and Returns
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  All Roto Tank products come with a 10-year warranty against 
                  manufacturing defects. The warranty covers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cracks or leaks due to manufacturing defects</li>
                  <li>UV degradation under normal usage conditions</li>
                  <li>Structural failures under specified load conditions</li>
                </ul>
                <p>
                  The warranty does not cover damage caused by improper installation, 
                  misuse, or external forces. Returns are accepted within 7 days of 
                  delivery for manufacturing defects only.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-primary" />
                Limitation of Liability
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Roto Tank Kenya shall not be liable for any indirect, incidental, 
                  special, or consequential damages arising from the use of our 
                  products or services, including but not limited to loss of profits, 
                  data, or other intangible losses.
                </p>
                <p>
                  Our maximum liability to you for any claim arising from these 
                  terms shall not exceed the amount you paid for the product in question.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Intellectual Property</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  All content on this website, including but not limited to text, 
                  graphics, logos, images, and software, is the property of Roto Tank Kenya 
                  and is protected by intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, or create derivative works from 
                  our content without prior written consent.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Governing Law</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  These terms and conditions shall be governed by and construed in 
                  accordance with the laws of the Republic of Kenya. Any disputes 
                  arising from these terms shall be subject to the exclusive jurisdiction 
                  of the courts of Nairobi, Kenya.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Changes to Terms</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Changes 
                  will be effective immediately upon posting on this website. Your 
                  continued use of our services constitutes acceptance of any modified terms.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-2xl p-6 mt-12">
              <h3 className="font-semibold text-xl mb-3">Contact Information</h3>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us:
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
