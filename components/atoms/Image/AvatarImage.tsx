import Image from "next/image";

interface AvatarImageProps {
    src: string;
    alt: string;
    size?: number;
}

function AvatarImage({src, alt, size = 44}: AvatarImageProps) {
    return (
        <Image src={src} alt={alt} width={size} height={size} className="rounded-full"/>
    );
}

export default AvatarImage;
