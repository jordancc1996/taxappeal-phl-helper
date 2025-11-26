import heroImage from "@/assets/hero-philly.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-20">
        <div className="flex gap-12 text-white font-body text-base">
          <a href="/delaware-county" className="hover:opacity-60 transition-opacity">Delaware County</a>
          <a href="/montgomery-county" className="hover:opacity-60 transition-opacity">Montgomery County</a>
          <a href="/philadelphia" className="hover:opacity-60 transition-opacity">Philadelphia</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-display mb-12 lowercase tracking-tight">
          philly tax appeals
        </h1>
        <h2 className="text-3xl md:text-4xl font-display mb-8 font-normal">
          Reduce Your Property Taxes
        </h2>
        <p className="text-sm md:text-base font-body tracking-[0.3em] uppercase mb-10">
          FOUNDED IN PHILADELPHIA
        </p>
        <p className="text-xl md:text-2xl font-display italic font-light">
          Expert Consultation • Professional Appeals • Proven Results
        </p>
      </div>
    </section>
  );
};

export default Hero;
