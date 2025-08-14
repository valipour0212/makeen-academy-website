import StudentsGrid from "@/components/organisms/Students/StudentsGrid";
import StudentAccordionList from "@/components/organisms/Students/StudentAccordionList";

export default function StudentsTemplate() {
    return (
        <div>
            <StudentsGrid/>
            <StudentAccordionList/>
        </div>
    );
}
