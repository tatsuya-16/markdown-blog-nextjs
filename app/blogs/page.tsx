import { getAllPosts } from "../lib/api";
import AllBlogs from "@/components/Base/blog/AllBlogs";

export default function Blogs() {
    const allBlogs = getAllPosts();

    return <AllBlogs allPosts={allBlogs} />
}