import heroImage from "@/assets/hero-philly.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <div className="flex gap-8 text-white font-body text-sm">
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light mb-10 tracking-wide lowercase">
          philly tax appeals
        </h1>
        <p className="text-2xl md:text-3xl font-display font-normal mb-8">
          Reduce Your Property Taxes
        </p>
        <p className="text-xs md:text-sm font-body tracking-widest uppercase mb-8 text-white/90">
          FOUNDED IN PHILADELPHIA
        </p>
        <p className="text-lg md:text-xl font-display italic text-white/95 font-light">
          Expert Consultation • Professional Appeals • Proven Results
        </p>
      </div>
    </section>
  );
};

export default Hero;
