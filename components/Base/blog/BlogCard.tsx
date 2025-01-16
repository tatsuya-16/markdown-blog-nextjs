import React from 'react'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card"
import { Blog } from "../../../app/interfaces/blog"
import Link from 'next/link';
// import DateFormatter from './date-formatter';


type BlogCardProps = {
    blogData: Blog;
};

const BlogCard = async ({ blogData }: BlogCardProps) => { 
  return (
    <Card>
        <Link href={`/blogs/${blogData.slug}`}>
            <CardHeader>
            <CardTitle>{blogData.title}</CardTitle>
            <CardDescription>{blogData.date}</CardDescription>
            </CardHeader>
            <CardContent>
            <p>{blogData.abstract}</p>
            </CardContent>
            <CardFooter>
                <CardDescription>
                    {/* <DateFormatter dateString={postData.date} /> */}
                </CardDescription>
            </CardFooter>
        </Link>
    </Card>
  )
}

export default BlogCard;