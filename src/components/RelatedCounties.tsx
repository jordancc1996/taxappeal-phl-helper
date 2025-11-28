import { Link } from "react-router-dom";

interface RelatedCountiesProps {
  currentCounty: "bucks" | "delaware" | "montgomery" | "philadelphia";
}

const countyData = {
  bucks: {
    name: "Bucks County",
    path: "/bucks-county-property-tax-appeal",
    description: "Bucks County property tax appeal services"
  },
  delaware: {
    name: "Delaware County",
    path: "/delaware-county-property-tax-appeal",
    description: "Delaware County property tax appeal services"
  },
  montgomery: {
    name: "Montgomery County",
    path: "/montgomery-county-property-tax-appeal",
    description: "Montgomery County property tax appeal services"
  },
  philadelphia: {
    name: "Philadelphia",
    path: "/philadelphia-property-tax-appeal",
    description: "Philadelphia property tax appeal services"
  }
};

const RelatedCounties = ({ currentCounty }: RelatedCountiesProps) => {
  const otherCounties = Object.entries(countyData).filter(
    ([key]) => key !== currentCounty
  );

  return (
    <section className="py-20 px-8 md:px-20 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-4 lowercase">
          Other Service Areas
        </h2>
        <p className="text-foreground/70 font-body text-lg mb-10 max-w-2xl">
          <Link to="/" className="text-foreground hover:opacity-70 transition-opacity underline underline-offset-4">
            Philly Tax Appeals
          </Link>
          {" "}provides expert property tax appeal services throughout the Greater Philadelphia region.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {otherCounties.map(([key, county]) => (
            <Link
              key={key}
              to={county.path}
              className="group block p-6 bg-background hover:bg-muted/30 transition-all duration-300"
            >
              <h3 className="text-xl font-display text-foreground mb-2 group-hover:opacity-70 transition-opacity">
                {county.name} Tax Appeals
              </h3>
              <p className="text-foreground/60 font-body text-sm">
                {county.description}
              </p>
              <span className="inline-block mt-4 text-sm font-body text-foreground/50 group-hover:text-foreground transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCounties;
