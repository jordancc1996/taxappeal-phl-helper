import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal mb-12 text-foreground leading-tight">
            A Partner in Tax Savings
          </h2>
          <p className="text-base md:text-lg font-body text-foreground mb-6 leading-relaxed">
            Philly Tax Appeals is your trusted source for real estate tax reduction in Philadelphia. Whether you're a homeowner or property investor, we work tirelessly to ensure your property is assessed fairly.
          </p>
          <p className="text-base md:text-lg font-body text-foreground mb-10 leading-relaxed">
            Our expertise spans residential and commercial properties, and we're deeply integrated into Philadelphia's real estate and legal network. We guide our clients through every step of the appeals process.
          </p>
          <ul className="space-y-4 text-foreground font-body text-base md:text-lg leading-relaxed">
            <li>• Professional assessment review and property valuation analysis</li>
            <li>• Expert representation at appeal hearings</li>
            <li>• Comprehensive strategy tailored to your property</li>
            <li>• No upfront fees - only pay when we save you money</li>
          </ul>
        </div>
        <div>
          <img 
            src={consultationImage} 
            alt="Professional tax consultation meeting"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
