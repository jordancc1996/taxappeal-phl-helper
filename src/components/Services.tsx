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
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-light mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tax appeal services designed to maximize your savings and minimize your stress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
