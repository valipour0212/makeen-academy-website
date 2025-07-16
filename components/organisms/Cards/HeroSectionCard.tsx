import React, {JSX} from 'react';
import CourseDeadline from "@/components/organisms/Countdown/CourseDeadline";
import FeatureItem from "@/components/molecules/FeatureItem";
import StatusBadge from "@/components/atoms/StatusBadge";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/atoms";

interface CoursesContainerCardProps {
    slug: string;
    targetDate: string;
    title: string;
    description: string;
    status: "coming_soon" | "open" | "full";
    image: string;
}

function HeroSectionCard({
                             slug,
                             targetDate,
                             title,
                             description,
                             status,
                             image,
                         }: CoursesContainerCardProps): JSX.Element {
    return (
        <Link href={`/courses/${slug}`} className="cursor-pointer w-full h-full ">
            <div className="flex flex-col h-full p-3 rounded-lg bg-white shadow my-2 md:my-0 mx-1 md:mx-0">
                {/* CourseDeadline در بالای اسلاید */}
                <CourseDeadline targetDate={targetDate} className="mb-2" />
                <div className="w-full h-[1px] bg-gray-200 mx-auto my-2"></div>

                {/* موبایل: عکس سمت چپ و متن سمت راست */}
                <div className="flex md:hidden flex-row-reverse gap-2 h-[calc(100%-40px)] my-5">
                    <div className="w-1/3 flex justify-between items-center">
                        <Image
                            src={image}
                            alt={image}
                            width={150}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between">
                        <div>
                            <h2 className="font-semibold text-sm text-black">{title}</h2>
                            <p className="font-normal text-xs text-[#8E8E93] mt-2 mb-4">{description}</p>
                        </div>
                        <div className="flex gap-4">
                            <FeatureItem icon="/icons/feature-item/clock.svg" text="6 ماه"/>
                            <FeatureItem icon="/icons/feature-item/cards.svg" text="پرداخت اقساطی"/>
                        </div>
                        <StatusBadge status={status}/>
                    </div>
                </div>

                {/* دسکتاپ: عکس در وسط بالا (نصف ارتفاع)، متن و دکمه پایین */}
                <div className="hidden md:flex flex-col h-full justify-between">
                    <div className="flex justify-center items-center h-1/2">
                        <Image
                            src={image}
                            alt={image}
                            width={136}
                            height={136}
                            className="object-contain"
                        />
                    </div>

                    <div className="px-2 flex flex-col gap-4">
                        <h2 className="font-medium text-[20px] text-black text-center">{title}</h2>
                        <p className="font-normal text-sm text-[#8E8E93] text-center">{description}</p>

                        <div className="flex gap-4">
                            <FeatureItem icon="/icons/feature-item/clock.svg" text="6 ماه"/>
                            <FeatureItem icon="/icons/feature-item/cards.svg" text="پرداخت اقساطی"/>
                        </div>

                        <StatusBadge status={status}/>

                        <Button variant="secondary" size="md" className="w-full mb-4">
                            مشاهده دوره
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}


export default HeroSectionCard;