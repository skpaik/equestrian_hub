'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Users, Calendar, Clock, Radio } from 'lucide-react';
import { LiveEvent } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface LiveVideoSectionProps {
  events: LiveEvent[];
  title?: string;
}

export function LiveVideoSection({ events, title = "Live & Upcoming Events" }: LiveVideoSectionProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const liveEvents = events.filter(event => event.status === 'live');
  const upcomingEvents = events.filter(event => event.status === 'upcoming');

  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <section className="py-12 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our live streams and don't miss upcoming events. Watch expert training sessions, 
            competitions, and educational content in real-time.
          </p>
        </div>

        {/* Live Events */}
        {liveEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full mr-4">
                <Radio className="h-4 w-4 mr-2 animate-pulse" />
                LIVE NOW
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Currently Broadcasting</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {liveEvents.map((event) => (
                <Card key={event.id} className="relative group hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={event.thumbnail}
                        alt={event.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                          <Link href={`/live/${event.id}`}>
                            <Play className="h-6 w-6 mr-2" />
                            Watch Live
                          </Link>
                        </Button>
                      </div>
                      
                      {/* Live Indicator */}
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                        LIVE
                      </div>
                      
                      {/* Viewer Count */}
                      {event.viewers && (
                        <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.viewers.toLocaleString()}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-red-600 transition-colors">
                        <Link href={`/live/${event.id}`}>
                          {event.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Started: {formatEventTime(event.startTime)}
                        </div>
                        <Badge className="bg-red-100 text-red-800">
                          Live Stream
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 mr-3 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={event.thumbnail}
                        alt={event.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="lg"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          asChild
                        >
                          <Link href={`/events/${event.id}`}>
                            <Calendar className="h-5 w-5 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                      
                      <Badge className="absolute top-4 left-4 bg-blue-600">
                        Upcoming
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        <Link href={`/events/${event.id}`}>
                          {event.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {formatEventTime(event.startTime)}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/events/${event.id}`}>
                            Remind Me
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Events State */}
        {liveEvents.length === 0 && upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Scheduled</h3>
            <p className="text-gray-600">Check back soon for upcoming live events and broadcasts.</p>
          </div>
        )}
      </div>
    </section>
  );
}