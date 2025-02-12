import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const Header: React.FC = () => {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
            <Link className="flex items-center justify-center" href="/">
                <Avatar>
                    <AvatarImage src="https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/icon/me.jpeg" alt="Tatsuya Abe" />
                    <AvatarFallback>TA</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-lg font-bold">Tatsuya Abe</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blogs">
                    Blogs
                </Link>
            </nav>
        </header>
    );
};

export default Header;
