import heroImage from "@/assets/hero-philly.jpg";
import { Button } from "@/components/ui/button";

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
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-display text-xl tracking-wide">
            Philly Tax Appeals
          </div>
          <div className="flex gap-8 text-white font-body">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light mb-8 tracking-wide lowercase">
          philly tax appeals
        </h1>
        <p className="text-2xl md:text-3xl font-display font-normal mb-6 tracking-wide">
          Reduce Your Property Taxes
        </p>
        <p className="text-sm md:text-base font-body tracking-widest uppercase mb-8 text-white/90 font-light">
          Founded in Philadelphia
        </p>
        <p className="text-lg md:text-xl font-display italic mb-16 text-white/95 font-light">
          Expert Consultation • Professional Appeals • Proven Results
        </p>
      </div>
    </section>
  );
};

export default Hero;
