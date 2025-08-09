import {COURSES} from "@/data/courses";
import {notFound} from "next/navigation";
import CourseDetailTemplate from "@/components/templates/CourseDetailTemplate";

interface Props {
    params: {
        id: string;
    }
}

function CourseDetailPage({params}: Props) {
    const course = COURSES.find(course => course.id === params.id);
    console.log(course);
    if (!course) return notFound();

    return <CourseDetailTemplate course={course}/>;
}

export default CourseDetailPage;