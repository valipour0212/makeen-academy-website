"use client"

import {useQuery} from "@tanstack/react-query";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import getBanners from "@/services/banner";
import {BannerType} from "@/types/hero-section";

function HeroBannerSlider() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["banner"],
        queryFn: getBanners,
    })

    if (isLoading) return null;
    if (isError || !data) return null;

    return (
        <div className="w-full md:w-3/4 h-[177px] md:h-full rounded-2xl overflow-hidden">
            <Swiper
                direction="vertical"
                modules={[Pagination, Autoplay]}
                pagination={{clickable: true}}
                slidesPerView={1}
                spaceBetween={20}
                loop
                autoplay={{delay: 4000}}
                className="w-full h-full"
            >
                {
                    data.map((banner: BannerType) =>
                        <SwiperSlide key={banner.id}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`https://194.36.174.46:8413${banner.imagePath}`}
                                alt={`banner-${banner.id}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    )}
            </Swiper>
        </div>
    )
}

export default HeroBannerSlider;