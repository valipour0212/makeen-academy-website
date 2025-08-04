import {NEWSLETTER} from "@/data/newsLetter";
import {NewsletterInputField} from "@/components/atoms/Input";
import {NewsletterSubmitButton} from "@/components/atoms/Button";


function NewsletterInput() {
    return (
        <div
            className="flex justify-between items-center gap-2 w-64 md:w-96 h-12 mt-4 md:mt-5 rounded-lg border border-gray-300 shadow">
            <NewsletterInputField placeholder={NEWSLETTER.input_placeholder}/>
            <NewsletterSubmitButton text={NEWSLETTER.button_text}/>
        </div>
    );
}

export default NewsletterInput;
