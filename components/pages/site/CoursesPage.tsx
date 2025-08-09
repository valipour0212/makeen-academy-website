import {COURSES} from "@/data/courses";
import {CourseCard} from "@/components/organisms/Cards";

function CoursesPage() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-5 md:mt-24">
            {
                COURSES.map(course =>
                    <CourseCard key={course.id} {...course} variant="list"/>
                )
            }
        </div>
    );
}

export default CoursesPage;