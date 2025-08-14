"use client"

import {Student} from "@/types/students";
import {useRef, useState} from "react";
import WaveSurfer from "wavesurfer.js";
import {AvatarImage} from "@/components/atoms/Image";
import {Icon} from "@/components/atoms/Icon";
import {Text} from "@/components/atoms/Typography";
import {AudioControlButton, AudioWaveform} from "@/components/atoms/Audio";

interface StudentModalProps {
    isOpen: boolean,
    onClose: () => void,
    student: Student,
}

function StudentModal({isOpen, onClose, student}: StudentModalProps) {
    if (!isOpen) return null;

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
        <div className="fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-black/80 ">
            <div className="relative w-[500px] h-[300px] bg-white rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <AvatarImage src={student.image} alt={student.image} size={60}/>
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px]">{student.fullName}</p>
                            <div className="flex items-center gap-1">
                                <Icon src={student.companyLogo} alt={student.companyLogo}/>
                                <span
                                    className="font-normal text-sm text-[#AEAEB2] text-nowrap">{student.jobTitle}</span>
                            </div>
                        </div>
                    </div>
                    <button className="absolute left-4 top-4 cursor-pointer" onClick={onClose}>
                        <Icon src="/icon/close-square.svg" alt="lose-square" size={32}/>
                    </button>
                </div>

                <Text className="">{student.description}</Text>

                <div className="flex items-center gap-2 my-2 w-full">
                    <AudioWaveform
                        src={student.voice}
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
    );
}

export default StudentModal;