import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, Eye, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/venueData';
import { GalleryCategory, GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface GalleryProps {
  onOpenBookModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBookModal }) => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Mandap Setup', value: 'mandap' },
    { label: 'Entrance Decor', value: 'entrance' },
    { label: 'Catering', value: 'catering' },
    { label: 'Night View', value: 'night' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF3E8] relative overflow-hidden">
      {/* Decorative Ambience */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B1E3A]/10 text-[#7B1E3A] text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380816] tracking-tight mb-4">
            A Glimpse into Suraj Farm Celebrations
          </h2>
          <p className="text-[#5A484E] text-sm sm:text-base max-w-2xl mx-auto">
            Explore authentic captures of our grand mandaps, vibrant floral arches, banquet culinary feasts, and illuminated evening lawns.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                id={`gallery-filter-${cat.value}`}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#7B1E3A] text-[#F3E5AB] shadow-md border border-[#D4AF37] scale-105'
                    : 'bg-[#FFFDF9] text-[#5A484E] hover:text-[#7B1E3A] hover:bg-[#F5ECE0] border border-[#D4AF37]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                id={`gallery-item-${item.id}`}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#D4AF37]/30 bg-[#380816] cursor-pointer transition-all"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20050D]/95 via-[#20050D]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Corner Zoom Icon Indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-xs border border-[#D4AF37]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Maximize2 className="w-4 h-4 text-[#F3E5AB]" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mb-1">
                    {item.category === 'mandap' && 'Mandap Setup'}
                    {item.category === 'entrance' && 'Entrance Decor'}
                    {item.category === 'catering' && 'Catering & Dining'}
                    {item.category === 'night' && 'Night Illumination'}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 opacity-90">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery CTA Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#5A484E] mb-4">
            Want to see our latest mandap designs and live videos from recent weddings?
          </p>
          <button
            id="gallery-tour-cta-btn"
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#7B1E3A] hover:bg-[#5B132A] text-[#F3E5AB] font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Book an In-Person Lawn Walkthrough</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          items={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onSelect={(item) => setActiveLightboxItem(item)}
        />
      )}
    </section>
  );
};
