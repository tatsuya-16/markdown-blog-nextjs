'use client';

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogList from "./BlogList";
import { Blog } from "../../../app/interfaces/blog";
import { Switch } from "../../ui/switch";
import { Label } from "../../ui/label";

export default function BlogsClient({ allPosts }: { allPosts: Blog[] }) {
    const [isListView, setIsListView] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState(false); // 初回マウントをトラッキング

    useEffect(() => {
        // マウント時に localStorage の値を取得
        const storedViewMode = localStorage.getItem("viewMode");
        if (storedViewMode === "list") {
            setIsListView(true);
        }
        setIsMounted(true); // マウント完了
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("viewMode", isListView ? "list" : "grid");
        }
    }, [isListView, isMounted]);

    return (
        <div>
            <div className="flex items-center justify-center space-x-2 my-4">
            <Label htmlFor="view-mode">Grid</Label>
            <Switch id="view-mode" checked={isListView} onCheckedChange={setIsListView}/>
            <Label htmlFor="view-mode">List</Label>
            </div>
            {isListView ? (
            <div className="list-view">
                {allPosts.map((blog) => (
                <BlogList key={blog.slug} blogData={blog} />
                ))}
            </div>
            ) : (
            <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-8 py-4 gap-8`}>
                {allPosts.map((blog) => (
                <BlogCard key={blog.slug} blogData={blog} />
                ))}
            </div>
            )}
        </div>
    );
}
