"use client";

import {useEffect, useRef, useState} from "react";
import {VIDEOS} from "@/data/video";
import {SliderArrowButton} from "@/components/atoms/Button";
import {VideoCard} from "@/components/organisms/Cards";

function VideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCount = typeof window !== "undefined" && window.innerWidth >= 768 ? 5 : 3;
    const middleIndex = Math.floor(visibleCount / 2);

    // حلقه خودکار (autoplay)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // 3 ثانیه

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    };

    const getVisibleSlides = () => {
        const result = [];
        const total = VIDEOS.length;

        for (let i = -middleIndex; i <= middleIndex; i++) {
            const index = (currentIndex + i + total) % total;
            result.push({...VIDEOS[index], isActive: i === 0});
        }

        return result;
    };

    useEffect(() => {
        if (containerRef.current) {
            const childWidth = containerRef.current.children[0]?.clientWidth || 0;
            const scrollTo = childWidth * currentIndex;
            containerRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth",
            });
        }
    }, [currentIndex]);

    return (
        <section className="relative w-full flex flex-col items-center my-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">آخرین ویدیوها</h2>

            <div className="relative flex items-center justify-center w-full">
                <SliderArrowButton direction="left" onClick={handlePrev}/>

                <div
                    ref={containerRef}
                    className="overflow-hidden w-full max-w-[1200px] flex items-center justify-center"
                >
                    <div className="flex transition-transform duration-300 ease-in-out gap-4 px-4">
                        {
                            getVisibleSlides().map(video =>
                                <VideoCard key={video.id} {...video} isActive={video.isActive}/>
                            )
                        }
                    </div>
                </div>

                <SliderArrowButton direction="right" onClick={handleNext} />
            </div>
        </section>
    );
}

export default VideoSection;
