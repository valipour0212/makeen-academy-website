import React from "react";

interface NewsletterSubmitButtonProps {
    text: string;
}

function NewsletterSubmitButton({text}: NewsletterSubmitButtonProps) {
    return (
        <button
            className="w-2/6 h-full bg-[#36A8D9] rounded-l-lg p-2 font-medium text-xs md:text-lg text-white cursor-pointer"
        >
            {text}
        </button>
    );
}

export default NewsletterSubmitButton;
