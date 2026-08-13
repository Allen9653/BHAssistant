import React from 'react';
import { NewsArticle } from '../types';

export function normalizeImageUrl(url?: string): string {
  if (!url) return '/images/scena_cover.jpg';
  let clean = url;
  if (clean.includes('/src/assets/images/')) {
    clean = clean.replace('/src/assets/images/', '/images/');
  }
  if (clean.includes('src/assets/images/')) {
    clean = clean.replace('src/assets/images/', '/images/');
  }
  return clean;
}

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl?: string) {
  const target = e.currentTarget;
  const currentSrc = target.src;
  
  if (currentSrc.includes('/images/') && !target.dataset.retried) {
    target.dataset.retried = '1';
    target.src = currentSrc.replace('/images/', '/assets/images/');
    return;
  }
  
  if (currentSrc.includes('/assets/images/') && target.dataset.retried === '1') {
    target.dataset.retried = '2';
    // Try relative path without leading slash for local zip/file views
    const parts = currentSrc.split('/assets/images/');
    if (parts.length > 1) {
      target.src = `./images/${parts[1]}`;
      return;
    }
  }

  if (fallbackUrl) {
    target.src = fallbackUrl;
  } else {
    // Authentic fallback to official logo
    target.src = '/images/bh_assistant_logo.jpg';
  }
}

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: "news-lovable-app-of-week",
    title: "BH KONVER izglasana za Aplikaciju Sedmice! Lovable gradi i finansira iOS & Android app",
    slug: "bh-konver-aplikacija-sedmice-lovable-podrska",
    category: "BH KONVER & Priznanja",
    date: "12. August 2026.",
    author: "B&H Assistant Redakcija",
    excerpt: "Novi fantastičan uspjeh za B&H Assistant d.o.o. Zenica! Naš autorski softverski alat BH KONVER izglasan je za Aplikaciju Sedmice, pri čemu tim Lovable u potpunosti preuzima i finansira izradu nativnih iOS i Android aplikacija.",
    content: "Zadovoljstvo nam je objaviti izuzetne vijesti za našu firmu B&H Assistant d.o.o. Zenica i sve korisnike naših digitalnih alata!\n\nBH KONVER je zvanično izglasan za Aplikaciju Sedmice! Kao rezultat ove pobjede i prepoznavanja kvaliteta našeg softvera, renomirana platforma i tim Lovable osiguraće kompletan razvoj i finansiranje zvaničnih mobilnih aplikacija za iOS (Apple App Store) i Android (Google Play Store) uređaje.\n\nOvo partnerstvo će omogućiti da BH KONVER postane još pristupačniji građanima u BiH i dijaspori, nudeći brz i siguran rad pri generisanju pravnih izjava i proračuna direktno na pametnim telefonima.\n\nZahvaljujemo se svim korisnicima na podršci i glasovima!",
    imageUrl: "/images/bravo_winner_bh_konver_1786548030796.jpg",
    published: true,
    tags: ["BH Konver", "Aplikacija Sedmice", "Lovable", "iOS", "Android", "B&H Assistant"]
  },
  {
    id: "news-bravo-winner",
    title: "BH KONVER – Pobjednik prvog Bravo takmičenja!",
    slug: "bh-konver-pobjednik-prvog-bravo-takmicenja",
    category: "BH KONVER & Priznanja",
    date: "12. August 2026.",
    author: "B&H Assistant Redakcija",
    excerpt: "BH KONVER, aplikacija koju razvija B&H Assistant d.o.o., proglašena je pobjednikom prvog Bravo takmičenja! Priznanje da naš rad na digitalnim alatima ima međunarodni odjek.",
    content: "BH KONVER, aplikacija koju razvija B&H Assistant d.o.o., proglašena je pobjednikom prvog Bravo takmičenja.\n\nOvo priznanje je dokaz da naš rad na digitalnim alatima, prilagođenim socio-ekonomskom i kulturnom kontekstu BiH, ima međunarodni odjek.\n\nBravo nam je omogućio da pokažemo snagu domaćih ideja i da ih pretvorimo u globalno relevantne aplikacije.\n\n👉 Saznajte više o BH KONVER i našim projektima na www.bh-assistant.ba",
    imageUrl: "/images/bravo_winner_bh_konver_1786548030796.jpg",
    published: true,
    tags: ["BH Konver", "Bravo Winner", "Priznanje", "B&H Assistant", "Nagrađena Aplikacija"]
  },
  {
    id: "news-hackme",
    title: "Jeste li čuli za HackMe?!",
    slug: "jeste-li-culi-za-hackme-tryhackme",
    category: "Sajber Sigurnost & IT",
    date: "9. August 2026.",
    author: "B&H Assistant Redakcija",
    excerpt: "TryHackMe je platforma za obuku iz sajber sigurnosti bazirana na pretraživaču, sa edukativnim sadržajem koji pokriva sve nivoe znanja — od potpunih početnika do prekaljenih hakera.",
    content: "TryHackMe je platforma za obuku iz sajber sigurnosti bazirana na pretraživaču, sa edukativnim sadržajem koji pokriva sve nivoe znanja — od potpunih početnika do prekaljenih hakera.\n\nNaši suosnivači, Ben Spring i Ashu Savani, pokrenuli su TryHackMe nakon što su shvatili koliko je ova industrija nepristupačna. Učenje sajber sigurnosti je ranije podrazumijevalo pristup „crne kutije“ uz nedostatak vodiča i izazova, zbog čega je industrija bila nevjerovatno teška za ulazak, a onima koji su već bili na tržištu rada bilo je teško da stalno usavršavaju svoja znanja. Tu mi stupamo na scenu!\n\nInovativni pristup\nPrije TryHackMe-a, učenje sajber sigurnosti imalo je teorijski pristup koji se nije mogao primijeniti u praksi u scenarijima iz stvarnog svijeta. Polaznicima je ostavljalo mnogo praznina koje su morali sami popunjavati, a pristup nije bio privlačan niti interaktivan.\n\nKorisnicima dajemo sopstvenu ličnu virtuelnu mašinu — koja se pokreće jednim klikom na dugme. Ovo omogućava polaznicima da aktivno hakerišu i brane mašine u praksi, prateći korake koje će preduzimati u scenarijima iz stvarnog svijeta i radnim ulogama. Donosimo immerzivnu obuku, prilagođenu potrebama tržišta i lakše usvojivu kroz učenje u praksi. Istražite na : https://tryhackme.com/",
    imageUrl: "/images/tryhackme_cybersecurity_1786295930296.jpg",
    published: true,
    tags: ["TryHackMe", "Sajber Sigurnost", "IT Obuka", "Hakeri", "Edukacija"]
  },
  {
    id: "news-1",
    title: "Predstavljanje BH KONVER alata i zakup zvanične domene www.bh-konver.ba",
    slug: "bh-konver-predstavljanje-domena",
    category: "BH KONVER & IT",
    date: "30. Juli 2026.",
    author: "B&H Assistant Redakcija",
    excerpt: "Objavljen zvanični prezentacijski video BH KONVER alata (BH.KONVER.VIDEO.pokaz.mp4)! U toku je završno usklađivanje prijevoda za njemački, engleski, turski i ćirilicu te priprema za prelazak na primarnu domenu www.bh-konver.ba.",
    content: "Zadovoljstvo nam je najaviti intenzivne završne pripreme za zvanično lansiranje BH KONVER platforme na novoj domeni www.bh-konver.ba.\n\nKroz originalni prezentacijski video snimak (BH.KONVER.VIDEO.pokaz.mp4) korisnici se mogu direktno upoznati sa funkcionalnostima generisanja ovjerenih pravnih izjava pod kaznenom i materijalnom odgovornošću, kalkulacijama jedinica te brzom izvozu u PDF formate.\n\nTrenutno naš tim u saradnji sa razvojnim okruženjem privodi kraju kompletiranje višejezičnog prijevoda na svim podstranicama (engleski, njemački, turski i ćirilica), čime će BH KONVER postati dostupan široj zajednici u BiH i dijaspori.\n\nPogledajte zvanični prezentacijski video snimak klikom na dugme u nastavku članka!",
    imageUrl: "/images/bh_konver_mockup_1786292760938.jpg",
    published: true,
    tags: ["BH Konver", "B&H Assistant", "Novi Alati", "Video Prezentacija", "e-Uprava"],
    hasVideo: true,
    videoFileName: "BH.KONVER.VIDEO.pokaz.mp4"
  },
  {
    id: "news-2",
    title: "Podijeljeno prvih 300 printanih primjeraka urbanog magazina SCENA+",
    slug: "scena-magazin-print-izdanje-podjela",
    category: "SCENA+ Magazin",
    date: "25. Juli 2026.",
    author: "Alen Jusufović, Glavni urednik",
    excerpt: "Prvo štampano izdanje SCENA+ magazina sa temama iz bh. kulture, umjetnosti i arheologije uspješno je podijeljeno čitaocima u Zeničko-dobojskom kantonu i šire.",
    content: "Prvo fizičko štampano izdanje e-urban magazina SCENA+ naišlo je na izuzetan prijem publike. Podijeljeno je svih 300 pripremljenih printanih primjeraka!\n\nMagazin donosi priče o arheološkoj baštini BiH, umjetnosti Danila Kese ('Mrak koji svijetli'), craft pivarama, BCX krypto ekosistemu, kao i stručnim analizama učešća žena u bankarskom sektoru BiH.\n\nE-izdanje magazina ostaje besplatno dostupno za čitanje na našoj zvaničnoj platformi bh-assistant.ba.",
    imageUrl: "/images/scena_cover.jpg",
    published: true,
    tags: ["SCENA+", "Kultura", "Print", "Zenica"]
  },
  {
    id: "news-3",
    title: "Projekat ZENTAXI: Povezivanje vozača i putnika uz savremenu mobilnu aplikaciju",
    slug: "zentaxi-lokalni-gradski-prevoz",
    category: "ZENTAXI",
    date: "18. Juli 2026.",
    author: "Razvojni Tim ZENTAXI",
    excerpt: "ZENTAXI ulazi u novu fazu testiranja i širenja partnerstva sa taksi udruženjima i vozačima u Zenici i okolnim gradovima.",
    content: "ZENTAXI predstavlja odgovor na potrebe savremenog gradskog prevoza u Bosni i Hercegovini. Aplikacija omogućava brzu lokaciju najbližeg slobodnog taksi vozila, procjenu cijene vožnje prije polaska te direktnu komunikaciju sa vozačem.\n\nPozivamo sve taksi prijevoznike i samostalne poduzetnike da se pridruže mreži i iskoriste pogodnosti digitalne platforme B&H Assistant d.o.o.",
    imageUrl: "/images/zentaxi_app_1786292819027.jpg",
    published: true,
    tags: ["ZENTAXI", "Transport", "App", "Zenica"]
  }
];

