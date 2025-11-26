import { Link } from "react-router-dom";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";

const MontgomeryCounty = () => {
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
          Montgomery County Tax Appeals
        </h1>
        
        {/* Image Placeholder */}
        <div className="mb-16">
          <div className="w-full h-[400px] bg-muted/30 rounded-sm flex items-center justify-center">
            <span className="text-muted-foreground font-body">Image Placeholder - Montgomery County</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Specialized Montgomery County Service
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Navigate the complexities of Montgomery County property tax assessments with our experienced team. We provide comprehensive analysis and expert representation tailored to local procedures.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              County-Specific Knowledge
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our deep understanding of Montgomery County assessment methodologies and appeal processes ensures your case is presented effectively to achieve maximum tax reduction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Risk-Free Approach
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Begin with a complimentary assessment review. Our contingency-based fee structure means you pay nothing unless we successfully reduce your property taxes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Successful Outcomes
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Montgomery County property owners trust us to deliver results. Our systematic approach and local expertise consistently achieve meaningful tax savings.
            </p>
          </div>
        </div>
      </div>

      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default MontgomeryCounty;
