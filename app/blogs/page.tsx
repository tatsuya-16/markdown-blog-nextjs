// import Avatar from "@/app/_components/avatar";
// import CoverImage from "@/app/_components/cover-image";
// import { type Author } from "../interfaces/author";
// import Link from "next/link";
//import DateFormatter from "../../components/Base/post/date-formatter";
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
}