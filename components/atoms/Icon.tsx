import {cn} from "@/lib";
import Image from "next/image";

interface IconProps {
    src: string;
    alt: string;
    size?: number;
    isActive?: boolean;
    className?: string;
}

function Icon({src, alt, size = 24, isActive = false, className = ""}: IconProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn(
                'object-contain transition-all duration-200 ease-in-out',
                isActive ? 'text-primary' : 'text-gray-500',
                className
            )}
        />
    );
}

export default Icon;