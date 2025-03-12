import Image from 'next/image'
import { Photo } from "../../../app/interfaces/photo"

export default function TravelPhoto({ photoData, title }: { photoData: Photo[]; title: string }) {
  return (
    <section id="travelPhoto" className="w-full py-12 md:py-18 lg:py-24 bg-white dark:bg-gray-800 px-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Where I&apos;ve ever visited ({title})
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-carousel"
          style={{
            width: 'fit-content',
          }}
        >
          {[...photoData, ...photoData, ...photoData].map((photo: Photo, index) => (
            <div key={index} className="flex-shrink-0 w-72 h-48 m-2 relative group">
              <Image
                src={photo.url}
                alt={photo.caption}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center rounded-lg">
                <span className="text-white text-lg font-bold pb-4">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}