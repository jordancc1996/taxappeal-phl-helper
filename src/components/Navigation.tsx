import { Link } from "react-router-dom";

interface NavigationProps {
  variant?: "light" | "dark";
}

const Navigation = ({ variant = "light" }: NavigationProps) => {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  
  return (
    <nav className="w-full py-8 px-8">
      <div className="flex justify-center gap-10 font-body text-sm font-semibold">
        <Link 
          to="/" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Home
        </Link>
        <Link 
          to="/bucks-county-property-tax-appeal" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Bucks County
        </Link>
        <Link 
          to="/delaware-county-property-tax-appeal" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Delaware County
        </Link>
        <Link 
          to="/montgomery-county-property-tax-appeal" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Montgomery County
        </Link>
        <Link 
          to="/philadelphia-property-tax-appeal" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Philadelphia
        </Link>
        <a 
          href="/#contact" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
