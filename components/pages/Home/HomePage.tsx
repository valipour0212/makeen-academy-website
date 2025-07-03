"use client";
import React from 'react';
import Image from "next/image";
import CoursesContainerList from "@/components/templates/CoursesContainerList/CoursesContainerList";

function HomePage() {
    return (
        <div>
            <Image
                src={"/home/banner.png"}
                alt={"banner"}
                width={358}
                height={177}
                className="rounded-lg px-4 py-6 w-full h-fit"
            />

            <CoursesContainerList/>
        </div>
    );
}

export default HomePage;