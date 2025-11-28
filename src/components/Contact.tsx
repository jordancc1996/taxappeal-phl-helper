const Contact = () => {
  return (
    <section id="contact" className="py-48 px-12 md:px-20 bg-[#fafafa]">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 space-y-10">
          <h2 className="font-display text-foreground leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl font-body text-foreground max-w-4xl leading-relaxed">
            Ready to reduce your property taxes? Contact us today for a free consultation and discover how much you could save.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Email
            </h3>
            <a href="mailto:jordan@phillytaxappeals.com" className="text-xl md:text-2xl font-body text-foreground hover:opacity-60 transition-opacity block">
              jordan@phillytaxappeals.com
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Phone
            </h3>
            <a href="tel:+12676323162" className="text-xl md:text-2xl font-body text-foreground hover:opacity-60 transition-opacity block">
              (267) 632-3162
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-display text-foreground">
              Location
            </h3>
            <p className="text-xl md:text-2xl font-body text-foreground leading-relaxed">
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
