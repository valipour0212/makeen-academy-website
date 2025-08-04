import {NEWSLETTER} from "@/data/newsLetter";
import {Heading, Text} from "@/components/atoms/Typography";
import {NewsletterInput} from "@/components/molecules";
import {DecorativeImage} from "@/components/atoms/Image";

function NewsletterSection() {
    return (
        <section className="mt-5 md:mt-12 flex flex-col items-center text-center relative">
            <Heading className="font-medium md:font-semibold text-[16px] md:text-3xl">
                {NEWSLETTER.title}
            </Heading>
            <Text className="font-normal text-sm md:text-lg mx-30 mt-1 md:mt-2 md:mb-5">
                {NEWSLETTER.description}
            </Text>
            <NewsletterInput/>
            <div className="absolute left-5 md:left-1/5 bottom-5">
                <DecorativeImage {...NEWSLETTER.image} />
            </div>
        </section>
    );
}

export default NewsletterSection;
