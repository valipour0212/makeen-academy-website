import {BlogDataType} from "@/types/blog";
import {BlogImage} from "@/components/atoms/Image";
import {Heading, Text} from "@/components/atoms/Typography";
import Link from "next/link";
import {Icon} from "@/components/atoms";

function BlogCard({id, image, title, description, uploaded}: BlogDataType) {
    return (
        <div
            className="min-w-2/5 md:min-w-1/4 min-h-[275px] md:h-fit bg-white rounded-lg shadow-md mb-2 flex flex-col gap-1">

            <BlogImage src={image} alt={title}/>

            <div className="h-full flex flex-col justify-between p-1 pb-1">
                <div className="flex flex-col gap-2">
                    <Heading className="font-medium text-sm md:text-[16px]">{title}</Heading>
                    <Text className="font-normal text-xs md:text-sm text-[#8E8E93] md:mb-8">{description}</Text>
                </div>

                <div className="flex justify-between items-center">
                    <Text className="font-normal text-[10px] md:text-sm text-[#8E8E93]">{uploaded}</Text>

                    <Link href={`/blog/${id}`} className="cursor-pointer">
                         <span
                             className="font-normal text-[10px] md:text-sm text-[#8E8E93] hover:text-[#F28C28] transition-all flex gap-1">
                             ادامه مطلب
                             <Icon src={"/icon/blog/arrow-left.svg"} alt={"left-arrow"} size={14} className="md:w-6 md:h-6"/>
                         </span>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default BlogCard;