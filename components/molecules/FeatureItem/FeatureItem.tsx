import React, {JSX} from 'react';
import Icon from "@/components/atoms/Icon";
import Label from "@/components/atoms/Label";

interface FeatureItemProps {
    icon: string;
    text: string;
}

function FeatureItem({icon, text}: FeatureItemProps): JSX.Element {
    return (
        <div className="flex gap-1 text-[#AEAEB2]">
            <Icon src={icon} alt={icon}/>
            <Label text={text}/>
        </div>
    );
}

export default FeatureItem;