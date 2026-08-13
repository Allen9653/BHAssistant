import { DigitalTool, DevelopmentProject, MagazineEdition, AffiliateCourse, CompanyDetails } from '../types';

export const COMPANY_INFO: CompanyDetails = {
  name: "B&H Assistant d.o.o.",
  fullLegalName: "B&H ASSISTANT d.o.o. Zenica",
  city: "Zenica",
  postalCode: "72000",
  jib: "4219296620005",
  mbs: "43-01-0177-25",
  motto: "SPAJAMO KULTURE - STVARAMO ŠANSE",
  email: "info@bh-assistant.ba",
  phone: "+387 62 580 207",
  address: "Ul. Bulevar Ezhera Eze Arnautovića 8, 72000 Zenica, Bosna i Hercegovina",
  facebookUrl: "https://www.facebook.com/SpajamoKultureStvaramoSanse",
  instagramHandle: "bh.asst",
  instagramUrl: "https://www.instagram.com/bh.asst"
};

export const DIGITAL_TOOLS: DigitalTool[] = [
  {
    id: "bh-konver",
    name: "BH Konverter (Konver)",
    tagline: "Univerzalni BH digitalni kalkulator i konverter",
    description: "Brzi i precizni bosanskohercegovački digitalni konverter valuta, mjernih jedinica i poslovnih dokumentarnih proračuna. Razvijen s fokusom na specifične potrebe građana i firmi u BiH radi uštede vremena i eliminacije grešaka u svakodnevnom poslovanju.",
    url: "https://bh-konver.lovable.app/",
    badge: "PRVI BH ALAT",
    category: "Finansije & Konverzija",
    iconName: "Calculator",
    image: "/images/bh_konver_mockup_1786292760938.jpg",
    features: [
      "Prilagođeno zakonodavstvu i valutama u BiH",
      "Brze konverzije jedinica i poreza",
      "Jednostavan i responzivan interfejs"
    ]
  },
  {
    id: "bh-papirfinder",
    name: "BH PapirFinder",
    tagline: "Digitalni vodič za besplatne općinske obrasce",
    description: "Vaš centralni digitalni vodič za pronalaženje besplatnih obrazaca, zahtjeva i dokumenata lokalne samouprave u Bosni i Hercegovini. Pojednostavljuje administrativne procese za općine Olovo, Gračanica, Banja Luka, Jajce, Travnik i druge krajeve BiH.",
    url: "https://bhpapirfinder.atoms.world/",
    badge: "e-UPRAVA VODIČ",
    category: "Administracija & e-Uprava",
    iconName: "FileText",
    image: "/images/bh_papirfinder_mockup_1786292775889.jpg",
    features: [
      "Baza besplatnih općinskih obrazaca",
      "Pretraga po općinama i kantonima",
      "Direktno preuzimanje dokumenata"
    ]
  },
  {
    id: "ornamenti-bosne",
    name: "Ornamenti Bosne: Digitalna Kolekcija",
    tagline: "Kodirane strukture stećaka u SVG, PNG, HTML i CSS",
    description: "Prva digitalna kolekcija autentičnih i stiliziranih motiva sa bh. stećaka pripremljena za dizajn, edukaciju i kulturnu reinterpretaciju. Sadrži kodirane vektorske i veb strukture za kreatore i istraživače bh. baštine (I. Izdanje 2026).",
    url: "https://canva.link/8dwxeack5cwn18l",
    badge: "KULTURNA BAŠTINA & TECH",
    category: "Dizajn & Kulturna Baština",
    iconName: "Compass",
    image: "/images/ornamenti_bosne_1786292789196.jpg",
    features: [
      "Vektorski motiv sa stećaka (SVG, PNG)",
      "HTML i CSS stilizirani kodovi",
      "Spremno za grafičke i web projekte"
    ]
  }
];

