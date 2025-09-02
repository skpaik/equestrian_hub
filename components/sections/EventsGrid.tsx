'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import { Event } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface EventsGridProps {
  events: Event[];
  title?: string;
  showFilters?: boolean;
}

export function EventsGrid({ events, title = "Upcoming Events", showFilters = true }: EventsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(events.map(event => event.category)))];
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatEventDate = (date: string, time: string) => {
    const eventDate = new Date(`${date}T${time}`);
    return {
      date: eventDate.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }),
      time: eventDate.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit' 
      })
    };
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h2>
          
          {showFilters && (
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const { date, time } = formatEventDate(event.date, event.time);
            const registrationPercentage = event.capacity && event.registered 
              ? (event.registered / event.capacity) * 100 
              : 0;

            return (
              <Card key={event.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                      <Button
                        size="lg"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        asChild
                      >
                        <Link href={`/events/${event.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                    
                    <Badge className="absolute top-4 left-4 bg-blue-600">
                      {event.category}
                    </Badge>
                    
                    {event.price && (
                      <Badge className="absolute top-4 right-4 bg-green-600">
                        ${event.price}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/events/${event.id}`}>
                        {event.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    {/* Event Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {date} at {time}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      
                      {event.capacity && event.registered && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-500">
                              <Users className="h-4 w-4 mr-2" />
                              Registration
                            </div>
                            <span className="text-gray-700 font-medium">
                              {event.registered}/{event.capacity}
                            </span>
                          </div>
                          <Progress value={registrationPercentage} className="h-2" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        {event.price && (
                          <div className="flex items-center text-green-600 font-semibold">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {event.price}
                          </div>
                        )}
                      </div>
                      
                      <Button asChild>
                        <Link href={`/events/${event.id}`}>
                          Register Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
            <p className="text-gray-600">No events match your current filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}