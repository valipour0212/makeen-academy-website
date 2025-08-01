import Link from "next/link";
import Image from "next/image";
import {FeatureItem} from "@/components/molecules";
import {StatusBadge} from "@/components/atoms";
import {CourseType} from "@/types/hero-section";


function CourseCardSlide({id, title, description, status, image, className}: CourseType) {
    return (
        <Link href={`/courses/${id}`} className={`bg-white shadow-md rounded-lg p-4 flex flex-col ${className}`}>
            <div className="flex items-center gap-4">
                <Image src={image} alt={title} width={100} height={100} className="object-contain"/>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-600">{description}</p>
                    <div className="flex gap-2">
                        <FeatureItem icon="/icon/course/clock.svg" text="۶ ماه"/>
                        <FeatureItem icon="/icon/course/cards.svg" text="اقساطی"/>
                    </div>
                    {status && <StatusBadge status={status}/>}
                </div>
            </div>
        </Link>
    );
}

export default CourseCardSlide;
