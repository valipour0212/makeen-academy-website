import {GalleryImageType} from "@/types/gallery";
import {GalleryImage} from "@/components/atoms/Image";

interface GalleryColumnProps {
    images: GalleryImageType[];
    direction: "up" | "down";
    onImageClick: (src: string) => void;
}

function GalleryColumn({images, direction, onImageClick}: GalleryColumnProps) {
    const duplicatedImages = [...images, ...images];

    return (
        <div className={`flex flex-col ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}>
            {
                duplicatedImages.map((image, index) =>
                    <GalleryImage
                        key={`${image.id}-${index}`}
                        {...image}
                        onClick={onImageClick}
                    />
                )
            }
        </div>
    );
}

export default GalleryColumn;