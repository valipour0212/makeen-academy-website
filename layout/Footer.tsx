"use client"

import React from 'react';
import {FooterFeatureItem, FooterSocialLinks} from "@/components/molecules";
import {FOOTER_FEATURES} from "@/data/footer";

function Footer() {
    // GET API
    // const {data, isLoading, isError} = useQuery({
    //     queryKey: ["footer"],
    //     queryFn: getFooter,
    // })
    //
    // //
    // if (isLoading) return <p className="text-center my-4">در حال بارگذاری...</p>
    // if (isError || !data) return <p className="text-center my-4 text-red-500">خطا در دریافت اطلاعات</p>
    //

    return (
        <footer className="my-5 mb-20 md:mb-0 md:mt-12 flex flex-col items-center">
            {/* ویژگی‌ها */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 my-6 md:my-8">
                {
                    FOOTER_FEATURES.map(item =>
                        <FooterFeatureItem key={item.id} id={item.id} icon={item.icon} text={item.text}/>
                    )
                }
            </div>

            {/* خط جداکننده */}
            <div className="w-full md:max-w-[1280px] h-[1px] md:mx-auto bg-[#D1D1D6]"></div>

            {/* لینک‌های اجتماعی */}
            <FooterSocialLinks/>

            {/* متن کپی‌رایت */}
            <p className="font-semibold text-xs md:text-sm text-[#8E8E93] md:mb-6 text-center">
                کلیه حقوق این سایت محفوظ و متعلق به ایده عال رسانه{' '}
                <span className="text-[#36A8D9]">مکین</span> است.
            </p>
        </footer>
    );
}

export default Footer;