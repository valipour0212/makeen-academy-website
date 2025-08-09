import {CourseType} from "@/types/course";
import {
    CertificateSection,
    ConsultationBox,
    CourseOverview, DesktopCourseIntro,
    ExecutionSteps,
    FaqSection,
    ImageSection, StickyFooter
} from "@/components/organisms";
import {CourseDeadline} from "@/components/organisms/Countdown";
import FeatureList from "@/components/organisms/Course/FeatureList";

interface CourseDetailTemplateProps {
    course: CourseType;
}

function CourseDetailTemplate({course}: CourseDetailTemplateProps) {
    return (
        <div className="w-full md:max-w-[1280px] my-24 px-4 md:px-0 md:mx-auto">
            {/* نسخه موبایل */}
            <div className="md:hidden flex flex-col gap-2">
                <ImageSection src="/img/course-video.png" alt="course-video"/>
                <CourseOverview course={course}/>
                <CourseDeadline targetDate={course.targetDate!} className="w-full flex flex-col gap-4"/>
                <FeatureList/>
                <ExecutionSteps/>
                <CertificateSection/>
                <FaqSection/>
                <ConsultationBox/>
                <StickyFooter/>
            </div>

            {/* نسخه دسکتاپ */}
            <div className="hidden md:flex flex-col">
                <DesktopCourseIntro course={course}/>
                <FeatureList/>
                <ExecutionSteps/>
                <CertificateSection/>
                <FaqSection/>
            </div>
        </div>
    );
}

export default CourseDetailTemplate;