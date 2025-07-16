import React, {JSX} from 'react';
import Image from "next/image";

interface FeaturesCardProps {
    icon: string;
    title: string;
    description: string;
}

function FeatureCard({icon, title, description}: FeaturesCardProps): JSX.Element {
    return (
        <div className="min-w-3/5 h-[110px] md:h-fit flex flex-col p-2 md:p-4 md:pb-10 my-2 mx-1 gap-2 bg-white shadow rounded-lg">
            <div className="flex gap-2 items-center">
                <Image src={icon} alt={icon} width={24} height={24} className="md:w-10 md:h-10"/>
                <span className="font-medium text-lg text-black">{title}</span>
            </div>
            <p className="font-normal text-sm text-[#111111]">{description}</p>
        </div>
    );
}

export default FeatureCard;