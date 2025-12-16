import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle, Mail, Users, Sparkles } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+254751639896",
      description: "Available 24/7 for orders and inquiries",
      href: "tel:+254751639896"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+254751639896",
      description: "Quick response via WhatsApp",
      href: "https://wa.me/254751639896"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rototank.co.ke",
      description: "Send us detailed inquiries",
      href: "mailto:info@rototank.co.ke"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nairobi, Kenya",
      description: "Free delivery within Nairobi area",
      href: "#"
    }
  ];

  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your water storage tanks. Could you please provide more information?");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute inset-0 gradient-mesh-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Ready to Order Your
            <span className="block mt-2 text-gradient-secondary">
              Water Tank?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us today for expert advice, custom quotes, and fast delivery. 
            Our team is ready to help you find the perfect water storage solution.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-elegant transition-smooth group bg-gradient-to-br from-card to-muted/30 hover:-translate-y-2">
              <CardHeader className="pb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-glow">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-black group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-bold text-foreground mb-2 text-lg">{item.content}</div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-glow rounded-xl"
                  onClick={() => item.href !== "#" && window.open(item.href, '_blank')}
                >
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="border-0 shadow-elegant bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden relative">
          <CardContent className="p-12 text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-4">
                Get Your Custom Quote Today
              </h3>
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Need a specific size or have special requirements? Our experts will help you 
                choose the perfect tank and provide competitive pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-elegant hover-scale rounded-2xl"
                  onClick={() => window.open(`https://wa.me/254751639896?text=${whatsappMessage}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
                <Button 
                  size="lg"
                  className="glass-effect border-2 border-white/40 text-white hover:bg-white/20 font-bold px-10 py-6 text-lg rounded-2xl"
                  onClick={() => window.open('tel:+254751639896')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +254751639896
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <div className="mt-16 text-center">
          <Card className="inline-flex items-center gap-4 p-6 border-0 shadow-card bg-gradient-to-br from-card to-muted/30 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-glow">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-foreground text-lg">
              Business Hours: Monday - Saturday 8:00 AM - 6:00 PM
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;