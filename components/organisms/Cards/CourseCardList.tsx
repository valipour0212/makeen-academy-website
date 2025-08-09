import Link from "next/link";
import Image from "next/image";
import {FeatureItem} from "@/components/molecules";
import {StatusBadge} from "@/components/atoms";
import {CourseType} from "@/types/course";

function CourseCardList({id, title, description, status, image, className}: CourseType) {
    return (
        <Link href={`/courses/${id}`} className={`bg-white rounded-lg shadow px-4 py-2 md:p-6 flex justify-between gap-6 md:gap-28 ${className}`}>
            <div className="flex flex-col justify-between md:w-1/2">
                <div>
                    <h2 className="font-medium md:font-semibold text-sm md:text-2xl">{title}</h2>
                    <p className="font-normal text-xs md:text-[16px] text-gray-600 mt-2 md:mt-4">{description}</p>
                </div>
                <div className="flex gap-4 mt-4 mb-2 md:my-6">
                    <FeatureItem icon="/icon/course/clock.svg" text="۶ ماه"/>
                    <FeatureItem icon="/icon/course/cards.svg" text="اقساطی"/>
                </div>
                {status && <StatusBadge status={status}/>}
            </div>

            <div className="flex justify-center items-center w-1/2">
                <Image src={image} alt={title} width={240} height={240} className="object-contain w-36 md:w-60 h-36 md:h-60"/>
            </div>
        </Link>
    );
}

export default CourseCardList;
