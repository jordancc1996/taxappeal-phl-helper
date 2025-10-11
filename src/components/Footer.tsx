const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-light mb-4">
              Philly Tax Appeals
            </h3>
            <p className="text-primary-foreground/80 font-body">
              Professional real estate tax appeal services in Philadelphia
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-primary-foreground/80">
              <li>info@phillytaxappeals.com</li>
              <li>(215) 555-1234</li>
              <li>Philadelphia, PA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 font-body text-sm">
          <p>&copy; {new Date().getFullYear()} Philly Tax Appeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
