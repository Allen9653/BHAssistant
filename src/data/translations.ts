export type Language = 'bs' | 'en' | 'de' | 'tr';

export interface LanguageOption {
  code: Language;
  name: string;
  flagEmoji: string;
  shortName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'bs', name: 'Bosanski / BHS', flagEmoji: '🇧🇦', shortName: 'BS' },
  { code: 'en', name: 'English', flagEmoji: '🇬🇧', shortName: 'EN' },
  { code: 'de', name: 'Deutsch', flagEmoji: '🇩🇪', shortName: 'DE' },
  { code: 'tr', name: 'Türkçe', flagEmoji: '🇹🇷', shortName: 'TR' },
];

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  bs: {
    // Nav
    'nav.pocetna': 'Početna',
    'nav.alati': 'BH Digitalni Alati',
    'nav.scena': 'Magazin SCENA+',
    'nav.novosti': 'Novosti & CMS',
    'nav.projekti': 'Projekti & Bojanka',
    'nav.onama': 'O Nama',
    'nav.shop': 'SHOP (Edukacija)',
    'nav.kontakt': 'Kontakt',
    'nav.freeBojanka': 'Free Bojanka',
    'nav.language': 'Jezik',

    // Hero
    'hero.badge': 'PRVA SOFTVERSKA I IZDAVAČKA KUĆA U ZENICI',
    'hero.title1': 'Građenje Svijetle',
    'hero.title2': 'Digitalne Budućnosti',
    'hero.title3': 'Bosne i Hercegovine',
    'hero.subtitle': 'B&H Assistant d.o.o. Zenica spaja moderne IT tehnologije, besplatne alate za bh. građane, urbani magazin SCENA+ i kulturnu baštinu stećaka u jedinstven ekosistem.',
    'hero.btnTools': 'Istraži Digitalne Alate',
    'hero.btnBojanka': 'Preuzmi Gummi Bojanku',
    'hero.btnBizPlan': 'Pogledaj Biznis Plan (Video)',
    'hero.statTools': 'BH Digitalna Alata',
    'hero.statHub': 'Zenica d.o.o.',
    'hero.statSolutions': '100% Autorska Rješenja',

    // Hero Carousel
    'hero.slide.brand.title': 'B&H ASSISTANT d.o.o.',
    'hero.slide.brand.motto': 'Prva softverska i izdavačka kuća u Zenici',
    'hero.slide.brand.desc': 'Inovativni bh. digitalni ekosistem sa sjedištem u Zenici. Spajamo tehnološki napredak, kulturnu baštinu i društvenu odgovornost.',
    'hero.slide.brand.btn': 'Detalji Projekata →',

    'hero.slide.atoms.title': 'Atoms AI Platforma',
    'hero.slide.atoms.motto': 'Pretvori Ideju u Realnost',
    'hero.slide.atoms.desc': 'Inovativna AI i cloud platforma za brzo kreiranje, testiranje i skaliranje pametnih web aplikacija i samostalnih agenata.',
    'hero.slide.atoms.btn': 'Otvori Atoms.dev →',

    'hero.slide.remote.title': 'Remote Rocketship',
    'hero.slide.remote.motto': 'Najbolja stranica za Remote Poslove u BiH!',
    'hero.slide.remote.desc': 'Pretražite stotine plaćenih poslova od kuće u IT-ju, marketingu, dizajnu i korisničkoj podršci sa fleksibilnim radnim vremenom.',
    'hero.slide.remote.btn': 'Traži Remote Poslove →',

    'hero.slide.konver.title': 'BH KONVER',
    'hero.slide.konver.motto': 'Sistem za konverziju i pravne izjave',
    'hero.slide.konver.desc': 'Brzi i precizni bh. digitalni kalkulator i konverter valuta, jedinica i kreiranje pravnih izjava pod materijalnom odgovornošću.',
    'hero.slide.konver.btn': 'Otvori BH Konver →',

    'hero.slide.scena.title': 'SCENA+ Magazin',
    'hero.slide.scena.motto': 'Spajamo kulture - stvaramo šanse',
    'hero.slide.scena.desc': 'Prvo fizičko i e-izdanje urbanog magazina sa pričama o bh. arheologiji, umjetnosti, BCX kriptu i craft pivarstvu.',
    'hero.slide.scena.btn': 'Prelistaj Magazin →',

    // Digital Tools Section
    'tools.badge': 'BH DIGITALNI ALATI & PLATFORME',
    'tools.title': 'Autorska Softverska Rješenja B&H Assistant-a',
    'tools.subtitle': 'Razvijamo praktične digitalne servise prilagođene zakonodavstvu, ekonomiji i kulturnom identitetu Bosne i Hercegovine.',
    'tools.konver.badge': 'PRVI BH ALAT • FINANSIJE & PRAVO',
    'tools.konver.title': 'BH KONVER - Sistem za Konverzije & Pravne Izjave',
    'tools.konver.desc': 'Nacionalni digitalni alat za konverziju valuta, mjernih jedinica i izračun dažbina uz automatsko generisanje pravnih izjava.',
    'tools.konver.btn': 'Isprobaj BH Konver Interaktivno',
    'tools.konver.videoBtn': 'Pogledaj Demo Video',

    'tools.papir.badge': 'DIGITALNICMS & BAZA DOKUMENATA',
    'tools.papir.title': 'PapirFinder - Digitalni Baza & Arhiva',
    'tools.papir.desc': 'Smart pretraživač službenih novina, obrazaca i općinskih odluka Zeničko-dobojskog kantona i Federacije BiH.',
    'tools.papir.btn': 'Pretraži Bazu PapirFinder',

    'tools.stecak.badge': 'KULTURNA BAŠTINA & ARHITEKTURA',
    'tools.stecak.title': 'Ornamenti Stećaka - Digitalna Vektor Kolekcija',
    'tools.stecak.desc': 'Ekskluzivna vektorska biblioteka i digitalizirani motivi sa srednjovjekovnih bh. stećaka za moderne dizajnere i aplikacije.',
    'tools.stecak.btn': 'Istraži Stećak Ornamentiku',

    // Scena Magazine
    'scena.badge': 'URBANI MAGAZIN ZDK',
    'scena.title': 'Magazin SCENA+ • Spajamo Kulture & Stvaramo Šanse',
    'scena.subtitle': 'Promovišemo mlade talente, kulturno naslijeđe Zenice i inovativne bh. biznis priče kroz fizička i digitalna izdanja.',
    'scena.readNow': 'Čitaj E-Izdanje Besplatno',
    'scena.downloadPdf': 'Preuzmi PDF Broj (12 MB)',
    'scena.featuresTitle': 'Sadržaj Zvaničnog Prvog Broja SCENA+:',

    // News & CMS Section
    'news.badge': 'ZVANIČNA SAOPŠTENJA & VIJESTI',
    'news.title': 'Aktuelnosti & CMS Informator d.o.o.',
    'news.subtitle': 'Pratite novosti iz rada B&H Assistant d.o.o. Zenica, objave za javnost i najave novih autorskih softvera.',
    'news.searchPlaceholder': 'Pretraži vijesti i saopštenja...',
    'news.all': 'Sve Vijesti',
    'news.press': 'Saopštenja',
    'news.it': 'IT Alati',
    'news.culture': 'Kultura',
    'news.readArticle': 'Pročitaj Cijelu Vijest',
    'news.openCms': 'Upravljanje Sadržajem (CMS Live Editor)',

    // Projects Section
    'projects.badge': 'INVESTICIJE & BOJANKA ZA DJECU',
    'projects.title': 'Razvojni Projekti & Društvena Odgovornost',
    'projects.subtitle': 'Pored komercijalnih softvera, gradimo projekte od velikog značaja za lokalnu zajednicu i mlade generacije.',
    'projects.zentaxi.badge': 'STARTUP U RAZVOJU • ZENICA',
    'projects.zentaxi.title': 'ZENTAXI - Pametna Taksi Mreža Zenica',
    'projects.zentaxi.desc': 'Aplikacija za brzu narudžbu, praćenje vozila u realnom vremenu i transparentan obračun vožnji u Zenici.',
    'projects.gummi.badge': 'BESPLATNA EDUKACIJA ZA DJECU',
    'projects.gummi.title': 'GUMMI - Bojanka i Slikovnica za Najmlađe',
    'projects.gummi.desc': 'Besplatna edukativna bojanka sa likovima Gummi medvjedića, osmišljena za podsticanje kreativnosti i motorike djece.',
    'projects.gummi.btn': 'Preuzmi i Odštampaj Gummi Bojanku (PDF)',

    // About Section
    'about.badge': 'O NAMA • B&H ASSISTANT d.o.o.',
    'about.title': 'Inovativna Softverska & Izdavačka Kuća u Zenici',
    'about.subtitle': 'Registrovano privredno društvo sa jasnom vizijom razvoja domaćih digitalnih alata i podrške mladim talentima.',
    'about.whyTitle': 'Zašto Se Razlikujemo Od Druge IT Scenografije?',
    'about.whyDesc': 'Za razliku od klasičnih autsorsing IT kuća, B&H Assistant d.o.o. gradi vlastiti identitet prožet kulturnim motivima (poput stilizovanih stećaka na našim aplikacijama), kreiranjem korisnih besplatnih alata za bh. građane, te objavom urbanog magazina SCENA+ za afirmaciju mladih talenata Zeničko-dobojskog kantona.',
    'about.officialBadge': 'REGISTROVANA FIRMA • COMPANY WALL BAZA',
    'about.cityLabel': 'Sjedište & Grad:',
    'about.jibLabel': 'Jedinstveni ID Broj (JIB):',
    'about.mbsLabel': 'Matični Broj Subjekta (MBS):',
    'about.categoryLabel': 'Kategorija Djelatnosti:',
    'about.categoryValue': 'IT Softver, e-Uprava & Mediji',
    'about.verifiedNote': 'Svi podaci su verificirani u skladu sa zvaničnim registrima firmi u Bosni i Hercegovini.',
    'about.videoBadge': 'ZVANIČNI POSLOVNI PLAN • VIDEO PREZENTACIJA',
    'about.videoTitle': 'B&H Assistant biznis plan - Video Prezentacija',
    'about.videoDesc': 'Pogledajte zvanični prezentacijski video sa detaljnim uvidom u naš trogodišnji poslovni plan, finansijske projekcije i razvojne ciljeve za ekosistem BH KONVER, ZENTAXI i SCENA+.',
    'about.videoDirectLabel': 'Direktan prijenos sa zvaničnog YouTube kanala',
    'about.openYoutube': 'Otvorite na YouTube-u',
    'about.englishCta.badge': 'ENGLISH VERSION • INTERNATIONAL PRESENTATION',
    'about.englishCta.title': 'Watch Business Plan Presentation in English',
    'about.englishCta.desc': 'International partners and investors can watch the complete B&H Assistant Business Plan & Pitch Deck video presentation recorded in English.',
    'about.englishCta.btn': 'Watch English Version on YouTube 🇬🇧',

    // Banner Carousel Translations
    'carousel.badge': 'PROMOTIVNI BANERI & NAJAVE',
    'carousel.title': 'B&H Assistant Promotivni Centar',
    'carousel.subtitle': 'Prelistajte naše ključne inicijative, digitalne alate, partnerstva i promotivne ponude.',
    'carousel.pauseOnHover': 'Pređite mišem za pauziranje prelistavanja',
    'carousel.slideNum': 'Baner',
    'carousel.of': 'od',
    
    // Banner 1 - Existing Tool Request
    'banner.tool.title': 'Želite prilagođeni digitalni alat ili e-upravu za Vašu firmu ili općinu?',
    'banner.tool.desc': 'Tim B&H Assistant d.o.o. Zenica nudi izradu specifičnih kalkulatora, baze obrazaca, API integracija i web platformi po Vašim zahtjevima.',
    'banner.tool.badge': 'USLUGA PO MJERI',
    'banner.tool.btn': 'Kontaktirajte Nas Odmah',

    // Banner 2 - Scena Magazine
    'banner.scena.title': 'Magazin SCENA+ • Oglašavajte Vaš Brend u Zeničko-dobojskom Kantonu',
    'banner.scena.desc': 'Promovišite vaše poslovanje kroz prvo fizičko i digitalno izdanje urbanog magazina za kulturu, umjetnost, kripto i privredu.',
    'banner.scena.badge': 'MARKETING & MEDIJI',
    'banner.scena.btn': 'Prelistaj E-Izdanje SCENA+',

    // Banner 3 - Zentaxi
    'banner.zentaxi.title': 'ZENTAXI - Pametna Taksi Mreža • Pridružite Se Mreži Vozača u Zenici!',
    'banner.zentaxi.desc': 'Pozivamo samostalne taksiste i prevoznike da se priključe novoj digitalnoj dispečerskoj platformi B&H Assistant-a.',
    'banner.zentaxi.badge': 'STARTUP MREŽA',
    'banner.zentaxi.btn': 'Saznajte Više o ZENTAXI-ju',

    // Banner 4 - Gummi Coloring Book
    'banner.gummi.title': 'GUMMI Bojanka • Besplatan Edukativni PDF Poklon za Djecu i Škole',
    'banner.gummi.desc': 'Preuzmite i odštampajte autorsku bojanku za predškolce i osnovce sa vježbama grafomotorike i učenjem slova.',
    'banner.gummi.badge': 'BESPLATNA EDUKACIJA',
    'banner.gummi.btn': 'Preuzmi Bojanku PDF',

    // Banner 5 - Stecak Collection
    'banner.stecak.title': 'Ornamenti Stećaka • Kodirani Vektorski Motivi za Dizajnere',
    'banner.stecak.desc': 'Digitalizirana kolekcija srednjovjekovnih bh. ornamenata u SVG, PNG, HTML i CSS formatima spremna za korištenje.',
    'banner.stecak.badge': 'BAŠTINA & DIZAJN',
    'banner.stecak.btn': 'Istraži Vektorsku Kolekciju',

    // Banner 6 - Remote Jobs & Alison
    'banner.remote.title': 'Pronađite Remote Poslove u BiH & Besplatne Certificirane Kurseve',
    'banner.remote.desc': 'Povežite se sa inostranim poslodavcima ili upišite besplatne online edukacije u saradnji sa Alison akademijom.',
    'banner.remote.badge': 'EDUKACIJA & KARIJERA',
    'banner.remote.btn': 'Otvori SHOP & Partnerstva',

    // Banner 7 - Future Upload Slot Placeholder
    'banner.future.title': 'Vaš Oglas ili Partnerski Banner Ovdje • Postanite Sponzor B&H Assistant-a',
    'banner.future.desc': 'Rezervišite promotivni prostor u našem karuselu i predstavite Vaše usluge hiljadama posjetilaca naših platformi.',
    'banner.future.badge': 'REZERVIŠITE OGLAS',
    'banner.future.btn': 'Zakupite Oglasni Prostor',

    // Banner 8 - CloudTalk AI Partner Banner
    'banner.cloudtalk.title': 'CloudTalk AI – Vaš pametni asistent za pozive!',
    'banner.cloudtalk.desc': 'Ubrzajte komunikaciju, automatizujte pozive i zatvarajte poslove brže. CloudTalk nudi AI asistenta za call centre, online prodaju i korisničku podršku. Besplatno preuzmite i instalirajte putem našeg linka.',
    'banner.cloudtalk.badge': 'AI TELEFONSKI ASISTENT',
    'banner.cloudtalk.btn': 'Preuzmite CloudTalk Besplatno',

    // Shop & Affiliate Section
    'shop.badge': 'FLUID IT SHOP & AFFILIATE HUB',
    'shop.title': 'Edukativna Trgovina & Affiliated Partneri i Remote Poslovi',
    'shop.subtitle': 'Predstavljamo našu e-trgovinsku platformu i sponzorisane partnere. Povezujemo vas sa najboljim stranicama za remote poslove, AI platformama i certificiranim kursevima!',
    'shop.remote.badge': 'REMOTE POSLOVI U BiH',
    'shop.remote.title': 'Najbolja stranica za Remote Poslove u BiH!',
    'shop.remote.desc': 'Pretražite stotine provjerenih remote pozicija u IT-ju, marketingu, dizajnu i podršci. Prilagođeno za stručnjake i kandidate iz Bosne i Hercegovine i dijaspore sa mogućnošću rada za kompanije iz EU i SAD.',
    'shop.remote.btn': 'Otvori Remote Rocketship Poslove',

    'shop.atoms.badge': 'AI & TECH PLATFORMA',
    'shop.atoms.title': 'Atoms - Pretvori Ideju u Realnost',
    'shop.atoms.desc': 'Izgradite, testirajte i skalirajte napredne AI agente i moderne veb aplikacije u rekordnom roku. Prevorite svaku ideju u stvarni, operativni softverski proizvod uz podršku B&H Assistant partnerstva.',
    'shop.atoms.btn': 'Isprobaj Atoms Platformu Odmah',

    'shop.alison.badge': 'BESPLATNI CERTIFIKATI',
    'shop.alison.title': 'Alison - Besplatni Certificirani Kursevi Iz Svjetskih Oblasti',
    'shop.alison.desc': 'Ukoliko tražite korisne, certificirane edukativne kurseve iz raznih svjetskih oblasti — imate priliku da besplatno upišete tečajeve u saradnji sa Alison platformom.',
    'shop.alison.btn': 'Upiši Besplatne Kurseve na Alison',

    'shop.allCat': 'Sve',
    'shop.catRemote': 'Remote Poslovi',
    'shop.catEdu': 'Online Edukacija',
    'shop.catIt': 'IT & Veb Dizajn',
    'shop.catLang': 'Jezici & Poslovanje',
    'shop.accessPartner': 'Pristupi Partnerskom Linku',

    // Contact & Impressum
    'contact.badge': 'KONTAKT & IMPRESSUM',
    'contact.title': 'Kontaktirajte B&H Assistant d.o.o.',
    'contact.subtitle': 'Otvoreni smo za saradnju sa kompanijama, investitorima, medijima i građanima. Pošaljite nam upit ili nas posjetite u Zenici.',
    'contact.nameLabel': 'Vaše Ime i Prezime',
    'contact.emailLabel': 'Vaša Email Adresa',
    'contact.subjectLabel': 'Predmet Poruke',
    'contact.messageLabel': 'Vaša Poruka',
    'contact.sendBtn': 'Pošaljite Poruku d.o.o.',
    'contact.successMsg': 'Hvala Vam! Poruka je uspješno poslana timu B&H Assistant d.o.o. Zenica.',

    // Footer
    'footer.rights': 'Sva prava zadržana.',
    'footer.motto': 'Prva softverska i izdavačka kuća u Zenici • Bosna i Hercegovina.',
    'footer.cmsAdmin': 'CMS Administracija',
  },

  en: {
    // Nav
    'nav.pocetna': 'Home',
    'nav.alati': 'BH Digital Tools',
    'nav.scena': 'SCENA+ Magazine',
    'nav.novosti': 'News & CMS',
    'nav.projekti': 'Projects & Coloring Book',
    'nav.onama': 'About Us',
    'nav.shop': 'SHOP (Education)',
    'nav.kontakt': 'Contact',
    'nav.freeBojanka': 'Free Coloring Book',
    'nav.language': 'Language',

    // Hero
    'hero.badge': 'FIRST SOFTWARE & PUBLISHING HOUSE IN ZENICA',
    'hero.title1': 'Building a Bright',
    'hero.title2': 'Digital Future',
    'hero.title3': 'of Bosnia and Herzegovina',
    'hero.subtitle': 'B&H Assistant d.o.o. Zenica combines modern IT technologies, free tools for citizens, the urban SCENA+ magazine, and stećak cultural heritage into a unified ecosystem.',
    'hero.btnTools': 'Explore Digital Tools',
    'hero.btnBojanka': 'Download Gummi Book',
    'hero.btnBizPlan': 'Watch Business Plan (Video)',
    'hero.statTools': 'BH Digital Tools',
    'hero.statHub': 'Zenica LLC',
    'hero.statSolutions': '100% Proprietary Tech',

    // Hero Carousel
    'hero.slide.brand.title': 'B&H ASSISTANT Ltd.',
    'hero.slide.brand.motto': 'First software & publishing company in Zenica',
    'hero.slide.brand.desc': 'Innovative BH digital ecosystem headquartered in Zenica. Combining tech progress, cultural heritage, and corporate social responsibility.',
    'hero.slide.brand.btn': 'Project Details →',

    'hero.slide.atoms.title': 'Atoms AI Platform',
    'hero.slide.atoms.motto': 'Turn Ideas into Reality',
    'hero.slide.atoms.desc': 'Innovative AI & cloud platform to quickly build, test, and scale smart web apps and autonomous AI agents.',
    'hero.slide.atoms.btn': 'Open Atoms.dev →',

    'hero.slide.remote.title': 'Remote Rocketship',
    'hero.slide.remote.motto': 'Best portal for Remote Jobs in B&H!',
    'hero.slide.remote.desc': 'Browse hundreds of paid work-from-home positions in IT, marketing, design, and support with flexible working hours.',
    'hero.slide.remote.btn': 'Search Remote Jobs →',

    'hero.slide.konver.title': 'BH KONVER',
    'hero.slide.konver.motto': 'Conversion system & legal declarations',
    'hero.slide.konver.desc': 'Fast & precise Bosnian digital calculator, currency/unit converter, and legal declaration generator under legal liability.',
    'hero.slide.konver.btn': 'Open BH Konver →',

    'hero.slide.scena.title': 'SCENA+ Magazine',
    'hero.slide.scena.motto': 'Connecting cultures - creating opportunities',
    'hero.slide.scena.desc': 'First print and e-edition of the urban magazine featuring stories on B&H archaeology, art, BCX crypto, and craft brewing.',
    'hero.slide.scena.btn': 'Read Magazine →',

    // Digital Tools Section
    'tools.badge': 'BH DIGITAL TOOLS & PLATFORMS',
    'tools.title': 'Proprietary Software Solutions by B&H Assistant',
    'tools.subtitle': 'Developing practical digital services tailored to the legislation, economy, and cultural identity of Bosnia and Herzegovina.',
    'tools.konver.badge': '1ST BH TOOL • FINANCE & LAW',
    'tools.konver.title': 'BH KONVER - Conversions & Legal Declarations System',
    'tools.konver.desc': 'National digital tool for converting currencies, units, calculating duties, and automatically generating formal legal declarations.',
    'tools.konver.btn': 'Try BH Konver Interactively',
    'tools.konver.videoBtn': 'Watch Demo Video',

    'tools.papir.badge': 'DIGITAL CMS & DOCUMENT DATABASE',
    'tools.papir.title': 'PapirFinder - Digital Document Archive',
    'tools.papir.desc': 'Smart search engine for official gazettes, legal forms, and municipal decisions of Zenica-Doboj Canton and FBiH.',
    'tools.papir.btn': 'Search PapirFinder Database',

    'tools.stecak.badge': 'CULTURAL HERITAGE & ARCHITECTURE',
    'tools.stecak.title': 'Stećak Ornaments - Digital Vector Collection',
    'tools.stecak.desc': 'Exclusive vector library and digitized medieval stećak motifs for modern graphic designers and web applications.',
    'tools.stecak.btn': 'Explore Stećak Motifs',

    // Scena Magazine
    'scena.badge': 'URBAN MAGAZINE ZDK',
    'scena.title': 'SCENA+ Magazine • Connecting Cultures & Opportunities',
    'scena.subtitle': 'Promoting young talents, Zenica cultural heritage, and innovative B&H business stories in print and digital format.',
    'scena.readNow': 'Read E-Edition Free',
    'scena.downloadPdf': 'Download PDF Issue (12 MB)',
    'scena.featuresTitle': 'Official Contents of Issue #1 SCENA+:',

    // News & CMS Section
    'news.badge': 'OFFICIAL PRESS & NEWS',
    'news.title': 'Latest News & CMS Bulletin Ltd.',
    'news.subtitle': 'Stay updated with news from B&H Assistant d.o.o. Zenica, public announcements, and software release notes.',
    'news.searchPlaceholder': 'Search news and announcements...',
    'news.all': 'All News',
    'news.press': 'Press Releases',
    'news.it': 'IT Tools',
    'news.culture': 'Culture',
    'news.readArticle': 'Read Full Article',
    'news.openCms': 'Manage Content (CMS Live Editor)',

    // Projects Section
    'projects.badge': 'INVESTMENTS & KIDS COLORING BOOK',
    'projects.title': 'Development Projects & Social Responsibility',
    'projects.subtitle': 'Alongside commercial software, we build impactful initiatives for our local community and younger generations.',
    'projects.zentaxi.badge': 'STARTUP IN DEVELOPMENT • ZENICA',
    'projects.zentaxi.title': 'ZENTAXI - Smart Taxi Network Zenica',
    'projects.zentaxi.desc': 'App for fast ride requests, real-time vehicle tracking, and transparent fare calculations in Zenica.',
    'projects.gummi.badge': 'FREE CHILDHOOD EDUCATION',
    'projects.gummi.title': 'GUMMI - Kids Coloring & Story Book',
    'projects.gummi.desc': 'Free educational coloring book featuring Gummi Bear characters, designed to spark creativity and fine motor skills.',
    'projects.gummi.btn': 'Download & Print Gummi Book (PDF)',

    // About Section
    'about.badge': 'ABOUT US • B&H ASSISTANT Ltd.',
    'about.title': 'Innovative Software & Publishing Company in Zenica',
    'about.subtitle': 'Registered enterprise with a clear vision for building domestic digital tools and empowering local youth.',
    'about.whyTitle': 'Why Are We Different From Other IT Studios?',
    'about.whyDesc': 'Unlike standard outsourcing software agencies, B&H Assistant d.o.o. builds a distinct identity infused with cultural motifs (such as stylized medieval stećak ornaments), creates free utility tools for citizens, and publishes SCENA+ urban magazine for empowering young talents in Zenica-Doboj Canton.',
    'about.officialBadge': 'REGISTERED COMPANY • OFFICIAL REGISTRY',
    'about.cityLabel': 'Headquarters & City:',
    'about.jibLabel': 'Tax ID Number (JIB):',
    'about.mbsLabel': 'Court Registry Number (MBS):',
    'about.categoryLabel': 'Business Category:',
    'about.categoryValue': 'IT Software, e-Government & Media',
    'about.verifiedNote': 'All corporate records are verified in compliance with official business registries in Bosnia and Herzegovina.',
    'about.videoBadge': 'OFFICIAL BUSINESS PLAN • VIDEO PRESENTATION',
    'about.videoTitle': 'B&H Assistant Business Plan - Video Presentation',
    'about.videoDesc': 'Watch the official presentation video detailing our 3-year business roadmap, financial forecasts, and growth targets for BH KONVER, ZENTAXI, and SCENA+.',
    'about.videoDirectLabel': 'Direct stream from our official YouTube channel',
    'about.openYoutube': 'Open on YouTube',
    'about.englishCta.badge': 'ENGLISH VERSION • INTERNATIONAL PRESENTATION',
    'about.englishCta.title': 'Watch Business Plan Presentation in English',
    'about.englishCta.desc': 'International partners and investors can watch the complete B&H Assistant Business Plan & Pitch Deck video presentation recorded in English.',
    'about.englishCta.btn': 'Watch English Version on YouTube 🇬🇧',

    // Banner Carousel Translations
    'carousel.badge': 'PROMOTIONAL BANNERS & ANNOUNCEMENTS',
    'carousel.title': 'B&H Assistant Promotional Hub',
    'carousel.subtitle': 'Browse our flagship initiatives, digital tools, partnerships, and promotional offers.',
    'carousel.pauseOnHover': 'Hover to pause automatic scrolling',
    'carousel.slideNum': 'Banner',
    'carousel.of': 'of',

    // Banner 1 - Existing Tool Request
    'banner.tool.title': 'Do you need a customized digital tool or e-government solution for your business or municipality?',
    'banner.tool.desc': 'The B&H Assistant Ltd. Zenica team develops tailored calculators, document databases, API integrations, and web platforms to your exact specifications.',
    'banner.tool.badge': 'CUSTOM SOFTWARE',
    'banner.tool.btn': 'Contact Us Now',

    // Banner 2 - Scena Magazine
    'banner.scena.title': 'SCENA+ Magazine • Advertise Your Brand Across Zenica-Doboj Canton',
    'banner.scena.desc': 'Promote your business through the first print and digital edition of our urban magazine covering culture, art, crypto, and local enterprise.',
    'banner.scena.badge': 'MARKETING & MEDIA',
    'banner.scena.btn': 'Read E-Edition SCENA+',

    // Banner 3 - Zentaxi
    'banner.zentaxi.title': 'ZENTAXI - Smart Taxi Network • Join Our Drivers Network in Zenica!',
    'banner.zentaxi.desc': 'We invite independent taxi drivers and transport operators to join B&H Assistant’s new digital dispatch platform.',
    'banner.zentaxi.badge': 'STARTUP NETWORK',
    'banner.zentaxi.btn': 'Learn More About ZENTAXI',

    // Banner 4 - Gummi Coloring Book
    'banner.gummi.title': 'GUMMI Coloring Book • Free Educational PDF Gift for Children & Schools',
    'banner.gummi.desc': 'Download and print our proprietary coloring book for preschoolers and elementary students with handwriting and motor skills exercises.',
    'banner.gummi.badge': 'FREE EDUCATION',
    'banner.gummi.btn': 'Download Coloring PDF',

    // Banner 5 - Stecak Collection
    'banner.stecak.title': 'Stećak Ornaments • Encoded Vector Motifs for Graphic Designers',
    'banner.stecak.desc': 'A digitized vector collection of medieval Bosnian stećak ornaments in SVG, PNG, HTML, and CSS formats ready for web and print applications.',
    'banner.stecak.badge': 'HERITAGE & DESIGN',
    'banner.stecak.btn': 'Explore Vector Collection',

    // Banner 6 - Remote Jobs & Alison
    'banner.remote.title': 'Discover Remote Jobs in B&H & Free Certified Global Courses',
    'banner.remote.desc': 'Connect with top global employers or enroll in 100% free online certified courses in partnership with Alison Academy.',
    'banner.remote.badge': 'CAREER & EDUCATION',
    'banner.remote.btn': 'Open SHOP & Partnerships',

    // Banner 7 - Future Upload Slot Placeholder
    'banner.future.title': 'Your Ad or Partner Banner Here • Become a B&H Assistant Sponsor',
    'banner.future.desc': 'Reserve promotional space in our carousel and showcase your services to thousands of visitors across our platforms.',
    'banner.future.badge': 'RESERVE AD SPACE',
    'banner.future.btn': 'Sponsor a Banner Slot',

    // Banner 8 - CloudTalk AI Partner Banner
    'banner.cloudtalk.title': 'CloudTalk AI – Your Smart Call Assistant!',
    'banner.cloudtalk.desc': 'Speed up communication, automate calls, and close deals faster. CloudTalk provides an AI assistant for call centers, online sales, and support. Download and install for free via our link.',
    'banner.cloudtalk.badge': 'AI CALL ASSISTANT',
    'banner.cloudtalk.btn': 'Download CloudTalk Free',

    // Shop & Affiliate Section
    'shop.badge': 'FLUID IT SHOP & AFFILIATE HUB',
    'shop.title': 'Education Store, Affiliated Partners & Remote Jobs',
    'shop.subtitle': 'Discover our e-commerce platform and sponsored partners. Connecting you with top remote job portals, AI platforms, and certified courses!',
    'shop.remote.badge': 'REMOTE JOBS IN B&H',
    'shop.remote.title': 'Best Platform for Remote Jobs in B&H!',
    'shop.remote.desc': 'Explore hundreds of verified remote positions in IT, marketing, design, and customer support with flexible hours for B&H talent.',
    'shop.remote.btn': 'Open Remote Rocketship Jobs',

    'shop.atoms.badge': 'AI & TECH PLATFORM',
    'shop.atoms.title': 'Atoms - Turn Ideas into Reality',
    'shop.atoms.desc': 'Build, test, and scale advanced AI agents and web apps in record time with B&H Assistant partnership benefits.',
    'shop.atoms.btn': 'Try Atoms Platform Now',

    'shop.alison.badge': 'FREE CERTIFICATES',
    'shop.alison.title': 'Alison - Free Certified Global Courses',
    'shop.alison.desc': 'Looking for certified courses across diverse disciplines? Enroll in 100% free online courses partnered with Alison.',
    'shop.alison.btn': 'Enroll Free Courses on Alison',

    'shop.allCat': 'All',
    'shop.catRemote': 'Remote Jobs',
    'shop.catEdu': 'Online Education',
    'shop.catIt': 'IT & Web Design',
    'shop.catLang': 'Languages & Business',
    'shop.accessPartner': 'Access Affiliate Link',

    // Contact & Impressum
    'contact.badge': 'CONTACT & IMPRESSUM',
    'contact.title': 'Get in Touch with B&H Assistant Ltd.',
    'contact.subtitle': 'We welcome partnerships with companies, investors, media, and citizens. Send us an inquiry or visit us in Zenica.',
    'contact.nameLabel': 'Your Full Name',
    'contact.emailLabel': 'Your Email Address',
    'contact.subjectLabel': 'Subject',
    'contact.messageLabel': 'Your Message',
    'contact.sendBtn': 'Send Message to Ltd.',
    'contact.successMsg': 'Thank you! Your message was successfully sent to the B&H Assistant team.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.motto': 'First software and publishing house in Zenica • Bosnia and Herzegovina.',
    'footer.cmsAdmin': 'CMS Administration',
  },

  de: {
    // Nav
    'nav.pocetna': 'Startseite',
    'nav.alati': 'BH Digitale Tools',
    'nav.scena': 'SCENA+ Magazin',
    'nav.novosti': 'News & CMS',
    'nav.projekti': 'Projekte & Malbuch',
    'nav.onama': 'Über Uns',
    'nav.shop': 'SHOP (Bildung)',
    'nav.kontakt': 'Kontakt',
    'nav.freeBojanka': 'Gratis Malbuch',
    'nav.language': 'Sprache',

    // Hero
    'hero.badge': 'ERSTES SOFTWARE- & VERLAGSHAUS IN ZENICA',
    'hero.title1': 'Aufbau Einer Digitalen',
    'hero.title2': 'Zukunft Für Bosnien',
    'hero.title3': 'Und Herzegowina',
    'hero.subtitle': 'B&H Assistant d.o.o. Zenica verbindet moderne IT-Technologien, kostenlose Bürger-Tools, das urbane Magazin SCENA+ und Stećak-Kulturerbe in einem Ökosystem.',
    'hero.btnTools': 'Digitale Tools Entdecken',
    'hero.btnBojanka': 'Gummi Malbuch Laden',
    'hero.btnBizPlan': 'Geschäftsplan Ansehen (Video)',
    'hero.statTools': 'BH Digitale Tools',
    'hero.statHub': 'Zenica GmbH',
    'hero.statSolutions': '100% Eigene Software',

    // Hero Carousel
    'hero.slide.brand.title': 'B&H ASSISTANT GmbH',
    'hero.slide.brand.motto': 'Erstes Software- & Verlagshaus in Zenica',
    'hero.slide.brand.desc': 'Innovatives digitales Ökosystem mit Hauptsitz in Zenica. Wir verbinden technologischen Fortschritt, Kulturerbe und soziale Verantwortung.',
    'hero.slide.brand.btn': 'Projekt-Details →',

    'hero.slide.atoms.title': 'Atoms AI Plattform',
    'hero.slide.atoms.motto': 'Ideen in Realität Verwandeln',
    'hero.slide.atoms.desc': 'Innovative KI- & Cloud-Plattform zum schnellen Erstellen, Testen und Skalieren smarter Web-Apps und autonomer KI-Agenten.',
    'hero.slide.atoms.btn': 'Atoms.dev Öffnen →',

    'hero.slide.remote.title': 'Remote Rocketship',
    'hero.slide.remote.motto': 'Das beste Portal für Remote-Jobs in BiH!',
    'hero.slide.remote.desc': 'Durchsuchen Sie hunderte bezahlte Homeoffice-Stellen in IT, Marketing, Design und Support mit flexiblen Arbeitszeiten.',
    'hero.slide.remote.btn': 'Remote-Jobs Suchen →',

    'hero.slide.konver.title': 'BH KONVER',
    'hero.slide.konver.motto': 'Konvertierungssystem & Rechterklärungen',
    'hero.slide.konver.desc': 'Möglicher bosnischer digitaler Rechner, Währungs-/Einheitenumrechner und Generator für rechtliche Erklärungen.',
    'hero.slide.konver.btn': 'BH Konver Öffnen →',

    'hero.slide.scena.title': 'SCENA+ Magazin',
    'hero.slide.scena.motto': 'Kulturen verbinden - Chancen schaffen',
    'hero.slide.scena.desc': 'Erste Print- und E-Ausgabe des urbanen Magazins mit Berichten über Archäologie, Kunst, BCX-Krypto und Craft-Bier.',
    'hero.slide.scena.btn': 'Magazin Lesen →',

    // Digital Tools Section
    'tools.badge': 'BH DIGITALE TOOLS & PLATTFORMEN',
    'tools.title': 'Eigene Softwarelösungen von B&H Assistant',
    'tools.subtitle': 'Praktische digitale Dienste, zugeschnitten auf Gesetzgebung, Wirtschaft und Identität von Bosnien und Herzegowina.',
    'tools.konver.badge': '1. BH TOOL • FINANZEN & RECHT',
    'tools.konver.title': 'BH KONVER - Umrechnung & Rechtliche Erklärungen',
    'tools.konver.desc': 'Nationales digitales Tool für Währungsumrechnung, Einheiten, Abgabenberechnung und automatisches Generieren von Formularerklärungen.',
    'tools.konver.btn': 'BH Konver Interaktiv Testen',
    'tools.konver.videoBtn': 'Demo-Video Ansehen',

    'tools.papir.badge': 'DIGITALES CMS & DOKUMENTENBANK',
    'tools.papir.title': 'PapirFinder - Digitales Dokumentenarchiv',
    'tools.papir.desc': 'Smarte Suchmaschine für Amtsblätter, Formulare und Gemeindebeschlüsse des Kantons Zenica-Doboj und FBiH.',
    'tools.papir.btn': 'PapirFinder Datenbank Durchsuchen',

    'tools.stecak.badge': 'KULTURERBE & ARCHITEKTUR',
    'tools.stecak.title': 'Stećak-Ornamete - Digitale Vektor-Kollektion',
    'tools.stecak.desc': 'Exklusive Vektorbibliothek und digitalisierte mittelalterliche Motive für moderne Grafikdesigner und Anwendungen.',
    'tools.stecak.btn': 'Stećak-Motive Erkunden',

    // Scena Magazine
    'scena.badge': 'URBANES MAGAZIN ZDK',
    'scena.title': 'SCENA+ Magazin • Kulturen Verbinden & Chancen Schaffen',
    'scena.subtitle': 'Förderung junger Talente, Zenica-Kulturerbe und innovativer BH-Wirtschaftsgeschichten in Print & Digital.',
    'scena.readNow': 'E-Ausgabe Gratis Lesen',
    'scena.downloadPdf': 'PDF-Ausgabe Herunterladen (12 MB)',
    'scena.featuresTitle': 'Offizielle Inhalte der Ausgabe #1 SCENA+:',

    // News & CMS Section
    'news.badge': 'OFFIZIELLE PRESSE & NEWS',
    'news.title': 'Aktuelles & CMS Informator GmbH',
    'news.subtitle': 'Erfahren Sie Neuigkeiten von B&H Assistant d.o.o. Zenica, öffentliche Bekanntmachungen und Software-Releases.',
    'news.searchPlaceholder': 'Suchen nach Nachrichten und Mitteilungen...',
    'news.all': 'Alle News',
    'news.press': 'Pressemitteilungen',
    'news.it': 'IT-Tools',
    'news.culture': 'Kultur',
    'news.readArticle': 'Ganzen Artikel Lesen',
    'news.openCms': 'Inhalte Verwalten (CMS Live Editor)',

    // Projects Section
    'projects.badge': 'INVESTITIONEN & KINDER-MALBUCH',
    'projects.title': 'Entwicklungsprojekte & Soziale Verantwortung',
    'projects.subtitle': 'Neben kommerzieller Software entwickeln wir Projekte von großer Bedeutung für unsere Gemeinschaft und Jugend.',
    'projects.zentaxi.badge': 'STARTUP IN ENTWICKLUNG • ZENICA',
    'projects.zentaxi.title': 'ZENTAXI - Intelligentes Taxi-Netzwerk Zenica',
    'projects.zentaxi.desc': 'App für schnelle Taxibestellungen, Echtzeit-Fahrzeugverfolgung und transparente Fahrpreisberechnung in Zenica.',
    'projects.gummi.badge': 'KOSTENLOSE BILDUNG FÜR KINDER',
    'projects.gummi.title': 'GUMMI - Kinder-Malbuch & Bilderbuch',
    'projects.gummi.desc': 'Kostenloses Lernmalbuch mit den Gummi-Bären-Figuren, entwickelt zur Förderung von Kreativität und Feinmotorik.',
    'projects.gummi.btn': 'Gummi Malbuch Drucken (PDF)',

    // About Section
    'about.badge': 'ÜBER UNS • B&H ASSISTANT GmbH',
    'about.title': 'Innovatives Software- & Verlagshaus in Zenica',
    'about.subtitle': 'Registriertes Unternehmen mit einer klaren Vision zur Entwicklung lokaler digitaler Tools und Förderung junger Talente.',
    'about.whyTitle': 'Warum Unterscheiden Wir Uns Von Anderen IT-Studios?',
    'about.whyDesc': 'Im Gegensatz zu Standard-Outsourcing-Agenturen baut B&H Assistant d.o.o. eine eigene Identität auf, geprägt von kulturellen Motiven (wie stilisierten mittelalterlichen Stećak-Ornamenten), kostenlosen Tools für Bürger und dem Stadtmagazin SCENA+ zur Förderung junger Talente.',
    'about.officialBadge': 'REGISTRIERTES UNTERNEHMEN • OFFIZIELLES REGISTER',
    'about.cityLabel': 'Hauptsitz & Stadt:',
    'about.jibLabel': 'Steuernummer (JIB):',
    'about.mbsLabel': 'Handelsregisternummer (MBS):',
    'about.categoryLabel': 'Geschäftskategorie:',
    'about.categoryValue': 'IT-Software, E-Government & Medien',
    'about.verifiedNote': 'Alle Firmendaten sind gemäß den offiziellen Unternehmensregistern in Bosnien und Herzegowina verifiziert.',
    'about.videoBadge': 'OFFIZIELLER GESCHÄFTSPLAN • VIDEO-PRÄSENTATION',
    'about.videoTitle': 'B&H Assistant Geschäftsplan - Videopräsentation',
    'about.videoDesc': 'Sehen Sie das offizielle Präsentationsvideo mit Einblicken in unseren 3-Jahres-Plan, Finanzprognosen und Ziele für BH KONVER, ZENTAXI und SCENA+.',
    'about.videoDirectLabel': 'Direktübertragung vom offiziellen YouTube-Kanal',
    'about.openYoutube': 'Auf YouTube Öffnen',
    'about.englishCta.badge': 'ENGLISCHE VERSION • INTERNATIONALE PRÄSENTATION',
    'about.englishCta.title': 'Geschäftsplan-Präsentation auf Englisch ansehen',
    'about.englishCta.desc': 'Internationale Partner und Investoren können die vollständige B&H Assistant Geschäftsplan- & Pitch-Deck-Präsentation auf Englisch ansehen.',
    'about.englishCta.btn': 'Englische Version auf YouTube ansehen 🇬🇧',

    // Banner Carousel Translations
    'carousel.badge': 'WERBEBANNER & ANKÜNDIGUNGEN',
    'carousel.title': 'B&H Assistant Werbezentrum',
    'carousel.subtitle': 'Durchsuchen Sie unsere wichtigsten Initiativen, digitalen Tools, Partnerschaften und Werbeangebote.',
    'carousel.pauseOnHover': 'Bewegen Sie die Maus darüber, um den automatischen Lauf zu pausieren',
    'carousel.slideNum': 'Banner',
    'carousel.of': 'von',

    // Banner 1 - Existing Tool Request
    'banner.tool.title': 'Benötigen Sie ein maßgeschneidertes digitales Tool oder E-Government für Ihr Unternehmen oder Ihre Gemeinde?',
    'banner.tool.desc': 'Das Team von B&H Assistant d.o.o. Zenica entwickelt spezifische Rechner, Formulardatenbanken, API-Integrationen und Webplattformen nach Ihren Anforderungen.',
    'banner.tool.badge': 'MAßGESCHNEIDERTE SOFTWARE',
    'banner.tool.btn': 'Kontaktieren Sie Uns Jetzt',

    // Banner 2 - Scena Magazine
    'banner.scena.title': 'Magazin SCENA+ • Werben Sie Für Ihre Marke Im Kanton Zenica-Doboj',
    'banner.scena.desc': 'Fördern Sie Ihr Unternehmen durch die erste gedruckte und digitale Ausgabe unseres Stadtmagazins für Kultur, Kunst, Krypto und Wirtschaft.',
    'banner.scena.badge': 'MARKETING & MEDIEN',
    'banner.scena.btn': 'E-Ausgabe SCENA+ Lesen',

    // Banner 3 - Zentaxi
    'banner.zentaxi.title': 'ZENTAXI - Intelligentes Taxi-Netzwerk • Werden Sie Teil Unseres Fahrer-Netzwerks!',
    'banner.zentaxi.desc': 'Wir laden selbstständige Taxifahrer und Transportunternehmen ein, sich der neuen digitalen Disponentenplattform von B&H Assistant anzuschließen.',
    'banner.zentaxi.badge': 'STARTUP-NETZWERK',
    'banner.zentaxi.btn': 'Mehr Über ZENTAXI Erfahren',

    // Banner 4 - Gummi Coloring Book
    'banner.gummi.title': 'GUMMI Malbuch • Kostenloses Pädagogisches PDF-Geschenk Für Kinder & Schulen',
    'banner.gummi.desc': 'Laden Sie unser urheberrechtlich geschütztes Malbuch für Vorschulkinder und Grundschüler mit Graphomotorik-Übungen herunter.',
    'banner.gummi.badge': 'KOSTENLOSE BILDUNG',
    'banner.gummi.btn': 'Malbuch PDF Herunterladen',

    // Banner 5 - Stecak Collection
    'banner.stecak.title': 'Stećak-Ornamene • Kodierte Vektormotive Für Grafikdesigner',
    'banner.stecak.desc': 'Eine digitalisierte Vektorsammlung mittelalterlicher bosnischer Stećak-Motive in den Formaten SVG, PNG, HTML und CSS.',
    'banner.stecak.badge': 'KULTURERBE & DESIGN',
    'banner.stecak.btn': 'Vektorsammlung Erkunden',

    // Banner 6 - Remote Jobs & Alison
    'banner.remote.title': 'Finden Sie Remote-Jobs in GuH & Kostenlose Zertifizierte Kurse',
    'banner.remote.desc': 'Verbinden Sie sich mit internationalen Arbeitgebern oder belegen Sie kostenlose Online-Kurse in Zusammenarbeit mit der Alison Academy.',
    'banner.remote.badge': 'KARRIERE & BILDUNG',
    'banner.remote.btn': 'SHOP & Partnerschaften Öffnen',

    // Banner 7 - Future Upload Slot Placeholder
    'banner.future.title': 'Ihre Anzeige Oder Partnerbanner Hier • Werden Sie B&H Assistant Sponsor',
    'banner.future.desc': 'Reservieren Sie Werbefläche in unserem Karussell und präsentieren Sie Ihre Dienstleistungen Tausenden von Besuchern.',
    'banner.future.badge': 'WERBEFLÄCHE RESERVIEREN',
    'banner.future.btn': 'Bannerplatz Mieten',

    // Banner 8 - CloudTalk AI Partner Banner
    'banner.cloudtalk.title': 'CloudTalk AI – Ihr intelligenter Anruf-Assistent!',
    'banner.cloudtalk.desc': 'Beschleunigen Sie die Kommunikation, automatisieren Sie Anrufe und schließen Sie Geschäfte schneller ab. CloudTalk bietet einen KI-Assistenten für Callcenter, Online-Verkauf und Kundenservice. Kostenlos herunterladen.',
    'banner.cloudtalk.badge': 'KI ANRUF-ASSISTENT',
    'banner.cloudtalk.btn': 'CloudTalk Gratis Herunterladen',

    // Shop & Affiliate Section
    'shop.badge': 'FLUID IT SHOP & AFFILIATE HUB',
    'shop.title': 'Bildungsshop, Partner & Remote-Jobs',
    'shop.subtitle': 'Entdecken Sie unsere Plattform und Partner. Wir verbinden Sie mit führenden Portalen für Remote-Jobs, KI-Plattformen und zertifizierten Kursen!',
    'shop.remote.badge': 'REMOTE-JOBS IN BiH',
    'shop.remote.title': 'Beste Seite für Remote-Jobs in BiH!',
    'shop.remote.desc': 'Durchsuchen Sie hunderte geprüfte Homeoffice-Stellen in IT, Marketing, Design und Support für B&H Talenten.',
    'shop.remote.btn': 'Remote Rocketship Jobs Öffnen',

    'shop.atoms.badge': 'KI & TECH PLATTFORM',
    'shop.atoms.title': 'Atoms - Ideen in Realität Verwandeln',
    'shop.atoms.desc': 'Bauen, testen und skalieren Sie fortschrittliche KI-Agenten und Web-Apps in Rekordzeit mit B&H Assistant Partnervorteilen.',
    'shop.atoms.btn': 'Atoms Plattform Jetzt Testen',

    'shop.alison.badge': 'GRATIS ZERTIFIKATE',
    'shop.alison.title': 'Alison - Kostenlose Zertifizierte Kurse',
    'shop.alison.desc': 'Suchen Sie nach zertifizierten Online-Kursen? Schreiben Sie sich kostenlos in weltweit anerkannte Alison-Kurse ein.',
    'shop.alison.btn': 'Kostenlos Auf Alison Einschreiben',

    'shop.allCat': 'Alle',
    'shop.catRemote': 'Remote-Jobs',
    'shop.catEdu': 'Online-Bildung',
    'shop.catIt': 'IT & Webdesign',
    'shop.catLang': 'Sprachen & Business',
    'shop.accessPartner': 'Partner-Link Öffnen',

    // Contact & Impressum
    'contact.badge': 'KONTAKT & IMPRESSUM',
    'contact.title': 'Kontaktieren Sie B&H Assistant GmbH',
    'contact.subtitle': 'Wir freuen uns auf Partnerschaften mit Unternehmen, Investoren, Medien und Bürgern. Senden Sie uns eine Anfrage.',
    'contact.nameLabel': 'Ihr Vor- und Nachname',
    'contact.emailLabel': 'Ihre E-Mail-Adresse',
    'contact.subjectLabel': 'Betreff',
    'contact.messageLabel': 'Ihre Nachricht',
    'contact.sendBtn': 'Nachricht Absenden',
    'contact.successMsg': 'Vielen Dank! Ihre Nachricht wurde erfolgreich an das Team von B&H Assistant d.o.o. Zenica übermittelt.',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.motto': 'Erstes Software- und Verlagshaus in Zenica • Bosnien und Herzegowina.',
    'footer.cmsAdmin': 'CMS-Verwaltung',
  },

  tr: {
    // Nav
    'nav.pocetna': 'Ana Sayfa',
    'nav.alati': 'BH Dijital Araçlar',
    'nav.scena': 'SCENA+ Dergisi',
    'nav.novosti': 'Haberler & CMS',
    'nav.projekti': 'Projeler & Boyama Kitabı',
    'nav.onama': 'Hakkımızda',
    'nav.shop': 'SHOP (Eğitim)',
    'nav.kontakt': 'İletişim',
    'nav.freeBojanka': 'Ücretsiz Boyama',
    'nav.language': 'Dil',

    // Hero
    'hero.badge': 'ZENİCA\'DAKİ İLK YAZILIM VE YAYINEVİ',
    'hero.title1': 'Aydınlık Bir Dijital',
    'hero.title2': 'Gelecek İnşa Ediyoruz',
    'hero.title3': 'Bosna Hersek İçin',
    'hero.subtitle': 'B&H Assistant d.o.o. Zenica, modern BT teknolojilerini, vatandaşlar için ücretsiz araçları, şehir dergisi SCENA+\'yı ve Stećak kültürel mirasını tek bir ekosistemde birleştiriyor.',
    'hero.btnTools': 'Dijital Araçları Keşfet',
    'hero.btnBojanka': 'Gummi Kitabını İndir',
    'hero.btnBizPlan': 'İş Planını İzle (Video)',
    'hero.statTools': 'BH Dijital Araç',
    'hero.statHub': 'Zenica Ltd. Şti.',
    'hero.statSolutions': '%100 Yerli Yazılım',

    // Hero Carousel
    'hero.slide.brand.title': 'B&H ASSISTANT Ltd. Şti.',
    'hero.slide.brand.motto': 'Zenica\'daki ilk yazılım ve yayınevi',
    'hero.slide.brand.desc': 'Merkezi Zenica\'da bulunan yenilikçi dijital ekosistem. Teknolojik gelişmeyi, kültürel mirası ve sosyal sorumluluğu harmanlıyoruz.',
    'hero.slide.brand.btn': 'Proje Detayları →',

    'hero.slide.atoms.title': 'Atoms Yapay Zeka Platformu',
    'hero.slide.atoms.motto': 'Fikirleri Gerçeğe Dönüştürün',
    'hero.slide.atoms.desc': 'Akıllı web uygulamalarını ve özerk yapay zeka ajanlarını hızla oluşturmak, test etmek ve ölçeklendirmek için yenilikçi platform.',
    'hero.slide.atoms.btn': 'Atoms.dev\'i Aç →',

    'hero.slide.remote.title': 'Remote Rocketship',
    'hero.slide.remote.motto': 'Bosna Hersek\'te Uzaktan Çalışma İçin En İyi Portal!',
    'hero.slide.remote.desc': 'BT, pazarlama, tasarım ve destek alanlarında esnek çalışma saatlerine sahip yüzlerce evden çalışma fırsatını inceleyin.',
    'hero.slide.remote.btn': 'Uzaktan İş Ara →',

    'hero.slide.konver.title': 'BH KONVER',
    'hero.slide.konver.motto': 'Dönüştürme sistemi ve hukuki beyannameler',
    'hero.slide.konver.desc': 'Hızlı ve hassas Bosna dijital hesap makinesi, para birimi/birim dönüştürücü ve hukuki beyanname oluşturucu.',
    'hero.slide.konver.btn': 'BH Konver\'i Aç →',

    'hero.slide.scena.title': 'SCENA+ Dergisi',
    'hero.slide.scena.motto': 'Kültürleri birleştiriyoruz - fırsatlar yaratıyoruz',
    'hero.slide.scena.desc': 'Bosna arkeolojisi, sanat, BCX kripto ve zanaat biracılığı üzerine haberler içeren şehir dergisinin ilk baskısı.',
    'hero.slide.scena.btn': 'Dergiyi Oku →',

    // Digital Tools Section
    'tools.badge': 'BH DİJİTAL ARAÇLAR VE PLATFORMLAR',
    'tools.title': 'B&H Assistant Tarafından Geliştirilen Özel Yazılımlar',
    'tools.subtitle': 'Bosna Hersek\'in mevzuatına, ekonomisine ve kültürel kimliğine uygun pratik dijital hizmetler geliştiriyoruz.',
    'tools.konver.badge': '1. BH ARACI • FİNANS VE HUKUK',
    'tools.konver.title': 'BH KONVER - Dönüştürme ve Hukuki Beyanname Sistemi',
    'tools.konver.desc': 'Para birimi ve birim dönüştürme, harç hesaplama ve otomatik hukuki beyanname oluşturma için ulusal dijital araç.',
    'tools.konver.btn': 'BH Konver\'i Etkileşimli Dene',
    'tools.konver.videoBtn': 'Demo Videoyu İzle',

    'tools.papir.badge': 'DİJİTAL CMS VE BELGE VERİTABANI',
    'tools.papir.title': 'PapirFinder - Dijital Belge Arşivi',
    'tools.papir.desc': 'Zenica-Doboj Kanyonu ve Bosna Hersek Konfederasyonu resmi gazeteleri ve kararları için akıllı arama motoru.',
    'tools.papir.btn': 'PapirFinder Veritabanını Ara',

    'tools.stecak.badge': 'KÜLTÜREL MİRAS VE MİMARİ',
    'tools.stecak.title': 'Stećak Süslemeleri - Dijital Vektör Koleksiyonu',
    'tools.stecak.desc': 'Modern grafik tasarımcılar ve uygulamalar için özel vektör kütüphanesi ve dijitalleştirilmiş Orta Çağ motifleri.',
    'tools.stecak.btn': 'Stećak Motiflerini Keşfet',

    // Scena Magazine
    'scena.badge': 'ŞEHİR DERGİSİ ZDK',
    'scena.title': 'SCENA+ Dergisi • Kültürleri Birleştirme ve Fırsatlar',
    'scena.subtitle': 'Genç yetenekleri, Zenica kültürel mirasını ve yenilikçi iş hikayelerini basılı ve dijital formatta destekliyoruz.',
    'scena.readNow': 'E-Baskıyı Ücretsiz Oku',
    'scena.downloadPdf': 'PDF Sayısını İndir (12 MB)',
    'scena.featuresTitle': 'SCENA+ #1 Sayısının Resmi İçeriği:',

    // News & CMS Section
    'news.badge': 'RESMİ BASIN VE HABERLER',
    'news.title': 'Güncel Haberler & CMS Bülteni',
    'news.subtitle': 'B&H Assistant d.o.o. Zenica şirketinden haberleri, kamuya duyuruları ve yazılım güncellemelerini takip edin.',
    'news.searchPlaceholder': 'Haberlerde ve duyurularda ara...',
    'news.all': 'Tüm Haberler',
    'news.press': 'Basın Bültenleri',
    'news.it': 'BT Araçları',
    'news.culture': 'Kültür',
    'news.readArticle': 'Haberin Tamamını Oku',
    'news.openCms': 'İçerik Yönetimi (CMS Canlı Düzenleyici)',

    // Projects Section
    'projects.badge': 'YATIRIMLAR VE ÇOCUK BOYAMA KİTABI',
    'projects.title': 'Geliştirme Projeleri ve Sosyal Sorumluluk',
    'projects.subtitle': 'Ticari yazılımların yanı sıra, yerel topluluğumuz ve genç nesiller için büyük önem taşıyan projeler üretiyoruz.',
    'projects.zentaxi.badge': 'GELİŞTİRİLMEKTE OLAN GİRİŞİM • ZENİCA',
    'projects.zentaxi.title': 'ZENTAXI - Akıllı Taksi Ağı Zenica',
    'projects.zentaxi.desc': 'Zenica\'da hızlı taksi çağırma, araçları canlı izleme ve şeffaf ücret hesaplama uygulaması.',
    'projects.gummi.badge': 'ÇOCUKLAR İÇİN ÜCRETSİZ EĞİTİM',
    'projects.gummi.title': 'GUMMI - Çocuk Boyama ve Hikaye Kitabı',
    'projects.gummi.desc': 'Çocukların yaratıcılığını ve motor becerilerini geliştirmek için tasarlanmış ücretsiz eğitici boyama kitabı.',
    'projects.gummi.btn': 'Gummi Kitabını İndir ve Yazdır (PDF)',

    // About Section
    'about.badge': 'HAKKIMIZDA • B&H ASSISTANT Ltd. Şti.',
    'about.title': 'Zenica\'daki Yenilikçi Yazılım ve Yayınevi',
    'about.subtitle': 'Yerli dijital araçlar geliştirmek ve gençleri desteklemek amacıyla kurulmuş resmi şirket.',
    'about.whyTitle': 'Neden Diğer BT Stüdyolarından Farklıyız?',
    'about.whyDesc': 'Standart dış kaynak yazılım ajanslarının aksine, B&H Assistant d.o.o. kültürel motiflerle (stilize edilmiş Orta Çağ stećak süslemeleri gibi) bezenmiş özgün bir kimlik inşa eder, vatandaşlar için ücretsiz faydalı araçlar üretir ve Zenica-Doboj Kanyonu\'ndaki genç yetenekleri desteklemek için SCENA+ dergisini yayınlar.',
    'about.officialBadge': 'RESMİ ŞİRKET • RESMİ TİCARET SİCİLİ',
    'about.cityLabel': 'Genel Merkez ve Şehir:',
    'about.jibLabel': 'Vergi Kimlik Numarası (JIB):',
    'about.mbsLabel': 'Mahkeme Sicil Numarası (MBS):',
    'about.categoryLabel': 'İş Kategorisi:',
    'about.categoryValue': 'BT Yazılımı, e-Devlet ve Medya',
    'about.verifiedNote': 'Tüm şirket kayıtları Bosna Hersek resmi ticaret siciline uygun olarak doğrulanmıştır.',
    'about.videoBadge': 'RESMİ İŞ PLANI • VİDEO SUNUMU',
    'about.videoTitle': 'B&H Assistant İş Planı - Video Sunumu',
    'about.videoDesc': 'BH KONVER, ZENTAXI ve SCENA+ ekosistemi için 3 yıllık iş yol haritamızı ve finansal hedeflerimizi içeren sunum videosunu izleyin.',
    'about.videoDirectLabel': 'Resmi YouTube kanalımızdan doğrudan yayın',
    'about.openYoutube': 'YouTube\'da Aç',
    'about.englishCta.badge': 'İNGİLİZCE BASKI • ULUSLARARASI SUNUM',
    'about.englishCta.title': 'İş Planı Sunumunu İngilizce İzleyin',
    'about.englishCta.desc': 'Uluslararası ortaklar ve yatırımcılar, İngilizce olarak kaydedilmiş B&H Assistant İş Planı ve Pitch Deck video sunumunu izleyebilirler.',
    'about.englishCta.btn': 'İngilizce Sürümü YouTube\'da İzleyin 🇬🇧',

    // Banner Carousel Translations
    'carousel.badge': 'TANITIM BANNERLARI VE DUYURULAR',
    'carousel.title': 'B&H Assistant Tanıtım Merkezi',
    'carousel.subtitle': 'Öne çıkan girişimlerimizi, dijital araçlarımızı, ortaklıklarımızı ve tanıtım fırsatlarını inceleyin.',
    'carousel.pauseOnHover': 'Otomatik kaydırmayı duraklatmak için fareyi üzerine getirin',
    'carousel.slideNum': 'Banner',
    'carousel.of': '/',

    // Banner 1 - Existing Tool Request
    'banner.tool.title': 'Şirketiniz veya belediyeniz için özel bir dijital araç veya e-devlet çözümü mü istiyorsunuz?',
    'banner.tool.desc': 'B&H Assistant Ltd. Şti. Zenica ekibi, tam gereksinimlerinize göre özel hesaplayıcılar, belge veritabanları, API entegrasyonları ve web platformları geliştirir.',
    'banner.tool.badge': 'ÖZEL YAZILIM HİZMETİ',
    'banner.tool.btn': 'Hemen İletişime Geçin',

    // Banner 2 - Scena Magazine
    'banner.scena.title': 'SCENA+ Dergisi • Markanızı Zenica-Doboj Kanyonu\'nda Tanıtın',
    'banner.scena.desc': 'Kültür, sanat, kripto ve yerel ekonomiyi kapsayan şehir dergimizin basılı ve dijital ilk sayısı aracılığıyla işletmenizi tanıtın.',
    'banner.scena.badge': 'PAZARLAMA VE MEDYA',
    'banner.scena.btn': 'SCENA+ E-Dergisini Oku',

    // Banner 3 - Zentaxi
    'banner.zentaxi.title': 'ZENTAXI - Akıllı Taksi Ağı • Zenica\'daki Sürücü Ağına Katılın!',
    'banner.zentaxi.desc': 'Bağımsız taksi sürücülerini ve taşımacıları B&H Assistant\'ın yeni dijital yönlendirme platformuna katılmaya davet ediyoruz.',
    'banner.zentaxi.badge': 'GİRİŞİM AĞI',
    'banner.zentaxi.btn': 'ZENTAXI Hakkında Fazlasını Öğrenin',

    // Banner 4 - Gummi Coloring Book
    'banner.gummi.title': 'GUMMI Boyama Kitabı • Çocuklar ve Okullar İçin Ücretsiz Eğitici PDF Hediye',
    'banner.gummi.desc': 'Çizim ve motor beceri egzersizleri içeren okul öncesi ve ilkokul öğrencilerine özel boyama kitabımızı ücretsiz indirin.',
    'banner.gummi.badge': 'ÜCRETSİZ EĞİTİM',
    'banner.gummi.btn': 'Boyama PDF\'ini İndir',

    // Banner 5 - Stecak Collection
    'banner.stecak.title': 'Stećak Süslemeleri • Grafik Tasarımcılar İçin Kodlanmış Vektör Motifleri',
    'banner.stecak.desc': 'SVG, PNG, HTML ve CSS formatlarında web ve baskı uygulamalarına hazır Orta Çağ Bosna stećak motiflerinin dijital vektör koleksiyonu.',
    'banner.stecak.badge': 'MİRAS VE TASARIM',
    'banner.stecak.btn': 'Vektör Koleksiyonunu Keşfet',

    // Banner 6 - Remote Jobs & Alison
    'banner.remote.title': 'Bosna Hersek\'te Uzaktan İşler ve Ücretsiz Sertifikalı Küresel Kurslar Keşfedin',
    'banner.remote.desc': 'Küresel işverenlerle bağlantı kurun veya Alison Akademi ortaklığıyla %100 ücretsiz çevrimiçi sertifikalı kurslara kaydolun.',
    'banner.remote.badge': 'KARİYER VE EĞİTİM',
    'banner.remote.btn': 'SHOP ve Ortaklıkları Aç',

    // Banner 7 - Future Upload Slot Placeholder
    'banner.future.title': 'Reklamınız veya Ortaklık Bannerınız Burada • B&H Assistant Sponsoru Olun',
    'banner.future.desc': 'Karuselimizde tanıtım alanı ayırtın ve hizmetlerinizi platformlarımızdaki binlerce ziyaretçiye sergileyin.',
    'banner.future.badge': 'REKLAM ALANI AYIRTIN',
    'banner.future.btn': 'Banner Alanı Kiralayın',

    // Banner 8 - CloudTalk AI Partner Banner
    'banner.cloudtalk.title': 'CloudTalk AI – Akıllı Arama Asistanınız!',
    'banner.cloudtalk.desc': 'İletişimi hızlandırın, aramaları otomatikleştirin ve anlaşmaları daha hızlı kapatın. CloudTalk çağrı merkezleri, online satış ve müşteri desteği için yapay zeka asistanı sunar. Ücretsiz indirin ve kurun.',
    'banner.cloudtalk.badge': 'YAPAY ZEKA ARAMA ASİSTANI',
    'banner.cloudtalk.btn': 'CloudTalk\'u Ücretsiz İndirin',

    // Shop & Affiliate Section
    'shop.badge': 'FLUID IT SHOP & AFFILIATE HUB',
    'shop.title': 'Eğitim Mağazası, Ortaklıklar ve Uzaktan İşler',
    'shop.subtitle': 'E-ticaret platformumuzu ve sponsorlu ortaklarımızı keşfedin. Sizi en iyi uzaktan iş portalları, yapay zeka platformları ve sertifikalı kurslarla buluşturuyoruz!',
    'shop.remote.badge': 'BOSNA HERSEK\'TE UZAKTAN İŞLER',
    'shop.remote.title': 'Bosna Hersek\'te Uzaktan Çalışma İçin En İyi Portal!',
    'shop.remote.desc': 'BT, pazarlama, tasarım ve destek alanlarında doğrulanmış yüzlerce uzaktan çalışma pozisyonunu inceleyin.',
    'shop.remote.btn': 'Remote Rocketship İşlerini Aç',

    'shop.atoms.badge': 'YAPAY ZEKA VE TEKNOLOJİ PLATFORMU',
    'shop.atoms.title': 'Atoms - Fikirleri Gerçeğe Dönüştürün',
    'shop.atoms.desc': 'B&H Assistant ortaklık avantajlarıyla gelişmiş yapay zeka ajanlarını ve web uygulamalarını rekor sürede inşa edin.',
    'shop.atoms.btn': 'Atoms Platformunu Şimdi Deneyin',

    'shop.alison.badge': 'ÜCRETSİZ SERTİFİKALAR',
    'shop.alison.title': 'Alison - Ücretsiz Sertifikalı Küresel Kurslar',
    'shop.alison.desc': 'Çeşitli alanlarda sertifikalı kurslar mı arıyorsunuz? Alison ortaklığıyla %100 ücretsiz çevrimiçi kurslara kaydolun.',
    'shop.alison.btn': 'Alison\'da Ücretsiz Kaydol',

    'shop.allCat': 'Tümü',
    'shop.catRemote': 'Uzaktan İşler',
    'shop.catEdu': 'Çevrimiçi Eğitim',
    'shop.catIt': 'BT & Web Tasarım',
    'shop.catLang': 'Diller & İş Dünyası',
    'shop.accessPartner': 'Ortaklık Bağlantısına Git',

    // Contact & Impressum
    'contact.badge': 'İLETİŞİM VE ŞİRKET BİLGİLERİ',
    'contact.title': 'B&H Assistant Ltd. Şti. ile İletişime Geçin',
    'contact.subtitle': 'Şirketler, yatırımcılar, medya ve vatandaşlarla iş birliğine açığız. Bize mesaj gönderin veya Zenica\'da ziyaret edin.',
    'contact.nameLabel': 'Adınız ve Soyadınız',
    'contact.emailLabel': 'E-posta Adresiniz',
    'contact.subjectLabel': 'Konu',
    'contact.messageLabel': 'Mesajınız',
    'contact.sendBtn': 'Mesajı Gönder',
    'contact.successMsg': 'Teşekkürler! Mesajınız B&H Assistant d.o.o. Zenica ekibine başarıyla iletildi.',

    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.motto': 'Zenica\'daki ilk yazılım ve yayınevi • Bosna Hersek.',
    'footer.cmsAdmin': 'CMS Yönetimi',
  },
};
