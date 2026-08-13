# B&H Assistant d.o.o. - Zvanični Web Portal & Digitalni Ekosistem

![B&H Assistant Status](https://img.shields.io/badge/Status-Aktivan_Projekat-00C9A7?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React_18_%7C_TypeScript_%7C_Tailwind-0A1628?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/Licenca-Sva_prava_zadržana-C9A84C?style=for-the-badge)

Zvanični web portal i digitalna platforma agencije **B&H Assistant d.o.o. Zenica**. Inovativna bosanskohercegovačka platforma i d.o.o. agencija koja spaja digitalne alate, multimediju i e-commerce na jednom mjestu.

---

## 🌟 O Kompaniji B&H Assistant d.o.o.

**B&H Assistant d.o.o.** je privatna firma registrovana u Zenici (72000, Bosna i Hercegovina), specijalizovana za razvoj softverskih rješenja, e-Upravu, digitalne alate i medijska izdanja.

- **Puni Naziv:** B&H ASSISTANT d.o.o. Zenica
- **Sjedište:** Ul. Bulevar Ezhera Eze Arnautovića 8, 72000 Zenica, Bosna i Hercegovina
- **Jedinstveni ID Broj (JIB):** 4219296620005
- **Matični Broj Subjekta (MBS):** 43-01-0177-25
- **Kategorija Djelatnosti:** IT Softver, e-Uprava & Mediji
- **Kontakt Telefon:** +387 62 580 207
- **Email:** info@bh-assistant.ba
- **Zvanična Web Stranica:** [https://bh-assistant.ba](https://bh-assistant.ba)

---

## 🚀 Ključne Funkcionalnosti i Digitalni Alati

1. **BH KONVER - Pametni AI Konverter:**
   - Obrada i pretvaranje valuta (BAM, EUR, USD, CHF...), jedinica mjere i poslovnih dokumenata prilagođenih bh. tržištu.
2. **BH PAPIRFINDER - Birokratski Vodič (e-Uprava):**
   - Interaktivna pretraga besplatnih općinskih obrazaca, taksi i administrativnih procedura u javnoj upravi u BiH.
3. **SCENA+ Magazin:**
   - Urbani magazin za umjetnost, arhitekturu, izvođačke umjetnosti i izdanja iz bosanskohercegovačke kulture i estetike.
4. **Kulturna Baština & Stećci (Digitalni Baza & Bojanka Modul):**
   - Kodirane strukture i vektorski motivi bh. stećaka za dizajn, edukaciju i kulturnu reinterpretaciju.
5. **WP-Admin Integracija & Live Editor:**
   - Ugrađeni modul za pregled, uređivanje i izvoz generisanog HTML/WordPress koda za direktnu sinhronizaciju sa WordPress stranicom na `bh-assistant.ba`.

---

## 🛠️ Tehnološki Stog (Tech Stack)

- **Frontend Framework:** React 18 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Moderni tamni i zlatno-tirkizni vizuelni identitet)
- **Ikone:** Lucide React
- **Animacije:** Motion (Framer Motion)
- **Arhitektura:** Modularni React frontend spreman za brzu sinhronizaciju sa WordPressom, Vercelom, Cloudflare Pages ili Google Cloud Run.

---

## 💻 Lokalno Pokretanje i Razvoj (Setup Guide)

Ako želite pokrenuti projekat lokalno na svom računaru, pratite sljedeće korake:

### Preduvjeti
- Instaliran [Node.js](https://nodejs.org/) (verzija 18 ili novija)
- Instaliran `npm` ili `yarn` / `pnpm`

### Instalacija

1. **Klonirajte spremište sa GitHub-a:**
   ```bash
   git clone https://github.com/TVOJ-KORISNIK/bh-assistant.git
   cd bh-assistant
   ```

2. **Instalirajte zavisnosti (dependencies):**
   ```bash
   npm install
   ```

3. **Pokrenite razvojni server (Development mode):**
   ```bash
   npm run dev
   ```
   Aplikacija će biti dostupna na lokalnoj adresi: `http://localhost:3000`.

4. **Izgradnja produkcijskog koda (Production Build):**
   ```bash
   npm run build
   ```
   Generisani optimizovani fajlovi će se nalaziti u `/dist` direktoriju.

---

## 📁 Struktura Projekta

```
bh-assistant/
├── public/                 # Statički resursi i slike
├── src/
│   ├── assets/             # Slike, ikonice i medijski zapisi
│   ├── components/         # React komponente (Hero, Navbar, Alati, SCENA+, Impressum, LiveWpEditor)
│   ├── data/               # Podaci o kompaniji, vijestima i uslugama (companyData.ts)
│   ├── types.ts            # TypeScript interfejsi i tipovi
│   ├── App.tsx             # Glavna aplikacijska komponenta
│   ├── index.css           # Globalni Tailwind CSS stilovi
│   └── main.tsx            # Entry point aplikacije
├── package.json            # Zavisnosti i npm skripte
├── vite.config.ts          # Konfiguracija Vite bundlera
└── README.md               # Dokumentacija projekta
```

---

## 🌐 Povezivanje na Zvaničnu Domenu (bh-assistant.ba)

Ovaj projekat možete objaviti na zvaničnoj domeni na nekoliko načina:

1. **Statički Hosting (Vercel / Netlify / Cloudflare Pages / GitHub Pages):**
   - Povežite svoj GitHub repository direktno na **Vercel** ili **Netlify**.
   - Podesite Custom Domain na `bh-assistant.ba` uz podešavanje DNS A / CNAME zapisa kod svog registrara domene.

2. **WordPress Integracija:**
   - Koristite **Live WP Editor** modul unutar same aplikacije da kopirate spreman HTML/CSS kod u Gutenberg / Custom HTML u WordPress-u na `bh-assistant.ba`.

---

## 📄 Licenca i Autorska Prava

© 2026 **B&H Assistant d.o.o. Zenica**. Sva prava zadržana.  
Zabranjeno je neovlašteno kopiranje i distribucija koda bez pismene saglasnosti kompanije.
