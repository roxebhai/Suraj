import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Navigation,
  Mail,
  User,
  Users
} from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/venueData';
import { BookingFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: 'Grand Wedding Ceremony',
    eventDate: '',
    guestCount: '300-500 Guests',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast reliable inquiry processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const sendDirectWhatsApp = () => {
    const text = `*New Event Enquiry for Suraj Farm*\n\n` +
      `*Name:* ${formData.name || 'Guest'}\n` +
      `*Phone:* ${formData.phone || 'Provided'}\n` +
      `*Event Type:* ${formData.eventType}\n` +
      `*Event Date:* ${formData.eventDate || 'To be decided'}\n` +
      `*Guest Count:* ${formData.guestCount}\n` +
      `*Notes:* ${formData.message || 'Looking for pricing and availability'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF3E8] relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7B1E3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B1E3A]/10 text-[#7B1E3A] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380816] tracking-tight mb-4">
            Plan Your Grand Wedding with Us
          </h2>
          <p className="text-[#5A484E] text-sm sm:text-base max-w-2xl mx-auto">
            Book your event date or schedule an in-person venue visit at Suraj Farm. Our managers are ready to assist you.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4" />
        </div>

        {/* Two Column Layout: Left Contact Info & Map, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Venue Contact Details & Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#380816] pb-4 border-b border-[#D4AF37]/20">
                Venue Information
              </h3>

              {/* Direct Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7B1E3A] text-[#F3E5AB] flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#7B1E3A] font-bold">Call for Enquiries & Bookings</p>
                  <a
                    id="contact-phone-link"
                    href={`tel:${VENUE_INFO.rawPhone}`}
                    className="font-serif text-xl sm:text-2xl font-bold text-[#380816] hover:text-[#7B1E3A] transition-colors block mt-0.5"
                  >
                    {VENUE_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Manager Available 9:00 AM – 10:00 PM</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div>
                <a
                  id="contact-whatsapp-direct-btn"
                  href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hi%20Suraj%20Farm,%20I%20would%20like%20to%20enquire%20about%20booking%20and%20date%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-2 border-t border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#7B1E3A]/10 text-[#7B1E3A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#7B1E3A]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#7B1E3A] font-bold">Venue Address</p>
                  <p className="text-sm font-semibold text-[#380816] mt-0.5">
                    {VENUE_INFO.address}
                  </p>
                  <p className="text-xs text-[#5A484E] mt-0.5">
                    {VENUE_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#7B1E3A]/10 text-[#7B1E3A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#7B1E3A]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#7B1E3A] font-bold">Lawn & Hall Visiting Hours</p>
                  <p className="text-xs sm:text-sm text-[#380816] font-medium mt-0.5">
                    {VENUE_INFO.timings}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder & Direction Card */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#D4AF37]/30 shadow-md">
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-100 border border-gray-200">
                {/* Visual Map Representation */}
                <iframe
                  title="Suraj Farm Location Map"
                  src="https://maps.google.com/maps?q=Dadri%20Uttar%20Pradesh%20203207&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#380816]">Suraj Farm • Dadri UP</p>
                  <p className="text-[11px] text-gray-500">Easy road connectivity via GT Road</p>
                </div>
                <a
                  id="contact-get-directions-btn"
                  href="https://maps.google.com/?q=Dadri+Uttar+Pradesh+203207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#7B1E3A] hover:bg-[#5B132A] text-[#F3E5AB] text-xs font-semibold rounded-lg transition-all"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/50 shadow-2xl relative">
              
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Fast Response Guarantee</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#380816] mt-1">
                  Send Event Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#5A484E] mt-1">
                  Fill in your preferred event details to receive date availability, package brochure, and a personalized estimate.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#380816]">
                    Thank You, {formData.name || 'Valued Guest'}!
                  </h4>
                  <p className="text-sm text-[#5A484E] max-w-md mx-auto">
                    Your enquiry for <strong>{formData.eventType}</strong> on <strong>{formData.eventDate || 'your requested date'}</strong> has been received. Our venue coordinator will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={sendDirectWhatsApp}
                      className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-full shadow-md flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Send Details to WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          eventType: 'Grand Wedding Ceremony',
                          eventDate: '',
                          guestCount: '300-500 Guests',
                          message: ''
                        });
                      }}
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-full"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-enquiry-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-input-name"
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-sm bg-white transition-all text-[#2D1A1E]"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1.5">
                        Mobile Number <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-input-phone"
                          type="tel"
                          required
                          placeholder="e.g. 098765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-sm bg-white transition-all text-[#2D1A1E]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1.5">
                        Event Type
                      </label>
                      <select
                        id="contact-select-event-type"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-sm bg-white transition-all text-[#2D1A1E]"
                      >
                        {EVENT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1.5">
                        Tentative Event Date <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-input-date"
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-sm bg-white transition-all text-[#2D1A1E]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1.5">
                      Estimated Guests Count
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['250 - 400', '400 - 600', '600 - 800', '800 - 1000+'].map((count) => (
                        <button
                          type="button"
                          key={count}
                          onClick={() => setFormData({ ...formData, guestCount: `${count} Guests` })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                            formData.guestCount.includes(count.substring(0, 3))
                              ? 'bg-[#7B1E3A] text-[#F3E5AB] border-[#7B1E3A]'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37]'
                          }`}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1.5">
                      Specific Requirements or Message
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={3}
                      placeholder="Mention any specific preferences for mandap design, catering, rooms, or decor themes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-sm bg-white transition-all text-[#2D1A1E]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA820A] text-[#380816] font-bold text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#380816]" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-gray-500 pt-1">
                    🔒 We respect your privacy. Your details are solely used to coordinate your event booking at Suraj Farm.
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
