import heroImage from "@/assets/hero-philly-new.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay and Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }} />
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 left-0 right-0 z-20">
        <div className="flex justify-center gap-10 text-white font-body text-sm font-semibold">
          <a href="/bucks-county-property-tax-appeal" className="py-3 px-6 hover:text-white/80 transition-all duration-300 hover:-translate-y-0.5">Bucks County</a>
          <a href="/delaware-county-property-tax-appeal" className="py-3 px-6 hover:text-white/80 transition-all duration-300 hover:-translate-y-0.5">Delaware County</a>
          <a href="/montgomery-county-property-tax-appeal" className="py-3 px-6 hover:text-white/80 transition-all duration-300 hover:-translate-y-0.5">Montgomery County</a>
          <a href="/philadelphia-property-tax-appeal" className="py-3 px-6 hover:text-white/80 transition-all duration-300 hover:-translate-y-0.5">Philadelphia</a>
          <a href="#contact" className="py-3 px-6 hover:text-white/80 transition-all duration-300 hover:-translate-y-0.5">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-8xl md:text-9xl font-display mb-10 lowercase" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '1' }}>
          philly tax appeals
        </h1>
        <h2 className="text-3xl md:text-5xl font-display mb-10 font-normal">
          Reduce Your Property Taxes
        </h2>
        <p className="text-xs font-body tracking-[0.4em] uppercase mb-10">
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
