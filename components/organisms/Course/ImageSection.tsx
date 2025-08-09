import Image from "next/image";
import { PlayIcon } from "@/components/atoms/Icon";

interface ImageSectionProps {
    src: string;
    alt: string;
}

function ImageSection({ src, alt }: ImageSectionProps) {
    return (
        <div className="relative w-full md:w-8/12 h-fit md:h-[442px] bg-white rounded-2xl p-4">
            <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <PlayIcon size={150} />
                </div>
            </div>
        </div>
    );
}

export default ImageSection;
