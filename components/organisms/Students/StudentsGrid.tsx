"use client"
import React, {useState} from 'react';
import {STUDENTS} from "@/data/students";
import StudentCardGrid from "@/components/molecules/Students/StudentCardGrid";
import {Student} from "@/types/students";
import StudentModal from "@/components/common/Modal/StudentModal";

function StudentsGrid() {
    const [select, setSelect] = useState<Student | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleOpenModal(student: Student) {
        setSelect(student)
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
        setSelect(null)
    }

    return (
        <>
            <section className="hidden md:grid grid-cols-4 gap-6">
                {
                    STUDENTS.map(student =>
                        <StudentCardGrid
                            key={student.id}
                            image={student.image}
                            fullName={student.fullName}
                            jobTitle={student.jobTitle}
                            companyLogo={student.companyLogo}
                            course={student.course}
                            onClick={() => handleOpenModal(student)}/>
                    )
                }
            </section>

            {
                select &&
                <StudentModal isOpen={isModalOpen} onClose={handleCloseModal} student={select}/>
            }
        </>
    );
}

export default StudentsGrid;