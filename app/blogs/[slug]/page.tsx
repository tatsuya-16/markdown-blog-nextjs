import { notFound } from "next/navigation";
import { getPostBySlug } from "../../lib/api";
import markdownToHtml from 'zenn-markdown-html';
import { BlogBody } from "@/components/Base/blog/BlogBody";
import { BlogHeader } from "../../../components/Base/blog/BlogHeader";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const blog = getPostBySlug(params.slug);

  return {
    title: blog.title,
    description: blog.abstract,
    openGraph: {
      title: blog.title,
      description: blog.abstract,
      type: 'article',
      images: [blog.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.abstract,
      images: [blog.image],
    },
  };
}

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <main>
        <BlogHeader
                title={post.title}
                date={post.date}
                author={post.author}
            />
        <BlogBody content={content}/>
    </main>
  );
}
