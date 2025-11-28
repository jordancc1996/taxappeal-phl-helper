import { Link } from "react-router-dom";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import contactImage from "@/assets/contact-philly.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="dark" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 pt-24 md:pt-28">
        <nav className="text-sm font-body text-foreground/60">
          <Link to="/" className="hover:text-foreground transition-colors">
            Philly Tax Appeals
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Contact Us</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          contact us
        </h1>
        
        {/* Contact Image */}
        <div className="mb-16">
          <img 
            src={contactImage} 
            alt="Philadelphia skyline at golden hour with waterfront reflection" 
            className="w-full h-[400px] object-cover rounded-sm"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-12 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Get Your Free Evaluation
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Ready to see if your property is over-assessed? Fill out the form below and our team will review your property assessment at no cost. We serve{" "}
              <Link to="/philadelphia-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Philadelphia
              </Link>
              ,{" "}
              <Link to="/bucks-county-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Bucks County
              </Link>
              ,{" "}
              <Link to="/delaware-county-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Delaware County
              </Link>
              , and{" "}
              <Link to="/montgomery-county-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Montgomery County
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              No Upfront Costs
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              We work on contingency, which means you only pay if we successfully reduce your property tax assessment. Our interests are aligned with yours—achieving real savings for your property.
            </p>
          </div>
        </div>
      </div>

      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default Contact;
