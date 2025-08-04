import React from "react";
import Image from "next/image";

interface AudioControlButtonProps {
    isPlaying: boolean;
    onClick: () => void;
}

function AudioControlButton({isPlaying, onClick}: AudioControlButtonProps) {
    return (
        <button onClick={onClick}>
            {
                isPlaying
                    ? <Image src="/icon/students/pause.svg" alt="pause" width={32} height={32}
                             className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"/>
                    : <Image src="/icon/students/play.svg" alt="play" width={32} height={32}
                             className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"/>
            }
        </button>
    );
}

export default AudioControlButton;