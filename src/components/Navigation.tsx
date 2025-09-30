"use client";

import { useState } from "react";
import { Menu, X, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground backdrop-blur-sm shadow-md border-b border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Branding */}
          <div className="flex items-center gap-3">
            <Vote className="h-8 w-8 text-yellow-400" />
            <div className="leading-tight">
              <h1 className="text-xl sm:text-2xl font-extrabold text-yellow-400 tracking-wide">
                Kailong Kipsang Edwin
              </h1>
              <p className="text-sm sm:text-base text-primary-foreground/80 italic">
                Assistant Executive Secretary, Elgeyo Marakwet 2026
              </p>
            </div>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {["home", "about", "manifesto", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-primary-foreground hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 ml-4 transition-all duration-200"
                onClick={() => scrollToSection("support")}
              >
                Support Campaign
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-primary-foreground hover:text-yellow-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-t border-accent">
              {["home", "about", "manifesto", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-primary-foreground hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full transition-all duration-200"
                  onClick={() => scrollToSection("support")}
                >
                  Support Campaign
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
