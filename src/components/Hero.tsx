import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield, Handshake, Lightbulb } from "lucide-react";

export const Hero = () => {
  // Function to smoothly scroll to the manifesto section
  const scrollToManifesto = () => {
    const element = document.getElementById('manifesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 lg:pt-40 lg:pb-32 bg-background relative overflow-hidden">
      {/* Optional: Add a subtle background pattern or gradient for aesthetic appeal */}
      {/* <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'url("/path/to/subtle-pattern.svg")', backgroundSize: 'cover' }}></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline: Candidate Name and Role */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-4 animate-fade-in-down">
            <span className="text-primary block">KAILONG KIPSANG EDWIN</span>
            <span className="block text-2xl md:text-4xl font-semibold text-muted-foreground mt-2">
              ASSISTANT EXECUTIVE SECRETARY, <br/> ELGEYO MARAKWET County
            </span>
          </h1>

          {/* Core Message / Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Leadership is not a title, it is a duty. <br className="hidden md:block" />
            I stand to serve, not to be served-
            to listen to every teacher, act on their concerns, and provide solutions that uplift us all.
          </p>

          {/* Call to Action for the Manifesto */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up-delay">
            <Button
              onClick={scrollToManifesto}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-lg font-semibold rounded-full shadow-lg
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Manifesto <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            {/* A subtle tag for branding/team spirit */}
            <p className="text-xl text-primary font-bold tracking-wider opacity-90">#TeamKipsangKailong4ES</p>
          </div>

          {/* Key Statistics / Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8">
            {/* Stat Card 1: Experience */}
            <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <Users className="h-16 w-16 text-foreground mx-auto mb-4 drop-shadow-xl" /> {/* Changed color to text-foreground */}
              <h3 className="text-2xl font-bold text-card-foreground mb-2">10+ Years</h3>
              <p className="text-muted-foreground text-lg">Experience in education and leadership</p>
            </div>

            {/* Stat Card 2: Plan */}
            <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <Lightbulb className="h-16 w-16 text-foreground mx-auto mb-4 drop-shadow-xl" /> {/* Changed color to text-foreground */}
              <h3 className="text-2xl font-bold text-card-foreground mb-2">5-Point Manifesto Plan</h3>
              <p className="text-muted-foreground text-lg">Comprehensive manifesto for teacher EMC welfare transformation</p>
            </div>

            {/* Stat Card 3: Track Record */}
            <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <Handshake className="h-16 w-16 text-foreground mx-auto mb-4 drop-shadow-xl" /> {/* Changed color to text-foreground */}
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground text-lg">A dedicated leader in various leadership roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};