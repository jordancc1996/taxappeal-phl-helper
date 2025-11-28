const Footer = () => {
  return (
    <footer className="py-24 px-12 md:px-20 bg-white border-t border-foreground/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-4xl font-display text-foreground lowercase">
              philly tax appeals
            </h3>
            <p className="text-lg font-body text-foreground leading-relaxed max-w-lg">
              Expert property tax appeal services for Philadelphia and surrounding counties. Reducing your tax burden with proven strategies and local expertise.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-display text-foreground">
              Counties
            </h4>
            <ul className="space-y-2 text-base font-body text-foreground/70">
              <li><a href="/bucks-county-property-tax-appeal" className="hover:text-foreground transition-colors">Bucks County</a></li>
              <li><a href="/delaware-county-property-tax-appeal" className="hover:text-foreground transition-colors">Delaware County</a></li>
              <li><a href="/montgomery-county-property-tax-appeal" className="hover:text-foreground transition-colors">Montgomery County</a></li>
              <li><a href="/philadelphia-property-tax-appeal" className="hover:text-foreground transition-colors">Philadelphia</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-2xl font-display text-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-lg font-body text-foreground">
              <li><a href="mailto:jordan@phillytaxappeals.com" className="hover:opacity-60 transition-opacity">jordan@phillytaxappeals.com</a></li>
              <li><a href="tel:+12676323162" className="hover:opacity-60 transition-opacity">(267) 632-3162</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-base font-body text-foreground/50">
              © 2025 Philly Tax Appeals. All rights reserved.
            </p>
            <a href="/privacy-policy" className="text-base font-body text-foreground/50 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
