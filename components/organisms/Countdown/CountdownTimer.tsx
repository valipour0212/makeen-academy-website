"use client"

import {useEffect, useState} from "react";
import {TimeBox} from "@/components/molecules";

interface CountdownTimerProps {
    targetDate: string;
}

type TimeLeft = {
    day: number;
    hour: number;
    minute: number;
    second: number;
}


function CountdownTimer({targetDate}: CountdownTimerProps) {

    function calculateTimeLeft(): TimeLeft {
        const diff = +new Date(targetDate) - +new Date();

        return {
            day: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hour: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minute: Math.floor((diff / (1000 * 60)) % 60),
            second: Math.floor((diff / (1000)) % 60)
        };
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);


    return (
        <div className="flex justify-between text-center px-2">
            <TimeBox value={timeLeft.day} label={"روز"}/>
            <TimeBox value={timeLeft.hour} label={"ساعت"}/>
            <TimeBox value={timeLeft.minute} label={"دقیقه"}/>
            <TimeBox value={timeLeft.second} label={"ثانیه"} color="text-[#F28C28]"/>
        </div>
    );
}

export default CountdownTimer;