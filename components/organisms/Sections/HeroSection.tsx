import React from 'react';
import BannerSlider from "@/components/organisms/Banners/BannerSlider";
import CoursesSlider from "@/components/organisms/Lists/CoursesSlider";

function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row-reverse w-full md:h-[525px] h-auto gap-4 md:gap-6 my-5 md:my-12">
            <BannerSlider />
            <CoursesSlider />
        </section>
    );
}
export default HeroSection;
