import { Link } from "react-router-dom";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import RelatedCounties from "@/components/RelatedCounties";
import delawareCountyImage from "@/assets/delaware-county.jpg";

const DelawareCounty = () => {
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
          <span className="text-foreground">Delaware County Property Tax Appeals</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          Delaware County Tax Appeals
        </h1>
        
        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={delawareCountyImage} 
            alt="Delaware County Pennsylvania property for tax appeal services" 
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Expert Delaware County Tax Appeal Services
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our team specializes in Delaware County property tax appeals, with deep knowledge of local assessment practices and proven success in reducing tax burdens for property owners throughout the county. As a{" "}
              <Link to="/" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Philadelphia-based tax appeal firm
              </Link>
              , we bring regional expertise to every case.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Local Delaware County Expertise
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              We understand the unique challenges of Delaware County assessments and have established relationships with local assessment offices to ensure your appeal receives proper consideration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              No Risk Property Tax Consultation
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Schedule a free consultation to review your property assessment. We only succeed when you save money, with no upfront costs or hidden fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Proven Tax Appeal Track Record
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our Delaware County clients have achieved significant tax reductions through our comprehensive appeal process and expert representation at hearings.
            </p>
          </div>
        </div>
      </div>

      <RelatedCounties currentCounty="delaware" />
      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default DelawareCounty;
