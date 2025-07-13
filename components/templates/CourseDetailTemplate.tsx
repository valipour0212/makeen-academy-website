import {Footer} from "@/components/organisms/Layout";
import {CertificateSection, FAQSupportSection, VideoAndInfoSection} from "@/components/organisms/Sections";
import {JSX} from "react";
import {Course} from "@/types/types";

function CourseDetailTemplate({course}: { course: Course }): JSX.Element {
    return (
        <div className="w-full h-full bg-[#F8F8F8] py-[75px] px-4">
            <VideoAndInfoSection course={course}/>
            <CertificateSection/>
            <FAQSupportSection/>
            <Footer/>
        </div>
    );
}

export default CourseDetailTemplate;