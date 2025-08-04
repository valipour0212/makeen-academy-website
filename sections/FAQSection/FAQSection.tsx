"use client";

import {FAQ_DATA} from "@/data/faq";
import {useState} from "react";
import {useIsMobile} from "@/hooks";
import {FAQCategory} from "@/components/organisms/FAQCategory";
import {Heading} from "@/components/atoms/Typography";
import {AccordionItem} from "@/components/molecules";
import Image from "next/image";

function FAQSection() {
    const categories: string[] = Object.keys(FAQ_DATA);
    const [selected, setSelected] = useState(categories[0]);
    const [showAll, setShowAll] = useState(false);
    const isMobile = useIsMobile();

    const selectedFaqs = FAQ_DATA[selected];

    const visibleFaqs = isMobile ? (showAll ? selectedFaqs : selectedFaqs.slice(0, 3)) : selectedFaqs;

    function handleCategorySelect(category: string) {
        setSelected(category);
        setShowAll(false);
    }

    function toggleShowAll() {
        setShowAll(prev => !prev);
    }

    return (
        <div className="my-5 md:my-12 w-full flex flex-col items-center relative">
            <Heading className="font-medium md:font-semibold text-[20px] md:text-[28px]">سوالات متداول</Heading>

            <FAQCategory categories={categories} selected={selected} onSelect={handleCategorySelect}/>

            <div className="flex flex-col gap-2 md:gap-6 md:grid md:grid-cols-2 w-full md:w-full">
                {
                    visibleFaqs.map((item, index) =>
                        <AccordionItem key={index} question={item.question} answer={item.answer}/>
                    )
                }
            </div>

            {
                isMobile && selectedFaqs.length > 3 &&
                <button
                    onClick={toggleShowAll}
                    className="w-6 h-6 rounded-full bg-[#F28C28] absolute -bottom-3"
                >
                    <Image
                        src="/icon/faqs/arrow-down.svg"
                        alt="arrow-down"
                        width={24}
                        height={24}
                        className={`p-1 ${showAll ? "rotate-180" : ""}`}
                    />
                </button>
            }
        </div>
    );
}

export default FAQSection;
