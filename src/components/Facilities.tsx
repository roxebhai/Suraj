import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Crown, 
  Sparkles, 
  UtensilsCrossed, 
  HeartHandshake, 
  Car, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { FACILITIES } from '../data/venueData';
import { Facility } from '../types';

interface FacilitiesProps {
  onOpenBookModal: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenBookModal }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#D4AF37]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#5B132A] text-white relative overflow-hidden">
      {/* Subtle Background Lighting and Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#7B1E3A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-widest mb-3">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>World-Class Amenities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Exclusive Facilities & Event Services
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need for a majestic, stress-free celebration under one roof at Suraj Farm.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4" />
        </div>

        {/* 6 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.id}
              id={`facility-card-${facility.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#380816] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all flex flex-col group"
            >
              {/* Card Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380816] via-[#380816]/40 to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-[#7B1E3A] border border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  {getIcon(facility.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2 mb-6">
                    {facility.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  id={`facility-inquire-btn-${facility.id}`}
                  onClick={onOpenBookModal}
                  className="w-full py-2.5 px-4 bg-white/5 hover:bg-[#D4AF37] hover:text-[#380816] text-[#F3E5AB] text-xs font-semibold rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for Your Date</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7B1E3A] border border-[#D4AF37] flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-serif text-base sm:text-lg font-bold text-white">
                Looking for tailored themes or specific regional catering setups?
              </p>
              <p className="text-xs text-gray-300">
                Our in-house design and culinary specialists can customize every detail to your family's preferences.
              </p>
            </div>
          </div>
          <button
            id="facilities-custom-enquiry-btn"
            onClick={onOpenBookModal}
            className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#380816] font-bold text-xs rounded-full shadow-md hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            Custom Event Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
