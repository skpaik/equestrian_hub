import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AcademySection } from '@/components/sections/AcademySection';
import { mockCourses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Users, Star } from 'lucide-react';
import Link from 'next/link';

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

export default function AcademyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={mainNavigation} siteName="EquestrianHub" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Equestrian Academy
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Master the art of horsemanship with our comprehensive online courses. 
              Learn from world-class instructors at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#courses">
                  Browse Courses
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/academy/instructors">
                  Meet Instructors
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Academy?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Instructors</h3>
                <p className="text-gray-600 text-sm">Learn from Olympic champions and world-renowned trainers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Comprehensive Content</h3>
                <p className="text-gray-600 text-sm">From basics to advanced techniques across all disciplines</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community Support</h3>
                <p className="text-gray-600 text-sm">Connect with fellow riders and get personalized feedback</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Flexible Learning</h3>
                <p className="text-gray-600 text-sm">Learn at your own pace with lifetime access to content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <div id="courses">
          <AcademySection courses={mockCourses} showFilters={true} />
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of riders who have improved their skills with our academy
            </p>
            <Button size="lg" asChild>
              <Link href="/academy/courses">
                View All Courses
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer navigation={mainNavigation} siteName="EquestrianHub" />
    </div>
  );
}