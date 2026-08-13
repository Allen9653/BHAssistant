export interface DigitalTool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  badge: string;
  category: string;
  iconName: string;
  logoUrl?: string;
  image?: string;
  features: string[];
}

export interface DevelopmentProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  status: string;
  image: string;
  hasFreeDownload?: boolean;
  downloadUrl?: string;
  downloadTitle?: string;
  targetAudience: string;
  highlights: string[];
}

export interface MagazineEdition {
  title: string;
  subtitle: string;
  edition: string;
  date: string;
  url: string;
  coverImage?: string;
  topics: {
    category: string;
    title: string;
    desc: string;
  }[];
}

export interface AffiliateCourse {
  id: string;
  title: string;
  provider: string;
  badge: string;
  description: string;
  bullets: string[];
  affiliateUrl: string;
  category: string;
  featured: boolean;
  image: string;
}

export interface CompanyDetails {
  name: string;
  fullLegalName: string;
  city: string;
  postalCode: string;
  jib: string;
  mbs: string;
  motto: string;
  email: string;
  phone: string;
  address: string;
  facebookUrl: string;
  instagramHandle: string;
  instagramUrl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  published: boolean;
  tags?: string[];
  hasVideo?: boolean;
  videoFileName?: string;
  videoUrl?: string;
}
