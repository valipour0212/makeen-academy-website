"use client";
import React from 'react';
import Image from "next/image";
import Newsletter from "@/components/templates/Newsletter/Newsletter";

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
            {/*<MakeenihaList/>*/}
            {/*<MentorsList/>*/}
            {/*<Cowork/>*/}
            {/*<Gallery/>*/}
            {/*<BlogList/>*/}
            {/*<StudentCompanies/>*/}
            <Newsletter/>
        </div>
    );
}

export default HomePage;