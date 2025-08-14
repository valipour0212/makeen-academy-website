import React from 'react';
import {STUDENTS} from "@/data/students";
import StudentCardAccordionList from "@/components/molecules/Students/StudentCardAccordionList";

function StudentAccordionList() {
    return (
        <section className="flex flex-col gap-4 md:hidden">
            {
                STUDENTS.map(student =>
                    <StudentCardAccordionList key={student.id} {...student}/>
                )
            }
        </section>
    );
}

export default StudentAccordionList;