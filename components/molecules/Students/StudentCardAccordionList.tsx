"use client"
import React, {useRef, useState} from 'react';
import {AvatarImage} from "@/components/atoms/Image";
import {Icon} from "@/components/atoms/Icon";
import {Student} from "@/types/students";
import {Text} from "@/components/atoms/Typography";
import WaveSurfer from "wavesurfer.js";
import {AudioControlButton, AudioWaveform} from "@/components/atoms/Audio";

function StudentCardAccordionList({image, fullName, jobTitle, companyLogo, description, voice}: Student) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(prev => !prev);
    }

    //
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
        <div className="w-full min-h-16 bg-white rounded-lg shadow p-2 ">
            <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
                <div className="flex items-center gap-2">
                    <AvatarImage src={image} alt={image} size={40}/>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-[14px]">{fullName}</p>
                        <div className="flex items-center gap-1">
                            <Icon src={companyLogo} alt={companyLogo} size={16}/>
                            <span
                                className="font-normal text-xs text-[#AEAEB2] text-nowrap">{jobTitle}</span>
                        </div>
                    </div>
                </div>

                <Icon
                    src="/icon/arrow-down.svg"
                    alt="arrow-down"
                    size={32}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </div>

            {/* بخش بازشونده */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-fit mt-3" : "max-h-0"}`}>
                {
                    description && <Text className="font-normal text-xs">{description}</Text>
                }

                {
                    voice && 
                    <div className="flex items-center gap-2 my-2 w-full mt-4">
                        <AudioWaveform
                            src={voice}
                            onReady={(ws) => (waveSurferRef.current = ws)}
                            onFinish={() => setIsPlaying(false)}
                        />
                        <AudioControlButton
                            isPlaying={isPlaying}
                            onClick={handleTogglePlay}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default StudentCardAccordionList;