import {Icon} from "@/components/atoms/Icon";
import Link from "next/link";
import {Button} from "@/components/atoms";

function ConsultationBox() {
    return (
        <div className="w-full h-fit bg-white rounded-2xl py-5 px-7 flex flex-col items-center">
            <Icon src="/icon/question.svg" alt="question" size={56} className="w-14 h-14 object-cover"/>
            <h2 className="font-semibold text-[20px] mt-4">به پاسخ سوالم نرسیدم !</h2>
            <p className="font-medium text-sm text-[#AEAEB2] text-center mt-2">
                مشاوران مکین به سوالات شما پاسخ می‌دهند تا به درستی دوره خود را انتخاب کنید.
            </p>
            <Link href="#" className="mt-8 -mb-10">
                <Button variant="primaryOutline" size="large" className="w-1/2">
                    دریافت مشاوره
                </Button>
            </Link>
        </div>
    );
}

export default ConsultationBox;