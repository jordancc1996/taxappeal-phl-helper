import { Link } from "react-router-dom";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";

const DelawareCounty = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-light lowercase text-foreground hover:opacity-70 transition-opacity">
            philly tax appeals
          </Link>
          <div className="flex gap-8 text-foreground font-body text-sm">
            <Link to="/bucks-county-property-tax-appeal" className="hover:opacity-70 transition-opacity">Bucks County</Link>
            <Link to="/delaware-county-property-tax-appeal" className="hover:opacity-70 transition-opacity">Delaware County</Link>
            <Link to="/montgomery-county-property-tax-appeal" className="hover:opacity-70 transition-opacity">Montgomery County</Link>
            <Link to="/philadelphia-property-tax-appeal" className="hover:opacity-70 transition-opacity">Philadelphia</Link>
            <Link to="/#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          Delaware County Tax Appeals
        </h1>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Expert Tax Appeal Services
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our team specializes in Delaware County property tax appeals, with deep knowledge of local assessment practices and proven success in reducing tax burdens for property owners throughout the county.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Local Expertise
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              We understand the unique challenges of Delaware County assessments and have established relationships with local assessment offices to ensure your appeal receives proper consideration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              No Risk Consultation
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Schedule a free consultation to review your property assessment. We only succeed when you save money, with no upfront costs or hidden fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Proven Track Record
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our Delaware County clients have achieved significant tax reductions through our comprehensive appeal process and expert representation at hearings.
            </p>
          </div>
        </div>
      </div>

      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default DelawareCounty;
