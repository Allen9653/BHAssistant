import React from 'react';
import { DEVELOPMENT_PROJECTS } from '../data/companyData';
import { handleImageError } from '../data/newsData';
import { ExternalLink, Download, Users, Handshake, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsSectionProps {
  onOpenBojanka: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenBojanka }) => {
  const { t } = useLanguage();

  return (
    <section id="projekti" className="py-24 bg-[#0A1628] relative overflow-hidden border-t border-[#1A3152]">
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00C9A7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2038] border border-[#00C9A7]/30 text-[#00C9A7] text-xs font-mono tracking-wider uppercase">
            <Handshake className="w-3.5 h-3.5" />
            <span>{t('projects.badge', 'INVESTICIJE & BOJANKA ZA DJECU')}</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F0E8] tracking-tight">
            {t('projects.title', 'Razvojni Projekti & Društvena Odgovornost')}
          </h2>

          <p className="text-[#F5F0E8]/70 text-base font-sans leading-relaxed">
            {t('projects.subtitle', 'Pored komercijalnih softvera, gradimo projekte od velikog značaja za lokalnu zajednicu i mlade generacije.')}
          </p>
        </div>

        {/* Development Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {DEVELOPMENT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-[#0F2038] border border-[#1A3152] hover:border-[#00C9A7]/50 transition-all duration-300 p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C9A7]/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4">
                
                {/* Header Status Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#0A1628] border border-[#00C9A7]/40 text-[#00C9A7] text-[11px] font-mono font-bold uppercase">
                    {proj.status}
                  </span>
                  <span className="text-xs font-mono text-[#C9A84C]">
                    Ciljna grupa: {proj.targetAudience}
                  </span>
                </div>

                {/* Project Logo Visual Preview */}
                {proj.image && (
                  <div className="rounded-2xl overflow-hidden border border-[#1A3152] bg-[#0A1628] p-3 aspect-video flex items-center justify-center group-hover:border-[#00C9A7]/40 transition-colors">
                    <img
                      src={proj.image}
                      alt={`${proj.title} Logotip`}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e)}
                      className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-syne font-extrabold text-3xl text-[#F5F0E8] group-hover:text-[#00C9A7] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C9A84C] font-semibold mt-1">
                    "{proj.subtitle}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#F5F0E8]/80 leading-relaxed font-sans bg-[#0A1628]/80 p-4 rounded-2xl border border-[#1A3152]">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-[#00C9A7] uppercase tracking-wider block font-bold">
                    Ključne Prednosti & Inovacije:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F5F0E8]/80">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C9A7] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Buttons inside Card */}
              <div className="pt-4 border-t border-[#1A3152] flex flex-wrap items-center gap-3">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#0A1628] hover:bg-[#00C9A7] border border-[#00C9A7]/40 hover:border-[#00C9A7] text-[#00C9A7] hover:text-[#0A1628] font-syne font-bold text-xs tracking-wide transition-all flex items-center gap-2"
                >
                  <span>Prezentacija na Canva</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {proj.hasFreeDownload && (
                  <button
                    onClick={onOpenBojanka}
                    className="px-5 py-3 rounded-xl bg-[#C9A84C] hover:bg-[#FFD700] text-[#0A1628] font-syne font-bold text-xs tracking-wide shadow-lg transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 animate-bounce" />
                    <span>Free Bojanka Gummi (PDF)</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Highlight Banner for Free Edukativna Bojanka GUMMI */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2038] via-[#1A3152] to-[#0F2038] border-2 border-[#C9A84C]/50 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-[11px] font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BESPLATNI POKLON ZA SVE POSJETIOCE</span>
              </div>

              <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#F5F0E8]">
                Preuzmite Prvi Primjerak Edukativne Bojanke <span className="text-[#C9A84C]">GUMMI</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#F5F0E8]/80 leading-relaxed font-sans">
                "Učimo pisati štampana i pisana slova kroz igru, smijeh i druženje" — Poklanjamo besplatno svim zainteresovanim roditeljima, odgajateljima i djeci prvi digitalni primjerak edukativne bojanke Gummi u PDF formatu.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-3">
              <button
                onClick={onOpenBojanka}
                className="w-full py-4 px-6 rounded-2xl bg-[#C9A84C] hover:bg-[#FFD700] text-[#0A1628] font-syne font-bold text-xs tracking-wider shadow-2xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Preuzmi Bojanku (Besplatno)</span>
              </button>

              <a
                href="https://canva.link/tna306bm8p462xm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0A1628] border border-[#1A3152] hover:border-[#00C9A7] text-[#00C9A7] font-syne font-bold text-xs text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Direktan Canva Link</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
