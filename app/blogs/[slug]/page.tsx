import { notFound } from "next/navigation";
import { getPostBySlug } from "../../lib/api";
import markdownToHtml from "zenn-markdown-html";
import { BlogBody } from "@/components/Base/blog/BlogBody";
import { BlogHeader } from "../../../components/Base/blog/BlogHeader";
import TableOfContents from "@/components/Base/blog/TableOfContents";
import "zenn-content-css";

type Params = {
  params: Promise<{ slug: string }>;
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
      type: "article",
      images: [blog.image],
    },
    twitter: {
      card: "summary_large_image",
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

  const content = markdownToHtml(post.content);

  return (
    <div className="flex flex-col lg:flex-row">
      <main className="flex-1">
      <BlogHeader title={post.title} date={post.date} author={post.author} />
      <BlogBody content={content} />
      </main>
      <div className="lg:w-3/12 mt-4 lg:mt-0 lg:mr-4">
        <TableOfContents /> {/* Tocコンポーネントを追加 */}
      </div>
    </div>
  );
}
