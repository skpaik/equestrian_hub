export interface VideoContent {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  tags: string[];
  views: number;
  publishedAt: string;
  featured: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface LiveEvent {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  startTime: string;
  endTime: string;
  status: 'upcoming' | 'live' | 'ended';
  viewers?: number;
  streamUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  price?: number;
  capacity?: number;
  registered?: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
  };
  duration: string;
  lessons: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  rating: number;
  enrollments: number;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  condition: 'new' | 'used' | 'excellent';
  location: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  createdAt: string;
}

export interface Horse {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: 'stallion' | 'mare' | 'gelding';
  color: string;
  price: number;
  images: string[];
  description: string;
  location: string;
  owner: {
    name: string;
    contact: string;
  };
  pedigree?: {
    sire: string;
    dam: string;
  };
  achievements?: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface SubdomainConfig {
  name: string;
  domain: string;
  primaryColor: string;
  navigation: NavigationItem[];
}