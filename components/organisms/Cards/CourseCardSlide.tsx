import Link from "next/link";
import Image from "next/image";
import {FeatureItem} from "@/components/molecules";
import {StatusBadge} from "@/components/atoms";
import {CourseType} from "@/types/course";

function CourseCardSlide({id, title, description, status, image, className}: CourseType) {
    return (
        <Link
            href={`/courses/${id}`}
            className={`flex shrink-0 w-[264px] md:w-[548px] bg-white shadow rounded-lg p-2 md:p-6 mx-4 ${className}`}
        >
            <div className="flex items-center md:gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="font-medium md:font-semibold text-sm md:text-2xl">{title}</h2>
                    <p className="font-normal text-[12px] md:text-[16px] text-gray-600">{description}</p>
                    <div className="flex gap-2 mt-4 mb-2">
                        <FeatureItem icon="/icon/course/clock.svg" text="۶ ماه"/>
                        <FeatureItem icon="/icon/course/cards.svg" text="اقساطی"/>
                    </div>
                    {status && <StatusBadge status={status}/>}
                </div>
                <Image src={image} alt={title} width={500} height={500}
                       className="object-contain w-[82px] md:w-1/2 h-[82px] md:h-fit"/>
            </div>
        </Link>
    );
}

export default CourseCardSlide;
