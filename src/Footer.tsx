import React from 'react';
import { Sparkles, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#20050D] text-white border-t border-[#D4AF37]/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7B1E3A] border border-[#D4AF37] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="font-serif text-3xl font-bold text-white tracking-wide">
                Suraj Farm
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#F3E5AB]">
              &ldquo;{VENUE_INFO.tagline}&rdquo;
            </p>

            <p className="text-sm text-gray-300 max-w-md leading-relaxed font-light">
              Dadri's signature luxury destination for royal Indian weddings, spacious lawn receptions, engagement ceremonies, and grand cultural gatherings.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-[#7B1E3A]/60 border border-[#D4AF37]/40 text-[#F3E5AB] rounded-full">
                Capacity: {VENUE_INFO.capacityRange}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-gray-300 hover:text-[#F3E5AB] hover:underline underline-offset-4 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>{VENUE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${VENUE_INFO.rawPhone}`}
                  className="font-bold text-white hover:text-[#F3E5AB] transition-colors"
                >
                  {VENUE_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>{VENUE_INFO.timings}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hi%20Suraj%20Farm,%20I%20would%20like%20to%20enquire%20about%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-lg shadow hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p id="footer-copyright-text">
            © 2026 Suraj Farm. All rights reserved.
          </p>
          <p className="text-gray-400">
            Dadri, Greater Noida & Bulandshahr Region, Uttar Pradesh
          </p>
        </div>

      </div>
    </footer>
  );
};
