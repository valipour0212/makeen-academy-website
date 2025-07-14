"use client";

import {JSX, useState} from "react";
import {FAQ_DATA} from "@/data/faqData";
import {useIsMobile} from "@/hooks";
import {FAQCategory} from "@/components/organisms/Lists";
import {AccordionItem} from "@/components/molecules";
import Image from "next/image";

function FAQSection(): JSX.Element {
    const categories: string[] = Object.keys(FAQ_DATA);
    const [selected, setSelected] = useState(categories[0]);
    const [showAll, setShowAll] = useState(false);
    const isMobile = useIsMobile();

    const selectedFaqs = FAQ_DATA[selected];

    const visibleFaqs = isMobile
        ? showAll
            ? selectedFaqs
            : selectedFaqs.slice(0, 3)
        : selectedFaqs;

    return (
        <div className="my-5 md:my-12 w-full flex flex-col items-center relative">
            <h2 className="hidden md:flex md:font-semibold md:text-[28px]">
                سوالات متداول
            </h2>

            <FAQCategory
                categories={categories}
                selected={selected}
                onSelect={(category) => {
                    setSelected(category);
                    setShowAll(false);
                }}
            />

            <div className="flex flex-col gap-2 md:gap-6 md:grid md:grid-cols-2 w-full md:w-full">
                {
                    visibleFaqs.map((item, index) =>
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    )
                }
            </div>

            {
                isMobile && selectedFaqs.length > 3 &&
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-6 h-6 rounded-full bg-[#F28C28] absolute -bottom-3"
                >
                    {
                        showAll
                            ? <Image src={"/faqs/arrow-down.svg"} alt="arrow-down" width={24} height={24}
                                     className="p-1 rotate-180"/>
                            : <Image src={"/faqs/arrow-down.svg"} alt="arrow-down" width={24} height={24}
                                     className="p-1"/>
                    }
                </button>
            }
        </div>
    );
}

export default FAQSection;
