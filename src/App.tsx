import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
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
import { SocialCommunitySection } from './components/SocialCommunitySection';
import { ContactAndImpressum } from './components/ContactAndImpressum';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

// Lazy-loaded: these modals are only needed after a user click, so keeping
// them out of the main bundle shrinks the initial JS payload.
const BojankaModal = lazy(() =>
  import('./components/BojankaModal').then((m) => ({ default: m.BojankaModal }))
);
const LiveWpEditorModal = lazy(() =>
  import('./components/LiveWpEditorModal').then((m) => ({ default: m.LiveWpEditorModal }))
);

const sectionRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

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

      {/* Main Content Flow with Staggered Scroll Reveal Animations */}
      <main className="space-y-4 md:space-y-8">
        {/* Hero Section with Interactive Stećak Background */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionRevealVariants}
        >
          <HeroSection
            onOpenBojanka={() => setIsBojankaOpen(true)}
            onNavigateSection={handleNavigateSection}
          />
        </motion.div>

        {/* 3 BH Digital Tools Section with Right-To-Left Promo Banner Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <DigitalToolsSection
            onOpenContact={() => handleNavigateSection('kontakt')}
            onOpenBojanka={() => setIsBojankaOpen(true)}
          />
        </motion.div>

        {/* SCENA+ Urbani Magazin ZDK Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <ScenaMagazineSection />
        </motion.div>

        {/* Novosti & Saopštenja za Javnost / CMS Sistem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <NewsSection onOpenLiveEditor={() => setIsLiveEditorOpen(true)} />
        </motion.div>

        {/* Projects Seeking Partners (ZENTAXI, GUMMI) & Free Bojanka */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <ProjectsSection
            onOpenBojanka={() => setIsBojankaOpen(true)}
          />
        </motion.div>

        {/* About B&H Assistant d.o.o. Zenica (Company Wall details) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <AboutSection />
        </motion.div>

        {/* SHOP - Fluid IT Inspired Visuals & Alison Affiliate Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <ShopAffiliateSection />
        </motion.div>

        {/* Dedicated Social Media Activity & Instagram Community Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <SocialCommunitySection />
        </motion.div>

        {/* Contact Form & Social Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -50px 0px" }}
          variants={sectionRevealVariants}
        >
          <ContactAndImpressum />
        </motion.div>
      </main>

      {/* Footer & Legal Modals */}
      <Footer onOpenLiveEditor={() => setIsLiveEditorOpen(true)} />

      {/* Modals (lazy-loaded, so no fallback flash needed while collapsed) */}
      <Suspense fallback={null}>
        {isBojankaOpen && (
          <BojankaModal
            isOpen={isBojankaOpen}
            onClose={() => setIsBojankaOpen(false)}
          />
        )}

        {isLiveEditorOpen && (
          <LiveWpEditorModal
            isOpen={isLiveEditorOpen}
            onClose={() => setIsLiveEditorOpen(false)}
            companyInfo={companyInfo}
            onUpdateCompanyInfo={(updated) => setCompanyInfo(updated)}
          />
        )}
      </Suspense>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Vercel Web Analytics */}
      <Analytics />

    </div>
  );
}
