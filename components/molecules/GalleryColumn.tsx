import {GalleryImageType} from "@/types/gallery";
import {GalleryImage} from "@/components/atoms/Image";

interface GalleryColumnProps {
    images: GalleryImageType[];
    direction: "up" | "down";
}

function GalleryColumn({images, direction}: GalleryColumnProps) {
    const duplicatedImages = [...images, ...images];
    return (
        <div className={`flex flex-col ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}>
            {
                duplicatedImages.map((image, index) =>
                    <GalleryImage key={`${image.id}-${index}`} {...image} />
                )
            }
        </div>
    );
}

export default GalleryColumn;