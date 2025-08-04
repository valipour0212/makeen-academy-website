import React from "react";

interface NewsletterInputFieldProps {
    placeholder: string;
}

function NewsletterInputField({placeholder}: NewsletterInputFieldProps) {
    return (
        <input
            placeholder={placeholder}
            className="w-4/5 h-full font-normal md:font-medium text-sm p-2 outline-none"
        />
    );
}

export default NewsletterInputField;
