// import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../lib/api";
// import { CMS_NAME } from "@/lib/constants";
// import markdownToHtml from "../../lib/markdownToHtml";
import markdownToHtml from 'zenn-markdown-html';
import { PostBody } from "@/components/Base/post/PostBody";
// import Alert from "@/app/_components/alert";
// import Container from "@/app/_components/container";
// import Header from "@/app/_components/header";
// import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "../../../components/Base/post/PostHeader";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
        <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
            />
        <PostBody content={content}/>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

// export async function generateMetadata(props: Params): Promise<Metadata> {
//   const params = await props.params;
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

//   return {
//     title,
//     openGraph: {
//       title,
//       images: [post.ogImage.url],
//     },
//   };
// }

// export async function generateStaticParams() {
//   const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }