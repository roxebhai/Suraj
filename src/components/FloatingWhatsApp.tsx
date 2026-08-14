import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hi%20Suraj%20Farm,%20I%20would%20like%20to%20enquire%20about%20wedding%20venue%20availability%20and%20packages.`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FFFDF9] text-[#380816] text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-[#D4AF37] animate-fade-in relative">
          <div className="flex flex-col">
            <span className="text-[#7B1E3A] font-bold">Have Questions?</span>
            <span className="text-gray-600 font-normal">Chat with Suraj Farm Manager</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFFDF9] border-t border-r border-[#D4AF37] transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Suraj Farm on WhatsApp"
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        {/* Pulse Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden" />
        
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  );
};
