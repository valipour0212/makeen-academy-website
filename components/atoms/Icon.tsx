import React, {JSX} from 'react';
import Image from "next/image";

interface IconProps {
    src: string;
    alt: string;
    size?: number;
    isActive?: boolean;
}

function Icon({src, alt, size = 24, isActive = false}: IconProps): JSX.Element {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={isActive ? "text-[#F28C28]" : "text-[#666666]"}
        />
    );
}

export default Icon;