import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

const realEstateEstimatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Real Estate Estimator",
  "description": "Calculate your potential property tax savings by comparing your assessed value to market value.",
  "url": "https://www.phillytaxappeals.com/tools/real-estate-estimator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any"
};

const RealEstateEstimator = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Real Estate Estimator | Philly Tax Appeals - Calculate Your Savings"
        description="Free property tax savings calculator. Enter your address to compare your assessed value vs market value and see how much you could save on property taxes."
        canonicalPath="/tools/real-estate-estimator"
        schema={realEstateEstimatorSchema}
      />
      
      <Navigation variant="dark" />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 pt-24 md:pt-28">
        <nav className="text-sm font-body text-foreground/60" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">
            Philly Tax Appeals
          </Link>
          <span className="mx-2">›</span>
          <Link to="/tools" className="hover:text-foreground transition-colors">
            Tools
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Real Estate Estimator</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 text-foreground lowercase">
          real estate estimator
        </h1>
        
        <p className="text-foreground/80 font-body text-lg md:text-xl max-w-3xl mb-12">
          Enter your property address to compare your assessed value against market value and calculate your potential property tax savings.
        </p>

        {/* Tool Container - Ready for your code */}
        <div className="bg-muted/30 border border-border rounded-lg p-8 md:p-12">
          <p className="text-foreground/60 font-body text-center">
            Tool will be added here
          </p>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-12 mt-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our estimator compares your property's assessed value to its current market value. If your assessment is higher than the market value, you may be overpaying on property taxes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-4">
              Next Steps
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              If our estimator shows potential savings,{" "}
              <Link to="/contact" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                contact us
              </Link>{" "}
              for a free detailed evaluation. We work on contingency—you only pay if we win your appeal.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RealEstateEstimator;
