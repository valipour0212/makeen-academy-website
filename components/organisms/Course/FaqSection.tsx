import {AccordionItem} from "@/components/molecules";
import {COURSES_FAQS} from "@/data/courses";
import {ConsultationBox} from "@/components/organisms";

function FaqSection() {
    return (
        <div className="w-full mt-10 md:mt-24">
            <h2 className="font-semibold text-[20px] md:text-[28px] text-center">سوالات متداول</h2>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 my-8">
                <div className="flex flex-col gap-2 w-full">
                    {
                        COURSES_FAQS.map(faq =>
                            <AccordionItem key={faq.id} {...faq} className="border-none"/>
                        )
                    }
                </div>
                <ConsultationBox/>
            </div>
        </div>
    );
}

export default FaqSection;