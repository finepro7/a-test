import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

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

    const elements = ctaRef.current?.querySelectorAll(".animate-on-scroll");
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0  opacity-50 z-0"></div>

      <div
        className="container mx-auto px-4 md:px-6 relative z-10"
        ref={ctaRef}
      >
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="text-center opacity-0 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a potential partner, investor, or talent looking to
              make an impact, we invite you to be part of our journey to
              transform tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
              >
                Get In Touch
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="border-white/20  bg-transparent"
              >
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
