import React, {JSX} from 'react';
import Image from "next/image";

interface AccordionToggleProps {
    isOpen: boolean;
}

function AccordionToggle({isOpen}: AccordionToggleProps): JSX.Element {
    return (
        <span className="ml-2 transition-transform duration-200 ease-in-out">
            {
                isOpen
                    ? <Image src="/faqs/Up.svg" alt="Up"  width={16} height={16} className="object-cover"/>
                    : <Image src={"/faqs/Down.svg"} alt="Down" width={16} height={16} className="object-cover"/>
            }
        </span>
    );
}

export default AccordionToggle;