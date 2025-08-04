"use client";

import WaveSurfer from "wavesurfer.js";
import {useEffect, useRef} from "react";

interface AudioWaveformProps {
    src: string;
    waveColor?: string;
    progressColor?: string;
    height?: number;
    barWidth?: number;
    barGap?: number;
    barRadius?: number;
    onReady?: (waveSurfer: WaveSurfer) => void;
    onFinish?: () => void;
}

function AudioWaveform({
                           src,
                           waveColor = "#8E8E93",
                           progressColor = "#F28C28",
                           height = 40,
                           barWidth = 3,
                           barGap = 2,
                           barRadius = 10,
                           onReady,
                           onFinish,
                       }: AudioWaveformProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!src || !containerRef.current) return;

        const ws = WaveSurfer.create({
            container: containerRef.current,
            waveColor,
            progressColor,
            height,
            barWidth,
            barGap,
            barRadius,
            interact: true,
        });

        ws.load(src);

        ws.once("ready", () => {
            ws.seekTo(0);
            onReady?.(ws);
        });

        ws.on("finish", () => onFinish?.());

        return () => ws.destroy();
    }, [src]);

    return <div ref={containerRef} className="w-full h-10"/>;
}

export default AudioWaveform;
