import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { handleImageError } from '../data/newsData';
import { Building2, MapPin, ShieldCheck, Award, Heart, Compass, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="o-nama" className="py-24 bg-[#0A1628] relative overflow-hidden border-t border-[#1A3152]">
      {/* Ambient Backdrop */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#00C9A7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2038] border border-[#00C9A7]/30 text-[#00C9A7] text-xs font-mono tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('about.badge', 'B&H ASSISTANT D.O.O. ZENICA')}</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F0E8] tracking-tight">
            {t('about.title', 'Spajamo Digitalne Alate, Multimediju i E-Commerce')}
          </h2>

          <p className="text-[#F5F0E8]/70 text-base font-sans leading-relaxed">
            {t('about.subtitle', 'Pouzdan partner za digitalnu transformaciju privrede, e-upravu, medijsku produkciju i softverska rješenja po mjeri.')}
          </p>
        </div>

        {/* Info Grid: Company Wall Official Card + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Official Company Registry Card (Company Wall Data) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0F2038] border-2 border-[#00C9A7]/40 p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Building2 className="w-32 h-32 text-[#00C9A7]" />
              </div>

              {/* Official Company Logo Visual Artwork */}
              <div className="rounded-2xl overflow-hidden border border-[#1A3152] bg-[#0A1628] aspect-square max-w-[220px] mx-auto p-2">
                <img
                  src="/images/bh_assistant_logo.jpg"
                  alt="B&H ASSISTANT d.o.o. Logo Artwork"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e)}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div className="border-b border-[#1A3152] pb-4 space-y-1 text-center">
                <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-wider block font-bold">
                  {t('about.officialBadge', 'REGISTROVANA FIRMA • COMPANY WALL BAZA')}
                </span>
                <h3 className="font-syne font-extrabold text-2xl text-[#F5F0E8]">
                  {COMPANY_INFO.fullLegalName}
                </h3>
                <p className="text-xs font-mono text-[#00C9A7] font-semibold">
                  "{COMPANY_INFO.motto}"
                </p>
              </div>

              <div className="space-y-3 text-xs font-mono text-[#F5F0E8]/80 font-sans">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A1628] border border-[#1A3152]">
                  <span className="text-[#F5F0E8]/60">{t('about.cityLabel', 'Sjedište & Grad:')}</span>
                  <span className="text-[#F5F0E8] font-bold">{COMPANY_INFO.city} 72000, BiH</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A1628] border border-[#1A3152]">
                  <span className="text-[#F5F0E8]/60">{t('about.jibLabel', 'Jedinstveni ID Broj (JIB):')}</span>
                  <span className="text-[#00C9A7] font-bold font-mono">{COMPANY_INFO.jib}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A1628] border border-[#1A3152]">
                  <span className="text-[#F5F0E8]/60">{t('about.mbsLabel', 'Matični Broj Subjekta (MBS):')}</span>
                  <span className="text-[#C9A84C] font-bold font-mono">{COMPANY_INFO.mbs}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A1628] border border-[#1A3152]">
                  <span className="text-[#F5F0E8]/60">{t('about.categoryLabel', 'Kategorija Djelatnosti:')}</span>
                  <span className="text-[#F5F0E8] font-bold">{t('about.categoryValue', 'IT Softver, e-Uprava & Mediji')}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#F5F0E8]/60 font-sans text-center">
                {t('about.verifiedNote', 'Svi podaci su verificirani u skladu sa zvaničnim registrima firmi u Bosni i Hercegovini.')}
              </div>
            </div>
          </div>

          {/* Right Text Story & Core Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#F5F0E8]">
              {t('about.whyTitle', 'Zašto Se Razlikujemo Od Druge IT Scenografije?')}
            </h3>

            <p className="text-sm text-[#F5F0E8]/80 leading-relaxed font-sans">
              {t('about.whyDesc', 'Za razliku od klasičnih autsorsing IT kuća, B&H Assistant d.o.o. gradi vlastiti identitet prožet kulturnim motivima (poput stilizovanih stećaka na našim aplikacijama), kreiranjem korisnih besplatnih alata za bh. građane, te objavom urbanog magazina SCENA+ za afirmaciju mladih talenata Zeničko-dobojskog kantona.')}
            </p>

            {/* YouTube Direct Video Embed: B&H Assistant biznis plan - video */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-[#0F2038] via-[#0A1628] to-[#1A3152] border-2 border-[#C9A84C] shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] font-mono text-[11px] font-bold uppercase tracking-wider">
                    {t('about.videoBadge', 'ZVANIČNI POSLOVNI PLAN • VIDEO PREZENTACIJA')}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00C9A7] bg-[#00C9A7]/10 px-2.5 py-1 rounded-lg border border-[#00C9A7]/30">
                  B&H Assistant d.o.o. Zenica
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-syne font-extrabold text-xl sm:text-2xl text-[#F5F0E8]">
                  {t('about.videoTitle', 'B&H Assistant biznis plan - Video Prezentacija')}
                </h4>
                <p className="text-xs text-[#F5F0E8]/80 font-sans leading-relaxed">
                  {t('about.videoDesc', 'Pogledajte zvanični prezentacijski video sa detaljnim uvidom u naš trogodišnji poslovni plan, finansijske projekcije i razvojne ciljeve za ekosistem BH KONVER, ZENTAXI i SCENA+.')}
                </p>
              </div>

              {/* YouTube Responsive Video Container */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#1A3152] shadow-2xl bg-black aspect-video group">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/e24nm0AjfgE?rel=0&modestbranding=1"
                  title="B&H Assistant biznis plan - video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#F5F0E8]/70">
                <span className="flex items-center gap-1.5 text-[#00C9A7]">
                  <CheckCircle className="w-4 h-4" />
                  {t('about.videoDirectLabel', 'Direktan prijenos sa zvaničnog YouTube kanala')}
                </span>
                <a
                  href="https://www.youtube.com/watch?v=e24nm0AjfgE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0A1628] hover:bg-[#C9A84C] text-[#C9A84C] hover:text-[#0A1628] border border-[#C9A84C]/40 font-syne font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>{t('about.openYoutube', 'Otvorite na YouTube-u')}</span>
                  <Award className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* CALL TO ACTION: English Version Presentation */}
              <div className="mt-6 pt-5 border-t-2 border-dashed border-[#00C9A7]/40 bg-[#0A1628]/90 p-5 rounded-2xl border border-[#00C9A7]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#00C9A7] animate-pulse" />
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00C9A7]/20 border border-[#00C9A7]/40 text-[#00C9A7] font-mono text-[10px] font-bold uppercase">
                      {t('about.englishCta.badge', 'ENGLISH VERSION • INTERNATIONAL PRESENTATION')}
                    </span>
                  </div>
                  <h5 className="font-syne font-bold text-base text-[#F5F0E8]">
                    {t('about.englishCta.title', 'Watch Business Plan Presentation in English')}
                  </h5>
                  <p className="text-xs text-[#F5F0E8]/75 font-sans leading-relaxed">
                    {t('about.englishCta.desc', 'International partners and investors can watch the complete B&H Assistant Business Plan & Pitch Deck video presentation recorded in English.')}
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=ipJr3xfSWeI&t=8s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#00E5BE] hover:from-[#C9A84C] hover:to-[#00C9A7] text-[#0A1628] font-syne font-extrabold text-xs tracking-wide shadow-lg shadow-[#00C9A7]/20 transition-all hover:scale-105 flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center"
                >
                  <span>{t('about.englishCta.btn', 'Watch English Version on YouTube 🇬🇧')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

