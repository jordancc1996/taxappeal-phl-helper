import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { homePageSchema } from "@/lib/schemas";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Philly Tax Appeals | Professional Property Tax Appeal Services in Philadelphia"
        description="Expert property tax appeal services in Philadelphia, Bucks, Delaware, and Montgomery Counties. Reduce your property taxes with no upfront costs. Free evaluation available."
        canonicalPath="/"
        schema={homePageSchema}
      />
      <Hero />
      <About />
      <Philosophy />
      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default Index;
