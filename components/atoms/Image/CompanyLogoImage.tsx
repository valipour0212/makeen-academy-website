import Image from "next/image";

interface CompanyLogoImageProps {
    src: string;
    alt: string;
    size?: number;
}

function CompanyLogoImage({src, alt, size = 20}: CompanyLogoImageProps) {
    return (
        <Image src={src} alt={alt} width={size} height={size} className="rounded-[4px]"/>
    );
}

export default CompanyLogoImage;