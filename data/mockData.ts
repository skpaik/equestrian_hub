import { VideoContent, NewsArticle, LiveEvent, Event, Course, MarketplaceItem, Horse } from '@/types';

export const mockVideos: VideoContent[] = [
  {
    id: '1',
    title: 'Advanced Dressage Training Techniques',
    description: 'Learn professional dressage techniques from world-class trainers',
    thumbnail: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg',
    duration: '15:30',
    category: 'Training',
    tags: ['dressage', 'advanced', 'technique'],
    views: 12500,
    publishedAt: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Horse Care Fundamentals',
    description: 'Essential knowledge for proper horse care and maintenance',
    thumbnail: 'https://images.pexels.com/photos/1996334/pexels-photo-1996334.jpeg',
    duration: '22:15',
    category: 'Care',
    tags: ['basics', 'care', 'health'],
    views: 8750,
    publishedAt: '2024-01-12',
    featured: false,
  },
  {
    id: '3',
    title: 'Jumping Competition Preparation',
    description: 'Prepare your horse for competitive jumping events',
    thumbnail: 'https://images.pexels.com/photos/1996335/pexels-photo-1996335.jpeg',
    duration: '18:45',
    category: 'Competition',
    tags: ['jumping', 'competition', 'preparation'],
    views: 15200,
    publishedAt: '2024-01-10',
    featured: true,
  }
];

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'World Equestrian Games 2024: Breaking Records and Hearts',
    excerpt: 'This year\'s World Equestrian Games showcased unprecedented talent and emotional moments that will be remembered for years to come.',
    content: 'Full article content would go here...',
    featuredImage: 'https://images.pexels.com/photos/1996336/pexels-photo-1996336.jpeg',
    category: 'Competition',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    publishedAt: '2024-01-18',
    readTime: 5,
    featured: true,
  },
  {
    id: '2',
    title: 'New Training Facility Opens in Kentucky',
    excerpt: 'State-of-the-art equestrian facility brings world-class training opportunities to the heart of horse country.',
    content: 'Full article content would go here...',
    featuredImage: 'https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg',
    category: 'Facilities',
    author: {
      name: 'Mike Davis',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    publishedAt: '2024-01-16',
    readTime: 3,
    featured: false,
  }
];

export const mockLiveEvents: LiveEvent[] = [
  {
    id: '1',
    title: 'Live Training Session: Advanced Dressage',
    description: 'Join our expert trainer for an interactive dressage session',
    thumbnail: 'https://images.pexels.com/photos/1996338/pexels-photo-1996338.jpeg',
    startTime: '2024-02-01T14:00:00Z',
    endTime: '2024-02-01T16:00:00Z',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'International Jumping Championship',
    description: 'Watch the world\'s best riders compete in real-time',
    thumbnail: 'https://images.pexels.com/photos/33663010/pexels-photo-33663010.jpeg',
    startTime: '2024-01-25T18:00:00Z',
    endTime: '2024-01-25T21:00:00Z',
    status: 'live',
    viewers: 2350,
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Equestrian Festival',
    description: 'Three-day festival featuring competitions, exhibitions, and educational workshops',
    date: '2024-04-15',
    time: '09:00',
    location: 'Wellington Equestrian Center, FL',
    image: 'https://images.pexels.com/photos/31372577/pexels-photo-31372577.jpeg',
    category: 'Festival',
    price: 45,
    capacity: 500,
    registered: 234,
  },
  {
    id: '2',
    title: 'Beginner Riding Workshop',
    description: 'Learn the basics of horseback riding in a safe, supportive environment',
    date: '2024-03-08',
    time: '10:00',
    location: 'Sunshine Stables, CA',
    image: 'https://images.pexels.com/photos/1996341/pexels-photo-1996341.jpeg',
    category: 'Workshop',
    price: 75,
    capacity: 20,
    registered: 16,
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Horsemanship Mastery',
    description: 'Comprehensive course covering all aspects of horsemanship from beginner to advanced level',
    thumbnail: 'https://images.pexels.com/photos/33714355/pexels-photo-33714355.jpeg',
    instructor: {
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/594421/pexels-photo-594421.jpeg',
      bio: 'Professional equestrian with 20+ years of experience'
    },
    duration: '12 weeks',
    lessons: 36,
    level: 'beginner',
    price: 299,
    rating: 4.9,
    enrollments: 1247,
  },
  {
    id: '2',
    title: 'Advanced Dressage Techniques',
    description: 'Master the art of dressage with advanced techniques and professional guidance',
    thumbnail: 'https://images.pexels.com/photos/7882395/pexels-photo-7882395.jpeg',
    instructor: {
      name: 'Hans Mueller',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Olympic dressage coach and former competitor'
    },
    duration: '8 weeks',
    lessons: 24,
    level: 'advanced',
    price: 499,
    rating: 4.8,
    enrollments: 567,
  }
];

export const mockMarketplaceItems: MarketplaceItem[] = [
  {
    id: '1',
    title: 'Professional Dressage Saddle',
    description: 'High-quality leather dressage saddle, barely used, excellent condition',
    price: 2500,
    images: ['https://images.pexels.com/photos/5368700/pexels-photo-5368700.jpeg'],
    category: 'Saddles',
    condition: 'excellent',
    location: 'Kentucky, USA',
    seller: {
      name: 'Jennifer Adams',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
      rating: 4.9,
    },
    createdAt: '2024-01-15',
  }
];

export const mockHorses: Horse[] = [
  {
    id: '1',
    name: 'Thunder\'s Legacy',
    breed: 'Thoroughbred',
    age: 5,
    gender: 'stallion',
    color: 'Bay',
    price: 45000,
    images: ['https://images.pexels.com/photos/1996345/pexels-photo-1996345.jpeg'],
    description: 'Exceptional thoroughbred with excellent bloodlines and proven racing record',
    location: 'Kentucky, USA',
    owner: {
      name: 'Blue Ridge Farms',
      contact: '+1-555-0123'
    },
    pedigree: {
      sire: 'Lightning Strike',
      dam: 'Royal Thunder'
    },
    achievements: ['1st Place Kentucky Derby Qualifier', '2nd Place Preakness Stakes']
  }
];