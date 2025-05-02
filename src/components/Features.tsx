
import React, { useRef, useEffect } from "react";
import { 
  ChevronRight, 
  BarChart, 
  Zap, 
  Shield, 
  LayoutDashboard,
  Users,
  Globe 
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-card opacity-0 animate-on-scroll" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-700 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-purple-700 font-medium">
        Learn more <ChevronRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const elements = featuresRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      title: "Advanced Analytics",
      description: "Gain deep insights into your business with our powerful analytics tools.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Lightning Fast",
      description: "Our platform is optimized for speed to help you work more efficiently.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security features.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Intuitive Dashboard",
      description: "Easy-to-use dashboard that provides all the information you need at a glance.",
      icon: <LayoutDashboard className="h-6 w-6" />,
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with powerful collaboration features.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Global Access",
      description: "Access your data and tools from anywhere in the world, anytime.",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-on-scroll" style={{animationDelay: "0.2s"}}>
            Our platform is packed with features to help you succeed. Here's what makes us different.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
