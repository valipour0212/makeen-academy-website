import {Heading, Text} from "@/components/atoms/Typography";
import Link from "next/link";
import {Button} from "@/components/atoms";
import {CoworkingImageGrid} from "@/components/molecules";
import {COWORKING} from "@/data/coworking";

function CoworkingSection() {
    return (
        <section
            className="my-5 md:my-12 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 md:gap-16">
            <div className="flex flex-col md:w-1/2 md:gap-8">
                <Heading className="font-semibold text-lg md:text-[30px] mt-0 md:mt-6">{COWORKING.title}</Heading>

                <Text className="font-normal text-sm md:text-lg text-[#8E8E93] mt-4 mb-8">{COWORKING.description}</Text>

                <Link href={COWORKING.button_link}>
                    <Button size="large">{COWORKING.button_text}</Button>
                </Link>
            </div>

            <CoworkingImageGrid images={COWORKING.images}/>
        </section>
    );
}

export default CoworkingSection;