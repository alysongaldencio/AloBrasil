import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Cobertura from "@/components/sections/Cobertura";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/forms/Contact";

const Index = () => {
  return (
    <div className="min-h-screen pt-20" style={{backgroundColor: '#041437'}}>
      <Header />
      <Hero />
      <Services />
      <Cobertura />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;