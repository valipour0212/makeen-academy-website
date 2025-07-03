// CourseRegistration.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

const CountdownTimer = dynamic(() => import("@/components/organisms/CountdownTimer/CountdownTimer"), {
    ssr: false,
});

interface CourseRegistrationProps {
    targetDate: string;
}

function CourseRegistration({targetDate}: CourseRegistrationProps) {
    return (
        <section className="flex justify-between items-center mx-4 gap-4">
            <h2 className="font-semibold text-[16px] text-[#F28C28] w-1/4">مهلت ثبت نام</h2>
            <div className="w-3/4">
                <CountdownTimer targetDate={targetDate} />
            </div>
        </section>
    );
}

export default CourseRegistration;
