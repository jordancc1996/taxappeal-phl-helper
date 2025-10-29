const Footer = () => {
  return (
    <footer className="py-16 md:py-20 px-8 md:px-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-display font-normal mb-4 lowercase">
              philly tax appeals
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Professional real estate tax appeal services in Philadelphia
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-display font-normal mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-display font-normal mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li>info@phillytaxappeals.com</li>
              <li>(215) 555-1234</li>
              <li>Philadelphia, PA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/50 font-body text-xs">
          <p>&copy; {new Date().getFullYear()} Philly Tax Appeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
