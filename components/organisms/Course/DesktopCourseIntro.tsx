import CourseOverview from "@/components/organisms/Course/CourseOverview";
import {CourseDeadline} from "@/components/organisms/Countdown";
import {Button} from "@/components/atoms";
import ImageSection from "@/components/organisms/Course/ImageSection";
import {CourseType} from "@/types/course";
import Link from "next/link";

function DesktopCourseIntro({course}: { course: CourseType }) {
    return (
        <div className="w-full h-[442px] flex justify-between gap-6">
            <div className="w-4/12 h-full flex flex-col justify-between items-center">
                <CourseOverview course={course}/>
                <CourseDeadline targetDate={course.targetDate!} className="w-full flex px-4 py-2 bg-white rounded-2xl"/>
                <Link href="/" className="cursor-pointer mb-4 w-full">
                    <Button variant="secondary" size="large" className="w-full">
                        ثبت نام دوره
                    </Button>
                </Link>
            </div>

            <ImageSection src="/img/course-video.png" alt="course-video"/>
        </div>
    );
}

export default DesktopCourseIntro;