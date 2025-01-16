import { notFound } from "next/navigation";
import { getPostBySlug } from "../../lib/api";
import markdownToHtml from 'zenn-markdown-html';
import { BlogBody } from "@/components/Base/blog/BlogBody";
import { BlogHeader } from "../../../components/Base/blog/BlogHeader";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

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

type Params = {
  params: Promise<{
    slug: string;
  }>;
};