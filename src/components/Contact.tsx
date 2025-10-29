const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-8 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal mb-12 text-foreground leading-tight">
            Start Saving Today
          </h2>
          <p className="text-base md:text-lg font-body text-foreground max-w-4xl leading-relaxed">
            Contact us for a free property assessment review and discover how much you could save
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xl font-display font-normal text-foreground mb-4">Email</h3>
            <a 
              href="mailto:info@phillytaxappeals.com" 
              className="text-foreground hover:opacity-70 transition-opacity font-body text-base md:text-lg"
            >
              info@phillytaxappeals.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-display font-normal text-foreground mb-4">Phone</h3>
            <a 
              href="tel:+12155551234" 
              className="text-foreground hover:opacity-70 transition-opacity font-body text-base md:text-lg"
            >
              (215) 555-1234
            </a>
          </div>

          <div>
            <h3 className="text-xl font-display font-normal text-foreground mb-4">Location</h3>
            <p className="text-foreground font-body text-base md:text-lg">
              Philadelphia, PA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
