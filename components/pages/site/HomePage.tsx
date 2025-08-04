import React from 'react';
import {HeroSection} from "@/sections/HeroSection";
import {FeaturesSection} from "@/sections/FeatureSection";
import CourseSlideSection from "../../../sections/CourseSlideSection/CourseSlideSection";
import NewsletterSection from "../../../sections/NewsletterSection/NewsletterSection";
import CompaniesSection from "../../../sections/CompaniesSection/CompaniesSection";

function HomePage() {
    return (
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <CourseSlideSection/>
            <CompaniesSection/>
            <NewsletterSection/>
        </main>
    );
}

export default HomePage;