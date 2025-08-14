"use client";

import {useRef, useState} from "react";
import {STUDENTS} from "@/data/students";
import WaveSurfer from "wavesurfer.js";
import Image from "next/image";
import {AudioControlButton, AudioWaveform} from "@/components/atoms/Audio";
import {Heading} from "@/components/atoms/Typography";
import StudentCard from "@/components/molecules/Students/StudentCard";

function StudentsSection() {
    const [selectID, setSelectID] = useState(STUDENTS[0].id);
    const selected = STUDENTS.find((item) => item.id === selectID);

    const waveSurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function handleTogglePlay(): void {
        const ws = waveSurferRef.current;
        if (!ws) return;

        const playing = ws.isPlaying();
        ws.playPause();
        setIsPlaying(!playing);
    }

    return (
        <section className="my-5 mt-16 md:my-12 md:flex md:flex-col md:items-center gap-16">
            <Heading className="hidden md:flex md:font-semibold md:text-[28px]">مکینی ها</Heading>
            <div className="md:flex md:flex-row-reverse md:gap-8">

                {/* Student Detail */}
                <div
                    className="w-full md:w-1/2 h-64 flex flex-col items-center px-2 mt-2 bg-white rounded-[20px] shadow relative">
                    <div
                        className="w-[100px] h-[100px] bg-white rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                        <Image src={selected!.image} alt="avatar" fill className="object-cover rounded-full p-2"/>
                    </div>
                    <div className="mt-18 pb-4 text-center flex flex-col justify-between gap-2">
                        <h2 className="font-semibold text-[16px]">{selected!.fullName}</h2>
                        <p className="font-normal text-xs text-[#575757]">{selected!.jobTitle}</p>
                        <p className="font-normal text-[16px]">{selected!.description}</p>
                        <div className="flex items-center gap-2 my-2 w-full">
                            <AudioWaveform
                                src={selected!.voice}
                                onReady={(ws) => (waveSurferRef.current = ws)}
                                onFinish={() => setIsPlaying(false)}
                            />
                            <AudioControlButton
                                isPlaying={isPlaying}
                                onClick={handleTogglePlay}
                            />
                        </div>
                    </div>
                </div>

                {/* Student List */}
                <div
                    className="md:w-1/2 md:h-64 mt-5 md:mt-0 md:pl-4 flex md:flex-col md:justify-between gap-4 md:gap-1 overflow-x-auto hide-scroll-x md:overflow-y-auto">
                    {
                        STUDENTS.slice(0, 6).map(item =>
                            <StudentCard
                                key={item.id}
                                image={item.image}
                                fullName={item.fullName}
                                jobTitle={item.jobTitle}
                                companyLogo={item.companyLogo}
                                course={item.course}
                                onSelect={item.id === selectID}
                                onClick={() => setSelectID(item.id)}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default StudentsSection;