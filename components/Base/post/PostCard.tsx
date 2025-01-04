import React from 'react'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
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
            <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
            <p>興味深いブログ記事の短い説明がここに入ります。</p>
            {/* <Button className="mt-4" variant="link">
                続きを読む
            </Button> */}
            </CardContent>
            <CardFooter>
                <CardDescription>
                    <DateFormatter dateString={postData.date} />
                </CardDescription>
            </CardFooter>
        </Link>
    </Card>
  )
}

export default PostCard;