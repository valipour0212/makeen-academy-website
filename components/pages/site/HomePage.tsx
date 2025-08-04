import React from 'react';
import {HeroSection} from "@/sections/HeroSection";
import {FeaturesSection} from "@/sections/FeatureSection";
import CourseSlideSection from "../../../sections/CourseSlideSection/CourseSlideSection";
import NewsletterSection from "../../../sections/NewsletterSection/NewsletterSection";
import CompaniesSection from "../../../sections/CompaniesSection/CompaniesSection";
import FAQSection from "../../../sections/FAQSection/FAQSection";
import BlogListSection from "@/sections/BlogListSection/BlogListSection";
import GallerySection from "../../../sections/GallerySection/GallerySection";
import CoworkingSection from "../../../sections/CoworkingSection/CoworkingSection";
import MentorsSection from "../../../sections/MentorsSection/MentorsSection";

function HomePage() {
    return (
        <main>
            <HeroSection/>
            <FeaturesSection/>
            <CourseSlideSection/>
            <MentorsSection/>
            <CoworkingSection/>
            <GallerySection/>
            <BlogListSection/>
            <FAQSection/>
            <CompaniesSection/>
            <NewsletterSection/>
        </main>
    );
}

export default HomePage;