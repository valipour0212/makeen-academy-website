import React, {JSX} from 'react';
import Icon from "@/components/atoms/Icon";
import Label from "@/components/atoms/Label";

interface FeatureItemProps {
    icon: string;
    text: string;
}

function FeatureItem({icon, text}: FeatureItemProps): JSX.Element {
    return (
        <div className="flex items-center gap-1 md:gap-2 font-normal text-[#AEAEB2] md:text-sm">
            <Icon src={icon} alt={icon}/>
            <Label text={text}/>
        </div>
    );
}

export default FeatureItem;