import React from 'react';
import {HeroBannerSlider, HeroCourseSlider} from "@/sections/HeroSection/index";

function HeroSection() {
    return (
        <section className="w-full flex flex-col md:flex-row-reverse gap-4 md:h-[525px] mt-24 md:mt-32">
            <HeroBannerSlider />
            <HeroCourseSlider />
        </section>
    );
}

export default HeroSection;