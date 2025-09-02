'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Clock, Eye, Filter } from 'lucide-react';
import { VideoContent } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface VideoGridProps {
  videos: VideoContent[];
  title?: string;
  showFilters?: boolean;
}

export function VideoGrid({ videos, title = "Video Content", showFilters = true }: VideoGridProps) {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...Array.from(new Set(videos.map(video => video.category)))];

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    filterVideos(category, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterVideos(selectedCategory, term);
  };

  const filterVideos = (category: string, search: string) => {
    let filtered = videos;

    if (category !== 'all') {
      filtered = filtered.filter(video => video.category === category);
    }

    if (search) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.description.toLowerCase().includes(search.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }

    setFilteredVideos(filtered);
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
                <Input
                  type="search"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full sm:w-64"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilter(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                    <Button
                      size="lg"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      asChild
                    >
                      <Link href={`/videos/${video.id}`}>
                        <Play className="h-6 w-6 mr-2" />
                        Play
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                  
                  {video.featured && (
                    <Badge className="absolute top-2 left-2 bg-red-600">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/videos/${video.id}`}>
                      {video.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {video.views.toLocaleString()} views
                    </div>
                    <Badge variant="secondary">{video.category}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {video.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}