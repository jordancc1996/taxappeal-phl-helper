import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-light mb-6 text-foreground">
            Start Saving Today
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Contact us for a free property assessment review and discover how much you could save
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-border text-center">
            <CardContent className="pt-8 pb-6">
              <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">Email Us</h3>
              <a 
                href="mailto:info@phillytaxappeals.com" 
                className="text-muted-foreground hover:text-accent transition-colors font-body"
              >
                info@phillytaxappeals.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="pt-8 pb-6">
              <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">Call Us</h3>
              <a 
                href="tel:+12155551234" 
                className="text-muted-foreground hover:text-accent transition-colors font-body"
              >
                (215) 555-1234
              </a>
            </CardContent>
          </Card>

          <Card className="border-border text-center">
            <CardContent className="pt-8 pb-6">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">Visit Us</h3>
              <p className="text-muted-foreground font-body">
                Philadelphia, PA
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-base px-8 py-6"
          >
            Request Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
