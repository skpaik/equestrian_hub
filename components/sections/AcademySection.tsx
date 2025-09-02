'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Users, BookOpen, Play, Award } from 'lucide-react';
import { Course } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface AcademySectionProps {
  courses: Course[];
  title?: string;
  showFilters?: boolean;
}

export function AcademySection({ courses, title = "Online Academy", showFilters = true }: AcademySectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];
  const categories = ['all', ...Array.from(new Set(courses.map(course => course.title.split(' ')[0])))];
  
  const filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    return levelMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from world-class instructors with our comprehensive online courses. 
            From beginner fundamentals to advanced competition techniques.
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="text-sm font-medium text-gray-700 self-center mr-2">Level:</span>
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className="capitalize"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                    <Button
                      size="lg"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      asChild
                    >
                      <Link href={`/academy/courses/${course.id}`}>
                        <Play className="h-5 w-5 mr-2" />
                        Preview Course
                      </Link>
                    </Button>
                  </div>
                  
                  <Badge className={`absolute top-4 left-4 ${getLevelColor(course.level)}`}>
                    {course.level}
                  </Badge>
                  
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${course.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/academy/courses/${course.id}`}>
                      {course.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  {/* Instructor */}
                  <div className="flex items-center mb-4">
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-sm">{course.instructor.name}</p>
                      <p className="text-xs text-gray-500">Instructor</p>
                    </div>
                  </div>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {course.enrollments.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 fill-current text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  {/* Enrollment Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Popularity</span>
                      <span className="text-gray-800">{Math.min(100, (course.enrollments / 50))}%</span>
                    </div>
                    <Progress value={Math.min(100, (course.enrollments / 50))} className="h-2" />
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link href={`/academy/courses/${course.id}`}>
                      Enroll Now - ${course.price}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Courses Found</h3>
            <p className="text-gray-600">No courses match your current filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}