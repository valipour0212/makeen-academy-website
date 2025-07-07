"use client";
import React from 'react';
import Image from "next/image";
import CoursesContainerList from "@/components/templates/CoursesContainerList/CoursesContainerList";
import FeaturesList from "@/components/templates/FeaturesList/FeaturesList";
import LastVideosList from "@/components/templates/LastVideosList/LastVideosList";
import Description from "@/components/templates/Description/Description";
import MakeenihaList from "@/components/templates/MakeenihaList/MakeenihaList";

function HomePage() {
    return (
        <div className="flex flex-col">
            <Image
                src={"/home/banner.png"}
                alt={"banner"}
                width={358}
                height={177}
                className="rounded-lg py-6 w-full h-fit"
            />

            {/*<CoursesContainerList/>*/}
            {/*<FeaturesList/>*/}
            {/*<LastVideosList/>*/}
            {/*<Description/>*/}
            <MakeenihaList/>
        </div>
    );
}

export default HomePage;