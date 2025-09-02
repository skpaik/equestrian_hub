import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EventsGrid } from '@/components/sections/EventsGrid';
import { mockEvents } from '@/data/mockData';

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

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={mainNavigation} siteName="EquestrianHub" />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Equestrian Events
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover upcoming competitions, workshops, and educational events. 
              Join the equestrian community and enhance your skills.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <EventsGrid events={mockEvents} showFilters={true} />
      </main>

      <Footer navigation={mainNavigation} siteName="EquestrianHub" />
    </div>
  );
}