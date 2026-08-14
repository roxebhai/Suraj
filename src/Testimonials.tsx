import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle2, Award, Heart } from 'lucide-react';
import { TESTIMONIALS, VENUE_INFO } from '../data/venueData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#5B132A] text-white relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7B1E3A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>Honest Host Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Words of Appreciation from Our Guests
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
            Read authentic reviews from families who entrusted Suraj Farm with their most sacred wedding memories and celebrations in Dadri.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4" />
        </div>

        {/* Google Rating Overview Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#380816] border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#7B1E3A] border-2 border-[#D4AF37] flex flex-col items-center justify-center text-center shadow-lg shrink-0">
              <span className="font-serif text-2xl font-bold text-[#F3E5AB] leading-none">4.0</span>
              <div className="flex text-amber-400 mt-1">
                <Star className="w-2.5 h-2.5 fill-current" />
                <Star className="w-2.5 h-2.5 fill-current" />
                <Star className="w-2.5 h-2.5 fill-current" />
                <Star className="w-2.5 h-2.5 fill-current" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Highly Rated Wedding Venue
                </h3>
                <span className="bg-emerald-800 text-emerald-100 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">
                Over {VENUE_INFO.reviewCount}+ Google reviews & thousands of delighted attendees across Greater Noida / Dadri.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs text-gray-400">Decoration Quality</p>
              <p className="text-sm font-bold text-[#D4AF37]">4.8 / 5.0</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs text-gray-400">Lawn Space & Vibe</p>
              <p className="text-sm font-bold text-[#D4AF37]">4.9 / 5.0</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs text-gray-400">Guest Hospitality</p>
              <p className="text-sm font-bold text-[#D4AF37]">4.7 / 5.0</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              id={`testimonial-card-${review.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#380816] rounded-2xl p-6 border border-[#D4AF37]/30 shadow-xl hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-sm italic leading-relaxed mb-6 font-light">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7B1E3A] border border-[#D4AF37] flex items-center justify-center font-serif font-bold text-[#F3E5AB] text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-[#F3E5AB] transition-colors">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                    <span>{review.tag || 'Verified Host'}</span>
                    <span>•</span>
                    <span className="text-gray-400">{review.source}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
