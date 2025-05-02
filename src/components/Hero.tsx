
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 lg:pt-28">
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 py-24 sm:py-32 lg:py-40 text-center"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 opacity-0 animate-on-scroll">
          <span className="block">Shaping Tomorrow's</span>
          <span className="block mt-2">Technology</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto opacity-0 animate-on-scroll" style={{animationDelay: "0.2s"}}>
          Aveon Empire is a visionary technology conglomerate pioneering innovations
          across multiple industries to create a better future.
        </p>
        {/*        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-on-scroll" style={{animationDelay: "0.4s"}}>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-base"
          >
            Explore Our Vision <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base border-white/20 hover:bg-white/10"
          >
            Our Divisions
          </Button>
        </div>
*/}

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5v14m0 0l-7-7m7 7l7-7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
