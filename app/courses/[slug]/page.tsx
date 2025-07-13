"use client";

import { JSX, use } from "react";
import { coursesData } from "@/data/coursesData";
import { notFound } from "next/navigation";
import CourseDetailTemplate from "@/components/templates/CourseDetailTemplate";

function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }): JSX.Element {
    const { slug } = use(params);
    const course = coursesData.find(course => course.slug === slug);
    if (!course) return notFound();
    return <CourseDetailTemplate course={course} />;
}

export default CourseDetailPage;
