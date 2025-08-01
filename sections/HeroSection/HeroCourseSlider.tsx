"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {COURSES} from "@/data/courses";
import {CourseCard} from "@/components/organisms/Cards";

function HeroCourseSlider() {
    return (
        <div className="w-full md:w-1/4 h-[237px] md:h-full flex flex-col">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
                loop={true}
                spaceBetween={20}
                className="w-full flex-grow"
            >
                {
                    COURSES.map(course =>
                        <SwiperSlide key={course.id} className="h-full">
                            <CourseCard {...course} variant="hero" />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}

export default HeroCourseSlider;