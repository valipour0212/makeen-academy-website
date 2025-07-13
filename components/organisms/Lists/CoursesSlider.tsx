"use client"
import CourseCardLarge from "@/components/organisms/Cards/CourseCardLarge";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {coursesData} from "@/data/coursesData";

function CoursesSlider() {
    return (
        <div className="w-full md:w-1/4 h-[237px] md:h-[525px]">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
                className="w-full h-full"
            >
                {
                    coursesData.map(course =>
                        <SwiperSlide key={course.id}>
                            <CourseCardLarge {...course} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}

export default CoursesSlider;