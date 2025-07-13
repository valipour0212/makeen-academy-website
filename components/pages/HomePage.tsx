import {
    AboutMakeen,
    CoworkingIntro, FAQSection,
    GallerySection,
    HeroSection, NewsletterSection,
    StudentCompanies
} from "@/components/organisms/Sections";
import {
    BlogList,
    CoursesGrid,
    FeaturesGrid,
    MentorsCarousel,
    RecentVideos,
    StudentsShowcase
} from "@/components/organisms/Lists";
import {Footer} from "@/components/organisms/Layout";

function HomePage() {
    return (
        <div className="flex flex-col">
            <HeroSection/>
            <FeaturesGrid/>
            <CoursesGrid/>
            <RecentVideos/>
            <AboutMakeen/>
            <StudentsShowcase/>
            <MentorsCarousel/>
            <CoworkingIntro/>
            <GallerySection/>
            <BlogList/>
            <FAQSection/>
            <StudentCompanies/>
            <NewsletterSection/>
            <Footer/>
        </div>
    );
}

export default HomePage;