const STORAGE_KEY = 'bh_assistant_news_articles';

export const getStoredNews = (): NewsArticle[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed: NewsArticle[] = JSON.parse(data);
      // Filter out news-4 Gummi article from stored news if present
      const filteredParsed = parsed.filter(a => a.id !== 'news-4' && !a.title.toLowerCase().includes('gummi učenje je zabava'));
      const parsedIds = new Set(filteredParsed.map(a => a.id));
      const missingInitial = INITIAL_NEWS.filter(a => !parsedIds.has(a.id));
      const combined = [...missingInitial, ...filteredParsed];

      return combined.map(art => {
        const initialMatch = INITIAL_NEWS.find(i => i.id === art.id);
        const defaultImage = initialMatch?.imageUrl || '/images/scena_print_cover_exact_1785477127597.jpg';
        
        let img = art.imageUrl;
        if (!img || img.length < 5 || img.includes('undefined') || img.includes('null')) {
          img = defaultImage;
        }

        if (art.id === 'news-1') {
          const news1Match = INITIAL_NEWS.find(i => i.id === 'news-1');
          return {
            ...art,
            title: "Predstavljanje BH KONVER alata i zakup zvanične domene www.bh-konver.ba",
            author: "B&H Assistant Redakcija",
            hasVideo: true,
            videoFileName: "BH.KONVER.VIDEO.pokaz.mp4",
            imageUrl: normalizeImageUrl(img),
            excerpt: art.excerpt && art.excerpt.includes("BH.KONVER.VIDEO.pokaz.mp4") ? art.excerpt : (news1Match?.excerpt || art.excerpt),
            content: art.content && art.content.includes("BH.KONVER.VIDEO.pokaz.mp4") ? art.content : (news1Match?.content || art.content)
          };
        }
        return {
          ...art,
          imageUrl: normalizeImageUrl(img)
        };
      });
    }
  } catch (e) {
    console.error("Greška pri učitavanju novosti iz local storage:", e);
  }
  return INITIAL_NEWS.map(art => ({ ...art, imageUrl: normalizeImageUrl(art.imageUrl) }));
};

export const saveNewsArticles = (articles: NewsArticle[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  } catch (e) {
    console.error("Greška pri spremanju novosti:", e);
  }
};

export const exportNewsForJoomla = (articles: NewsArticle[]) => {
  const exportData = {
    cms: "Joomla 5 / 4 Compatible Content",
    domain: "https://bh-assistant.ba",
    exportedAt: new Date().toISOString(),
    itemsCount: articles.length,
    articles: articles.map(art => ({
      title: art.title,
      alias: art.slug,
      category: art.category,
      created: art.date,
      created_by_alias: art.author,
      introtext: art.excerpt,
      fulltext: art.content,
      image: art.imageUrl,
      state: art.published ? 1 : 0,
      tags: art.tags || []
    }))
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bh_assistant_joomla_articles_export_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};
