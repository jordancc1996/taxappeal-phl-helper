import documentsImage from "@/assets/documents.jpg";

const Philosophy = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <img 
            src={documentsImage} 
            alt="Professional document signing"
            className="w-full h-auto rounded-sm shadow-2xl"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-5xl font-display font-light mb-8 text-foreground">
            Our Philosophy
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
            We believe every Philadelphia property owner deserves fair and accurate tax assessments. Our mission is to challenge inflated property valuations and secure meaningful tax reductions for our clients.
          </p>
          <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
            With deep knowledge of Philadelphia's property tax system and a proven track record of successful appeals, we combine legal expertise with data-driven analysis to build compelling cases.
          </p>
          <blockquote className="border-l-4 border-accent pl-6 italic text-xl font-display text-foreground mt-8">
            "Our success is measured by the thousands of dollars we save our clients every year."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
