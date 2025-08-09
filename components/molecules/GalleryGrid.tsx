"use client"
import {useState} from "react";
import {GALLERY} from "@/data/gallery";
import {GalleryColumn} from "@/components/molecules/index";
import GalleryImageModal from "@/components/common/Modal/GalleryImageModal";
import Image from "next/image";

function GalleryGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const columns = Array.from({length: 6}, (_, i) =>
        GALLERY.images.filter((_, index) => index % 6 === i)
    );

    return (
        <div className="relative my-4 w-full overflow-hidden h-[1044px] md:h-[628px]">
            <div className="absolute top-0 left-0 w-full h-[55px] bg-gradient-to-b from-[#F9F9F9] to-transparent z-10"/>

            <div className="grid grid-cols-2 md:grid-cols-6">
                {
                    columns.map((colImages, index) =>
                        <GalleryColumn
                            key={index}
                            images={colImages}
                            direction={index % 2 === 0 ? "up" : "down"}
                            onImageClick={(src) => setSelectedImage(src)}
                        />
                    )
                }
            </div>

            <div
                className="absolute bottom-0 left-0 w-full h-[55px] bg-gradient-to-t from-[#F9F9F9] to-transparent z-10"/>

            <GalleryImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
                {
                    selectedImage &&
                    <Image
                        src={selectedImage}
                        alt="Selected gallery image"
                        width={1200}
                        height={800}
                        className="max-h-[90vh] w-auto object-contain"
                    />
                }
            </GalleryImageModal>
        </div>
    );
}

export default GalleryGrid;