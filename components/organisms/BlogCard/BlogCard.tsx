import React, {JSX} from 'react';
import Image from "next/image";
import Icon from "@/components/atoms/Icon";

interface BlogCardProps {
    image: string;
    title: string;
    description: string;
    uploaded: string;
}

function BlogCard({image, title, description, uploaded}: BlogCardProps): JSX.Element {
    return (
        <div className="min-w-2/5 min-h-[275px] bg-white rounded-lg shadow-md flex flex-col gap-1">
            <Image src={image} alt={image} width={200} height={200} className="object-cover rounded-t-lg"/>

            <div className="h-full flex flex-col justify-between p-1 pb-1">
                <div className="flex flex-col gap-2">
                    <h2 className="font-medium text-sm">{title}</h2>
                    <p className="font-normal text-xs text-[#8E8E93]">{description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-normal text-[10px] text-[#8E8E93]">{uploaded}</span>
                    <span className="font-normal text-[10px] text-[#8E8E93] flex gap-1">
                        ادامه مطلب
                        <Icon src={"/blog/arrow-left.svg"} alt={"left-arrow"} size={14}/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;