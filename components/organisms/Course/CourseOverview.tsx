import {CourseType} from "@/types/course";
import {StatusBadge} from "@/components/atoms";

interface CourseOverviewProps {
    course: CourseType;
}

function CourseOverview({course}: CourseOverviewProps) {
    return (
        <div className="w-full h-fit bg-white p-2 flex flex-col rounded-2xl md:p-4">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-2xl">{course.title}</span>
                <StatusBadge status={course.status!}/>
            </div>
            <span className="font-normal text-sm text-[#8E8E93] my-4 text-justify">{course.description}</span>
        </div>
    );
}

export default CourseOverview;