import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import Link from "next/link"
import Skills from "../components/Base/home/Skills"
import About from "@/components/Base/home/About"
import TravelPhoto from "@/components/Base/home/TravelPhoto"
import { headers } from 'next/headers';
import { Photo } from './interfaces/photo';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tatsuya Abe's website (阿部竜弥の個人サイトおよびブログ)",
  description: "Tatsuya Abe's personal website and blog. (阿部竜弥の個人サイトおよびブログです。)",
};

async function fetchDomesticPhotos(host: string) {
  const response = await fetch(`${process.env.API_PREFIX}${host}/api/travelPhotosDometic`, {
      cache: "no-cache",
  });

  return response.json();
}

async function fetchOverseasPhotos(host: string) {
  const response = await fetch(`${process.env.API_PREFIX}${host}/api/travelPhotosOverseas`, {
      cache: "no-cache",
  });

  return response.json();
}

export default async function Home() {
  const host = (await headers()).get('host');
  const domesticPhotos: Photo[] = await fetchDomesticPhotos(host!);
  const overseasPhotos: Photo[] = await fetchOverseasPhotos(host!);

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
        <TravelPhoto photoData={overseasPhotos} title="Overseas"/>
        <TravelPhoto photoData={domesticPhotos} title="Domestic"/>
      </main>
    </div>
  );
}