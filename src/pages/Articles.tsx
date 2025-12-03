import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation variant="dark" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground mb-6">
            INSIGHTS & RESOURCES
          </p>
          <h1 className="text-6xl md:text-7xl font-display lowercase mb-8">
            articles
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Expert insights on property tax appeals, assessment processes, and strategies to reduce your tax burden in the Philadelphia area.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Article Cards */}
            <article className="group">
              <div className="w-full h-[240px] bg-muted/30 mb-6" />
              <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Property Tax Appeals
              </p>
              <h2 className="text-xl font-display mb-3 group-hover:opacity-70 transition-opacity">
                Understanding Your Property Assessment
              </h2>
              <p className="text-sm font-body text-muted-foreground">
                Learn how property assessments work and when it makes sense to file an appeal.
              </p>
            </article>

            <article className="group">
              <div className="w-full h-[240px] bg-muted/30 mb-6" />
              <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Tax Savings
              </p>
              <h2 className="text-xl font-display mb-3 group-hover:opacity-70 transition-opacity">
                Common Reasons for Over-Assessment
              </h2>
              <p className="text-sm font-body text-muted-foreground">
                Discover the most frequent causes of inflated property valuations.
              </p>
            </article>

            <article className="group">
              <div className="w-full h-[240px] bg-muted/30 mb-6" />
              <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Process Guide
              </p>
              <h2 className="text-xl font-display mb-3 group-hover:opacity-70 transition-opacity">
                The Appeal Timeline Explained
              </h2>
              <p className="text-sm font-body text-muted-foreground">
                A step-by-step guide to the property tax appeal process in Pennsylvania.
              </p>
            </article>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground font-body">
              More articles coming soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
