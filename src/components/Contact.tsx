import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-normal mb-8 text-foreground">
            Start Saving Today
          </h2>
          <p className="text-base md:text-lg font-body text-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us for a free property assessment review and discover how much you could save
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center">
          <div className="space-y-4">
            <Mail className="w-8 h-8 text-foreground mx-auto" />
            <h3 className="text-lg font-display font-normal text-foreground">Email</h3>
            <a 
              href="mailto:info@phillytaxappeals.com" 
              className="text-foreground hover:text-muted-foreground transition-colors font-body block text-base"
            >
              info@phillytaxappeals.com
            </a>
          </div>

          <div className="space-y-4">
            <Phone className="w-8 h-8 text-foreground mx-auto" />
            <h3 className="text-lg font-display font-normal text-foreground">Phone</h3>
            <a 
              href="tel:+12155551234" 
              className="text-foreground hover:text-muted-foreground transition-colors font-body block text-base"
            >
              (215) 555-1234
            </a>
          </div>

          <div className="space-y-4">
            <MapPin className="w-8 h-8 text-foreground mx-auto" />
            <h3 className="text-lg font-display font-normal text-foreground">Location</h3>
            <p className="text-foreground font-body text-base">
              Philadelphia, PA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
