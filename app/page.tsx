// import Skills from "../components/Base/home/Skills"
import About from "@/components/Base/home/About"
// import RecentBlogs from "@/components/Base/home/Blogs"
// import TravelPhoto from "@/components/Base/home/TravelPhoto"
// import { headers } from 'next/headers';
// import { Photo } from './interfaces/photo';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tatsuya Abe's website (阿部竜弥の個人サイトおよびブログ)",
  description: "Tatsuya Abe's personal website and blog. (阿部竜弥の個人サイトおよびブログです。)",
};

// async function fetchDomesticPhotos(host: string) {
//   const response = await fetch(`${process.env.API_PREFIX}${host}/api/travelPhotosDometic`, {
//       cache: "no-cache",
//   });

//   return response.json();
// }

// async function fetchOverseasPhotos(host: string) {
//   const response = await fetch(`${process.env.API_PREFIX}${host}/api/travelPhotosOverseas`, {
//       cache: "no-cache",
//   });

//   return response.json();
// }

export default async function Home() {
  // const host = (await headers()).get('host');
  // const domesticPhotos: Photo[] = await fetchDomesticPhotos(host!);
  // const overseasPhotos: Photo[] = await fetchOverseasPhotos(host!);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="flex-1">
        <About />
        {/* <Skills /> */}
        {/* <RecentBlogs /> */}
        {/* <TravelPhoto photoData={overseasPhotos} title="Overseas"/> */}
        {/* <TravelPhoto photoData={domesticPhotos} title="Domestic"/> */}
      </main>
    </div>
  );
}