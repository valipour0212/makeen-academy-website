import React, {JSX} from 'react';
import Image from "next/image";

interface MentorsCardProps {
    image: string;
    fullName: string;
    subtitle: string;
    jobTitle: string;
    description: string;
}

function MentorsCard({image, fullName, subtitle, jobTitle, description}: MentorsCardProps): JSX.Element {
    return (
        <div className="flex flex-col items-start gap-2">
            <Image src={image} alt={image} width={165} height={210} className="rounded-lg"/>
            <span className="font-semibold text-lg">{fullName}</span>
            <div className="flex flex-col gap-1">
                <span className="font-medium text-xs text-[#8E8E93]">{subtitle}</span>
                <span className="font-medium text-xs text-[#8E8E93]">{jobTitle}</span>
            </div>
            <p className="font-normal text-[14px]">{description}</p>
        </div>
    );
}

export default MentorsCard;