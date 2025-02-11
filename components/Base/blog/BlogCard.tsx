import React from 'react'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Blog } from "../../../app/interfaces/blog"
import Link from 'next/link';
import Image from "next/image";

type BlogCardProps = {
    blogData: Blog;
};

const BlogCard = async ({ blogData }: BlogCardProps) => {
  return (
    <div>
      <Card>
        <Link href={`/blogs/${blogData.slug}`}>
          <div style={{ position: 'relative', width: '100%', height: '150px' }}>
            <Image
              src={blogData.image}
              alt="Tatsuya Abe"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{blogData.title}</CardTitle>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
          {blogData.tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
            </div>
            <CardDescription>{blogData.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{blogData.abstract}</p>
          </CardContent>
        </Link>
      </Card>
    </div>
  )
}

export default BlogCard;