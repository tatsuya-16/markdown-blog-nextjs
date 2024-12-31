import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="p-4 bg-gray-800 text-white">
            <nav className="flex justify-around">
                <Link href="/" passHref>
                    <span className="text-white no-underline cursor-pointer">Home</span>
                </Link>
                <Link href="/about" passHref>
                    <span className="text-white no-underline cursor-pointer">About</span>
                </Link>
                <Link href="/blogs" passHref>
                    <span className="text-white no-underline cursor-pointer">Blog</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
