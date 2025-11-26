import documentsImage from "@/assets/documents.jpg";

const Philosophy = () => {
  return (
    <section className="py-32 md:py-40 px-8 md:px-16 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="order-2 md:order-1 md:sticky md:top-32">
            <img 
              src={documentsImage} 
              alt="Tax documents review" 
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-[1.1]">
              Our Philosophy
            </h2>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display italic text-foreground leading-relaxed border-l-4 border-foreground/20 pl-8">
              "Every property deserves a fair and accurate assessment. We believe in transparency, expertise, and results."
            </blockquote>
            <div className="space-y-6 text-foreground/90">
              <p className="text-lg md:text-xl font-body leading-relaxed">
                At Philly Tax Appeals, we're committed to providing transparent, professional service with a focus on achieving real savings for our clients. Our risk-free model means we only succeed when you do.
              </p>
              <p className="text-lg md:text-xl font-body leading-relaxed">
                We combine local expertise with proven strategies to deliver results that matter. Every assessment tells a story, and we're here to ensure yours is told accurately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
