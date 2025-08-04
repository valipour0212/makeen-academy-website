import {GalleryImageType} from "@/types/gallery";
import Image from "next/image";

function GalleryImage({id, src}: GalleryImageType){
    return (
        <div
            key={id}
            className="overflow-hidden rounded-lg transform transition-transform duration-700 animate-gallery-column"
        >
            <Image
                src={src}
                alt={`Gallery image ${id}`}
                width={500}
                height={500}
                className="w-full h-auto object-contain"
            />
        </div>
    );
}

export default GalleryImage;