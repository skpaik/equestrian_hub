import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NewsSection } from '@/components/sections/NewsSection';
import { mockNews } from '@/data/mockData';

const mainNavigation = [
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
      { name: 'Marketplace', href: '/marketplace' },
      { name: 'Horse Sales', href: '/horsesales' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ]
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={mainNavigation} siteName="EquestrianHub" />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Equestrian News
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay up-to-date with the latest news, events, and developments 
              in the equestrian world.
            </p>
          </div>
        </section>

        {/* News Section */}
        <NewsSection articles={mockNews} showFeatured={true} />
      </main>

      <Footer navigation={mainNavigation} siteName="EquestrianHub" />
    </div>
  );
}