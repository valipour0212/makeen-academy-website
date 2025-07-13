import Image from "next/image";
import { Button } from "@/components/atoms";

export default function FAQSupportSection() {
    return (
        <div className="w-full md:w-1/2 bg-white py-5 px-6 rounded-lg flex flex-col items-center md:items-start gap-4">
            <Image
                src="/course/question.svg"
                alt="question"
                width={56}
                height={56}
                className="object-cover rounded-lg"
            />
            <div className="flex flex-col text-center md:text-right gap-2">
                <h2 className="font-semibold text-[20px]">به پاسخ سوالم نرسیدم !</h2>
                <p className="font-medium text-sm text-[#AEAEB2]">
                    مشاوران مکین به سوالات شما پاسخ میدهند تا به درستی دوره خود را انتخاب کنید.
                </p>
                <Button variant="primaryOutline" className="mt-8 self-center md:self-start">
                    دریافت مشاوره
                </Button>
            </div>
        </div>
    );
}
