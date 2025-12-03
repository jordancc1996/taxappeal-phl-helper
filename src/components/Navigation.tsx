import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavigationProps {
  variant?: "light" | "dark";
}

const Navigation = ({ variant = "light" }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = variant === "light" 
    ? isScrolled ? "text-foreground" : "text-white"
    : "text-foreground";
  
  const bgColor = isScrolled 
    ? "bg-background/95 backdrop-blur-md shadow-sm" 
    : "bg-transparent";
  
  return (
    <nav className={`fixed top-0 left-0 right-0 w-full py-8 z-50 transition-all duration-300 ${bgColor}`}>
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
        <Link 
          to="/news" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          News
        </Link>
        <Link 
          to="/contact" 
          className={`${textColor} hover:opacity-70 transition-all duration-300`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
