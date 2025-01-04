'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import b from '../../../../public/pictures/kokura.jpg'
import a from '../../../../public/pictures/gozaisho.jpg'
import c from '../../../../public/pictures/sapporo.jpg'
import d from '../../../../public/pictures/fuji.jpg'
import e from '../../../../public/pictures/kamikochi.jpg'
import f from '../../../../public/pictures/enosima.jpg'
import g from '../../../../public/pictures/io.jpg'
// import { Card, CardFooter } from '@/components/ui/card'

const photos = [
    { src: b, alt: 'Kokura, Fukuoka' },
    { src: a, alt: 'Mt. Gozaisho, Mie' },
    { src: c, alt: 'Sapporo, Hokkaido' },
    { src: d, alt: 'Mt. Fuji, Yamanashi' },
    { src: e, alt: 'Kamikochi, Gifu' },
    { src: f, alt: 'Enoshima, Kanagawa' },
    { src: g, alt: 'Mt. Io, Toyama' },
    // { src: '/images/newyork.jpg', alt: 'ニューヨークの街並み' },
    // { src: '/images/tokyo.jpg', alt: '東京の夜景' },
    // { src: '/images/london.jpg', alt: 'ロンドンの観光地' },
    // { src: '/images/rome.jpg', alt: 'ローマの遺跡' },
    // { src: '/images/sydney.jpg', alt: 'シドニーのオペラハウス' },
]

export default function Domestic() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
  
    useEffect(() => {
      const scrollContainer = scrollRef.current
      if (!scrollContainer) return
  
      let animationFrameId: number
  
      const scroll = () => {
        if (isHovered) return
        scrollContainer.scrollLeft += 1
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
        animationFrameId = requestAnimationFrame(scroll)
      }
  
      animationFrameId = requestAnimationFrame(scroll)
  
      return () => cancelAnimationFrame(animationFrameId)
    }, [isHovered])
  
    return (
        <section id="overseas" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Where I&apos;ve ever visited (Domestic)</h2>
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <div
                    ref={scrollRef}
                    className="flex overflow-x-scroll scrollbar-hide"
                    style={{
                        scrollBehavior: 'smooth',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}
                >
                    {[...photos, ...photos].map((photo, index) => (
                    <div key={index} className="flex-shrink-0 w-72 h-48 m-2 relative group">
                        <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center rounded-lg">
                            <span className="text-white text-lg font-bold pb-4">{photo.alt}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        // <section id="overseas" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        //     <div className="container px-4 md:px-6">
        //     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Where I&apos;ve ever visited (Overseas)</h2>
        //     <div
        //     className="relative w-full overflow-hidden"
        //     onMouseEnter={() => setIsHovered(true)}
        //     onMouseLeave={() => setIsHovered(false)}
        //     >
        //     {/* <h2 className="text-2xl font-bold mb-4">海外旅行の思い出</h2> */}
        //     <div
        //     ref={scrollRef}
        //     className="flex overflow-x-scroll scrollbar-hide"
        //     style={{
        //         scrollBehavior: 'smooth',
        //         msOverflowStyle: 'none',
        //         scrollbarWidth: 'none',
        //     }}
        //     >
        //     {[...photos, ...photos].map((photo, index) => (
        //         <Card key={index} className="relative mr-4">
        //         <Image
        //             src={photo.src}
        //             alt={photo.alt}
        //             width={1200}
        //             height={900}
        //             className="rounded-lg shadow-md"
        //         />
        //         <CardFooter className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white">
        //             <p className="text-center">{photo.alt}</p>
        //         </CardFooter>
        //         </Card>
        //     ))}
        //     </div>
        //     </div>
        //     </div>
        // </section>
    )
}

