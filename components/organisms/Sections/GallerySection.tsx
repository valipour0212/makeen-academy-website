import React from 'react';
import Image from "next/image";
import Button from "@/components/atoms/Button";

function GallerySection() {
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
        <section className="my-5 md:my-12 flex flex-col items-center">
            <h2 className="font-medium md:font-semibold text-[20px] md:text-[28px]">گالری تصاویر</h2>
            <div className=" grid grid-cols-2 md:grid-cols-6 gap-4 my-4">
                {
                    galleryData.map(item => <Image
                        key={item.id}
                        src={item.image}
                        alt={item.image}
                        width={500}
                        height={500}
                        className="rounded-lg min-w-fit min-h-fit"/>
                    )
                }
            </div>
            <Button variant="outline" size="lg">مشاهده همه تصاویر</Button>
        </section>
    );
}

export default GallerySection;