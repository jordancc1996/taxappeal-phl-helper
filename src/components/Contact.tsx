const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 px-8 md:px-16 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-[1.1]">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl font-body text-foreground/90 max-w-3xl leading-relaxed">
            Ready to reduce your property taxes? Contact us today for a free consultation and discover how much you could save.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Email
            </h3>
            <a href="mailto:info@phillytaxappeals.com" className="text-lg md:text-xl font-body text-foreground/80 hover:text-foreground transition-colors block">
              info@phillytaxappeals.com
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Phone
            </h3>
            <a href="tel:+12155551234" className="text-lg md:text-xl font-body text-foreground/80 hover:text-foreground transition-colors block">
              (215) 555-1234
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Location
            </h3>
            <p className="text-lg md:text-xl font-body text-foreground/80 leading-relaxed">
              Philadelphia, PA<br />
              Serving Philadelphia, Delaware County, and Montgomery County
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
