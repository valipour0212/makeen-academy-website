import Image from "next/image";

interface CompanyLogoProps {
    src: string;
    alt?: string;
}

function CompanyLogo({src, alt = "Company Logo"}: CompanyLogoProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="object-cover w-fit h-fit"
        />
    );
}

export default CompanyLogo;
