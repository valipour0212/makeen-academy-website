import React from 'react';
import Image from "next/image";

function Gallery() {
    const galleryData = [
        {
            id: "1",
            image: "/gallery/img-1.png"
        },
        {
            id: "2",
            image: "/gallery/img-2.png"
        },
        {
            id: "3",
            image: "/gallery/img-3.png"
        },
        {
            id: "4",
            image: "/gallery/img-4.png"
        },
        {
            id: "5",
            image: "/gallery/img-5.png"
        },
        {
            id: "6",
            image: "/gallery/img-6.png"
        },
        {
            id: "7",
            image: "/gallery/img-7.png"
        },
        {
            id: "8",
            image: "/gallery/img-8.png"
        },
        {
            id: "9",
            image: "/gallery/img-9.png"
        },
        {
            id: "10",
            image: "/gallery/img-10.png"
        },

    ]


    return (
        <main className="w-full md:max-w-[1440px] h-full mx-auto py-[75px] mt-6 px-4 md:px-0 grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-6">
            {
                galleryData.map(item => <Image
                    key={item.id}
                    src={item.image}
                    alt={item.image}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover"/>
                )
            }
        </main>
    );
}

export default Gallery;