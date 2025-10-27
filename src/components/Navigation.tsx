import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Page } from "./Router";

interface NavigationProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export function Navigation({ currentPage, navigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    navigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || currentPage !== 'home'
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigate('home')}
            className={`tracking-[0.3em] uppercase text-sm transition-colors duration-300 ${
              isScrolled || currentPage !== 'home' 
                ? 'text-black hover:text-[#8B7355]' 
                : 'text-white hover:text-[#C9A87C]'
            }`}
          >
            Jordan Rivers
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('work')}
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                currentPage === 'work'
                  ? isScrolled || currentPage !== 'home' ? 'text-[#8B7355]' : 'text-[#C9A87C]'
                  : isScrolled || currentPage !== 'home' ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              Work
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                currentPage === 'about'
                  ? isScrolled || currentPage !== 'home' ? 'text-[#8B7355]' : 'text-[#C9A87C]'
                  : isScrolled || currentPage !== 'home' ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                currentPage === 'services'
                  ? isScrolled || currentPage !== 'home' ? 'text-[#8B7355]' : 'text-[#C9A87C]'
                  : isScrolled || currentPage !== 'home' ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('blog')}
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                currentPage === 'blog'
                  ? isScrolled || currentPage !== 'home' ? 'text-[#8B7355]' : 'text-[#C9A87C]'
                  : isScrolled || currentPage !== 'home' ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`px-6 py-2 border text-sm uppercase tracking-wider transition-all duration-300 ${
                isScrolled || currentPage !== 'home'
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-white/30 text-white hover:bg-white hover:text-black'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled || currentPage !== 'home' ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
      >
        <button 
          onClick={() => handleNavClick('work')}
          className="text-black text-2xl uppercase tracking-wider hover:text-[#8B7355] transition-colors duration-300"
        >
          Work
        </button>
        <button 
          onClick={() => handleNavClick('about')}
          className="text-black text-2xl uppercase tracking-wider hover:text-[#8B7355] transition-colors duration-300"
        >
          About
        </button>
        <button 
          onClick={() => handleNavClick('services')}
          className="text-black text-2xl uppercase tracking-wider hover:text-[#8B7355] transition-colors duration-300"
        >
          Services
        </button>
        <button 
          onClick={() => handleNavClick('blog')}
          className="text-black text-2xl uppercase tracking-wider hover:text-[#8B7355] transition-colors duration-300"
        >
          Blog
        </button>
        <button 
          onClick={() => handleNavClick('contact')}
          className="text-black text-2xl uppercase tracking-wider hover:text-[#8B7355] transition-colors duration-300"
        >
          Contact
        </button>
      </motion.div>
    </>
  );
}