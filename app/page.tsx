import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import Link from "next/link"
import Skills from "../components/Base/home/Skills"
import Overseas from "../components/Base/home/trip/Overseas"
import Domestic from "@/components/Base/home/trip/Domestic"
import About from "@/components/Base/home/About"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="flex-1">
        <About />
        <Skills />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-6 md:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest blogs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>ブログ記事 {i}</CardTitle>
                    <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>興味深いブログ記事の短い説明がここに入ります。</p>
                    <Button className="mt-4" variant="link">
                      続きを読む
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Overseas />
        <Domestic />
      </main>
    </div>
  );
}
