import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { handleImageError } from '../data/newsData';
import { Menu, X, Sparkles, Edit3, ExternalLink, Download, Layers, Globe } from 'lucide-react';
import { useLanguage, FlagIcon } from '../context/LanguageContext';
import { Language } from '../data/translations';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenLiveEditor: () => void;
  onOpenBojanka: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenLiveEditor,
  onOpenBojanka,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'pocetna', label: t('nav.pocetna', 'Početna') },
    { id: 'alati', label: t('nav.alati', 'BH Digitalni Alati') },
    { id: 'scena-magazin', label: t('nav.scena', 'Magazin SCENA+') },
    { id: 'novosti', label: t('nav.novosti', 'Novosti & CMS') },
    { id: 'projekti', label: t('nav.projekti', 'Projekti & Bojanka') },
    { id: 'o-nama', label: t('nav.onama', 'O Nama') },
    { id: 'shop', label: t('nav.shop', 'SHOP (Edukacija)') },
    { id: 'kontakt', label: t('nav.kontakt', 'Kontakt') },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1A3152] shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo & Company Title */}
          <button
            onClick={() => handleNavClick('pocetna')}
            className="flex items-center gap-3 group text-left shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C9A7] via-[#0F2038] to-[#C9A84C] p-[1.5px] shadow-lg shadow-[#00C9A7]/20 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/images/bh_assistant_logo.jpg"
                alt="B&H Assistant Logotip"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e)}
                className="w-full h-full object-cover rounded-[9px]"
              />
            </div>
            <div>
              <span className="font-syne font-extrabold text-xl text-[#F5F0E8] tracking-tight block group-hover:text-[#00C9A7] transition-colors">
                B&H ASSISTANT
              </span>
              <span className="text-[11px] font-mono text-[#C9A84C] uppercase tracking-wider block">
                d.o.o. Zenica • IT Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0F2038]/80 p-1.5 rounded-2xl border border-[#1A3152]/60 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#00C9A7] text-[#0A1628] shadow-md shadow-[#00C9A7]/20 font-bold'
                    : 'text-[#F5F0E8]/80 hover:text-[#00C9A7] hover:bg-[#1A3152]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs: Language Flags Bar + Free Bojanka Download */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Language Switcher Flag Bar */}
            <div className="flex items-center gap-1 bg-[#0F2038] p-1.5 rounded-xl border border-[#00C9A7]/40 shadow-inner">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  title={`Prevedi na ${lang.name}`}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-lg transition-all text-[11px] font-mono font-bold ${
                    language === lang.code
                      ? 'bg-[#00C9A7] text-[#0A1628] shadow-sm scale-105'
                      : 'text-[#F5F0E8]/70 hover:text-[#F5F0E8] hover:bg-[#1A3152]/60'
                  }`}
                >
                  <FlagIcon code={lang.code} className="w-4 h-3" />
                  <span>{lang.shortName}</span>
                </button>
              ))}
            </div>

            <button
              onClick={onOpenBojanka}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C9A84C]/15 hover:bg-[#C9A84C]/25 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold transition-all hover:scale-105 shrink-0"
              title="Preuzmi besplatnu Gummi bojanku"
            >
              <Download className="w-3.5 h-3.5 animate-bounce" />
              <span>{t('nav.freeBojanka', 'Free Bojanka')}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language Switcher Flags + Hamburger */}
          <div className="lg:hidden flex items-center gap-1.5">
            {/* Mobile Flag Buttons Quick Selector */}
            <div className="flex items-center gap-1 bg-[#0F2038] p-1 rounded-xl border border-[#00C9A7]/30">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  title={lang.name}
                  className={`p-1.5 rounded-lg transition-all ${
                    language === lang.code
                      ? 'bg-[#00C9A7] text-[#0A1628] scale-105 shadow-sm'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <FlagIcon code={lang.code} className="w-4 h-3" />
                </button>
              ))}
            </div>

            <button
              onClick={onOpenBojanka}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-xl bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold hover:bg-[#C9A84C]/30 transition-colors"
              title="Preuzmi Bojanku GUMMI"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-xl bg-[#0F2038] border border-[#1A3152] text-[#F5F0E8] hover:text-[#00C9A7] transition-colors"
              aria-label="Izbornik Navigacije"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00C9A7]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1628]/98 border-b border-[#1A3152] px-4 pt-4 pb-6 mt-3 space-y-2 backdrop-blur-2xl shadow-2xl animate-fadeIn">
          
          {/* Mobile Language Selector Header */}
          <div className="p-3 rounded-2xl bg-[#0F2038] border border-[#00C9A7]/40 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#00C9A7]">
              <span className="flex items-center gap-1.5 font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>{t('nav.language', 'Jezik / Language')}</span>
              </span>
              <span className="text-[10px] text-[#C9A84C]">
                Odaberi jezik prevoda
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border text-xs font-mono transition-all ${
                    language === lang.code
                      ? 'bg-[#00C9A7] text-[#0A1628] font-bold border-[#00C9A7] shadow-lg'
                      : 'bg-[#0A1628] text-[#F5F0E8]/80 border-[#1A3152] hover:border-[#00C9A7]/50'
                  }`}
                >
                  <FlagIcon code={lang.code} className="w-5 h-3.5 mb-1" />
                  <span className="text-[10px]">{lang.shortName}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-2 pb-1 border-b border-[#1A3152]/60 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#C9A84C] uppercase tracking-wider font-semibold">
              B&H Assistant • Meni
            </span>
            <span className="text-[10px] font-mono text-[#00C9A7] bg-[#00C9A7]/10 px-2 py-0.5 rounded-full border border-[#00C9A7]/30">
              Mobilna Navigacija
            </span>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-syne font-semibold transition-all min-h-[44px] flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-[#00C9A7] text-[#0A1628] font-bold shadow-md shadow-[#00C9A7]/20'
                  : 'text-[#F5F0E8] hover:bg-[#0F2038] hover:text-[#00C9A7]'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-[#0A1628]" />
              )}
            </button>
          ))}

          <div className="pt-3 mt-2 border-t border-[#1A3152] space-y-2">
            <button
              onClick={() => {
                onOpenBojanka();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C9A84C] hover:bg-[#D4B356] text-[#0A1628] font-syne font-bold text-xs shadow-lg min-h-[44px] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t('nav.freeBojanka', 'Free Bojanka')} (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

