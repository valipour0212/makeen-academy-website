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

function CourseCardLarge({
                                  slug,
                                  targetDate,
                                  title,
                                  description,
                                  status,
                                  image
                              }: CoursesContainerCardProps): JSX.Element {
    return (
        <Link
            href={`/courses/${slug}`}
            className="cursor-pointer w-full md:w-[261px] h-[237px] md:h-[525px]"
        >
            <div className="flex flex-col md:flex-col shadow-md gap-2 rounded-lg bg-white p-3 h-full w-full">
                <CourseDeadline targetDate={targetDate} className=""/>

                {/* Divider */}
                <div className="w-11/12 h-[1px] bg-[#C7C7CC] my-2 mx-auto hidden md:block"></div>

                {/* Mobile */}
                <div className="flex flex-row md:hidden gap-2 h-full">
                    <div className="w-1/3 flex justify-start items-start">
                        <Image
                            src={image}
                            alt={image}
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-2">
                        <div className="space-y-1">
                            <h2 className="font-semibold text-sm text-black">{title}</h2>
                            <p className="font-normal text-xs text-[#8E8E93]">{description}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <FeatureItem icon="/icons/feature-item/clock.svg" text="6 ماه"/>
                            <FeatureItem icon="/icons/feature-item/cards.svg" text="پرداخت اقساطی"/>
                        </div>
                        <StatusBadge status={status}/>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex flex-col items-start gap-4">
                    <Image
                        src={image}
                        alt={image}
                        width={136}
                        height={136}
                        className="object-contain mx-auto"
                    />
                    <h2 className="font-semibold text-sm text-black">{title}</h2>
                    <p className="font-normal text-xs text-[#8E8E93]">{description}</p>
                    <div className="flex gap-4">
                        <FeatureItem icon="/icons/feature-item/clock.svg" text="6 ماه"/>
                        <FeatureItem icon="/icons/feature-item/cards.svg" text="پرداخت اقساطی"/>
                    </div>
                    <StatusBadge status={status}/>

                    {/* دکمه مشاهده دوره */}
                    <Button variant="secondary" size="md" className="w-full">مشاهده دوره</Button>
                </div>
            </div>
        </Link>
    );
}

export default CourseCardLarge;