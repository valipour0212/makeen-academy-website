"use client"

import {MENTORS} from "@/data/mentors";
import {useState} from "react";
import {MentorImage} from "@/components/atoms/Image";
import {Heading} from "@/components/atoms/Typography";
import {MentorCard} from "@/components/molecules";
import Image from "next/image";

function getTranslateX(offset: number): number {
    const base = 100;
    if (Math.abs(offset) > 2) return offset * (base * 0.6);
    if (Math.abs(offset) > 1) return offset * (base * 0.8);
    return offset * base;
}

function getSizeStyle(activeId: string, mentorId: string): { width: number; height: number } {
    const diff = Math.abs(Number(activeId) - Number(mentorId));
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

function MentorsSection() {
    const mentorsList = MENTORS.mentors;
    const [activeId, setActiveId] = useState(mentorsList[0].id);
    const activeMentor = mentorsList.find((m) => m.id === activeId)!;

    function goToNext(): void {
        const currentIndex = mentorsList.findIndex((m) => m.id === activeId);
        const nextIndex = (currentIndex + 1) % mentorsList.length;
        setActiveId(mentorsList[nextIndex].id);
    }

    function goToPrev(): void {
        const currentIndex = mentorsList.findIndex((m) => m.id === activeId);
        const prevIndex = (currentIndex - 1 + mentorsList.length) % mentorsList.length;
        setActiveId(mentorsList[prevIndex].id);
    }

    return (
        <section className="w-full flex flex-col items-center py-8">
            <Heading className="text-xl md:text-3xl font-bold mb-8">{MENTORS.title}</Heading>

            <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
                {/* Mentor Images */}
                <div
                    className="relative flex flex-col md:flex-row items-center justify-center w-full h-[350px] overflow-hidden">
                    {
                        mentorsList.map(mentor => {
                            // const isActive = mentor.id === activeId;
                            const index = mentorsList.findIndex((m) => m.id === mentor.id);
                            const activeIndex = mentorsList.findIndex((m) => m.id === activeId);
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
                                        transform: `translateX(${getTranslateX(offset)}px) scale(${
                                            1 - Math.min(Math.abs(offset) * 0.1, 0.4)
                                        })`,
                                        zIndex: 10 - Math.abs(offset),
                                        // opacity: isActive ? 1 : 0.6,
                                    }}
                                />
                            );
                        })}
                </div>

                {/* Mentor Info - Desktop */}
                <div className="hidden md:flex flex-col items-start">
                    <MentorCard
                        fullName={activeMentor.fullName}
                        subtitle={activeMentor.subtitle}
                        jobTitle={activeMentor.jobTitle}
                        description={activeMentor.description}
                    />

                    <div className="flex gap-3 mt-9">
                        <button
                            onClick={goToPrev}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                            <Image
                                src="/icon/mentor/arrow-right.svg"
                                alt="arrow-right"
                                width={24}
                                height={24}
                            />
                        </button>
                        <button
                            onClick={goToNext}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                            <Image
                                src="/icon/mentor/arrow-left.svg"
                                alt="arrow-left"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mentor Info - Mobile */}
            <div className="md:hidden">
                <MentorCard
                    fullName={activeMentor.fullName}
                    subtitle={activeMentor.subtitle}
                    jobTitle={activeMentor.jobTitle}
                    description={activeMentor.description}
                />
            </div>
        </section>
    );
}

export default MentorsSection;