const Footer = () => {
  return (
    <footer className="py-20 px-8 md:px-16 bg-background border-t border-border/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-3xl font-display text-foreground lowercase">
              philly tax appeals
            </h3>
            <p className="text-base font-body text-foreground/70 leading-relaxed max-w-md">
              Expert property tax appeal services for Philadelphia and surrounding counties. Reducing your tax burden with proven strategies and local expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-display text-foreground">
              Counties
            </h4>
            <ul className="space-y-2 text-base font-body text-foreground/70">
              <li><a href="/delaware-county" className="hover:text-foreground transition-colors">Delaware County</a></li>
              <li><a href="/montgomery-county" className="hover:text-foreground transition-colors">Montgomery County</a></li>
              <li><a href="/philadelphia" className="hover:text-foreground transition-colors">Philadelphia</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-display text-foreground">
              Contact
            </h4>
            <ul className="space-y-2 text-base font-body text-foreground/70">
              <li><a href="mailto:info@phillytaxappeals.com" className="hover:text-foreground transition-colors">info@phillytaxappeals.com</a></li>
              <li><a href="tel:+12155551234" className="hover:text-foreground transition-colors">(215) 555-1234</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-sm font-body text-foreground/60 text-center">
            © 2024 Philly Tax Appeals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
