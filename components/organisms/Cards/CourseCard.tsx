import React, {JSX} from 'react';
import Image from "next/image";
import FeatureItem from "@/components/molecules/FeatureItem";
import StatusBadge from "@/components/atoms/StatusBadge";
import Link from "next/link";

interface CourseCardProps {
    targetDate?: string;
    slug: string;
    title: string;
    description: string;
    status?: "coming_soon" | "open" | "full";
    image: string;
    className?: string;
}

function CourseCard({ slug, title, description, status, image}: CourseCardProps): JSX.Element {
    return (
        <Link
            href={`/courses/${slug}`}
            className="cursor-pointer w-full h-fit rounded-lg shadow-md flex gap-6 px-6"
        >
            <div className=" flex flex-col justify-between py-5">
                <h2 className="font-semibold text-2xl text-black">{title}</h2>
                <p className="font-normal text-[16px] text-[#8E8E93] mt-4">{description}</p>
                <div className="flex gap-4 my-6">
                    <FeatureItem icon="/icons/feature-item/clock.svg" text="6 ماه"/>
                    <FeatureItem icon="/icons/feature-item/cards.svg" text="پرداخت اقساطی"/>
                </div>
                {status && <StatusBadge status={status} />}
            </div>
            <Image
                src={image}
                alt={image}
                width={136}
                height={136}
                className="object-contain mx-auto w-1/2"
            />
        </Link>
    );
}

export default CourseCard;