import {CoworkingImage} from "@/components/atoms/Image";
import {CoworkingImageType} from "@/types/coworking";

interface CoworkingImageGridProps {
    images: CoworkingImageType[];
}

function CoworkingImageGrid({images}: CoworkingImageGridProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                images.map(item =>
                    <CoworkingImage key={item.id} {...item} />
                )
            }
        </div>
    );
}

export default CoworkingImageGrid;