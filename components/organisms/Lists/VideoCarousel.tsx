'use client';


import {useState} from "react";
import {VideoCard} from "@/components/organisms/Cards";
import {CarouselControls} from "@/components/molecules";

const videos = [
    {id: '1', image: '/last-videos/img-1.png', title: 'ویژه برنامه نوروزی مکین', visit: 23, uploaded: 23},
    {id: '2', image: '/last-videos/img-1.png', title: 'مکین، مسیر شغلی تو', visit: 12, uploaded: 10},
    {id: '3', image: '/last-videos/img-1.png', title: 'بررسی مسیرهای یادگیری', visit: 45, uploaded: 5},
    {id: '4', image: '/last-videos/img-1.png', title: 'مصاحبه با دانش‌پذیر', visit: 33, uploaded: 15},
    {id: '5', image: '/last-videos/img-1.png', title: 'همایش بزرگ توسعه‌دهنده‌ها', visit: 27, uploaded: 2},
    {id: '6', image: '/last-videos/img-1.png', title: 'رویداد تابستانی مکین', visit: 31, uploaded: 1},
];

const VISIBLE_COUNT_MOBILE = 3;
const VISIBLE_COUNT_DESKTOP = 5;

function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(videos.length / 2));

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const visibleCount = isMobile ? VISIBLE_COUNT_MOBILE : VISIBLE_COUNT_DESKTOP;
    const half = Math.floor(visibleCount / 2);

    const start = Math.max(currentIndex - half, 0);
    const end = Math.min(start + visibleCount, videos.length);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const visibleVideos = videos.slice(start, end);

    return (
        <section className="relative w-full flex flex-col items-center gap-4 md:gap-8 my-8">
            <h2 className="font-semibold text-xl md:text-[28px]">آخرین ویدیوها</h2>
            <div className="relative w-full overflow-hidden flex justify-center">
                <div className="flex gap-4 transition-transform duration-300">
                    {
                        visibleVideos.map(video =>
                            <VideoCard key={video.id} {...video} />
                        )
                    }
                </div>
                <CarouselControls onPrev={handlePrev} onNext={handleNext}/>
            </div>
        </section>
    );
}

export default VideoCarousel;
