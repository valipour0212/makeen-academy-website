import React, {useState} from 'react';
import AccordionToggle from "@/components/atoms/AccordionToggle";

interface AccordionItemProps {
    question: string;
    answer: string;
}

function AccordionItem({question, answer}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full border border-gray-200 px-2 py-4 rounded-lg">
            <button
                className="w-full text-left py-3 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium md:font-normal md:text-[20px]">{question}</span>
                <AccordionToggle isOpen={isOpen}/>
            </button>
            {isOpen && <p className="border-t border-gray-200 mt-2 pt-4 text-sm  text-gray-600">{answer}</p>}
        </div>
    );
}

export default AccordionItem;