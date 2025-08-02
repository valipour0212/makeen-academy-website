import Link from "next/link";
import {CourseDeadline} from "@/components/organisms/Countdown";
import Image from "next/image";
import {FeatureItem} from "@/components/molecules";
import {Button, StatusBadge} from "@/components/atoms";
import {CourseType} from "@/types/course";

function CourseCardHero({
                            id,
                            title,
                            description,
                            image,
                            status,
                            targetDate,
                            className,
                        }: CourseType) {
    return (
        <Link href={`/courses/${id}`} className={className}>
            <div className="flex flex-col h-full p-4 rounded-lg bg-white shadow-md">
                {targetDate && <CourseDeadline targetDate={targetDate} className="flex md:flex-col text-nowrap w-full"/>}

                {/* موبایل */}
                <div className="flex md:hidden flex-row-reverse gap-2">
                    <Image src={image} alt={title} width={136} height={136} className="w-1/3"/>
                    <div className="w-2/3 flex flex-col justify-between">
                        <div>
                            <h2 className="font-semibold text-sm text-black">{title}</h2>
                            <p className="text-xs text-[#8E8E93]">{description}</p>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <FeatureItem icon="/icon/course/clock.svg" text="۶ ماه"/>
                            <FeatureItem icon="/icon/course/cards.svg" text="اقساطی"/>
                        </div>
                        {status && <StatusBadge status={status}/>}
                    </div>
                </div>

                {/* دسکتاپ */}
                <div className="hidden h-full md:flex flex-col justify-between items-center gap-4">
                        <Image src={image} alt={title} width={150} height={150} priority className="object-contain mx-auto"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-center font-semibold text-lg">{title}</h2>
                        <p className="text-center text-sm text-gray-500">{description}</p>
                        <Button variant="secondary" size="medium" className="w-full mt-9 mb-4">مشاهده دوره</Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CourseCardHero;
