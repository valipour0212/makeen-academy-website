"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {COURSES} from "@/data/courses";
import {CourseCard} from "@/components/organisms/Cards";
import Link from "next/link";
import {Button} from "@/components/atoms";

function CourseSlideSection() {
    return (
        <section className="flex flex-col md:items-center mt-10 md:mt-24">
            <h2 className="hidden md:flex font-semibold text-[28px] text-center">دوره های مکین</h2>

            <div className="w-full md:mt-12 ">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16} // فاصله بین کارت‌ها
                    loop={true} // بی‌نهایت
                    speed={5000} // سرعت اسکرول
                    autoplay={{
                        delay: 0, // بدون توقف بین اسلایدها
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView="auto" // تعداد اسلایدها بر اساس عرض کارت
                    centeredSlides={true}
                >
                    {
                        COURSES.map(course =>
                            <SwiperSlide
                                key={course.id}
                                style={{width: "264px"}} // عرض ثابت کارت
                                className="md:!w-[548px]"
                            >
                                <CourseCard {...course} variant="slide" className="my-3"/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

            <Link href="/courses" className="text-center mt-6">
                <Button variant="primaryOutline" size="large">
                    مشاهده همه دوره ها
                </Button>
            </Link>
        </section>
    );
}

export default CourseSlideSection;
