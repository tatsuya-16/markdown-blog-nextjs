import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Post } from "../../../app/interfaces/post"
import Link from 'next/link';
import DateFormatter from './date-formatter';


type PostCardProps = {
    postData: Post;
};

const PostCard = async ({ postData }: PostCardProps) => { 
  return (
    <Card>
        <Link href={`/blogs/${postData.slug}`}>
            <CardHeader>
                <CardTitle>{postData.title}</CardTitle>
                <CardDescription>
                    <DateFormatter dateString={postData.date} />
                </CardDescription>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Link>
    </Card>
  )
}

export default PostCard;