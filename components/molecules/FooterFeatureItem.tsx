import React from 'react';
import {FooterFeatureType} from "@/types/footer";
import {Icon} from "@/components/atoms";

function FooterFeatureItem({icon, text}: FooterFeatureType) {
    return (
        <div className="flex gap-1 items-center">
            <Icon src={icon} alt={text} size={16} className="md:w-6 md:h-6"/>
            <span className="font-normal text-xs md:text-base text-[#8E8E93] cursor-pointer">
                {text}
            </span>
        </div>
    );
}

export default FooterFeatureItem;