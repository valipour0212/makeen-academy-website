"use client"

import FAQCategory from "@/components/organisms/Lists/FAQCategory";
import {useState} from "react";
import AccordionItem from "@/components/molecules/AccordionItem";

const faqData: Record<string, { question: string; answer: string }[]> = {
    "دوره ها": [
        {question: "چه دوره‌هایی برگزار می‌شوند؟", answer: "دوره‌های برنامه‌نویسی، طراحی و ..."},
        {question: "آیا مدرک داده می‌شود؟", answer: "بله، مدرک معتبر ارائه می‌گردد."},
    ],
    "تضمین استخدام": [
        {question: "آیا تضمین واقعی است؟", answer: "بله، با شرکت‌های همکار قرارداد داریم."},
    ],
    "شرایط پرداخت": [
        {question: "امکان پرداخت اقساطی هست؟", answer: "بله، امکان پرداخت در ۳ قسط وجود دارد."},
    ],
    "مدت زمان دوره ها": [
        {question: "مدت زمان دوره‌ها چقدر است؟", answer: "بین ۳ تا ۶ ماه بسته به دوره."},
    ],
};

function FAQSection() {
    const categories: string[] = Object.keys(faqData);
    const [selected, setSelected] = useState(categories[0]);

    return (
        <div className="my-5 md:my-12 w-full flex flex-col items-center">
            <h2 className="hidden md:flex md:font-semibold md:text-[28px]">سوالات متداول</h2>
            <FAQCategory
                categories={categories}
                selected={selected}
                onSelect={setSelected}
            />

            <div className="flex flex-col gap-2 md:gap-6 md:grid md:grid-cols-2 md:w-full">
                {
                    faqData[selected].map((item, index) =>
                        <AccordionItem key={index} question={item.question} answer={item.answer}/>
                    )
                }
            </div>
        </div>
    );
}

export default FAQSection;
