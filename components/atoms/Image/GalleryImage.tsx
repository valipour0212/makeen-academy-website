import {GalleryImageType} from "@/types/gallery";
import Image from "next/image";

interface GalleryImageProps extends GalleryImageType {
    onClick?: (src: string) => void;
}

function GalleryImage({id, src, onClick}: GalleryImageProps) {
    return (
        <div
            key={id}
            onClick={() => onClick?.(src)}
            className="overflow-hidden rounded-lg transform transition-transform duration-700 animate-gallery-column cursor-pointer"
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