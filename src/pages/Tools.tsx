import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

const toolsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Property Tax Appeal Tools",
  "description": "Free property tax appeal tools and resources for Philadelphia, Bucks, Delaware, and Montgomery County property owners.",
  "url": "https://www.phillytaxappeals.com/tools"
};

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Property Tax Tools | Philly Tax Appeals - Free Resources"
        description="Free property tax appeal tools and resources for Philadelphia, Bucks, Delaware, and Montgomery County property owners. Calculate potential savings and more."
        canonicalPath="/tools"
        schema={toolsPageSchema}
      />
      
      <Navigation variant="dark" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 pt-24 md:pt-28">
        <nav className="text-sm font-body text-foreground/60" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">
            Philly Tax Appeals
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Tools</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          tools
        </h1>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Property Tax Resources
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Access our collection of free tools and resources designed to help you understand your property tax assessment and potential savings. We serve{" "}
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
              Real Estate Estimator
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Use our{" "}
              <Link to="/tools/real-estate-estimator" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Real Estate Estimator
              </Link>{" "}
              to compare your assessed value against market value and calculate your potential property tax savings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Free Evaluation
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              In the meantime, the best tool at your disposal is our free property assessment evaluation.{" "}
              <Link to="/contact" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Contact us today
              </Link>{" "}
              to get started with no upfront costs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Expert Guidance
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our team of property tax experts can guide you through the appeal process and help you understand your options. We work on contingency, so you only pay if we win.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tools;
