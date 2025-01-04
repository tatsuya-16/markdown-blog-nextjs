import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Zap, Languages, Cpu } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-12 md:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">What I&apos;m studying</h2>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <Card>
                <CardHeader>
                  <Laptop className="h-10 w-10 mb-4 text-blue-600 dark:text-blue-400" />
                  <CardTitle>WEB開発</CardTitle>
                  <CardDescription>WEB app</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>React, Next.js, Tailwind CSS</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Cpu className="h-10 w-10 mb-4 text-green-600 dark:text-green-400" />
                  <CardTitle>組み込み開発</CardTitle>
                  <CardDescription>Embedded</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Arduino, Raspberry Pi, Sensor</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-4 text-yellow-600 dark:text-yellow-400" />
                  <CardTitle>その他</CardTitle>
                  <CardDescription>Others</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Git, AWS, DB, Machine Learning</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Languages className="h-10 w-10 mb-4 text-pink-600 dark:text-pink-400" />
                  <CardTitle>語学</CardTitle>
                  <CardDescription>Languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>English, Spanish</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Skills