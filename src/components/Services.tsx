import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, TrendingDown, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Property Assessment Review",
      description: "Comprehensive analysis of your property's current assessment to identify opportunities for tax reduction."
    },
    {
      icon: Users,
      title: "Expert Representation",
      description: "Professional advocacy at appeal hearings with experienced consultants who know the system."
    },
    {
      icon: TrendingDown,
      title: "Tax Reduction Strategy",
      description: "Customized approach based on your property type, location, and assessment history."
    },
    {
      icon: Shield,
      title: "Risk-Free Service",
      description: "No upfront costs. We only succeed when you save money on your property taxes."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-normal mb-8 text-foreground">
            Our Services
          </h2>
          <p className="text-base md:text-lg font-body text-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tax appeal services designed to maximize your savings and minimize your stress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <service.icon className="w-10 h-10 text-foreground" />
              <h3 className="text-2xl font-display font-normal text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground font-body text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
