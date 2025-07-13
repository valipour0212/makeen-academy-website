import React from 'react';
import FooterFeature from "@/components/organisms/Layout/FooterFeature";
import SocialIcons from "@/components/organisms/Layout/SocialIcons";

function Footer() {
    const footerData = [
        {
            id: "1",
            icon: "/footer/location.svg",
            text: "مترو علم صنعت، خیابان سلیمانی مدائن پلاک ۵۲۰",
        },
        {
            id: "2",
            icon: "/footer/call.svg",
            text: "۰۲۱-۷۷۱۸۸۱۸۵-۶",
        },
        {
            id: "3",
            icon: "/footer/google.svg",
            text: "example@example.com",
        },
    ]

    return (
        <footer className="my-5 md:mt-12 flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                <div>
                    <FooterFeature icon={footerData[0].icon} text={footerData[0].text}/>
                </div>

                <div className="flex gap-6 md:gap-10">
                    <FooterFeature icon={footerData[1].icon} text={footerData[1].text}/>
                    <FooterFeature icon={footerData[2].icon} text={footerData[2].text}/>
                </div>
            </div>

            <div className="w-full h-[1px] bg-[#D1D1D6] mt-5 md:my-8"></div>

            <SocialIcons/>

            <p className="font-semibold text-xs md:text-sm text-[#8E8E93] mt-4">کلیه حقوق این سایت محفوظ و متعلق به ایده عال رسانه <span className="text-[#36A8D9]">مکین</span> است.</p>
        </footer>
    );
}

export default Footer;