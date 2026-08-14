import { DigitalTool, DevelopmentProject, MagazineEdition, AffiliateCourse, CompanyDetails, SocialPost } from '../types';

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
    tagline: "Univerzalni BH digitalni kalkulator i pravni generator",
    description: "Autorsko softversko rješenje za brze i precizne proračune poreza, valuta, građevinskih i mjernih jedinica, te automatizovano generisanje pravno važećih izjava pod punom krivičnom i materijalnom odgovornošću. U toku je izrada nativnih iOS i Android mobilnih aplikacija uz podršku platforme Lovable.",
    url: "https://bh-konver.lovable.app/",
    badge: "POBJEDNIK SEDMICE & NATIVNI APP 🏆",
    category: "Finansije & e-Pravni Alati",
    iconName: "Calculator",
    image: "/images/bh_konver_mockup.jpg",
    deliveryBadge: "LOVABLE APP OF THE WEEK POBJEDNIK",
    deliveryNotice: "Nagrađeni softverski alat — tim Lovable gradi i finansira nativne iOS (App Store) i Android (Play Store) mobilne aplikacije za građane i dijasporu.",
    features: [
      "Generisanje ovjerenih pravnih izjava pod krivičnom odgovornošću 📜",
      "Nativne iOS & Android mobilne aplikacije (Lovable partnerstvo) 📱",
      "Kalkulatori valuta, poreza i mjernih jedinica usklađeni sa zakonima BiH 🇧🇦",
      "Brz izvoz dokumenata u PDF format spreman za printanje i potpis",
      "Primarna zvanična domena u pripremi: www.bh-konver.ba"
    ]
  },
  {
    id: "bh-papirfinder",
    name: "BH PapirFinder",
    tagline: "Centralni registar i vodič za besplatne općinske obrasce",
    description: "Vaš centralni digitalni registar i pametni vodič za pronalaženje besplatnih obrazaca, zahtjeva i dokumenata lokalne samouprave u Bosni i Hercegovini. Pojednostavljuje i ubrzava administrativne procese za općine Olovo, Gračanica, Banja Luka, Jajce, Travnik i sve kantone u BiH.",
    url: "https://bhpapirfinder.atoms.world/",
    badge: "BESPLATNI OBRASCI & e-UPRAVA 🏛️",
    category: "Administracija & Javne Usluge",
    iconName: "FileText",
    image: "/images/bh_papirfinder_mockup.jpg",
    deliveryBadge: "BESPLATNI OPĆINSKI OBRASCI & VODIČ",
    deliveryNotice: "Direktan pristup i preuzimanje službenih općinskih zahtjeva, taksi i obrazaca — ušteda vremena građanima, privredi i dijaspori.",
    features: [
      "Baza besplatnih službenih općinskih obrazaca i upravnih zahtjeva 📄",
      "Pametna pretraga po gradovima (Olovo, Gračanica, BL, Travnik, Jajce...)",
      "Pojednostavljeni e-Uprava koraci za fizička i pravna lica",
      "Direktno preuzimanje pripremljenih dokumenata i uputstava",
      "Eliminacija čekanja na šalterima i administrativnih nejasnoća"
    ]
  },
  {
    id: "ornamenti-bosne",
    name: "Ornamenti Bosne: Digitalna Kolekcija",
    tagline: "Jedini digitalni proizvod sa dostavom na USB Memory Sticku • Plaćanje po preuzimanju",
    description: "Prva digitalna kolekcija autentičnih i stiliziranih motiva sa bh. stećaka pripremljena za dizajn, edukaciju i kulturnu reinterpretaciju. Sadrži kodirane vektorske i veb strukture (SVG, PNG, HTML i CSS). JEDINI digitalni proizvod koji se dostavlja na Vašu fizičku adresu na USB Memory Sticku uz sigurno plaćanje po preuzimanju (pouzećem).",
    url: "https://canva.link/8dwxeack5cwn18l",
    videoUrl: "https://youtu.be/CyJx3h3nGyA",
    videoEmbedUrl: "https://www.youtube.com/embed/CyJx3h3nGyA?rel=0&modestbranding=1",
    englishVideoUrl: "https://youtu.be/VXc7aCa-Auc",
    englishVideoEmbedUrl: "https://www.youtube.com/embed/VXc7aCa-Auc?rel=0&modestbranding=1",
    deliveryBadge: "DOSTAVA NA USB MEMORY STICKU",
    deliveryNotice: "Jedini digitalni proizvod koji se dostavlja na Vašu kućnu ili poslovnu adresu na USB Memory Sticku, uz sigurno plaćanje po preuzimanju pošiljke (pouzećem).",
    badge: "KULTURNA BAŠTINA & USB DOSTAVA",
    category: "Dizajn & Kulturna Baština",
    iconName: "Compass",
    image: "/images/ornamenti_bosne.jpg",
    features: [
      "Dostava na adresu na USB Memory Sticku 📦",
      "Plaćanje sigurno po preuzimanju pošiljke (pouzećem)",
      "Vektorski motivi sa stećaka (SVG, PNG format)",
      "HTML i CSS stilizirani kodovi za veb programere",
      "Zvanična video prezentacija & Engleski e-katalog 🇬🇧"
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
    description: "Inovativna digitalna platforma za lokalni gradski i međugradski prijevoz kreirana od strane B&H Assistant d.o.o. Zenica. Povezuje putnike i licencirane vozače uz maksimalnu transparentnost, brzu narudžbu, automatski proračun optimalnih ruta, digitalnu fiskalizaciju i vrhunsku udobnost vožnje.",
    detailedSummary: "ZENTAXI je pametna dispečerska mreža i mobilna aplikacija razvijena da transformiše urbani taksi prevoz u Zenici i gradovima BiH. Projekat rješava ključne izazove lokalnog transporta: eliminiše čekanje na slobodna vozila, pruža unaprijed poznatu cijenu prije početka vožnje, omogućava GPS praćenje u realnom vremenu te nudi transparentan partnerski model za samostalne taksiste i registrovana taksi udruženja bez visokih posredničkih provizija.",
    url: "https://canva.link/xyqzerrxvkxbfy2",
    status: "U fazi razvoja & Širenja mreže",
    image: "/images/zentaxi_logo.jpg",
    videoUrl: "https://youtu.be/oJNF1YU1XVQ",
    videoEmbedUrl: "https://www.youtube.com/embed/oJNF1YU1XVQ?rel=0&modestbranding=1",
    targetAudience: "Investitori, Taksisti, Gradovi & Korisnici",
    highlights: [
      "Pametna lokacija i procjena vožnje u realnom vremenu",
      "Sigurna digitalna plaćanja, fiskalizacija i ocjenjivanje",
      "Lokalizovano i pristupačno rješenje za BH tržište",
      "Partnerski model za licencirane taksi prevoznike"
    ],
    features: [
      {
        title: "Dispečerski Algoritam",
        desc: "Automatsko uparivanje putnika sa najbližim slobodnim taksi vozilom uz minimalno vrijeme odziva."
      },
      {
        title: "Transparentne Cijene",
        desc: "Jasan proračun cijene vožnje unaprijed prema zvaničnom gradskom cjenovniku, bez skrivenih troškova."
      },
      {
        title: "Sigurnost & Nadzor",
        desc: "Verifikovani vozači, digitalni računi, ocjene korisnika i 24/7 SOS podrška tokom vožnje."
      },
      {
        title: "Lokalna Integracija",
        desc: "Potpuno prilagođeno zakonodavstvu ZDK i FBiH uz podršku za lokalne platne kartice i gotovinu."
      }
    ]
  },
  {
    id: "gummi",
    title: "GUMMI - Vaš Jaran",
    subtitle: "Animirani edukativni film i interaktivna platforma za djecu",
    description: "Originalni bh. edukativni projekat za najmlađe. Kroz lik voljenog junaka Gummija i njegove avanture, djeca na zabavan i metodički prilagođen način uče štampana i pisana slova uz igru, smijeh i druženje.",
    url: "https://canva.link/vens28es43srfdw",
    status: "Razvoj & Produkcija",
    image: "/images/gummi_bojanka.jpg",
    videoUrl: "https://youtu.be/SxWVktly_vA",
    videoEmbedUrl: "https://www.youtube.com/embed/SxWVktly_vA?rel=0&modestbranding=1",
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
    image: "/images/business_plan.jpg"
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
    image: "/images/bh_papirfinder_mockup.jpg"
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
    image: "/images/alison_logo.jpg"
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
    image: "/images/tryhackme_banner.jpg"
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
    image: "/images/business_plan.jpg"
  },
  {
    id: "gurushots-yusufowych",
    title: "GuruShots Yusufowych Fotografija",
    provider: "GuruShots Global Photo Platform & Exhibitions",
    badge: "FOTOGRAFIJA & UMJETNOST",
    description: "Pogledajte ekskluzivni portfolio i autorske fotografije bh. autora Yusufowych na globalnoj platformi GuruShots. Učešće u svjetskim fotografskim izazovima i međunarodnim digitalnim izložbama.",
    bullets: [
      "Autorska umjetnička i pejsažna fotografija",
      "Međunarodna takmičenja i globalne izložbe",
      "Direktan pristup zvaničnoj GuruShots galeriji"
    ],
    affiliateUrl: "https://gurushots.com/yusufowych",
    category: "Fotografija & Umjetnost",
    featured: false,
    image: "/images/digitalni_spavac_bh_assistant.png"
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "post-scena-1",
    image: "/images/scena_cover.jpg",
    caption: "Naslovnica I. izdanja magazina SCENA+! ✨ Istražujemo novu energiju Zenice i ZDK, od underground umjetnosti i vinila Danila Kese do digitalnih inovacija mladih. Čitajte potpuno besplatno na Canva linku! 📖🇧🇦",
    category: "scena",
    categoryLabel: "Magazin SCENA+",
    likes: 142,
    initialLiked: false,
    commentsCount: 18,
    date: "Prije 2 dana",
    postUrl: "https://www.instagram.com/bh.asst",
    location: "Zenica, Bosna i Hercegovina",
    tags: ["#SCENAPlus", "#ZenicaKultura", "#UrbaniMagazin", "#ZDK", "#BHAssistant"],
    comments: [
      {
        id: "c1",
        author: "zenica_creatives",
        text: "Sjajan format i odličan izbor tema za prvo izdanje! Svaka čast ekipi.",
        timeAgo: "1 dan"
      },
      {
        id: "c2",
        author: "haris_dev_ba",
        text: "Konačno magazin koji spaja kulturu i IT u našem kantonu! 👏",
        timeAgo: "18 sati"
      }
    ]
  },
  {
    id: "post-konver-2",
    image: "/images/bh_konver_mockup.jpg",
    caption: "Predstavljamo BH Konverter (Konver) ⚡ Vaš novi omiljeni alat za brze poslovne i devizne kalkulacije, prilagođen zakonima i valutama u BiH. Bez registracije, 100% besplatno i munjevito brzo. Isprobajte na bh-konver.lovable.app 💻🚀",
    category: "alati",
    categoryLabel: "BH Digitalni Alati",
    likes: 215,
    initialLiked: true,
    commentsCount: 29,
    date: "Prije 4 dana",
    postUrl: "https://www.instagram.com/bh.asst",
    location: "B&H Assistant Hub • Zenica",
    tags: ["#BHKonver", "#BHTech", "#DigitalniAlati", "#FinansijeBiH", "#StartupZenica"],
    comments: [
      {
        id: "c3",
        author: "mirza_finansije",
        text: "Ovo nam je nedostajalo za brze kalkulacije PDV-a i valuta u praksi.",
        timeAgo: "3 dana"
      }
    ]
  },
  {
    id: "post-bojanka-3",
    image: "/images/gummi_bojanka.jpg",
    caption: "🎨 Besplatna GUMMI Bojanka za najmlađe! Preuzmite PDF izdanje u 8 uzbudljivih ilustracija sa temom automobila, sigurnosti u saobraćaju i druženja. Razvijajte kreativnost svoje djece uz B&H Assistant tim! 🖍️🚙",
    category: "projekti",
    categoryLabel: "Projekti & Djeca",
    likes: 184,
    initialLiked: false,
    commentsCount: 24,
    date: "Prije 6 dana",
    postUrl: "https://www.instagram.com/bh.asst",
    location: "Zenica • ZEDP",
    tags: ["#GUMMIBojanka", "#DjecaBiH", "#Kreativnost", "#BesplatnoPreuzimanje"],
    comments: [
      {
        id: "c4",
        author: "leila_mami_blog",
        text: "Isprintali smo za vikend, djeca su oduševljena likom Gummia! ❤️",
        timeAgo: "5 dana"
      }
    ]
  },
  {
    id: "post-ornamenti-4",
    image: "/images/ornamenti_bosne.jpg",
    caption: "Monumentalna baština srednjovjekovne Bosne u digitalnom kodu 🏛️✨ Digitalna kolekcija 'Ornamenti Bosne' donosi vektorske simbole stećaka za moderne dizajnere, veb projekte i edukaciju. Spoj tradicije i cyber tehnologije.",
    category: "stecak",
    categoryLabel: "Kultura & Stećci",
    likes: 268,
    initialLiked: true,
    commentsCount: 35,
    date: "Prije 1 sedmicu",
    postUrl: "https://www.instagram.com/bh.asst",
    location: "Radimlja & Zgošća • BiH",
    tags: ["#OrnamentiBosne", "#Stećak", "#KulturnaBaština", "#WebDesign", "#BiHHistory"],
    comments: [
      {
        id: "c5",
        author: "tarik_arch",
        text: "Fantastična inicijativa za očuvanje vizuelnog identiteta Bosne!",
        timeAgo: "6 dana"
      }
    ]
  },
  {
    id: "post-gurushots-5",
    image: "/images/digitalni_spavac_bh_assistant.png",
    caption: "Spavač iz kamena budi se u digitalnom dobu 🌌 Yusufowych fotografija na globalnoj GuruShots platformi. Ponosno predstavljamo bh. motive i konceptualnu umjetnost na svjetskim izložbama fotografije. 📸🌐",
    category: "stecak",
    categoryLabel: "Fotografija & Umjetnost",
    likes: 197,
    initialLiked: false,
    commentsCount: 16,
    date: "Prije 10 dana",
    postUrl: "https://gurushots.com/yusufowych",
    location: "GuruShots Global Exhibition",
    tags: ["#GuruShots", "#Yusufowych", "#DigitalArt", "#BosnianArt", "#Photography"],
    comments: [
      {
        id: "c6",
        author: "photo_enthusiast_eu",
        text: "Stunning composition and atmosphere! 🌟",
        timeAgo: "8 dana"
      }
    ]
  },
  {
    id: "post-papirfinder-6",
    image: "/images/bh_papirfinder_mockup.jpg",
    caption: "Trebate općinski obrazac za Olovo, Gračanicu, Banja Luku ili Travnik? 📄🔍 BH PapirFinder štedi vaše vrijeme i novac — pronađite i preuzmite zvanične obrasce lokalne samouprave bez čekanja u redovima!",
    category: "alati",
    categoryLabel: "BH Digitalni Alati",
    likes: 156,
    initialLiked: false,
    commentsCount: 12,
    date: "Prije 2 sedmice",
    postUrl: "https://www.instagram.com/bh.asst",
    location: "Bosna i Hercegovina",
    tags: ["#PapirFinder", "#eUprava", "#LokalnaSamouprava", "#BiHServisi"],
    comments: [
      {
        id: "c7",
        author: "dzenan_bih",
        text: "Korisno i pregledno, posebno za ljude u dijaspori kojima trebaju formulari.",
        timeAgo: "12 dana"
      }
    ]
  }
];

