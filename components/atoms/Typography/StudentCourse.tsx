interface StudentCourseProps {
    course: string;
}

function StudentCourse({course}: StudentCourseProps){
    return <span className="font-normal text-xs text-[#AEAEB2]">{course}</span>;
}

export default StudentCourse;