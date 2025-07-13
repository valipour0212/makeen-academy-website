import React from 'react';
import {coursesData} from "@/data/coursesData";
import {CourseCard} from "@/components/organisms/Cards";

function CourseSection() {
    return (
        <section className="w-full md:max-w-[1440px] h-full py-28 md:mx-auto md:grid md:grid-cols-2 md:gap-7">
            {
                coursesData.map(course => <CourseCard key={course.id} {...course} />)
            }
        </section>
    );
}

export default CourseSection;