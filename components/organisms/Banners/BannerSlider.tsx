"use client";

import React, {JSX} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";

const banners = [
    "/home/banner.png",
    "/home/banner.png",
    "/home/banner.png",
];

function BannerSlider(): JSX.Element {
    return (
        <div className="w-full md:w-4/5 h-[177px] md:h-[501px] rounded-2xl overflow-hidden">
            <Swiper
                direction="vertical"
                modules={[Pagination, Autoplay]}
                pagination={{clickable: true}}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{delay: 4000}}
                className="w-full h-full"
            >
                {
                    banners.map((src, index) =>
                        <SwiperSlide key={index}>
                            <Image
                                src={src}
                                alt={`banner-${index}`}
                                width={987}
                                height={501}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}


export default BannerSlider;
