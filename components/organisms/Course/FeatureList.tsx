import {COURSE_FEATURES} from "@/data/courses";
import CourseDetailFeature from "@/components/molecules/CourseDetailFeature";

function FeatureList() {
    return (
        <div className="w-full grid grid-cols-2 md:flex gap-6 md:mt-8">
            {
                COURSE_FEATURES.map(feature =>
                    <CourseDetailFeature key={feature.id} {...feature} className="w-full"/>
                )
            }
        </div>
    );
}

export default FeatureList;