export const SCENA_MAGAZINE: MagazineEdition = {
  title: "SCENA+",
  subtitle: "Prvi Urbani Magazin u ZDK",
  edition: "Prvo Izdanje",
  date: "Septembar / Rujan 2026",
  url: "https://canva.link/vxekpnx0ow1xvt9",
  topics: [
    {
      category: "Kultura & Umjetnost",
      title: "Danilo Keso Art",
      desc: "Mrak koji svijetli — Ekskluzivni uvid u radove i vinyl kolekcionarstvo."
    },
    {
      category: "Tehnologija & Kripto",
      title: "BCX Krypto & Vlada & WWW",
      desc: "Kripto ekosistem i digitalne inicijative u Bosni i Hercegovini."
    },
    {
      category: "Lokalna Scena",
      title: "Craft Pivare & Ugostiteljstvo",
      desc: "Razvoj domaće craft industrije i novih ugostiteljskih koncepata."
    },
    {
      category: "Priroda & Arheologija",
      title: "Endemska Fauna & BH Arheologija",
      desc: "Fascinantna povijest i prirodna bogatstva našeg regiona."
    },
    {
      category: "Biznis & Bankarstvo",
      title: "Žene u BiH Bank Sektoru & ZEPS",
      desc: "Inspirišuće priče liderki i privredna dešavanja u ZDK."
    },
    {
      category: "Omladina & Mediji",
      title: "Gaming Parvantanam & Emisija Propuh",
      desc: "Urbani glas mlade generacije izvan ustaljenih valova."
    }
  ]
};

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    id: "zentaxi",
    title: "ZENTAXI",
    subtitle: "Spajamo vožnju, stvaramo udobnost",
    description: "Inovativna digitalna platforma za lokalni gradski i međugradski prijevoz kreirana od strane B&H Assistant Zenica. Povezuje putnike i licencirane vozače uz maksimalnu transparentnost, brzu narudžbu i vrhunsku udobnost.",
    url: "https://canva.link/xyqzerrxvkxbfy2",
    status: "U fazi razvoja & Širenja mreže",
    image: "/images/zentaxi_app_1786292819027.jpg",
    targetAudience: "Investitori, Taksisti, Gradovi & Korisnici",
    highlights: [
      "Pametna lokacija i procjena vožnje",
      "Sigurna digitalna plaćanja i ocjenjivanje",
      "Lokalizovano rješenje za BH tržište"
    ]
  },
  {
    id: "gummi",
    title: "GUMMI - Vaš Jaran",
    subtitle: "Animirani edukativni film i interaktivna platforma za djecu",
    description: "Originalni bh. edukativni projekat za najmlađe. Kroz lik voljenog junaka Gummija i njegove avanture, djeca na zabavan i metodički prilagođen način uče štampana i pisana slova uz igru, smijeh i druženje.",
    url: "https://canva.link/vens28es43srfdw",
    status: "Razvoj & Produkcija",
    image: "/images/gummi_bojanka_1786292834962.jpg",
    hasFreeDownload: true,
    downloadUrl: "https://canva.link/tna306bm8p462xm",
    downloadTitle: "Edukativna Bojanka GUMMI",
    targetAudience: "Roditelji, Odgajatelji, Osnovne škole, Sponzori",
    highlights: [
      "Sadržaj prilagođen kurikulumu i predškolskom uzrastu",
      "Edukacija kroz animaciju i vizuelne vježbe",
      "Besplatna printabilna bojanka za svu djecu"
    ]
  }
];

