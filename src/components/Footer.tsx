import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Facebook, Instagram, Shield, FileText, Heart, X, Lock, Key, Edit3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenLiveEditor?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLiveEditor }) => {
  const { t } = useLanguage();
  const [showImpressum, setShowImpressum] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAdminPinModal, setShowAdminPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple admin check (PIN 2026 or admin)
    if (pinInput.trim() === '2026' || pinInput.trim().toLowerCase() === 'admin' || pinInput.trim() === 'bh2026') {
      setShowAdminPinModal(false);
      setPinInput('');
      setPinError(false);
      if (onOpenLiveEditor) {
        onOpenLiveEditor();
      }
    } else {
      setPinError(true);
    }
  };

  return (
    <footer className="bg-[#0A1628] border-t border-[#1A3152] pt-16 pb-12 text-[#F5F0E8]/80 text-xs font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#1A3152]/60">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C9A7] to-[#C9A84C] p-[1.5px]">
                <div className="w-full h-full bg-[#0A1628] rounded-[10px] flex items-center justify-center font-syne font-bold text-base text-[#00C9A7]">
                  BH
                </div>
              </div>
              <span className="font-syne font-extrabold text-lg text-[#F5F0E8]">
                B&H ASSISTANT <span className="text-[#00C9A7]">d.o.o.</span>
              </span>
            </div>
            <p className="text-xs font-mono text-[#00C9A7] font-semibold">
              "{COMPANY_INFO.motto}"
            </p>
            <p className="text-xs text-[#F5F0E8]/70 leading-relaxed font-sans">
              Mlada IT firma iz Zenice. Razvijamo autorske digitalne alate, urbani magazin SCENA+ i inovativne projekte.
            </p>
            <p className="text-[11px] font-mono text-[#C9A84C]">
              JIB: {COMPANY_INFO.jib} | MBS: {COMPANY_INFO.mbs}
            </p>
          </div>

          {/* Col 2: Digital Alati Links */}
          <div className="space-y-3">
            <h4 className="font-syne font-bold text-sm text-[#F5F0E8] uppercase tracking-wider">
              {t('nav.alati', 'BH DIGITALNI ALATI')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://bh-konver.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C9A7] transition-colors">
                  BH Konverter (Konver)
                </a>
              </li>
              <li>
                <a href="https://bhpapirfinder.atoms.world/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C9A7] transition-colors">
                  BH PapirFinder (e-Uprava)
                </a>
              </li>
              <li>
                <a href="https://canva.link/8dwxeack5cwn18l" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C9A7] transition-colors">
                  Ornamenti Bosne (Kodirani Stećci)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Magazin & Projekti */}
          <div className="space-y-3">
            <h4 className="font-syne font-bold text-sm text-[#F5F0E8] uppercase tracking-wider">
              {t('nav.magazin', 'Magazin SCENA+')} & {t('nav.projekti', 'Projekti')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://canva.link/vxekpnx0ow1xvt9" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">
                  SCENA+ Magazin ZDK (e-Verzija)
                </a>
              </li>
              <li>
                <a href="https://canva.link/xyqzerrxvkxbfy2" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">
                  ZENTAXI Platforma
                </a>
              </li>
              <li>
                <a href="https://canva.link/vens28es43srfdw" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">
                  GUMMI Vaš Jaran
                </a>
              </li>
              <li>
                <a href="https://canva.link/tna306bm8p462xm" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C9A7] transition-colors">
                  Edukativna Bojanka Gummi (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Social */}
          <div className="space-y-3">
            <h4 className="font-syne font-bold text-sm text-[#F5F0E8] uppercase tracking-wider">
              Pravno & Mreže
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setShowImpressum(true)}
                className="text-left hover:text-[#00C9A7] transition-colors flex items-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-[#00C9A7]" />
                <span>Impressum & Baza Subjekta</span>
              </button>

              <button
                onClick={() => setShowTerms(true)}
                className="text-left hover:text-[#00C9A7] transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Uslovi Korištenja & Privatnost</span>
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F2038] border border-[#1A3152] hover:border-[#1877F2] text-[#1877F2] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F2038] border border-[#1A3152] hover:border-[#E4405F] text-[#E4405F] transition-colors"
                title="Instagram (@bh.asst)"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Protected Admin Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F0E8]/60">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} B&H ASSISTANT d.o.o. Zenica (https://bh-assistant.ba). Sva prava zadržana.</span>
            
            {/* Discreet Admin Lock Button */}
            {onOpenLiveEditor && (
              <button
                onClick={() => setShowAdminPinModal(true)}
                className="p-1 rounded bg-[#0F2038] hover:bg-[#1A3152] border border-[#1A3152] text-[#F5F0E8]/40 hover:text-[#00C9A7] transition-colors"
                title="Administrator Sadržaja (Zaštićeno)"
              >
                <Lock className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1 text-[#00C9A7]">
            <span>Kreirano sa ponosom u Zenici</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0F2038] border border-[#00C9A7]/40 shadow-2xl p-6 sm:p-8 space-y-5 text-xs text-[#F5F0E8] font-sans">
            <div className="flex items-center justify-between border-b border-[#1A3152] pb-3">
              <h3 className="font-syne font-bold text-lg text-[#F5F0E8]">
                Impressum & Pravni Podaci Subjekta
              </h3>
              <button onClick={() => setShowImpressum(false)} className="p-1 rounded-lg bg-[#0A1628]">
                <X className="w-5 h-5 text-[#F5F0E8]" />
              </button>
            </div>

            <div className="space-y-2 bg-[#0A1628] p-4 rounded-xl border border-[#1A3152] font-mono text-[11px]">
              <p><strong className="text-[#00C9A7]">Puni naziv:</strong> B&H ASSISTANT d.o.o. Zenica</p>
              <p><strong className="text-[#00C9A7]">Adresa:</strong> Zenica 72000, Bosna i Hercegovina</p>
              <p><strong className="text-[#C9A84C]">JIB:</strong> 4219296620005</p>
              <p><strong className="text-[#C9A84C]">MBS:</strong> 43-01-0177-25</p>
              <p><strong className="text-[#00C9A7]">Web domain:</strong> www.bh-assistant.ba</p>
              <p><strong className="text-[#00C9A7]">Kontakt email:</strong> info@bh-assistant.ba</p>
            </div>

            <p className="text-[11px] text-[#F5F0E8]/70 leading-relaxed">
              B&H Assistant d.o.o. je privatno društvo sa ograničenom odgovornošću registrovano za softversko inženjerstvo, obradu podataka, digitalno izdavaštvo i promidžbene djelatnosti u Zeničko-dobojskom kantonu.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShowImpressum(false)}
                className="px-4 py-2 rounded-xl bg-[#00C9A7] text-[#0A1628] font-bold text-xs"
              >
                Zatvori Impressum
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0F2038] border border-[#C9A84C]/40 shadow-2xl p-6 sm:p-8 space-y-5 text-xs text-[#F5F0E8] font-sans">
            <div className="flex items-center justify-between border-b border-[#1A3152] pb-3">
              <h3 className="font-syne font-bold text-lg text-[#F5F0E8]">
                Uslovi Korištenja & Privatnost
              </h3>
              <button onClick={() => setShowTerms(false)} className="p-1 rounded-lg bg-[#0A1628]">
                <X className="w-5 h-5 text-[#F5F0E8]" />
              </button>
            </div>

            <div className="space-y-3 leading-relaxed text-[#F5F0E8]/80 text-[11px]">
              <p>
                1. <strong className="text-[#F5F0E8]">Intelektualna Svojina:</strong> Svi digitalni alati (BH Konver, BH PapirFinder, Ornamenti Bosne), magazin SCENA+ te projekti ZENTAXI i GUMMI autorsko su vlasništvo firme B&H Assistant d.o.o. Zenica i njenih partnera.
              </p>
              <p>
                2. <strong className="text-[#F5F0E8]">Edukativni Materijali:</strong> Edukativna bojanka Gummi je besplatna za privatnu i nematerijalnu školsku upotrebu.
              </p>
              <p>
                3. <strong className="text-[#F5F0E8]">Affiliate Programi:</strong> Partnerstvo sa Alison platformom obezbjeđuje 100% besplatno pohađanje online sertifikovanih kurseva za naše korisnike.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="px-4 py-2 rounded-xl bg-[#C9A84C] text-[#0A1628] font-bold text-xs"
              >
                U redu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin PIN Protected Login Modal */}
      {showAdminPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/95 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#0F2038] border border-[#00C9A7]/50 shadow-2xl p-6 space-y-5 text-xs text-[#F5F0E8] font-sans">
            <div className="flex items-center justify-between border-b border-[#1A3152] pb-3">
              <div className="flex items-center gap-2 text-[#00C9A7]">
                <Lock className="w-5 h-5" />
                <h3 className="font-syne font-bold text-base text-[#F5F0E8]">
                  WP-ADMIN Pristup (Zaštićeno)
                </h3>
              </div>
              <button onClick={() => setShowAdminPinModal(false)} className="p-1 rounded-lg bg-[#0A1628]">
                <X className="w-5 h-5 text-[#F5F0E8]" />
              </button>
            </div>

            <p className="text-[11px] text-[#F5F0E8]/70 leading-relaxed">
              Pristup WP-Admin Uređivaču Sadržaja je sakriven sa početne stranice radi sigurnosti. Unesite administratorski PIN kod (npr. <strong className="text-[#00C9A7]">2026</strong> ili <strong className="text-[#00C9A7]">bh2026</strong>):
            </p>

            <form onSubmit={handleAdminAuth} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-[#C9A84C] uppercase mb-1">
                  Administratorski PIN Kod:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError(false);
                    }}
                    placeholder="Unesite PIN kod..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] focus:border-[#00C9A7] text-[#F5F0E8] text-xs font-mono outline-none"
                    autoFocus
                  />
                  <Key className="w-4 h-4 text-[#F5F0E8]/40 absolute right-3 top-3" />
                </div>
                {pinError && (
                  <span className="text-[10px] text-red-400 font-mono mt-1 block">
                    Pogrešan PIN kod! Pokušajte ponovo.
                  </span>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAdminPinModal(false)}
                  className="px-4 py-2 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] text-xs font-semibold"
                >
                  Otkaži
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00C9A7] text-[#0A1628] font-syne font-bold text-xs shadow-md shadow-[#00C9A7]/20"
                >
                  Otključaj WP Live Editor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};
