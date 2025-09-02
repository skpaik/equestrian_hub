import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MarketplaceGrid } from '@/components/sections/MarketplaceGrid';
import { mockMarketplaceItems } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Shield, Star, Truck } from 'lucide-react';
import Link from 'next/link';

const marketplaceNavigation = [
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
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={marketplaceNavigation} siteName="EquiMarket" primaryColor="green" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Equestrian Marketplace
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
              Buy and sell quality equestrian equipment, tack, and accessories. 
              Connect with riders and sellers in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/browse">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Browse Items
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link href="/sell">
                  Sell Your Items
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose EquiMarket?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Secure Transactions</h3>
                <p className="text-gray-600 text-sm">Protected payments and verified sellers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">Rated sellers and authentic products</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
                <p className="text-gray-600 text-sm">Thousands of items from trusted sellers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
                <p className="text-gray-600 text-sm">Quick delivery and local pickup options</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Items */}
        <MarketplaceGrid items={mockMarketplaceItems} title="Featured Items" showFilters={true} />

        {/* CTA Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Buying or Selling?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of equestrian enthusiasts and find exactly what you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/browse">
                  Browse All Items
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">
                  Start Selling
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer navigation={marketplaceNavigation} siteName="EquiMarket" primaryColor="green" />
    </div>
  );
}