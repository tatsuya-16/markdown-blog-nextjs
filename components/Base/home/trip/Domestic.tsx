'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Photo } from "../../../../app/interfaces/photo"

async function fetchDomesticPhotos() {
    const response = await fetch("http://localhost:3000/api/travelPhotosDometic", {
        cache: "no-cache",
    });

    return response.json();
}

export default function Domestic() {
    const [allphotos, setAllPhotos] = useState([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        async function getPhotos() {
            const photos = await fetchDomesticPhotos();
            setAllPhotos(photos);
            console.log(photos);
        }
        getPhotos();
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        const scroll = () => {
            if (isHovered) return;
            scrollContainer.scrollLeft += 1;
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return (
        <section id="domestic" className="w-full py-12 md:py-18 lg:py-24 bg-gray-100 dark:bg-gray-900 px-12">
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
                    {[...allphotos, ...allphotos].map((photoData: Photo, index) => (
                        <div key={index} className="flex-shrink-0 w-72 h-48 m-2 relative group">
                            <Image
                                src={photoData.url}
                                alt={photoData.caption}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center rounded-lg">
                                <span className="text-white text-lg font-bold pb-4">{photoData.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
