import React from 'react';
import {HeroSection} from "@/sections/HeroSection";
import {FeaturesSection} from "@/sections/FeatureSection";
import CourseSlideSection from "../../../sections/CourseSlideSection/CourseSlideSection";
import NewsletterSection from "../../../sections/NewsletterSection/NewsletterSection";
import CompaniesSection from "../../../sections/CompaniesSection/CompaniesSection";
import FAQSection from "../../../sections/FAQSection/FAQSection";
import BlogListSection from "@/sections/BlogListSection/BlogListSection";

function HomePage() {
    return (
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <CourseSlideSection/>
            <BlogListSection/>
            <FAQSection/>
            <CompaniesSection/>
            <NewsletterSection/>
        </main>
    );
}

export default HomePage;