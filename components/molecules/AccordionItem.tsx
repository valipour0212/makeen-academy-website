"use client"

import {useState} from "react";
import {AccordionToggle} from "@/components/atoms/AccordionToggle";

interface AccordionItemProps {
    question: string;
    answer: string;
    className?: string;
}

function AccordionItem({question, answer, className}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="min-w-full border border-gray-200 px-2 py-4 rounded-lg shadow">
            <button
                className="w-full text-left py-3 flex justify-between items-center cursor-pointer"
                onClick={toggleOpen}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${question}`}
            >
                <span className="font-normal text-sm md:text-[20px]">{question}</span>
                <AccordionToggle isOpen={isOpen}/>
            </button>
            {
                isOpen &&
                <p
                    id={`faq-answer-${question}`}
                    className={`border-t border-gray-200 mt-2 pt-4 text-sm text-gray-600 ${className ?? ""}`}
                >
                    {answer}
                </p>
            }
        </div>
    );
}

export default AccordionItem;
