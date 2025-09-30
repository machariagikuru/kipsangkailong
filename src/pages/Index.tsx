
import { Hero } from "@/components/Hero";
import { TeamKailongKipsangImageSection } from "@/components/TeamKailongKipsangImageSection";
import { TeamKailongkipsangedwinTextSection } from "@/components/TeamKailongKipsangTextSection";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { FloatingStarsCounter } from "@/components/FloatingStarsCounter";
import { Footer } from "@/components/Footer";;


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20">
      <Navigation />
      <TeamKailongKipsangImageSection/>
      <TeamKailongkipsangedwinTextSection />
      <Hero />
      <Manifesto />
      <About />
      <Contact />
      <FloatingStarsCounter />
      <Footer />

      {/* Additional sections can be added here */}
    </div>
  );
};

export default Index;
