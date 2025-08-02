import React from 'react';
import {HeroSection} from "@/sections/HeroSection";
import {FeaturesSection} from "@/sections/FeatureSection";
import CourseSlideSection from "../../../sections/CourseSlideSection/CourseSlideSection";

function HomePage() {
    return (
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <CourseSlideSection/>
        </main>
    );
}

export default HomePage;