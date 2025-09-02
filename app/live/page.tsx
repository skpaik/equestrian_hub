import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LiveVideoSection } from '@/components/sections/LiveVideoSection';
import { mockLiveEvents } from '@/data/mockData';

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
      { name: 'Marketplace', href: 'https://marketplace.domain.com' },
      { name: 'Horse Sales', href: 'https://horsesales.domain.com' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ]
  }
];

export default function LivePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={mainNavigation} siteName="EquestrianHub" />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-red-50 to-pink-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Live Events & Streams
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join live training sessions, competitions, and educational content. 
              Never miss a moment of equestrian excellence.
            </p>
          </div>
        </section>

        {/* Live Video Section */}
        <LiveVideoSection events={mockLiveEvents} />
      </main>

      <Footer navigation={mainNavigation} siteName="EquestrianHub" />
    </div>
  );
}