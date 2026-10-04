import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophyGurukul } from './components/PhilosophyGurukul';
import { VirtualCampusTour } from './components/VirtualCampusTour';
import { AcademicsExcellence } from './components/AcademicsExcellence';
import { SportsCoCurricular } from './components/SportsCoCurricular';
import { DailyLifeTimeline } from './components/DailyLifeTimeline';
import { FeeCalculatorSection } from './components/FeeCalculatorSection';
import { AdmissionsRoadmap } from './components/AdmissionsRoadmap';
import { TestimonialsWall } from './components/TestimonialsWall';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { TourModal } from './components/TourModal';
import { VideoModal } from './components/VideoModal';
import { FloatingQuickDock } from './components/FloatingQuickDock';

export const App: React.FC = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openInquiry = () => setInquiryModalOpen(true);
  const closeInquiry = () => setInquiryModalOpen(false);

  const openTour = () => setTourModalOpen(true);
  const closeTour = () => setTourModalOpen(false);

  const openVideo = () => setVideoModalOpen(true);
  const closeVideo = () => setVideoModalOpen(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300">
        {/* Standout Feature 1: Fluid Magnetic Spring Custom Cursor with Hover Badges */}
        <CustomCursor />

        {/* Standout Feature 2: Scroll Progress Bar with dynamic reading percentage indicator */}
        <ScrollProgressBar />

        {/* Urgent Live Admissions Notification Header */}
        <AnnouncementTicker onOpenInquiry={openInquiry} />

        {/* Glassmorphic Navbar with Standout Feature 3: Animated 3-Theme Switcher (Royal, Himalayan, Light) */}
        <Navbar onOpenInquiry={openInquiry} onOpenTourModal={openTour} />

        <main>
          {/* Cinematic Hero with Sanskrit Philosophy & High-Impact Stats */}
          <Hero 
            onOpenInquiry={openInquiry}
            onOpenTourModal={openTour}
            onOpenVideoModal={openVideo}
          />

          {/* Core Philosophy: The Trinity of The Modern Gurukul (Mind, Body, Soul) */}
          <PhilosophyGurukul onOpenInquiry={openInquiry} />

          {/* Interactive 360° Campus Tour Hub with Hotspots */}
          <VirtualCampusTour onOpenTourModal={openTour} />

          {/* Academic Excellence: Einstein STEM Labs, Cambridge/CBSE, Trinity, Placements */}
          <AcademicsExcellence onOpenInquiry={openInquiry} />

          {/* 16+ Olympic Sports Academies: Equestrian, Shooting, Aquatics, Tennis */}
          <SportsCoCurricular onOpenInquiry={openInquiry} />

          {/* A Day in the Life of a TIS Scholar: 24-Hour Holistic Routine */}
          <DailyLifeTimeline />

          {/* High-Converting Interactive Fee & Scholarship Estimator */}
          <FeeCalculatorSection onOpenInquiry={openInquiry} />

          {/* 5-Step Admissions Roadmap AY 2026-27 */}
          <AdmissionsRoadmap onOpenInquiry={openInquiry} />

          {/* Parent & Alumni Testimonials Wall */}
          <TestimonialsWall />

          {/* Frequently Asked Questions Accordion */}
          <FAQSection />
        </main>

        {/* Footer with Accreditations & Dehradun Campus Info */}
        <Footer onOpenInquiry={openInquiry} onOpenTourModal={openTour} />

        {/* Floating Quick Action Dock */}
        <FloatingQuickDock onOpenInquiry={openInquiry} onOpenTourModal={openTour} />

        {/* Lead Capture Modal with Confetti Celebration */}
        <InquiryModal isOpen={inquiryModalOpen} onClose={closeInquiry} />

        {/* 360° Virtual Campus Modal */}
        <TourModal isOpen={tourModalOpen} onClose={closeTour} onOpenInquiry={openInquiry} />

        {/* Video Tour Modal */}
        <VideoModal isOpen={videoModalOpen} onClose={closeVideo} />
      </div>
    </ThemeProvider>
  );
};

export default App;
