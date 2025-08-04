import {CoworkingImageType} from "@/types/coworking";
import Image from "next/image";

function CoworkingImage({src, alt}: CoworkingImageType) {
    return <Image src={src} alt={alt} width={200} height={200} className="rounded-lg"/>;
}

export default CoworkingImage;