export interface SubdomainConfig {
  name: string;
  domain: string;
  primaryColor: string;
  navigation: Array<{
    name: string;
    href: string;
    children?: Array<{ name: string; href: string; }>;
  }>;
  theme: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    logo: string;
  };
}

export const subdomainConfigs: Record<string, SubdomainConfig> = {
  'www': {
    name: 'EquestrianHub',
    domain: 'www.domain.com',
    primaryColor: 'blue',
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Videos', href: '/videos' },
      { name: 'News', href: '/news' },
      { name: 'Live', href: '/live' },
      { name: 'Events', href: '/events' },
      { name: 'Academy', href: '/academy' },
      { 
        name: 'More', 
        href: '#',
        children: [
          { name: 'Marketplace', href: 'https://marketplace.domain.com' },
          { name: 'Horse Sales', href: 'https://horsesales.domain.com' },
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' }
        ]
      }
    ],
    theme: {
      colors: {
        primary: 'blue',
        secondary: 'purple',
        accent: 'green'
      },
      logo: 'E'
    }
  },
  'marketplace': {
    name: 'EquiMarket',
    domain: 'marketplace.domain.com',
    primaryColor: 'green',
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Browse', href: '/browse' },
      { name: 'Categories', href: '/categories' },
      { name: 'Sell', href: '/sell' },
      { name: 'My Account', href: '/account' },
      { 
        name: 'More', 
        href: '#',
        children: [
          { name: 'Main Site', href: 'https://www.domain.com' },
          { name: 'Horse Sales', href: 'https://horsesales.domain.com' },
          { name: 'Help', href: '/help' }
        ]
      }
    ],
    theme: {
      colors: {
        primary: 'green',
        secondary: 'blue',
        accent: 'orange'
      },
      logo: 'M'
    }
  },
  'horsesales': {
    name: 'EquiSales',
    domain: 'horsesales.domain.com',
    primaryColor: 'purple',
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Browse Horses', href: '/browse' },
      { name: 'Search', href: '/search' },
      { name: 'List Horse', href: '/list' },
      { name: 'Resources', href: '/resources' },
      { 
        name: 'More', 
        href: '#',
        children: [
          { name: 'Main Site', href: 'https://www.domain.com' },
          { name: 'Marketplace', href: 'https://marketplace.domain.com' },
          { name: 'Contact', href: '/contact' }
        ]
      }
    ],
    theme: {
      colors: {
        primary: 'purple',
        secondary: 'red',
        accent: 'yellow'
      },
      logo: 'H'
    }
  }
};

export function getSubdomainConfig(hostname: string): SubdomainConfig {
  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];
  
  // Default to www if subdomain not found or is localhost/development
  if (!subdomainConfigs[subdomain] || hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return subdomainConfigs['www'];
  }
  
  return subdomainConfigs[subdomain];
}

export function getCurrentSubdomain(): string {
  if (typeof window === 'undefined') return 'www';
  
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  
  return subdomain || 'www';
}