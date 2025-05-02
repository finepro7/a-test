
import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  avatar,
  rating,
  delay,
}) => {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-card opacity-0 animate-on-scroll"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const elements = testimonialsRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const testimonials = [
    {
      quote:
        "This platform has completely transformed our business operations. The analytics tools have given us insights we never had before.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechGrowth",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
    },
    {
      quote:
        "The speed and reliability of this platform is impressive. We've seen a 30% increase in productivity since implementing it.",
      author: "Mark Wilson",
      position: "CTO",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
    },
    {
      quote:
        "Customer support is outstanding. Any time we've had an issue, the team has resolved it quickly and professionally.",
      author: "Lisa Thompson",
      position: "Operations Director",
      company: "GlobalSystems",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-on-scroll">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-on-scroll" style={{animationDelay: "0.2s"}}>
            Don't just take our word for it, see what our clients have to say about their experience working with us.
          </p>
        </div>

        <div
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
