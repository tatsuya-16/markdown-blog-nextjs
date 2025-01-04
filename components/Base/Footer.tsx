import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center w-full">© 2025 Tatsuya Abe. All rights reserved.</p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            プライバシーポリシー
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            利用規約
          </Link>
        </nav> */}
      </footer>
  )
}

export default Footer