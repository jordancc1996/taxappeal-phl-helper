import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
