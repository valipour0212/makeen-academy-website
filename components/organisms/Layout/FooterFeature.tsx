import React, {JSX} from 'react';
import Icon from "@/components/atoms/Icon";

interface FooterFeatureProps {
    icon: string;
    text: string;
}

function FooterFeature({ icon, text }: FooterFeatureProps): JSX.Element {
    return (
        <div className="flex gap-1 items-center">
            <Icon src={icon} alt={icon} size={16} className="md:w-6 md:h-6"/>
            <span className="font-normal text-xs md:text-[16px] text-[#8E8E93]">{text}</span>
        </div>
    );
}

export default FooterFeature;