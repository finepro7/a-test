import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Division {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const Divisions: React.FC = () => {
  const divisionsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const divisions: Division[] = [
    {
      id: 1,
      title: "Quantum Computing",
      description:
        "Developing next-generation quantum systems that will revolutionize computation across industries.",
      icon: "🔬",
      color: "from-blue-600 to-purple-700",
    },
    {
      id: 2,
      title: "Biotechnology",
      description:
        "Creating cutting-edge medical solutions and biotechnology innovations to improve human health.",
      icon: "🧬",
      color: "from-green-600 to-teal-500",
    },
    {
      id: 3,
      title: "Clean Energy",
      description:
        "Pioneering sustainable energy solutions to power a greener future and combat climate change.",
      icon: "⚡",
      color: "from-amber-500 to-yellow-300",
    },
    {
      id: 4,
      title: "AI Research",
      description:
        "Advancing artificial intelligence capabilities for ethical and beneficial technological advancement.",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: 5,
      title: "Space Technologies",
      description:
        "Exploring new frontiers with advanced propulsion, habitation, and space resource utilization.",
      icon: "🚀",
      color: "from-indigo-700 to-blue-500",
    },
    {
      id: 6,
      title: "Advanced Materials",
      description:
        "Developing revolutionary materials with unprecedented properties for next-gen applications.",
      icon: "🔷",
      color: "from-red-600 to-pink-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("animated")
          ) {
            entry.target.classList.add("animate-slide-up", "animated");
            entry.target.classList.remove("opacity-0", "animate-on-scroll");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      divisionsRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="divisions" className="py-20 sm:py-24 bg-black text-white">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={divisionsRef}
      >
        <Badge
          variant="outline"
          className="mx-auto mb-4 border-amber-500/50 text-amber-500 opacity-0 animate-on-scroll"
        >
          Our Divisions
        </Badge>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 opacity-0 animate-on-scroll"
          style={{ animationDelay: "0.1s" }}
        >
          Advancing Multiple Frontiers
        </h2>
        <p
          className="text-base sm:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-14 opacity-0 animate-on-scroll"
          style={{ animationDelay: "0.2s" }}
        >
          Our specialized divisions work at the cutting edge of their respective
          fields, creating synergies that accelerate progress across the
          technological spectrum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => (
            <Card
              key={division.id}
              className={`overflow-hidden border border-white/10 transition-all duration-300 opacity-0 animate-on-scroll hover:-translate-y-1 ${
                activeIndex === division.id ? "ring-2 ring-amber-500" : ""
              } bg-black/50 backdrop-blur-md`}
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
              onMouseEnter={() => setActiveIndex(division.id)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CardContent className="p-6 sm:p-8">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-6 bg-gradient-to-r ${division.color}`}
                >
                  {division.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">
                  {division.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  {division.description}
                </p>
                <div
                  className={`flex items-center font-semibold text-amber-400 transition-transform duration-300 ${
                    activeIndex === division.id ? "translate-x-2" : ""
                  }`}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
