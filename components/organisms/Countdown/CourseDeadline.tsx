"use client";

import {CountdownTimer} from "@/components/organisms/Countdown/index";
import {cn} from "@/lib";

interface CourseRegistrationProps {
    targetDate: string;
    className?: string;
}

function CourseDeadline({targetDate, className}: CourseRegistrationProps) {
    return (
        <section className={cn(`flex justify-between items-center mx-4 gap-4 ${className}`)}>
            <h2 className="font-semibold text-[16px] text-[#F28C28] w-1/4">مهلت ثبت نام</h2>
            <div className="w-3/4">
                <CountdownTimer targetDate={targetDate}/>
            </div>
        </section>
    );
}

export default CourseDeadline;
