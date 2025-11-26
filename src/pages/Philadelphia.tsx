import { Link } from "react-router-dom";

const Philadelphia = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-light lowercase text-foreground hover:opacity-70 transition-opacity">
            philly tax appeals
          </Link>
          <div className="flex gap-8 text-foreground font-body text-sm">
            <Link to="/delaware-county" className="hover:opacity-70 transition-opacity">Delaware County</Link>
            <Link to="/montgomery-county" className="hover:opacity-70 transition-opacity">Montgomery County</Link>
            <Link to="/philadelphia" className="hover:opacity-70 transition-opacity">Philadelphia</Link>
            <Link to="/#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-12 text-foreground lowercase">
          Philadelphia Tax Appeals
        </h1>
        
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Philadelphia Expertise
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Founded in Philadelphia, we bring unparalleled expertise in navigating the city's property tax assessment and appeal system. Our team knows the local process inside and out.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              City Assessment System
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Philadelphia's assessment system has unique characteristics that require specialized knowledge. We leverage our experience to build compelling cases for tax reduction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              No Upfront Costs
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Start with a free evaluation of your property assessment. We work on contingency, ensuring our interests are aligned with achieving savings for you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
              Proven Philadelphia Results
            </h2>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              Our Philadelphia roots and track record speak for themselves. We've helped countless city property owners reduce their tax burden through effective appeals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philadelphia;
