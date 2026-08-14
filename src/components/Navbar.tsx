import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface NavbarProps {
  onOpenBookModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'facilities', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#5B132A]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/30 py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="navbar-logo-link"
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center gap-3 text-decoration-none"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#7B1E3A] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white group-hover:text-[#F3E5AB] transition-colors">
                  Suraj Farm
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#D4AF37] font-medium -mt-1">
                  Luxury Wedding Venue • Dadri
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                      isActive
                        ? 'text-[#F3E5AB] font-semibold'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                id="navbar-phone-btn"
                href={`tel:${VENUE_INFO.rawPhone}`}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-amber-200 hover:text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-full transition-all bg-black/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold">{VENUE_INFO.phone}</span>
              </a>

              <button
                id="navbar-book-now-btn"
                onClick={onOpenBookModal}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8860B] text-[#380816] font-semibold text-sm rounded-full shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-book-header-btn"
                onClick={onOpenBookModal}
                className="px-3 py-1.5 bg-[#D4AF37] text-[#380816] text-xs font-semibold rounded-full sm:hidden"
              >
                Book
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-panel"
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#5B132A] border-l border-[#D4AF37]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#7B1E3A] border border-[#D4AF37] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="font-serif text-xl font-bold text-white">Suraj Farm</span>
                </div>
                <button
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      id={`mobile-nav-link-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#7B1E3A] text-[#F3E5AB] border border-[#D4AF37]/40 font-semibold'
                          : 'text-gray-200 hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/30 space-y-3">
              <a
                id="mobile-drawer-phone-btn"
                href={`tel:${VENUE_INFO.rawPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-lg font-medium text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {VENUE_INFO.phone}</span>
              </a>

              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#380816] rounded-lg font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Visit / Enquire</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
