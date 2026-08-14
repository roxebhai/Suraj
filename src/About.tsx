import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, Award, Check, Sparkles, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { VENUE_INFO, STATS } from '../data/venueData';

interface AboutProps {
  onOpenBookModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBookModal }) => {
  const statIcons: Record<string, React.ReactNode> = {
    Users: <Users className="w-7 h-7 text-[#D4AF37]" />,
    Star: <Star className="w-7 h-7 text-[#D4AF37] fill-[#D4AF37]/20" />,
    Award: <Award className="w-7 h-7 text-[#D4AF37]" />
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF3E8] relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B1E3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B1E3A]/10 text-[#7B1E3A] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Welcome to Suraj Farm</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380816] tracking-tight mb-4">
            Where Royal Celebrations Meet Timeless Memories
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="border-l-4 border-[#D4AF37] pl-4 sm:pl-6 py-1 bg-[#FFFDF9] rounded-r-xl shadow-xs">
              <p className="font-serif text-xl sm:text-2xl text-[#7B1E3A] font-semibold italic leading-relaxed">
                &ldquo;A spacious open-lawn marriage venue hosting 250 to 1000 guests, renowned for excellent mandap decoration and personalized event styling.&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#4A383E] leading-relaxed">
              Nestled conveniently in Dadri, Uttar Pradesh, <strong>Suraj Farm</strong> provides an idyllic setting for grand Indian weddings, vibrant sangeets, royal receptions, and intimate traditional gatherings.
            </p>

            <p className="text-base text-[#5A484E] leading-relaxed">
              Our venue seamlessly marries vast, manicured natural green lawns with climate-controlled indoor hospitality. From ethereal floral vedi mandaps and dramatic entrance arches to lavish catering setups and fairy-lit evening ambiances, our dedicated decor and event teams ensure that every ritual and celebration is executed with perfection.
            </p>

            {/* Core Venue Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {VENUE_INFO.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#7B1E3A] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#F3E5AB]" />
                  </div>
                  <span className="text-sm font-medium text-[#380816]">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-schedule-tour-btn"
                onClick={onOpenBookModal}
                className="px-6 py-3 bg-[#7B1E3A] hover:bg-[#5B132A] text-[#F3E5AB] font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#D4AF37]" />
                <span>Schedule a Venue Visit</span>
              </button>
              <div className="flex items-center gap-2 text-xs text-[#7B1E3A] font-medium">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Dadri, Uttar Pradesh 203207</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Elegant Photo Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Gold Frame Border */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#D4AF37]/50 -rotate-2 pointer-events-none" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#5B132A] border border-[#D4AF37]/40 z-10">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                  alt="Suraj Farm Wedding Entrance & Mandap Decor"
                  className="w-full h-96 sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20050D]/90 via-transparent to-black/20" />
                
                {/* Floating Bottom Card Inside Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Dadri's Premier Destination</p>
                      <p className="font-serif text-lg font-bold text-white">Lush Green Marriage Lawn</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#7B1E3A] border border-[#D4AF37] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-[#7B1E3A] text-white p-3 rounded-xl border border-[#D4AF37] shadow-xl text-center hidden sm:block">
                <p className="font-serif text-xl font-bold text-[#F3E5AB]">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-200">Customized Décor</p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Three Stat Boxes Required */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              id={`stat-card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#7B1E3A]/10 group-hover:bg-[#7B1E3A] flex items-center justify-center transition-colors">
                  {statIcons[stat.icon]}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B1E3A] bg-[#7B1E3A]/10 px-2.5 py-1 rounded-full">
                  Suraj Farm
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#380816] mb-1 group-hover:text-[#7B1E3A] transition-colors">
                {stat.number}
              </h3>
              <p className="text-base font-semibold text-[#7B1E3A] mb-1">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm text-[#5A484E]">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
