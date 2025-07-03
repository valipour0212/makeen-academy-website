"use client";

import {SwiperSlide} from "swiper/react";
import CoursesContainerCard from "@/components/organisms/CoursesContainerCard/CoursesContainerCard";

const coursesData = [
    {
        id: "1",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره UI/UX",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/courses/ui.png",
    },
    {
        id: "2",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره .NET",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "coming_soon",
        image: "/courses/dotNET.png",
    },
    {
        id: "3",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره PHP",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "full",
        image: "/courses/php.png",
    },
    {
        id: "4",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره Python",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/courses/python.png",
    },
    {
        id: "5",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره React",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/courses/react.png",
    },
] as const;

function CoursesContainerList() {
    return (
        <div className="mx-4 my-10">
            {
                coursesData.map(course => <SwiperSlide key={course.id}>
                    <CoursesContainerCard
                        targetDate={course.targetDate}
                        title={course.title}
                        description={course.description}
                        status={course.status}
                        image={course.image}
                    />
                </SwiperSlide>)
            }
        </div>
    );
}

export default CoursesContainerList;