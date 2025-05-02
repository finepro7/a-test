
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const stats = [
    { id: 1, label: "Countries", value: "30+" },
    { id: 2, label: "Team members", value: "1,200+" },
    { id: 3, label: "Patents filed", value: "340+" },
    { id: 4, label: "Growth YOY", value: "42%" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6" ref={aboutRef}>
        <Badge variant="outline" className="mx-auto mb-4 border-amber-500/50 text-amber-500 opacity-0 animate-on-scroll">About Us</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 opacity-0 animate-on-scroll" style={{animationDelay: "0.1s"}}>
          Visionary Innovation
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 opacity-0 animate-on-scroll" style={{animationDelay: "0.2s"}}>
          For over a decade, we have been at the forefront of technological advancement, 
          pushing boundaries and reimagining what's possible across various sectors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 opacity-0 animate-on-scroll" style={{animationDelay: "0.3s"}}>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Our Mission</h3>
            <p className="text-gray-300">
              To harness cutting-edge technology to solve humanity's greatest challenges and 
              create a more sustainable, connected, and equitable world for generations to come.
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 opacity-0 animate-on-scroll" style={{animationDelay: "0.4s"}}>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h3>
            <p className="text-gray-300">
              To be the global leader in technological innovation, setting new standards for
              what technology can achieve and how it can improve human lives across every corner of the globe.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={stat.id} className="bg-black/40 border border-white/10 overflow-hidden opacity-0 animate-on-scroll" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
