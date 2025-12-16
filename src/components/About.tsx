import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Truck, CheckCircle, Star, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All our tanks are made from food-grade materials with UV resistance and come with comprehensive warranties."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Over 5 years of experience in water storage solutions with cutting-edge manufacturing processes."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional installation and customer support team available 24/7 for all your needs."
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary delivery service within Nairobi and surrounding areas for all tank purchases."
    }
  ];

  const stats = [
    { number: "5000+", label: "Tanks Delivered", icon: CheckCircle },
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "5", label: "Years Experience", icon: Award },
    { number: "4.9", label: "Customer Rating", icon: Star }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">About Roto Tank</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            Kenya's Trusted
            <span className="block mt-2 text-gradient-secondary">
              Water Storage Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in providing high-quality, durable water storage solutions 
            for residential, commercial, and industrial applications across Kenya.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-card hover:shadow-elegant transition-smooth bg-gradient-to-br from-card to-muted/30 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-semibold text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-smooth group bg-gradient-to-br from-card to-muted/30 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth shadow-glow">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;