export const AFFILIATE_COURSES: AffiliateCourse[] = [
  {
    id: "remote-rocketship",
    title: "Remote Rocketship - Remote Poslovi u BiH",
    provider: "Remote Rocketship Global Network",
    badge: "REMOTE POSLOVI U BiH",
    description: "Najbolja stranica za Remote Poslove u BiH! Pronađite rad od kuće i plaćene pozicije u IT-ju, marketingu, dizajnu i korisničkoj podršci sa fleksibilnim radnim vremenom.",
    bullets: [
      "Najbolja stranica za Remote Poslove u BiH i dijaspori",
      "Direktan kontakt sa vrhunskim poslodavcima iz EU, SAD i svijeta",
      "Redovno ažurirani oglasi i provjereni uslovi rada"
    ],
    affiliateUrl: "https://tolt.link/remote-poslovi",
    category: "Remote Poslovi",
    featured: true,
    image: "/images/business_plan_canva_deck_1785478495425.jpg"
  },
  {
    id: "atoms-dev",
    title: "Atoms - Pretvori Ideju u Realnost",
    provider: "Atoms World AI & App Platform",
    badge: "AI & TECH PLATFORMA",
    description: "Inovativna AI i cloud platforma za brzo kreiranje, testiranje i skaliranje pametnih web aplikacija i samostalnih agenata bez komplicirane infrastrukture.",
    bullets: [
      "Gradite napredne AI agente i moderne veb aplikacije",
      "Pretvori svaku ideju u stvarni, operativni softverski proizvod",
      "Ekskluzivni partnerski pristup preko B&H Assistant mreže"
    ],
    affiliateUrl: "https://atoms.dev/?utm_source=affiliate&via=pretvori-ideju-u-realnost",
    category: "IT & Veb Dizajn",
    featured: true,
    image: "/images/bh_papirfinder_mockup_1786292775889.jpg"
  },
  {
    id: "alison-global",
    title: "Alison - Besplatni Certificirani Kursevi",
    provider: "Alison Global Education Platform Services",
    badge: "BESPLATNO & CERTIFICIRANO",
    description: "Ukoliko tražite korisne, certificirane edukativne kurseve iz raznih svjetskih oblasti — imate priliku da besplatno upišete kurseve koje Vam nudimo u saradnji sa Alison platformom. Predavanja i testiranja znanja su 100% online.",
    bullets: [
      "Predavanja i testiranje znanja su 100% online",
      "Predavači su stručnjaci i profesori sa svjetskih univerziteta",
      "Certifikati i diplome priznati u EU, SAD i širom svijeta",
      "Širok spektar oblasti: IT, Menadžment, Jezici, Zdravstvo, Dizajn"
    ],
    affiliateUrl: "https://alison.com/certificate-courses?utm_source=alison_user&utm_medium=affiliate&utm_campaign=56404529",
    category: "Online Edukacija",
    featured: true,
    image: "/images/alison_official_logo_1785476385694.jpg"
  },
  {
    id: "it-skills-boost",
    title: "IT & Web Development Moduli",
    provider: "Partnered Global Hubs",
    badge: "PREPORUKA ZA MLADE",
    description: "Specijalizirani besplatni moduli za učenje osnova programiranja, veb dizajna, digitalnog marketinga i analitike podataka za početnike i napredne polaznike.",
    bullets: [
      "Samo-vođeni tempo učenja",
      "Praktični projekti i vježbe",
      "Besplatna registracija putem našeg linka"
    ],
    affiliateUrl: "https://alison.com/certificate-courses?utm_source=alison_user&utm_medium=affiliate&utm_campaign=56404529",
    category: "IT & Veb Dizajn",
    featured: false,
    image: "/images/tryhackme_cybersecurity_1786295930296.jpg"
  },
  {
    id: "business-languages",
    title: "Poslovni Jezici & Menadžment",
    provider: "International Business Academy",
    badge: "POSLOVNE VJEŠTINE",
    description: "Unaprijedite svoje poslovne vještine uz međunarodno akreditovane besplatne kurseve engleskog, njemačkog, poslovnog komuniciranja i vođenja timova.",
    bullets: [
      "Priprema za međunarodne sertifikate",
      "Poslovna korespondencija i komunikacija",
      "Dostupno odmah na svim uređajima"
    ],
    affiliateUrl: "https://alison.com/certificate-courses?utm_source=alison_user&utm_medium=affiliate&utm_campaign=56404529",
    category: "Jezici & Poslovanje",
    featured: false,
    image: "/images/business_plan_canva_deck_1785478495425.jpg"
  }
];
