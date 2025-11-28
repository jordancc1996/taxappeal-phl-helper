import { Link } from "react-router-dom";
import consultationImage from "@/assets/legal-consultation.jpg";

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
                Philly Tax Appeals is a source of property tax relief and fairness. We provide tax appeal solutions for our clients whether it be for residential or commercial real estate. Our assessments are accurate and have resulted in substantial savings for our clients.
              </p>
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                Whether you're in{" "}
                <Link to="/bucks-county-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Bucks County
                </Link>
                ,{" "}
                <Link to="/delaware-county-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Delaware County
                </Link>
                ,{" "}
                <Link to="/montgomery-county-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Montgomery County
                </Link>
                {" "}or{" "}
                <Link to="/philadelphia-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Philadelphia
                </Link>
                {" "}we support our clients and the communities they call home. Philly Tax Appeals is based in Philadelphia and deeply integrated into the real estate sector. We work tirelessly with property owners in Philadelphia and throughout the surrounding counties to provide the best and most accurate assessments of their real estate.
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
