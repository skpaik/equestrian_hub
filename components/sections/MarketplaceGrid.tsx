'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, MapPin, DollarSign, Filter, Search } from 'lucide-react';
import { MarketplaceItem } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface MarketplaceGridProps {
  items: MarketplaceItem[];
  title?: string;
  showFilters?: boolean;
}

export function MarketplaceGrid({ items, title = "Marketplace", showFilters = true }: MarketplaceGridProps) {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];
  const conditions = ['all', 'new', 'excellent', 'used'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $100', value: '0-100' },
    { label: '$100 - $500', value: '100-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: 'Over $1000', value: '1000+' }
  ];

  const handleFilter = (category: string, condition: string, search: string, price: string) => {
    let filtered = items;

    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }

    if (condition !== 'all') {
      filtered = filtered.filter(item => item.condition === condition);
    }

    if (search) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (price !== 'all') {
      const [min, max] = price.split('-').map(p => p === '' ? Infinity : parseInt(p));
      filtered = filtered.filter(item => {
        if (price === '1000+') return item.price >= 1000;
        return item.price >= min && (max === Infinity || item.price <= max);
      });
    }

    setFilteredItems(filtered);
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'bg-green-100 text-green-800';
      case 'excellent': return 'bg-blue-100 text-blue-800';
      case 'used': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h2>
          
          {showFilters && (
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleFilter(selectedCategory, selectedCondition, e.target.value, priceRange);
                  }}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    handleFilter(category, selectedCondition, searchTerm, priceRange);
                  }}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Condition Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Condition:</span>
              {conditions.map((condition) => (
                <Button
                  key={condition}
                  variant={selectedCondition === condition ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCondition(condition);
                    handleFilter(selectedCategory, condition, searchTerm, priceRange);
                  }}
                  className="capitalize"
                >
                  {condition}
                </Button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Price:</span>
              {priceRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={priceRange === range.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setPriceRange(range.value);
                    handleFilter(selectedCategory, selectedCondition, searchTerm, range.value);
                  }}
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  
                  <Badge className={`absolute top-2 left-2 ${getConditionColor(item.condition)}`}>
                    {item.condition}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/marketplace/items/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-lg font-bold text-green-600">
                      <DollarSign className="h-5 w-5 mr-1" />
                      {item.price.toLocaleString()}
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                  
                  {/* Seller Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={item.seller.avatar}
                        alt={item.seller.name}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.seller.name}</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                          <span className="text-xs text-gray-500">{item.seller.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button size="sm" asChild>
                      <Link href={`/marketplace/items/${item.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSearchTerm('');
                setPriceRange('all');
                setFilteredItems(items);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}