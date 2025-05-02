import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // This would normally toggle a CSS class on the body or root element
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                AVEON EMPIRE
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#divisions"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Divisions
            </a>

            {/* <a
              href="#"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </a> */}
            {/* <a
              href="#"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              News
            </a> */}
            {/* <button onClick={toggleTheme} className="text-gray-300 hover:text-white">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            {/* <Button 
              size="sm" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              Get In Touch
            </Button> */}
            <a href="#contact">
              {" "}
              <Button
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                onClick={closeMenu}
              >
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg rounded-lg mt-4 p-4 animate-fade-in absolute left-4 right-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#divisions"
                className="font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={closeMenu}
              >
                Divisions
              </a>

              {/* <a
                href="#"
                className="font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={closeMenu}
              >
                Careers
              </a> */}
              {/* <a
                href="#"
                className="font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={closeMenu}
              >
                News
              </a> */}
              <a href="#contact">
                {" "}
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                  onClick={closeMenu}
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
