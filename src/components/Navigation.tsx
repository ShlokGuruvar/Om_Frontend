// Navigation.tsx
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
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsNavVisible(true), 100);

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
      <nav
        className={`fixed rounded-full transition-all duration-500 ${
          isScrolled || currentPage !== 'home'
            ? 'bg-white/95 backdrop-blur-md py-3 px-8 shadow-lg' 
            : 'bg-transparent py-4 px-8'
        }`}
        style={{
          bottom: '2rem',
          left: '50%',
          transform: isNavVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100%)',
          zIndex: 100,
          transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isScrolled || currentPage !== 'home' 
            ? '0 4px 20px rgba(0,0,0,0.15)' 
            : 'none'
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={() => navigate('home')}
            className={`tracking-[0.3em] uppercase text-sm transition-colors duration-300 whitespace-nowrap ${
              isScrolled || currentPage !== 'home' 
                ? 'text-black hover:text-[#8B7355]' 
                : 'text-white hover:text-[#C9A87C]'
            }`}
          >
            CinePsychic
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
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
              className={`px-6 py-2 rounded-full border text-sm uppercase tracking-wider transition-all duration-300 ${
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        style={{
          zIndex: 90,
          transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
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
      </div>
    </>
  );
}
