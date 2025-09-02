import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VideoGrid } from '@/components/sections/VideoGrid';
import { NewsSection } from '@/components/sections/NewsSection';
import { LiveVideoSection } from '@/components/sections/LiveVideoSection';
import { mockVideos, mockNews, mockLiveEvents } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Play, Calendar, BookOpen, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={mainNavigation} siteName="EquestrianHub" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg"
              alt="Equestrian hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Master the Art of
              <span className="block text-blue-400">Equestrianism</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your comprehensive platform for equestrian training, competitions, and community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/videos">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Videos
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link href="/academy">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything Equestrian</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From beginner lessons to advanced competition training, live events to marketplace - 
                we've got everything you need for your equestrian journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Video Library</h3>
                <p className="text-gray-600 text-sm">Extensive collection of training videos and tutorials</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Live Events</h3>
                <p className="text-gray-600 text-sm">Join live streams and virtual competitions</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Academy</h3>
                <p className="text-gray-600 text-sm">Structured courses for all skill levels</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Trophy className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Competitions</h3>
                <p className="text-gray-600 text-sm">Track events and competition schedules</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Video Section */}
        <LiveVideoSection events={mockLiveEvents} />

        {/* Featured Videos */}
        <VideoGrid 
          videos={mockVideos.filter(video => video.featured)} 
          title="Featured Videos"
          showFilters={false}
        />

        {/* Latest News */}
        <NewsSection 
          articles={mockNews} 
          title="Latest News" 
          limit={6}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Your Riding to the Next Level?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of riders who trust EquestrianHub for their training and education needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/academy">
                  Start Your Journey
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer navigation={mainNavigation} siteName="EquestrianHub" />
    </div>
  );
}