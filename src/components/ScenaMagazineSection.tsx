import React, { useState } from 'react';
import { SCENA_MAGAZINE } from '../data/companyData';
import { handleImageError } from '../data/newsData';
import { BookOpen, ExternalLink, Sparkles, Layers, Disc, Flame, Shield, Award, Eye, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScenaMagazineSection: React.FC = () => {
  const [showReaderModal, setShowReaderModal] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="scena-magazin" className="py-24 bg-[#0A1628] relative overflow-hidden border-t border-[#1A3152]">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2038] border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('scena.badge', 'URBANI MAGAZIN ZDK')}</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F0E8] tracking-tight">
            {t('scena.title', 'Magazin SCENA+ • Spajamo Kulture & Stvaramo Šanse')}
          </h2>

          <p className="text-[#F5F0E8]/70 text-base font-sans leading-relaxed">
            {t('scena.subtitle', 'Promovišemo mlade talente, kulturno naslijeđe Zenice i inovativne bh. biznis priče kroz fizička i digitalna izdanja.')}
          </p>
        </div>

        {/* Magazine Main Feature Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 rounded-3xl bg-[#0F2038] border border-[#1A3152] p-8 lg:p-12 shadow-2xl relative">
          
          {/* Left Poster Graphic Preview (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group max-w-sm w-full rounded-2xl overflow-hidden border-2 border-[#C9A84C]/60 bg-[#0A1628] shadow-2xl hover:border-[#00C9A7] transition-all duration-300">
              
              {/* Cover Image */}
              <div className="aspect-[2/3] w-full bg-[#0A1628] relative">
                <img
                  src="/images/scena_cover.jpg"
                  alt="SCENA+ Urbani Magazin Naslovna Strana"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0A1628]/90 border border-[#C9A84C]/50 backdrop-blur-md">
                  <span className="text-[10px] font-syne font-black text-[#C9A84C] uppercase tracking-wider">
                    PRINT & E-IZDANJE
                  </span>
                </div>
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-[#0A1628]/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 gap-3 backdrop-blur-sm">
                <button
                  onClick={() => setShowReaderModal(true)}
                  className="px-5 py-3 rounded-xl bg-[#00C9A7] text-[#0A1628] font-syne font-bold text-xs tracking-wide shadow-lg flex items-center gap-2 hover:bg-[#00E5BE] transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Brzi Pregled u Stranici</span>
                </button>
                <a
                  href={SCENA_MAGAZINE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#C9A84C] text-[#0A1628] font-syne font-bold text-xs tracking-wide shadow-lg flex items-center gap-2 hover:bg-[#FFD700] transition-colors"
                >
                  <span>Otvorite e-Verziju (Canva)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Magazine Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-wider block font-bold">
                {SCENA_MAGAZINE.subtitle} • {SCENA_MAGAZINE.date}
              </span>
              <h3 className="font-syne font-extrabold text-3xl text-[#F5F0E8]">
                Sadržaj i Teme <span className="text-[#00C9A7]">Prvog Izdanja</span>
              </h3>
            </div>

            <p className="text-sm text-[#F5F0E8]/80 leading-relaxed font-sans">
              SCENA+ donosi autentične priče iz Zeničko-dobojskog kantona i cijele Bosne i Hercegovine. Spajamo kulturno naslijeđe, moderne umjetničke pravce, digitalnu ekonomiju i lokalni poduzetnički duh u jedno pregledno i moderno izdanje.
            </p>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {SCENA_MAGAZINE.topics.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0A1628] border border-[#1A3152] space-y-1">
                  <span className="text-[10px] font-mono text-[#00C9A7] uppercase font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-syne font-bold text-sm text-[#F5F0E8]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/70 font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={SCENA_MAGAZINE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#B8973B] text-[#0A1628] font-syne font-bold text-xs tracking-wide shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Prelistaj e-Izdanje Magazina (Canva Link)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setShowReaderModal(true)}
                className="px-5 py-3.5 rounded-xl bg-[#0A1628] border border-[#1A3152] hover:border-[#00C9A7] text-[#00C9A7] font-syne font-bold text-xs tracking-wide transition-all"
              >
                Interaktivni Prikaz
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Reader Modal */}
      {showReaderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl rounded-3xl bg-[#0F2038] border border-[#00C9A7]/40 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-[#1A3152] pb-4">
              <div>
                <h3 className="font-syne font-bold text-xl text-[#F5F0E8]">
                  SCENA+ Magazin — e-Verzija
                </h3>
                <p className="text-xs text-[#00C9A7] font-mono">
                  Prvo Izdanje • Septembar / Rujan 2026
                </p>
              </div>
              <button
                onClick={() => setShowReaderModal(false)}
                className="p-2 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] hover:text-[#00C9A7]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#F5F0E8]/80 font-sans">
                Zvanična e-verzija magazina SCENA+ dostojna je svakog digitalnog e-čitača. Klikom na dugme ispod možete otvoriti kompletno interaktivno izdanje na Canva e-platformi.
              </p>

              <div className="aspect-video w-full rounded-2xl bg-[#0A1628] border border-[#1A3152] p-8 flex flex-col items-center justify-center text-center space-y-4">
                <BookOpen className="w-16 h-16 text-[#C9A84C] animate-pulse" />
                <h4 className="font-syne font-bold text-lg text-[#F5F0E8]">
                  SCENA+ Spajamo Kulture Stvaramo Šanse
                </h4>
                <p className="text-xs text-[#F5F0E8]/70 max-w-md font-sans">
                  Prvi urbani magazin u ZDK sa ekskluzivnim temama: Danilo Keso Art, BCX Krypto, Craft Pivare, Endemska Fauna, Gaming Parvantanam, Emisija Propuh i priče o uspjehu.
                </p>
                <a
                  href={SCENA_MAGAZINE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#00C9A7] text-[#0A1628] font-syne font-bold text-xs tracking-wide shadow-lg flex items-center gap-2 hover:bg-[#00E5BE]"
                >
                  <span>Otvori Magazin na Canva (Full Screen)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowReaderModal(false)}
                className="px-5 py-2.5 rounded-xl bg-[#1A3152] text-[#F5F0E8] text-xs font-semibold hover:bg-[#0A1628]"
              >
                Zatvori Pregled
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
