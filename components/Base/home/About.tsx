import React from 'react'
import { Button } from "@/components/ui/button"
import { Github, Mail} from 'lucide-react'
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
                <div className="flex gap-4">
                  <Link href="https://github.com/tatsuya-16" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="ta16tech@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image
                  src={process.env.NEXT_PUBLIC_PROFILE_PICTURE_URL || '/default-profile-picture.jpg'}
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