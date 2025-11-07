import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Search, Home, Film, User, Users, Briefcase, FileText, Mail, HelpCircle } from "lucide-react";
import type { Page } from "./Router";

interface NavigationProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export function Navigation({ currentPage, navigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (page: Page) => {
    navigate(page);
    setIsMobileMenuOpen(false);
    setSearchQuery("");
  };

  const menuItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'work' as Page, label: 'Films', icon: Film },
    { id: 'about' as Page, label: 'About', icon: User },
    { id: 'services' as Page, label: 'Services', icon: Briefcase },
    { id: 'blog' as Page, label: 'Blog & Press', icon: FileText },
    { id: 'contact' as Page, label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Fixed Bottom Navigation Bar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 w-full max-w-md"
      >
        <div className="bg-[#1A1A1A] rounded-full px-4 py-3 flex items-center justify-between shadow-2xl">
          {/* Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="px-6 py-2 bg-white/90 hover:bg-white text-black rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <Menu className="w-4 h-4" />
            <span className="text-sm tracking-wide">Menu</span>
          </button>

          {/* Center Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="absolute left-1/2 -translate-x-1/2 -top-8"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-xs text-center leading-tight px-2">
                <span className="block text-[10px] italic">The</span>
                <span className="block font-bold">Wedding</span>
                <span className="block text-[10px] italic">Filmer</span>
              </span>
            </div>
          </button>

          {/* Enquire Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-6 py-2 bg-[#E63946] hover:bg-[#D62828] text-white rounded-full transition-all duration-300"
          >
            <span className="text-sm tracking-wide">Enquire</span>
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-x-4 bottom-4 top-12 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md bg-[#0A0A0A] rounded-3xl z-[70] overflow-hidden shadow-2xl"
            >
              <div className="h-full flex flex-col">
                {/* Menu Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
                  >
                    <span className="text-sm tracking-wide">Close</span>
                  </button>

                  {/* Center Logo */}
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="text-white text-center">
                      <span className="block text-xs italic">The</span>
                      <span className="block text-lg -mt-1">Wedding</span>
                      <span className="block text-xs italic -mt-1">Filmer</span>
                    </div>
                  </div>

                  {/* Enquire Button */}
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="px-6 py-2 bg-[#E63946] hover:bg-[#D62828] text-white rounded-full transition-all duration-300"
                  >
                    <span className="text-sm tracking-wide">Enquire</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="px-6 py-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search a film here"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#1A1A1A] text-white placeholder-gray-500 pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto px-6 pb-6">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = currentPage === item.id;
                      
                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                            isActive
                              ? 'bg-white text-black'
                              : 'bg-transparent text-white hover:bg-white/5'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? 'text-[#E63946]' : 'text-gray-400'}`} />
                          <span className="text-base tracking-wide">{item.label}</span>
                        </motion.button>
                      );
                    })}

                    {/* Additional Menu Item - FAQs */}
                    <motion.button
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: menuItems.length * 0.05 }}
                      className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 bg-transparent text-white hover:bg-white/5"
                    >
                      <HelpCircle className="w-5 h-5 text-gray-400" />
                      <span className="text-base tracking-wide">FAQs</span>
                    </motion.button>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="px-6 py-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-gray-500 text-xs">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <span>·</span>
                    <a href="#" className="hover:text-white transition-colors">Vimeo</a>
                    <span>·</span>
                    <a href="#" className="hover:text-white transition-colors">YouTube</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
