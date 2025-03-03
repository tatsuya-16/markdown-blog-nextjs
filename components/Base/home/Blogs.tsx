import { getRecentBlogs } from "@/app/lib/apiRecentBlogs";
import BlogCard from "../blog/BlogCard"
import Link from 'next/link';

export default function RecentBlogs() {
    const recentBlogs = getRecentBlogs();

    return (
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gray-100 dark:bg-gray-900 px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest Blogs</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1 gap-8">
                {recentBlogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog.slug} blogData={blog} />
                ))}
                <div className="flex justify-center items-center col-span-1 mt-8 mb-8 self-end">
                    <Link href="/blogs" className="block w-full h-full p-6 text-2xl font-bold text-center transition-colors duration-300 hover:text-blue-500">
                        See More...
                    </Link>
                </div>
            </div>
        </section>
    );
}