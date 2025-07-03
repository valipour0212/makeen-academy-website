import React, {JSX} from 'react';
import CourseRegistration from "@/components/templates/CourseRegistration";
import FeatureItem from "@/components/molecules/FeatureItem/FeatureItem";
import StatusBadge from "@/components/atoms/StatusBadge";
import Image from "next/image";

interface CoursesContainerCardProps {
    targetDate: string;
    title: string;
    description: string;
    status: "coming_soon" | "open" | "full";
    image: string;
}

function CoursesContainerCard({targetDate, title, description, status, image}: CoursesContainerCardProps): JSX.Element {
    return (
        <div className="flex flex-col w-full shadow-md gap-2 rounded-lg bg-white my-4 py-2">
            <CourseRegistration targetDate={targetDate}/>
            <div className="w-11/12 h-[1px] bg-[#C7C7CC] my-2 mx-auto"></div>
            <div className="flex justify-between items-center px-2 gap-4">
                <div className="flex flex-col justify-between items-start w-2/3 space-y-4">
                    <h2 className="font-semibold text-sm text-black">{title}</h2>
                    <p className="font-normal text-xs text-[#8E8E93]">{description}</p>

                    <div className="flex gap-4">
                        <FeatureItem icon="/icons/feature-item/clock.svg" text="6 ماه"/>
                        <FeatureItem icon="/icons/feature-item/cards.svg" text="پرداخت اقساطی"/>
                    </div>

                    <StatusBadge status={status}/>
                </div>
                <div className="flex justify-end w-1/3">
                    <Image src={image} alt={image} width={136} height={136} className="object-contain"/>
                </div>
            </div>
        </div>
    );
}

export default CoursesContainerCard;