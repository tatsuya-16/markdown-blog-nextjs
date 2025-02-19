
import { getAllPosts } from "../lib/api";
import BlogCard from "../../components/Base/blog/BlogCard";
import { Blog } from "../interfaces/blog";



export default function Blogs() {

    const allPosts = getAllPosts();
    // console.log(allPosts);

    // const heroPost = allPosts[0];
    console.log(allPosts);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-8 py-4 gap-8 font-[family-name:var(--font-geist-sans)]">
        {allPosts.map((blog: Blog) => (
            <BlogCard key={blog.slug} blogData={blog} />
        ))}
          </div>
    );
}