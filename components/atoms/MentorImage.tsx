import Image from "next/image";
import React, {JSX} from "react";

interface MentorImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}

function MentorImage({src, alt, width, height, style, className, onClick}: MentorImageProps): JSX.Element {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={onClick}
            className={`rounded-xl cursor-pointer transition-all duration-500 ease-in-out shadow-lg ${className}`}
            style={style}
        />
    );
}

export default MentorImage;