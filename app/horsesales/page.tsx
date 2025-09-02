import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HorseSalesGrid } from '@/components/sections/HorseSalesGrid';
import { mockHorses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Search, Award } from 'lucide-react';
import Link from 'next/link';

const horseSalesNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Browse Horses', href: '/browse' },
  { name: 'Search', href: '/search' },
  { name: 'List Horse', href: '/list' },
  { name: 'Resources', href: '/resources' },
  { 
    name: 'More', 
    href: '#',
    children: [
      { name: 'Main Site', href: '/' },
      { name: 'Marketplace', href: '/marketplace' },
      { name: 'Contact', href: '/contact' }
    ]
  }
];

export default function HorseSalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={horseSalesNavigation} siteName="EquiSales" primaryColor="purple" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Horse
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
              Connect with reputable breeders and sellers. Discover quality horses 
              with verified pedigrees and health records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/browse">
                  <Search className="h-5 w-5 mr-2" />
                  Browse Horses
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                <Link href="/list">
                  List Your Horse
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose EquiSales?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
                <p className="text-gray-600 text-sm">All horses come with verified documentation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Bloodlines</h3>
                <p className="text-gray-600 text-sm">Champion bloodlines and proven genetics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Trusted Sellers</h3>
                <p className="text-gray-600 text-sm">Connect with reputable breeders and trainers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Advanced Search</h3>
                <p className="text-gray-600 text-sm">Find horses by breed, age, discipline, and more</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Horses */}
        <HorseSalesGrid horses={mockHorses} title="Featured Horses" showFilters={true} />

        {/* Stats Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-gray-600">Horses Listed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
                <p className="text-gray-600">Happy Buyers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Your Dream Horse Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Browse our extensive collection of quality horses or list your own
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/browse">
                  Browse All Horses
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources">
                  Buying Guide
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer navigation={horseSalesNavigation} siteName="EquiSales" primaryColor="purple" />
    </div>
  );
}