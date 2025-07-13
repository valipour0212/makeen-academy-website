import React, {JSX} from 'react';
import CourseCard from "@/components/organisms/Cards/CourseCard";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import {coursesData} from "@/data/coursesData";

function CoursesGrid(): JSX.Element {
    return (
        <section className="hidden md:flex md:flex-col md:items-center md:gap-12 md:my-12">
            <h2 className="font-semibold text-[28px] text-center">دوره های مکین</h2>
            <div className="w-full h-fit grid grid-cols-3 gap-4">
                {
                    coursesData.map(course => <CourseCard key={course.id} {...course} />)
                }
            </div>
            <Link href="/courses"><Button variant="outline" size="lg">مشاهده همه دوره ها</Button></Link>
        </section>
    );
}

export default CoursesGrid;