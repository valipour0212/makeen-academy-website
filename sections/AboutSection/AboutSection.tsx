import {ABOUT} from "@/data/about";
import Image from "next/image";
import {Button} from "@/components/atoms";
import {StepIndicatorDot} from "@/components/atoms/StepIndicator";
import Link from "next/link";
import {Heading, SubHeading, Text} from "@/components/atoms/Typography";

function AboutSection() {
    return (
        <section
            className="flex flex-col md:flex-row-reverse md:justify-between md:items-center my-5 md:gap-12 md:my-12 relative">

            {/* ✅ Step Indicators */}
            <div className="hidden md:flex flex-col gap-4">
                {
                    [0, 1, 2, 3, 4].map(step =>
                        <StepIndicatorDot key={step} isActive={step === 0}/>
                    )
                }
            </div>

            {/* Image Gallery */}
            <div className="flex justify-between gap-4">
                {
                    ABOUT.images.map((src, index) =>
                        <Image
                            key={index}
                            src={src}
                            width={110}
                            height={250}
                            alt={`about-image-${index + 1}`}
                            className={`w-1/3 md:w-[156px] h-fit md:h-[358px] rounded-lg shadow-md ${
                                index === 0
                                    ? "mt-4"
                                    : index === 1
                                        ? "mt-16"
                                        : ""
                            }`}
                        />
                    )
                }
            </div>

            {/* Text Content */}
            <div className="flex flex-col ml-5 my-6 gap-2 md:gap-8 text-black md:w-1/2">
                <Heading className="font-semibold text-2xl md:text-[32px]">{ABOUT.title}</Heading>
                <SubHeading className="font-semibold md:font-medium text-lg md:text-[20px]">
                    {ABOUT.subtitle}
                </SubHeading>
                <Text className="font-normal text-sm md:text-[16px]">{ABOUT.description}</Text>
                <Link href="/" className="cursor-pointer">
                    <Button size="large" className="mt-6">
                        مشاوره رایگان
                    </Button>
                </Link>
            </div>

            {/* Background Vector Image */}
            <Image
                src={ABOUT.vector.src}
                alt={ABOUT.vector.alt}
                width={ABOUT.vector.width}
                height={ABOUT.vector.height}
                className="hidden md:w-full md:h-full md:flex md:absolute md:-right-130 md:-top-16"
            />
        </section>
    );
}

export default AboutSection;
