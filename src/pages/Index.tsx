import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/forms/Contact";

const Index = () => {
  return (
    <div className="min-h-screen pt-20" style={{backgroundColor: '#041437'}}>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;