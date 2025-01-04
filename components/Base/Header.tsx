import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { AvatarImage } from "@/components/ui/avatar"
// import me from "../../public/pictures/me.jpeg";

const Header: React.FC = () => {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
            {/* <nav className="flex justify-around">
                <Link href="/" passHref>
                    <span className="text-white no-underline cursor-pointer">Home</span>
                </Link>
                <Link href="/about" passHref>
                    <span className="text-white no-underline cursor-pointer">About</span>
                </Link>
                <Link href="/blogs" passHref>
                    <span className="text-white no-underline cursor-pointer">Blog</span>
                </Link>
            </nav> */}
            <Link className="flex items-center justify-center" href="/">
                <Avatar>
                    {/* <AvatarImage src={me} /> */}
                    <AvatarFallback>TA</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-lg font-bold">Tatsuya Abe</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                    About
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
                    Skills
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blogs">
                    Blogs
                </Link>
            </nav>
        </header>
    );
};

export default Header;
