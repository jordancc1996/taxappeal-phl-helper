import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  return (
    <section className="py-48 px-12 md:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-[45%_55%] gap-20 items-start">
          <div className="space-y-10">
            <h2 className="font-display text-foreground leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              A Place of Fair Assessment
            </h2>
            <div className="space-y-7 text-foreground">
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                Philly Tax Appeals is a source of property tax relief and fairness. Whether residential or commercial, we advocate for our clients, striving to ensure accurate assessments and substantial savings.
              </p>
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                Whether your goals are reducing your tax burden or understanding assessment complexities, and whether you're in Philadelphia, Delaware County, or Montgomery County, we support our clients and the communities they call home.
              </p>
              <ul className="space-y-4 text-xl md:text-2xl font-body list-none">
                <li>• Property assessment review and analysis</li>
                <li>• Expert representation at appeal hearings</li>
                <li>• Comprehensive tax reduction strategies</li>
                <li>• Risk-free contingency-based service</li>
              </ul>
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                Philly Tax Appeals is based in Philadelphia and deeply integrated into the regional property tax network. We work tirelessly with property owners here and throughout the surrounding counties to guide them on their appeal journeys.
              </p>
            </div>
          </div>
          <div className="md:sticky md:top-24">
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
