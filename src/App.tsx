import React, { useState } from 'react';
import { COMPANY_INFO } from './data/companyData';
import { CompanyDetails } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DigitalToolsSection } from './components/DigitalToolsSection';
import { ScenaMagazineSection } from './components/ScenaMagazineSection';
import { NewsSection } from './components/NewsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ShopAffiliateSection } from './components/ShopAffiliateSection';
import { ContactAndImpressum } from './components/ContactAndImpressum';
import { Footer } from './components/Footer';
import { BojankaModal } from './components/BojankaModal';
import { LiveWpEditorModal } from './components/LiveWpEditorModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('pocetna');
  const [companyInfo, setCompanyInfo] = useState<CompanyDetails>(COMPANY_INFO);
  const [isBojankaOpen, setIsBojankaOpen] = useState(false);
  const [isLiveEditorOpen, setIsLiveEditorOpen] = useState(false);

  const handleNavigateSection = (secId: string) => {
    setActiveSection(secId);
    const element = document.getElementById(secId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-[#F5F0E8] font-sans overflow-x-hidden selection:bg-[#00C9A7] selection:text-[#0A1628]">
      
      {/* Top Fixed Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenLiveEditor={() => setIsLiveEditorOpen(true)}
        onOpenBojanka={() => setIsBojankaOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with Interactive Stećak Background */}
        <HeroSection
          onOpenBojanka={() => setIsBojankaOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* 3 BH Digital Tools Section with Right-To-Left Promo Banner Carousel */}
        <DigitalToolsSection
          onOpenContact={() => handleNavigateSection('kontakt')}
          onOpenBojanka={() => setIsBojankaOpen(true)}
        />

        {/* SCENA+ Urbani Magazin ZDK Section */}
        <ScenaMagazineSection />

        {/* Novosti & Saopštenja za Javnost / CMS Sistem */}
        <NewsSection onOpenLiveEditor={() => setIsLiveEditorOpen(true)} />

        {/* Projects Seeking Partners (ZENTAXI, GUMMI) & Free Bojanka */}
        <ProjectsSection
          onOpenBojanka={() => setIsBojankaOpen(true)}
        />

        {/* About B&H Assistant d.o.o. Zenica (Company Wall details) */}
        <AboutSection />

        {/* SHOP - Fluid IT Inspired Visuals & Alison Affiliate Education */}
        <ShopAffiliateSection />

        {/* Contact Form & Social Links */}
        <ContactAndImpressum />
      </main>

      {/* Footer & Legal Modals */}
      <Footer onOpenLiveEditor={() => setIsLiveEditorOpen(true)} />

      {/* Modals */}
      <BojankaModal
        isOpen={isBojankaOpen}
        onClose={() => setIsBojankaOpen(false)}
      />

      <LiveWpEditorModal
        isOpen={isLiveEditorOpen}
        onClose={() => setIsLiveEditorOpen(false)}
        companyInfo={companyInfo}
        onUpdateCompanyInfo={(updated) => setCompanyInfo(updated)}
      />

    </div>
  );
}
