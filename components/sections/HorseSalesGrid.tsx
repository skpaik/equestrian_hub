'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin, DollarSign, Award, Info } from 'lucide-react';
import { Horse } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface HorseSalesGridProps {
  horses: Horse[];
  title?: string;
  showFilters?: boolean;
}

export function HorseSalesGrid({ horses, title = "Horses for Sale", showFilters = true }: HorseSalesGridProps) {
  const [filteredHorses, setFilteredHorses] = useState(horses);
  const [selectedBreed, setSelectedBreed] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [ageRange, setAgeRange] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const breeds = ['all', ...Array.from(new Set(horses.map(horse => horse.breed)))];
  const genders = ['all', 'stallion', 'mare', 'gelding'];
  const ageRanges = [
    { label: 'All Ages', value: 'all' },
    { label: 'Young (2-5 years)', value: '2-5' },
    { label: 'Prime (6-12 years)', value: '6-12' },
    { label: 'Mature (13+ years)', value: '13+' }
  ];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $10k', value: '0-10000' },
    { label: '$10k - $25k', value: '10000-25000' },
    { label: '$25k - $50k', value: '25000-50000' },
    { label: 'Over $50k', value: '50000+' }
  ];

  const handleFilter = (breed: string, gender: string, age: string, price: string) => {
    let filtered = horses;

    if (breed !== 'all') {
      filtered = filtered.filter(horse => horse.breed === breed);
    }

    if (gender !== 'all') {
      filtered = filtered.filter(horse => horse.gender === gender);
    }

    if (age !== 'all') {
      const [min, max] = age.split('-').map(a => a === '' ? Infinity : parseInt(a));
      if (age === '13+') {
        filtered = filtered.filter(horse => horse.age >= 13);
      } else {
        filtered = filtered.filter(horse => horse.age >= min && horse.age <= max);
      }
    }

    if (price !== 'all') {
      const [min, max] = price.split('-').map(p => p === '' ? Infinity : parseInt(p));
      if (price === '50000+') {
        filtered = filtered.filter(horse => horse.price >= 50000);
      } else {
        filtered = filtered.filter(horse => horse.price >= min && horse.price <= max);
      }
    }

    setFilteredHorses(filtered);
  };

  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'stallion': return 'bg-red-100 text-red-800';
      case 'mare': return 'bg-pink-100 text-pink-800';
      case 'gelding': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect equine partner from our curated selection of quality horses
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
            {/* Breed Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Breed:</span>
              {breeds.map((breed) => (
                <Button
                  key={breed}
                  variant={selectedBreed === breed ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedBreed(breed);
                    handleFilter(breed, selectedGender, ageRange, priceRange);
                  }}
                  className="capitalize"
                >
                  {breed}
                </Button>
              ))}
            </div>

            {/* Gender Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Gender:</span>
              {genders.map((gender) => (
                <Button
                  key={gender}
                  variant={selectedGender === gender ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedGender(gender);
                    handleFilter(selectedBreed, gender, ageRange, priceRange);
                  }}
                  className="capitalize"
                >
                  {gender}
                </Button>
              ))}
            </div>

            {/* Age Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Age:</span>
              {ageRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={ageRange === range.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setAgeRange(range.value);
                    handleFilter(selectedBreed, selectedGender, range.value, priceRange);
                  }}
                >
                  {range.label}
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
                    handleFilter(selectedBreed, selectedGender, ageRange, range.value);
                  }}
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Horses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHorses.map((horse) => (
            <Card key={horse.id} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={horse.images[0]}
                    alt={horse.name}
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
                  
                  <Badge className={`absolute top-2 left-2 ${getGenderColor(horse.gender)}`}>
                    {horse.gender}
                  </Badge>

                  {horse.achievements && horse.achievements.length > 0 && (
                    <Badge className="absolute top-12 left-2 bg-yellow-600">
                      <Award className="h-3 w-3 mr-1" />
                      Champion
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">
                      <Link href={`/horse-sales/${horse.id}`}>
                        {horse.name}
                      </Link>
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        ${horse.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Breed:</span>
                      <p className="font-medium">{horse.breed}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Age:</span>
                      <p className="font-medium">{horse.age} years</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Color:</span>
                      <p className="font-medium">{horse.color}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Gender:</span>
                      <p className="font-medium capitalize">{horse.gender}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {horse.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {horse.location}
                  </div>

                  {/* Pedigree Info */}
                  {horse.pedigree && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-2 flex items-center">
                        <Info className="h-4 w-4 mr-1" />
                        Pedigree
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Sire:</span>
                          <p className="font-medium">{horse.pedigree.sire}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Dam:</span>
                          <p className="font-medium">{horse.pedigree.dam}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {horse.achievements && horse.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        Achievements
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {horse.achievements.slice(0, 2).map((achievement, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Contact Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{horse.owner.name}</p>
                      <p className="text-xs text-gray-500">{horse.owner.contact}</p>
                    </div>
                    
                    <Button asChild>
                      <Link href={`/horse-sales/${horse.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHorses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No horses found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedBreed('all');
                setSelectedGender('all');
                setAgeRange('all');
                setPriceRange('all');
                setFilteredHorses(horses);
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