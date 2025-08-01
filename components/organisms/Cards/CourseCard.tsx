import React from "react";
import {CourseCardHero, CourseCardList, CourseCardSlide} from "@/components/organisms/Cards/index";
import {CourseType} from "@/types/hero-section";

function CourseCard(course: CourseType) {
    switch (course.variant) {
        case "hero":
            return <CourseCardHero {...course}/>;
        case "slide":
            return <CourseCardSlide {...course} />;
        case "list":
        default:
            return <CourseCardList {...course} />;
    }
}

export default CourseCard;
