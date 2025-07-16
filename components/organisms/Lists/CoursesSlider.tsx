"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {coursesData} from "@/data/coursesData";
import {HeroSectionCard} from "@/components/organisms/Cards";

function CoursesSlider() {
    return (
        <div className="w-full md:w-1/5 h-fit md:h-[525px] flex flex-col">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                className="w-full flex-grow"
            >
                {coursesData.map(course => (
                    <SwiperSlide key={course.id} className="h-full">
                        <HeroSectionCard {...course} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CoursesSlider;