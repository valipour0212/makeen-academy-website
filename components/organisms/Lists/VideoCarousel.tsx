'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules';
import {VideoCard} from '@/components/organisms/Cards';

const videos = [
    {id: '1', image: '/last-videos/img-1.png', title: 'ویژه برنامه نوروزی مکین', visit: 23, uploaded: 23},
    {id: '2', image: '/last-videos/img-1.png', title: 'مکین، مسیر شغلی تو', visit: 12, uploaded: 10},
    {id: '3', image: '/last-videos/img-1.png', title: 'بررسی مسیرهای یادگیری', visit: 45, uploaded: 5},
    {id: '4', image: '/last-videos/img-1.png', title: 'مصاحبه با دانش‌پذیر', visit: 33, uploaded: 15},
    {id: '5', image: '/last-videos/img-1.png', title: 'همایش بزرگ توسعه‌دهنده‌ها', visit: 27, uploaded: 2},
    {id: '6', image: '/last-videos/img-1.png', title: 'رویداد تابستانی مکین', visit: 31, uploaded: 1},
];

function VideoCarousel() {
    return (
        <section className="w-full flex flex-col items-center gap-6 my-5  md:my-12">
            <h2 className="font-semibold text-xl md:text-[28px]">آخرین ویدیوها</h2>

            <div className="relative w-full px-4 md:px-0">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    centeredSlides
                    spaceBetween={-100}
                    className="w-full flex items-center"
                >
                    {
                        videos.slice(0,5).map(video =>
                            <SwiperSlide key={video.id}>
                                {
                                    ({isActive}) =>
                                        <div
                                            className={`transition-all duration-300 ease-in-out ${isActive ? 'scale-100' : 'scale-90 md:scale-85'}`}>
                                            <VideoCard {...video} />
                                        </div>
                                }
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default VideoCarousel;
