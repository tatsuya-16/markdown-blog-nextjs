
import { getAllPosts } from "../lib/api";
import PostCard from "../../components/Base/post/PostCard";



export default function Blogs() {

    const allPosts = getAllPosts();
    // console.log(allPosts);

    // const heroPost = allPosts[0];

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-4 py-4 gap-4 font-[family-name:var(--font-geist-sans)]">
        {allPosts.map((post) => (
            <PostCard key={post.slug} postData={post} />
        ))}
          </div>
    );
    
}// import Avatar from "@/app/_components/avatar";
// import CoverImage from "@/app/_components/cover-image";
// import { type Author } from "../interfaces/author";
// import Link from "next/link";
//import DateFormatter from "../../components/Base/post/date-formatter";
// import { getAllPosts } from "../lib/api";
// import BlogCard from "../../components/Base/post/BlogCard";
// import { Post } from "../interfaces/post";
// import fs from "fs";
// import matter from "gray-matter";
// import { join } from "path";
// import { Blog } from "../interfaces/blog";
// import { BlogData } from "../interfaces/blogData";
// // const postsDirectory = join(process.cwd(), "test");

// export function getPostSlugs() {
//   return fs.readFileSync(postsDirectory);
// }

// export function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);
//   console.log(data);

//   return { ...data, slug: realSlug, content } as Post;
// }

// async function fetchBlogs() {
//     const response = await fetch("http://localhost:3000/api/blog", {
//         cache: "no-cache",
//     });

//     // const slugs = getPostSlugs();
//     // const posts = slugs
//     //     .map((slug) => getPostBySlug(slug))
//     //     // sort posts by date in descending order
//     //     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//     // return posts;

//     return response.json();
// }


// export default async function Blogs() {

//     const allBlogs = await fetchBlogs();
//     console.log(allBlogs);
//     const blogs = allBlogs.map((blogData: BlogData) => ({
//         id: blogData.id,
//         url: blogData.url
//     }));
//     console.log(blogs);

//     const a = fs.readFileSync(blogs[0].url);
//     console.log(a);
//     // const heroPost = allPosts[0];

//     return (
//         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-4 py-4 gap-4 font-[family-name:var(--font-geist-sans)]">
//         {allBlogs.map((blog: Blog) => (
//             <BlogCard key={blog.id} blogData={blog} />
//         ))}
//           </div>
//     );
// }