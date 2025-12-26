import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-8 md:py-24 lg:py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Content Side */}
          <div className="w-full md:w-3/5 space-y-8">
            {/* Name Section with Animation */}
            <div className="space-y-2 overflow-hidden">
              {/* <h1 className="text-xl font-bold sm:text-2xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 animate-fade-in">
                こんにちは、阿部竜弥です
              </h1> */}
              <h1 className="text-xl font-bold sm:text-2xl xl:text-4xl">
                Hello, I&apos;m Tatsuya Abe
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full my-6"></div>
            </div>

            {/* About Me Section */}
            <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <div className="w-2 h-8 bg-indigo-600 mr-4 rounded-full"></div>
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a master&apos;s student conducting research on smart
                communities and the Internet of Things (IoT). Currently working
                as an intern in software development at UNAIIT Inc.
              </p>
            </div>

            {/* Bio Section */}
            <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <div className="w-2 h-8 bg-purple-600 mr-4 rounded-full"></div>
                Bio
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-bold text-indigo-600 w-32 mb-1 md:mb-0">
                    2025 - present
                  </span>
                  <span className="text-lg text-gray-700 px-4 py-2 bg-gray-50 rounded-lg flex-1">
                    Work at UNAIIT Inc. (Internship)
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-bold text-indigo-600 w-32 mb-1 md:mb-0">
                    2024 - present
                  </span>
                  <span className="text-lg text-gray-700 px-4 py-2 bg-gray-50 rounded-lg flex-1">
                    Graduate School of Science and Technology, Meijo University
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-bold text-indigo-600 w-32 mb-1 md:mb-0">
                    2020 - 2024
                  </span>
                  <span className="text-lg text-gray-700 px-4 py-2 bg-gray-50 rounded-lg flex-1">
                    Faculty of Science and Technology, Meijo University
                  </span>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <div className="w-2 h-8 bg-blue-600 mr-4 rounded-full"></div>
                Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-indigo-50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800">Japanese</h3>
                  <div className="mt-2 font-medium text-indigo-600">Native</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-indigo-50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800">English</h3>
                  <div className="mt-2 font-medium text-indigo-600">
                    Intermediate
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-indigo-50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800">Spanish</h3>
                  <div className="mt-2 font-medium text-indigo-600">
                    Beginner
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="mailto:ta16tech@gmail.com"
                className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-1 text-center"
              >
                <Mail size={20} className="text-gray-700" />
                <span className="text-lg font-medium">ta16tech@gmail.com</span>
              </Link>
              <Link
                href="https://github.com/tatsuya-16"
                className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-1 text-center"
              >
                <Github size={20} className="text-gray-700" />
                <span className="text-lg font-medium">tatsuya-16</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tatsuya-abe-1b1b94354/"
                className="flex items-center justify-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex-1 text-center"
              >
                <Linkedin size={20} className="text-gray-700" />
                <span className="text-lg font-medium">Tatsuya Abe</span>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-2/5 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-md opacity-20 transform scale-110"></div>

              {/* Profile Image */}
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src="/me.JPG"
                  alt="Tatsuya Abe"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
