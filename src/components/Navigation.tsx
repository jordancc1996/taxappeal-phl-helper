import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
