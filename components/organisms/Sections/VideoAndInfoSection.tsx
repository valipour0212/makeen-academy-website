import Image from "next/image";
import { StatusBadge } from "@/components/atoms";
import { CourseDeadline } from "@/components/organisms/Countdown";
import CourseInfoItem from "@/components/molecules/CourseInfoItem";
import {Course} from "@/types/types";


export default function VideoAndInfoSection({ course }: { course: Course }) {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="w-full md:w-1/2 min-h-[210px] bg-white p-2 rounded-lg">
                    <Image src="/course/course-video.png" alt="course-video" width={500} height={500} className="object-cover rounded-lg w-full" />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-2">
                    <div className="h-[160px] bg-white p-4 rounded-lg flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-2xl">{course.title}</h2>
                            <StatusBadge status={course.status} />
                        </div>
                        <p className="font-normal text-sm mt-4 text-[#8E8E93]">{course.description}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg flex flex-col">
                        <CourseDeadline targetDate={course.targetDate} className="flex flex-col gap-4" />
                    </div>
                </div>
            </div>

            <div className="w-full h-fit mt-2 flex gap-4">
                <CourseInfoItem icon="/course/medal.svg" title="گواهی پایان دوره" value="دارد" />
                <CourseInfoItem icon="/course/clock.svg" title="مدت زمان دوره" value="1400 ساعت" />
            </div>
        </>
    );
}
