"use client";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  categories: string[];
}

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="border-purple-500/20 overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.slice(0, 2).map((category, index) => (
            <Badge
              key={index}
              className="bg-purple-500/10 text-purple hover:bg-purple-500/20"
            >
              {category}
            </Badge>
          ))}
          {post.categories.length > 2 && (
            <Badge className="bg-purple-500/10 text-purple hover:bg-purple-500/20">
              +{post.categories.length - 2}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          asChild
          variant="ghost"
          className="text-purple hover:text-purple-300 hover:bg-purple-500/10 px-3"
        >
          <Link href={`#`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
