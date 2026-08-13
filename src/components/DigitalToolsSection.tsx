import React, { useState } from 'react';
import { DIGITAL_TOOLS } from '../data/companyData';
import { handleImageError } from '../data/newsData';
import { ExternalLink, Check, Calculator, FileText, Compass, Sparkles, Code2, Play, Video, Globe } from 'lucide-react';
import { BhKonverVideoModal } from './BhKonverVideoModal';
import { PromoBannerCarousel } from './PromoBannerCarousel';
import { useLanguage } from '../context/LanguageContext';

interface DigitalToolsSectionProps {
  onOpenContact?: () => void;
  onOpenBojanka?: () => void;
}

export const DigitalToolsSection: React.FC<DigitalToolsSectionProps> = ({
  onOpenContact,
  onOpenBojanka,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { t } = useLanguage();

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#00C9A7]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#C9A84C]" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-[#00C9A7]" />;
    }
  };

  return (
    <section id="alati" className="py-24 bg-[#0A1628] relative overflow-hidden border-t border-[#1A3152]/60">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00C9A7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2038] border border-[#00C9A7]/30 text-[#00C9A7] text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('tools.badge', 'BH DIGITALNI ALATI & PLATFORME')}</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F0E8] tracking-tight">
            {t('tools.title', 'Autorska Softverska Rješenja B&H Assistant-a')}
          </h2>

          <p className="text-[#F5F0E8]/70 text-base font-sans leading-relaxed">
            {t('tools.subtitle', 'Spajamo funkcionalnost, kulturnu baštinu i brze proračune prilagođene zakonodavstvu i identitetu Bosne i Hercegovine.')}
          </p>
        </div>

        {/* 3 Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DIGITAL_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="group relative rounded-3xl bg-[#0F2038] border border-[#1A3152] hover:border-[#00C9A7]/60 transition-all duration-300 p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#00C9A7]/10 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C9A7] via-[#C9A84C] to-[#00C9A7] opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-[#0A1628] border border-[#1A3152] group-hover:scale-110 transition-transform">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0A1628] border border-[#1A3152] text-[#C9A84C] text-[11px] font-mono font-bold tracking-wider">
                    {tool.badge}
                  </span>
                </div>

                {/* Article Mockup Image Preview */}
                {tool.image && (
                  <div className="mb-5 rounded-2xl overflow-hidden border border-[#1A3152] group-hover:border-[#00C9A7]/40 transition-colors bg-[#0A1628] aspect-video relative">
                    <img
                      src={tool.id === 'bh-konver' ? '/images/bh_konver_video_thumbnail_1785476805282.jpg' : tool.image}
                      alt={tool.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2038] via-transparent to-transparent opacity-60" />

                    {/* BH KONVER Video Play Badge */}
                    {tool.id === 'bh-konver' && (
                      <button
                        onClick={() => setShowVideoModal(true)}
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#00C9A7]/90 hover:bg-[#00E5BE] text-[#0A1628] flex items-center justify-center shadow-lg shadow-[#00C9A7]/30 transition-transform hover:scale-110"
                        title="Pogledajte promotivni video snimak BH KONVER"
                      >
                        <Play className="w-5 h-5 fill-[#0A1628] ml-0.5" />
                      </button>
                    )}
                  </div>
                )}

                {/* Title & Tagline */}
                <h3 className="font-syne font-bold text-2xl text-[#F5F0E8] group-hover:text-[#00C9A7] transition-colors mb-2">
                  {tool.name}
                </h3>

                <p className="text-xs font-mono text-[#00C9A7] mb-4 font-semibold">
                  {tool.tagline}
                </p>

                {/* Exactly 50 Words Promo Info */}
                <div className="bg-[#0A1628]/80 p-4 rounded-2xl border border-[#1A3152]/80 mb-6 text-xs text-[#F5F0E8]/80 leading-relaxed">
                  {tool.description}
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 text-xs text-[#F5F0E8]/70 font-sans">
                  {tool.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#00C9A7]/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#00C9A7]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Link Launcher Buttons */}
              <div className="space-y-2">
                {tool.id === 'bh-konver' && (
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#C9A84C]/15 hover:bg-[#C9A84C]/25 border border-[#C9A84C]/50 text-[#C9A84C] font-syne font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2"
                  >
                    <Video className="w-4 h-4 text-[#C9A84C]" />
                    <span>{t('tools.konver.videoBtn', 'Pogledajte Prezentacijski Video')}</span>
                  </button>
                )}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0A1628] hover:bg-[#00C9A7] border border-[#00C9A7]/40 hover:border-[#00C9A7] text-[#00C9A7] hover:text-[#0A1628] font-syne font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#00C9A7]/20"
                >
                  <span>Isprobaj {tool.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Right-To-Left Promo Banner Carousel Component */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/30 text-[#00C9A7] text-[11px] font-mono font-bold uppercase tracking-wider">
              {t('carousel.badge', 'PROMOTIVNI BANERI & NAJAVE')}
            </span>
            <h3 className="font-syne font-extrabold text-2xl text-[#F5F0E8]">
              {t('carousel.title', 'B&H Assistant Promotivni Centar')}
            </h3>
            <p className="text-xs text-[#F5F0E8]/70 font-sans">
              {t('carousel.subtitle', 'Prelistajte naše ključne inicijative, digitalne alate, partnerstva i promotivne ponude.')}
            </p>
          </div>

          <PromoBannerCarousel
            onOpenContact={onOpenContact}
            onOpenBojanka={onOpenBojanka}
          />
        </div>

      </div>

      {/* BH KONVER Video Modal */}
      <BhKonverVideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
    </section>
  );
};

