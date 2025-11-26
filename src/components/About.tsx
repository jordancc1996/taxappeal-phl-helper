import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-[1.1]">
              A Place of Fair Assessment
            </h2>
            <div className="space-y-6 text-foreground/90">
              <p className="text-lg md:text-xl font-body leading-relaxed">
                Philly Tax Appeals is a source of property tax relief and fairness. Whether residential or commercial, we advocate for our clients, striving to ensure accurate assessments and substantial savings.
              </p>
              <p className="text-lg md:text-xl font-body leading-relaxed">
                Whether your goals are reducing your tax burden or understanding assessment complexities, and whether you're in Philadelphia, Delaware County, or Montgomery County, we support our clients and the communities they call home.
              </p>
              <ul className="space-y-3 text-lg md:text-xl font-body">
                <li>• Property assessment review and analysis</li>
                <li>• Expert representation at appeal hearings</li>
                <li>• Comprehensive tax reduction strategies</li>
                <li>• Risk-free contingency-based service</li>
              </ul>
              <p className="text-lg md:text-xl font-body leading-relaxed">
                Philly Tax Appeals is based in Philadelphia and deeply integrated into the regional property tax network. We work tirelessly with property owners here and throughout the surrounding counties to guide them on their appeal journeys.
              </p>
            </div>
          </div>
          <div className="md:sticky md:top-32">
            <img 
              src={consultationImage} 
              alt="Tax consultation meeting" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
