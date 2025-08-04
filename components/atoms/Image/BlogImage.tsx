import Image from "next/image";

interface BlogImageProps {
    src: string;
    alt: string
}

function BlogImage({src, alt}: BlogImageProps) {
    return <Image src={src} alt={alt} width={500} height={500} className="object-cover rounded-t-lg w-full h-fit"/>;
}

export default BlogImage;