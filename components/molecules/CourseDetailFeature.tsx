import {CourseFeature} from "@/types/course";
import {cn} from "@/lib";
import Image from "next/image";


interface CourseDetailFeatureProps extends CourseFeature {
    className?: string;
}

function CourseDetailFeature({icon, title, description, className,}: CourseDetailFeatureProps) {
    return (
        <div className={cn("h-fit bg-white rounded-2xl px-4 py-2 flex gap-4 items-center text-center", className)}>
            <div className="w-8 h-8">
                <Image src={icon} alt={title} width={40} height={40} className="object-contain"/>
            </div>
            <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-[16px]">{title}</span>
                <span className="font-normal text-sm text-[#8E8E93]">{description}</span>
            </div>
        </div>
    );
}

export default CourseDetailFeature;