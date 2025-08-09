import CourseProgressStep from "@/components/organisms/Course/CourseProgressStep";
import {COURSE_STEPS} from "@/data/courses";

function ExecutionSteps() {
    return (
        <div className="my-10 md:my-24">
            <h2 className="font-semibold text-[20px] md:text-[28px] text-center mb-8">روند اجرای دوره</h2>
            <div className="flex flex-col md:flex-row gap-20 md:gap-32">
                {
                    COURSE_STEPS.map(step =>
                        <CourseProgressStep key={step.step} {...step} />
                    )
                }
            </div>
        </div>
    );
}

export default ExecutionSteps;