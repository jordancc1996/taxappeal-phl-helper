import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-display font-light mb-8 text-foreground">
            A Partner in Tax Savings
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
            Philly Tax Appeals is your trusted source for real estate tax reduction in Philadelphia. Whether you're a homeowner or property investor, we work tirelessly to ensure your property is assessed fairly.
          </p>
          <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
            Our expertise spans residential and commercial properties, and we're deeply integrated into Philadelphia's real estate and legal network. We guide our clients through every step of the appeals process.
          </p>
          <ul className="space-y-4 text-foreground font-body">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Professional assessment review and property valuation analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Expert representation at appeal hearings</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>Comprehensive strategy tailored to your property</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <span>No upfront fees - only pay when we save you money</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <img 
            src={consultationImage} 
            alt="Professional tax consultation meeting"
            className="w-full h-auto rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
