/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookVisitModal } from './components/BookVisitModal';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handleOpenBookModal = () => {
    setIsBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsBookModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF3E8] text-[#2C1810]">
      {/* 1. NAVBAR */}
      <Navbar onOpenBookModal={handleOpenBookModal} />

      <main className="flex-grow">
        {/* 2. HERO */}
        <Hero onOpenBookModal={handleOpenBookModal} />

        {/* 3. ABOUT */}
        <About onOpenBookModal={handleOpenBookModal} />

        {/* 4. FACILITIES */}
        <Facilities onOpenBookModal={handleOpenBookModal} />

        {/* 5. GALLERY */}
        <Gallery onOpenBookModal={handleOpenBookModal} />

        {/* 6. TESTIMONIALS / REVIEWS */}
        <Testimonials />

        {/* 7. CONTACT */}
        <Contact />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* 9. FLOATING WHATSAPP BUTTON (Always Visible) */}
      <FloatingWhatsApp />

      {/* 10. BOOK VISIT / ENQUIRY MODAL */}
      <BookVisitModal
        isOpen={isBookModalOpen}
        onClose={handleCloseBookModal}
      />
    </div>
  );
}
