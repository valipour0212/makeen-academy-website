import {CourseStep} from "@/types/course";

function CourseProgressStep({step, title, description}: CourseStep) {
    return (
        <div className="flex md:flex-col justify-between md:justify-center md:items-center gap-4">
            <div
                className="min-w-[77px] md:w-[97px] min-h-[77px] md:h-[97px] flex justify-center items-center bg-white border border-gray-200 rounded-2xl">
                <span className="font-semibold text-[28px]">{step}</span>
            </div>
            <div className="flex flex-col md:items-center gap-2">
                <span className="font-semibold text-[16px] md:text-[18px]">{title}</span>
                <span className="font-normal text-sm text-center pl-20 md:pl-0">{description}</span>
            </div>
        </div>
    );
}

export default CourseProgressStep;