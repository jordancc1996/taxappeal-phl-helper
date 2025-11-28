import { Link } from "react-router-dom";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import RelatedCounties from "@/components/RelatedCounties";
import montgomeryCountyImage from "@/assets/montgomery-county.jpg";

const MontgomeryCounty = () => {
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
          <span className="text-foreground">Montgomery County Property Tax Appeals</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          Montgomery County Tax Appeals
        </h1>
        
        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src={montgomeryCountyImage} 
            alt="Montgomery County Pennsylvania property for tax appeal services" 
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Specialized Montgomery County Tax Appeal Service
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Navigate the complexities of Montgomery County property tax assessments with our experienced team. We provide comprehensive analysis and expert representation tailored to local procedures. As a{" "}
              <Link to="/" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Philadelphia-based tax appeal firm
              </Link>
              , we bring regional expertise to every case.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Montgomery County-Specific Knowledge
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our deep understanding of Montgomery County assessment methodologies and appeal processes ensures your case is presented effectively to achieve maximum tax reduction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Risk-Free Property Tax Approach
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Begin with a complimentary assessment review. Our contingency-based fee structure means you pay nothing unless we successfully reduce your property taxes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Successful Tax Appeal Outcomes
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Montgomery County property owners trust us to deliver results. Our systematic approach and local expertise consistently achieve meaningful tax savings.
            </p>
          </div>
        </div>
      </div>

      <RelatedCounties currentCounty="montgomery" />
      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default MontgomeryCounty;
