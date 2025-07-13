import React, {JSX} from 'react';
import Image from "next/image";
import Icon from "@/components/atoms/Icon";
import Link from "next/link";

interface BlogCardProps {
    slug: string;
    image: string;
    title: string;
    description: string;
    uploaded: string;
}

function BlogCard({slug, image, title, description, uploaded}: BlogCardProps): JSX.Element {
    return (
        <div
            className="min-w-2/5 md:min-w-1/4 min-h-[275px] md:h-fit bg-white rounded-lg shadow-md mb-2 flex flex-col gap-1">
            <Image src={image} alt={image} width={500} height={500} className="object-cover rounded-t-lg w-full h-fit"/>

            <div className="h-full flex flex-col justify-between p-1 pb-1">
                <div className="flex flex-col gap-2">
                    <h2 className="font-medium text-sm md:text-[16px]">{title}</h2>
                    <p className="font-normal text-xs md:text-sm text-[#8E8E93] md:mb-8">{description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-normal text-[10px] md:text-sm text-[#8E8E93]">{uploaded}</span>
                    <Link href={`/blog/${slug}`} className="cursor-pointer ">
                        <span className="font-normal text-[10px] md:text-sm text-[#8E8E93] hover:text-[#F28C28] transition-all flex gap-1">
                        ادامه مطلب
                        <Icon src={"/blog/arrow-left.svg"} alt={"left-arrow"} size={14} className="md:w-6 md:h-6"/>
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;