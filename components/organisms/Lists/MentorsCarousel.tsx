"use client";

import {JSX, useState} from "react";
import {MENTORS_DATA} from "@/data/mentorsData";
import {MentorImage} from "@/components/atoms";
import {MentorCard} from "@/components/organisms/Cards";
import Image from "next/image";

function getTranslateX(offset: number): number {
    const base = 100;
    if (Math.abs(offset) > 2) return offset * (base * 0.6);
    if (Math.abs(offset) > 1) return offset * (base * 0.8);
    return offset * base;
}

function getSizeStyle(activeId: number, mentorId: number): { width: number; height: number } {
    const diff = Math.abs(activeId - mentorId);
    switch (diff) {
        case 0:
            return {width: 251, height: 317};
        case 1:
            return {width: 199, height: 253};
        case 2:
            return {width: 156, height: 197};
        default:
            return {width: 116, height: 147};
    }
}

function MentorsCarousel(): JSX.Element {
    const [activeId, setActiveId] = useState(MENTORS_DATA[0].id);
    const activeMentor = MENTORS_DATA.find((m) => m.id === activeId)!;

    function goToNext(): void {
        const currentIndex = MENTORS_DATA.findIndex((m) => m.id === activeId);
        const nextIndex = (currentIndex + 1) % MENTORS_DATA.length;
        setActiveId(MENTORS_DATA[nextIndex].id);
    }

    function goToPrev(): void {
        const currentIndex = MENTORS_DATA.findIndex((m) => m.id === activeId);
        const prevIndex = (currentIndex - 1 + MENTORS_DATA.length) % MENTORS_DATA.length;
        setActiveId(MENTORS_DATA[prevIndex].id);
    }

    return (
        <div className="w-full flex flex-col items-center py-8">
            <h2 className="text-xl md:text-3xl font-bold mb-8">منتورهای مکین</h2>

            <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-20">

                {/* تصاویر - مشترک موبایل و دسکتاپ */}
                <div
                    className="relative flex flex-col md:flex-row items-center justify-center w-full h-[350px] overflow-hidden">
                    {
                        MENTORS_DATA.map(mentor => {
                                const isActive = mentor.id === activeId;
                                const index = MENTORS_DATA.findIndex((m) => m.id === mentor.id);
                                const activeIndex = MENTORS_DATA.findIndex((m) => m.id === activeId);
                                const offset = index - activeIndex;
                                const size = getSizeStyle(activeId, mentor.id);

                                return (
                                    <MentorImage
                                        key={mentor.id}
                                        src={mentor.image}
                                        alt={mentor.fullName}
                                        width={size.width}
                                        height={size.height}
                                        onClick={() => setActiveId(mentor.id)}
                                        className="absolute"
                                        style={{
                                            transform: `translateX(${getTranslateX(offset)}px) scale(${1 - Math.min(Math.abs(offset) * 0.1, 0.4)})`,
                                            zIndex: 10 - Math.abs(offset),
                                            opacity: isActive ? 1 : 0.6,
                                        }}
                                    />
                                );
                            }
                        )
                    }
                </div>

                {/* اطلاعات - فقط دسکتاپ */}
                <div className="hidden md:flex flex-col items-start">
                    <MentorCard
                        fullName={activeMentor.fullName}
                        subtitle={activeMentor.subtitle}
                        jobTitle={activeMentor.jobTitle}
                        description={activeMentor.description}
                    />

                    <div className="flex gap-3 mt-9">
                        <button onClick={goToPrev} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <Image src="/Mentors/arrow-right.svg" alt="arrow-left" width={24} height={24} className=""/>
                        </button>
                        <button onClick={goToNext} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <Image src="/Mentors/arrow-left.svg" alt="arrow-left" width={24} height={24} className=""/>
                        </button>
                    </div>
                </div>
            </div>

            {/* اطلاعات - فقط موبایل */}
            <div className="md:hidden">
                <MentorCard
                    fullName={activeMentor.fullName}
                    subtitle={activeMentor.subtitle}
                    jobTitle={activeMentor.jobTitle}
                    description={activeMentor.description}
                />
            </div>
        </div>
    );
}

export default MentorsCarousel;