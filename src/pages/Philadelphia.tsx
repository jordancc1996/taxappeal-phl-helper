import { Link } from "react-router-dom";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import RelatedCounties from "@/components/RelatedCounties";
import philadelphiaImage from "@/assets/philadelphia.jpg";

const Philadelphia = () => {
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
          <span className="text-foreground">Philadelphia Property Tax Appeals</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          Philadelphia Tax Appeals
        </h1>
        
        {/* Philadelphia Image */}
        <div className="mb-16">
          <img 
            src={philadelphiaImage} 
            alt="Historic Philadelphia row homes with stone facades" 
            className="w-full h-[400px] object-cover rounded-sm"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Philadelphia Property Tax Expertise
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Founded in Philadelphia, we bring unparalleled expertise in navigating the city's property tax assessment and appeal system. Our team knows the local process inside and out. Learn more about our{" "}
              <Link to="/" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Philadelphia tax appeal services
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Philadelphia City Assessment System
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Philadelphia's assessment system has unique characteristics that require specialized knowledge. We leverage our experience to build compelling cases for tax reduction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              No Upfront Costs for Tax Appeals
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Start with a free evaluation of your property assessment. We work on contingency, ensuring our interests are aligned with achieving savings for you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Proven Philadelphia Tax Appeal Results
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our Philadelphia roots and track record speak for themselves. We've helped countless city property owners reduce their tax burden through effective appeals.
            </p>
          </div>
        </div>
      </div>

      <RelatedCounties currentCounty="philadelphia" />
      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default Philadelphia;
