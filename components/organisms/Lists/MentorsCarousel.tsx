"use client";

import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import MentorCard from "@/components/organisms/Cards/MentorCard";

function MentorsCarousel() {
    const mentorsData = [
        {
            id: "1",
            image: "/Mentors/img-1.png",
            fullName: "محمد صادقی کیا",
            subtitle: "CEO at makeen",
            jobTitle: "منتور دوره uiux ",
            description: " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس "
        },
        {
            id: "2",
            image: "/Mentors/img-2.png",
            fullName: "حسین رفعی",
            subtitle: "CEO at makeen",
            jobTitle: "منتور دوره React ",
            description: " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس "
        },
        {
            id: "3",
            image: "/Mentors/img-3.png",
            fullName: "محمد صادقی کیا",
            subtitle: "CEO at makeen",
            jobTitle: "منتور دوره uiux ",
            description: " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس "
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="my-5 md:my12 flex flex-col items-center">
            <h2 className="font-medium md:font-semibold text-[20px] md:text-[28px] mb-4">منتورهای مکین</h2>

            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={-100}
                onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
                className="w-full md:mt-12"
            >
                {
                    mentorsData.map((mentor, index) =>
                        <SwiperSlide key={mentor.id}>
                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    index === activeIndex ? "scale-100 z-10" : "scale-75 z-0 opacity-60"
                                }`}
                            >
                                <MentorCard
                                    image={mentor.image}
                                    fullName={""}
                                    subtitle={""}
                                    jobTitle={""}
                                    description={""} // فقط وقتی انتخاب شد، توضیح رو پایین نشون می‌ده
                                />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <div className="mt-6 px-4">
                <h3 className="font-semibold md:font-bold text-lg md:text-[20px]">{mentorsData[activeIndex].fullName}</h3>
                <div className="flex flex-col gap-1 font-medium text-sm md:text-[16px] text-[#8E8E93] md:mt-4">
                    <p className="">{mentorsData[activeIndex].subtitle}</p>
                    <p className="">{mentorsData[activeIndex].jobTitle}</p>
                </div>
                <p className="font-normal text-sm md:text-[16px] mt-2 md:mt-6">{mentorsData[activeIndex].description}</p>
            </div>
        </section>
    );
}

export default MentorsCarousel;