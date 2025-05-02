
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  buttonText,
  delay,
}) => {
  return (
    <div
      className={`rounded-xl p-6 ${
        isPopular
          ? "gradient-bg text-white shadow-lg shadow-purple-300 border-none"
          : "bg-white border border-gray-200"
      } opacity-0 animate-on-scroll`}
      style={{ animationDelay: `${delay}s` }}
    >
      {isPopular && (
        <div className="mb-4 -mt-10 mx-auto w-max px-4 py-1 bg-white text-purple-700 rounded-full text-sm font-semibold">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className={isPopular ? "text-white/80" : "text-gray-500"}>/month</span>}
      </div>
      <hr className={isPopular ? "border-white/20 mb-6" : "mb-6"} />
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className={`h-5 w-5 ${
                isPopular ? "text-white mr-2" : "text-purple-700 mr-2"
              }`}
            />
            <span className={isPopular ? "text-white/90" : "text-gray-600"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          isPopular
            ? "bg-white text-purple-700 hover:bg-gray-100"
            : "gradient-bg hover:opacity-90"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pricingRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const pricingPlans = [
    {
      title: "Starter",
      price: "$49",
      features: [
        "5 Team Members",
        "10 Projects",
        "Basic Analytics",
        "24/7 Support",
        "1GB Storage",
      ],
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$99",
      features: [
        "15 Team Members",
        "Unlimited Projects",
        "Advanced Analytics",
        "Priority Support",
        "10GB Storage",
        "Custom Reporting",
      ],
      buttonText: "Start Free Trial",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Team Members",
        "Unlimited Projects",
        "Enterprise Analytics",
        "Dedicated Support",
        "Unlimited Storage",
        "Custom Integrations",
        "On-premise Option",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-on-scroll" style={{animationDelay: "0.2s"}}>
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div
          ref={pricingRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-500 opacity-0 animate-on-scroll" style={{animationDelay: "0.4s"}}>
          Need a custom solution? <a href="#" className="text-purple-700 underline">Contact our sales team</a>.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
