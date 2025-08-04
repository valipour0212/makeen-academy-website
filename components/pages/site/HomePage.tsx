import React from 'react';
import {HeroSection} from "@/sections/HeroSection";
import {FeaturesSection} from "@/sections/FeatureSection";
import CourseSlideSection from "../../../sections/CourseSlideSection/CourseSlideSection";
import NewsletterSection from "../../../sections/NewsletterSection/NewsletterSection";

function HomePage() {
    return (
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <CourseSlideSection/>
            <NewsletterSection/>
        </main>
    );
}

export default HomePage;