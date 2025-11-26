import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import AppealRequestForm from "@/components/AppealRequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Philosophy />
      <AppealRequestForm />
      <Footer />
    </div>
  );
};

export default Index;
