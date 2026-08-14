import React, { useState } from 'react';
import { X, Calendar, Phone, Clock, User, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/venueData';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10 AM - 1 PM)');
  const [eventType, setEventType] = useState('Grand Wedding Ceremony');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `*Booking / Visit Request for Suraj Farm*\n\n` +
      `*Name:* ${name || 'Guest'}\n` +
      `*Phone:* ${phone}\n` +
      `*Event Type:* ${eventType}\n` +
      `*Preferred Visit/Event Date:* ${preferredDate || 'Upcoming weekend'}\n` +
      `*Preferred Time Slot:* ${timeSlot}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div
      id="book-visit-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="book-visit-modal-content"
        className="relative max-w-lg w-full bg-[#FFFDF9] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden text-[#2D1A1E] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#7B1E3A] p-6 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-serif text-xl font-bold text-[#F3E5AB]">
                Book a Visit / Reserve Date
              </h3>
            </div>
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="text-gray-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-200 mt-1">
            Experience our open lawns, mandap artistry, and banquet hall in person.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#380816]">
                Visit Requested Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-[#5A484E]">
                Thank you, <strong>{name}</strong>. Our venue manager will connect with you at <strong>{phone}</strong> to confirm your slot for <strong>{preferredDate}</strong>.
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-xs sm:text-sm bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1">
                  Contact Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="093589 85027"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-xs sm:text-sm bg-white"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1">
                  Occasion / Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#7B1E3A] focus:ring-2 focus:ring-[#7B1E3A]/20 outline-none text-xs sm:text-sm bg-white"
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-300 focus:border-[#7B1E3A] text-xs sm:text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#380816] uppercase tracking-wider mb-1">
                    Preferred Visit Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#7B1E3A] text-xs sm:text-sm bg-white"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA820A] text-[#380816] font-bold text-sm rounded-xl shadow hover:shadow-md transition-all cursor-pointer"
                >
                  Confirm Visit Request
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Or Request Instantly on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
