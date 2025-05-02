import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import StarfieldBackground from "@/components/StarfieldBackground";

const Index: React.FC = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast notification
    setTimeout(() => {
      toast({
        title: "Welcome to Aveon Empire!",
        description: "Explore how we're shaping tomorrow's technology.",
        duration: 5000,
      });
    }, 1000);
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      <StarfieldBackground />
      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Divisions />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
