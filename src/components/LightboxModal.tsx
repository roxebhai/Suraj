import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div
      id="gallery-lightbox-overlay"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="gallery-lightbox-content"
        className="relative max-w-5xl w-full bg-[#380816] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 bg-[#20050D] border-b border-[#D4AF37]/30 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-serif text-lg font-bold text-[#F3E5AB]">
              {item.title}
            </span>
          </div>
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close image lightbox"
            className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#7B1E3A] border border-[#D4AF37]/50 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-[#F3E5AB]" />
          </button>

          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#7B1E3A] border border-[#D4AF37]/50 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-[#F3E5AB]" />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div className="p-4 sm:p-5 bg-[#2A0611] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
          <div>
            <span className="inline-block text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-[#7B1E3A] text-[#F3E5AB] border border-[#D4AF37]/40 mb-1">
              Category: {item.category.toUpperCase()}
            </span>
            <p className="text-xs sm:text-sm text-gray-200">{item.caption}</p>
          </div>
          <div className="text-xs text-amber-200/80 shrink-0">
            {currentIndex + 1} of {items.length} Photos
          </div>
        </div>
      </div>
    </div>
  );
};
