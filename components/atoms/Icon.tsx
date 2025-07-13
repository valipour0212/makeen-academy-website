import React, {JSX} from 'react';
import Image from "next/image";
import cn from "@/lib/utils/cn";

interface IconProps {
    src: string;
    alt: string;
    size?: number;
    isActive?: boolean;
    className?: string;
}

function Icon({src, alt, size = 24, isActive = false, className}: IconProps): JSX.Element {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn(`${isActive ? "text-[#F28C28]" : "text-[#666666]"} ${className}`)}
        />
    );
}

export default Icon;