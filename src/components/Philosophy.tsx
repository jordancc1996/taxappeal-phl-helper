import documentsImage from "@/assets/documents.jpg";

const Philosophy = () => {
  return (
    <section className="py-48 px-12 md:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-[55%_45%] gap-20 items-start">
          <div className="order-2 md:order-1 md:sticky md:top-24">
            <img 
              src={documentsImage} 
              alt="Tax documents review" 
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 space-y-10">
            <h2 className="font-display text-foreground leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              Our Philosophy
            </h2>
            <blockquote className="text-3xl md:text-4xl font-display italic text-foreground leading-relaxed">
              "Every property deserves a fair and accurate assessment. We believe in transparency, expertise, and results."
            </blockquote>
            <div className="space-y-7 text-foreground">
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                At Philly Tax Appeals, we're committed to providing transparent, professional service with a focus on achieving real savings for our clients. Our risk-free model means we only succeed when you do.
              </p>
              <p className="text-xl md:text-2xl font-body leading-relaxed">
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
