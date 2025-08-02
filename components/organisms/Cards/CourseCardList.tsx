import Link from "next/link";
import Image from "next/image";
import {FeatureItem} from "@/components/molecules";
import {StatusBadge} from "@/components/atoms";
import {CourseType} from "@/types/course";

function CourseCardList({id, title, description, status, image, className}: CourseType) {
    return (
        <Link href={`/courses/${id}`} className={`bg-white rounded-lg shadow p-6 flex gap-6 ${className}`}>
            <div className="w-1/2">
                <Image src={image} alt={title} width={150} height={150} className="object-contain"/>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{description}</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <FeatureItem icon="/icon/course/clock.svg" text="۶ ماه"/>
                    <FeatureItem icon="/icon/course/cards.svg" text="اقساطی"/>
                </div>
                {status && <StatusBadge status={status}/>}
            </div>
        </Link>
    );
}

export default CourseCardList;
