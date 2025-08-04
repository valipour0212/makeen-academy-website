import React from "react";
import Image from "next/image";
import {NewsletterImageType} from "@/types/newsletter";

function DecorativeImage({src, alt, width, height, class_name}: NewsletterImageType) {
    return <Image src={src} alt={alt} width={width} height={height} className={class_name}/>;
}

export default DecorativeImage;
