import React, {JSX} from 'react';
import Image from "next/image";

interface FeaturesCardProps {
    icon: string;
    title: string;
    description: string;
}

function FeaturesCard({icon, title, description}: FeaturesCardProps): JSX.Element {
    return (
        <div className="min-w-3/5 h-[110px] flex flex-col p-2 gap-2 bg-white shadow-lg rounded-lg">
            <div className="flex gap-2">
                <Image src={icon} alt={icon} width={24} height={24}/>
                <span className="font-medium text-lg text-black">{title}</span>
            </div>
            <p className="font-normal text-sm text-[#111111]">{description}</p>
        </div>
    );
}

export default FeaturesCard;