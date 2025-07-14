"use client";

import Image from "next/image";
import {MENTORS_DATA} from "@/data/mentorsData";
import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

function MentorsCarousel() {
    const [activeId, setActiveId] = useState(MENTORS_DATA[0].id);
    const activeMentor = MENTORS_DATA.find((m) => m.id === activeId)!;

    const getSizeClass = (mentorId: number): string => {
        const diff = Math.abs(activeId - mentorId);
        switch (diff) {
            case 0:
                return "w-[251] h-[317] opacity-100 z-30";
            case 1:
                return "w-[199] h-[253] opacity-90 z-20";
            case 2:
                return "w-[156] h-[197] opacity-90 z-10";
            default:
                return "w-[116] h-[147] opacity-90 z-0";
        }
    };

    const goToNext = () => {
        const currentIndex = MENTORS_DATA.findIndex((m) => m.id === activeId);
        const nextIndex = (currentIndex + 1) % MENTORS_DATA.length;
        setActiveId(MENTORS_DATA[nextIndex].id);
    };

    const goToPrev = () => {
        const currentIndex = MENTORS_DATA.findIndex((m) => m.id === activeId);
        const prevIndex = (currentIndex - 1 + MENTORS_DATA.length) % MENTORS_DATA.length;
        setActiveId(MENTORS_DATA[prevIndex].id);
    };

    return (
        <div className="w-full flex flex-col items-center py-8">
            <h2 className="text-xl md:text-3xl font-bold mb-8">منتورهای مکین</h2>

            <div className="w-full flex justify-between ">
                {/* تصویرها */}
                <div className="hidden md:flex items-center md:max-w-1/3">
                    {
                        MENTORS_DATA.map((mentor) =>
                            <Image
                                key={mentor.id}
                                src={mentor.image}
                                alt={mentor.fullName}
                                width={112}
                                height={112}
                                onClick={() => setActiveId(mentor.id)}
                                className={`rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-sm
                                ${getSizeClass(mentor.id)}`}
                            />
                        )
                    }
                </div>

                {/* کارت فعال */}
                <div className="flex flex-col justify-evenly items-start pr-20 w-1/2">
                    <h3 className="text-lg font-bold mt-4">{activeMentor.fullName}</h3>
                    <p className="text-sm text-gray-500">{activeMentor.subtitle}</p>
                    <p className="text-sm font-medium">{activeMentor.jobTitle}</p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        {activeMentor.description}
                    </p>


                    {/* فلش‌ها */}
                    <div className="flex gap-6 mt-6">
                        <button onClick={goToPrev} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <ChevronLeft className="w-5 h-5 rtl:rotate-180"/>
                        </button>

                        <button onClick={goToNext} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <ChevronRight className="w-5 h-5 rtl:rotate-180"/>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MentorsCarousel;
