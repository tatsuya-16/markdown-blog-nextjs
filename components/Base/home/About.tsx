import React from 'react'
import Link from "next/link"
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-20 lg:py-24 xl:py-42">
          <div className="container px-4 md:px-12">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  こんにちは、阿部竜弥です
                </h1>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hello, I&apos;m Tatsuya Abe
                </h1>
                <hr className="my-4 border-t-2 border-gray-300" />
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                    About Me
                </h2>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                I am a master&apos;s student conducting research on smart communities and the Internet of Things (IoT).
                </h3>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                    Education History
                </h2>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                    2024 - 2026 Graduate School of Science and Technology, Meijo University
                </h3>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                    2020 - 2024 Faculty of Science and Technology, Meijo University
                </h3>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                    Languages
                </h2>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                    - Japanese (Native)
                </h3>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                    - English (Intermediate)
                </h3>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                    - Spanish (Beginner)
                </h3>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                  Contact
                </h2>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                  ta16tech@gmail.com
                </h3>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                  Github
                </h2>
                <h3 className="text-m tracking-tighter sm:text-l xl:text-xl/none text-gray-700">
                    <Link href="https://github.com/tatsuya-16">
                    <span className="hover:underline">tatsuya-16</span>
                    </Link>
                </h3>
              </div>
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image
                  src="https://fsbezimxrqnvxjyhivvn.supabase.co/storage/v1/object/public/icon/me.jpeg"
                  alt="Tatsuya Abe"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                </div>
            </div>
          </div>
        </section>
  )
}

export default About