import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Image as ImageIcon, MapPin, Star, Users, Phone } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface HeroProps {
  onOpenBookModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookModal }) => {
  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Dark Luxury Maroon/Charcoal Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Suraj Farm Royal Mandap Setup"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out animate-pulse-slow"
        />
        {/* Deep maroon and dark vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20050D] via-[#380816]/85 to-[#20050D]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#20050D]/60 to-[#120207]/90" />
      </div>

      {/* Decorative Golden Ornaments */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Rating Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-[#D4AF37]/50 backdrop-blur-md mb-6 shadow-lg"
        >
          <div className="flex items-center text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 text-amber-400/50" />
          </div>
          <span className="text-xs font-semibold tracking-wide text-amber-100">
            {VENUE_INFO.googleRating}★ on Google ({VENUE_INFO.reviewCount}+ Reviews)
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-md mb-4"
        >
          <span className="block text-white">
            {VENUE_INFO.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F3E5AB] font-normal mb-4 tracking-wide"
        >
          &ldquo;{VENUE_INFO.tagline}&rdquo;
        </motion.p>

        {/* Subtext */}
        <motion.p
          id="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg lg:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {VENUE_INFO.subtext}
          <span className="block text-sm text-[#D4AF37] font-medium mt-1">
            Lush Open Lawns • Royal Mandap Artistry • AC Banquet Hall
          </span>
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          id="hero-cta-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          {/* Filled Gold Button */}
          <button
            id="hero-book-visit-btn"
            onClick={onOpenBookModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA820A] text-[#380816] font-bold text-base rounded-full shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#380816]" />
            <span>Book a Visit</span>
          </button>

          {/* Outlined Button */}
          <a
            id="hero-view-gallery-btn"
            href="#gallery"
            onClick={scrollToGallery}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-black/30 backdrop-blur-sm text-amber-100 font-semibold text-base rounded-full border-2 border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:text-white hover:border-amber-300 hover:scale-105 active:scale-95 transition-all"
          >
            <ImageIcon className="w-5 h-5 text-[#D4AF37]" />
            <span>View Gallery</span>
          </a>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 pt-8 border-t border-[#D4AF37]/30 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left"
        >
          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xs p-3 rounded-lg border border-white/10">
            <Users className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Capacity</p>
              <p className="text-sm font-semibold text-white">250 - 1000+ Guests</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xs p-3 rounded-lg border border-white/10">
            <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Location</p>
              <p className="text-sm font-semibold text-white">Dadri, UP 203207</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xs p-3 rounded-lg border border-white/10">
            <Star className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Experience</p>
              <p className="text-sm font-semibold text-white">8+ Years Excellence</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xs p-3 rounded-lg border border-white/10">
            <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Direct Contact</p>
              <p className="text-sm font-semibold text-white">{VENUE_INFO.phone}</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-75">
        <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-medium mb-1">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-[#D4AF37]/60 flex justify-center p-1">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
