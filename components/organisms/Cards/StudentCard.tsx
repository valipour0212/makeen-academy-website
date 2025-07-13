import React, {JSX} from 'react';
import Image from "next/image";

interface MakeenihaCardProps {
    image: string;
    fullName: string;
    jobTitle: string;
    companyLogo: string;
    course: string;
    onSelect: boolean;
    onClick?: () => void;
}

function StudentCard({image, fullName, jobTitle, companyLogo, course, onSelect, onClick}: MakeenihaCardProps): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={`flex bg-white min-w-64 md:w-full min-h-20 p-4 mb-4 gap-2 rounded-2xl shadow-md ${onSelect && "border border-[#F28C28]"}`}>
            <Image src={image} alt={image} width={44} height={44} className="rounded-full"/>
            <div className="flex flex-col gap-2">

                <div className="flex justify-between items-center gap-1">
                    <span className="font-medium text-sm">{fullName}</span>
                    <span className="font-normal text-xs text-[#AEAEB2]">{course}</span>
                </div>

                <div className="flex justify-between items-center gap-1">
                    <Image src={companyLogo} alt={companyLogo} width={20} height={20} className="rounded-[4px]"/>
                    <span className="font-normal text-xs text-[#A2A2A7]">{jobTitle}</span>
                </div>

            </div>
        </div>
    );
}

export default StudentCard;