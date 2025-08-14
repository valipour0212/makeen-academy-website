import React from 'react';
import {StudentCardType} from "@/types/students";
import {Icon} from "@/components/atoms/Icon";
import {AvatarImage} from "@/components/atoms/Image";

function StudentCardGrid({image, fullName, jobTitle, companyLogo, course, onClick}: StudentCardType) {
    return (
        <div className="h-fit flex flex-col justify-between gap-6 rounded-2xl shadow p-4">
            <div className="flex gap-2">
                <AvatarImage src={image} alt={image} size={60}/>
                <div className="flex flex-col gap-1">
                    <p className="font-medium text-[16px]">{fullName}</p>
                    <div className="flex items-center gap-1">
                        <Icon src={companyLogo} alt={companyLogo}/>
                        <span className="font-normal text-sm text-[#AEAEB2] text-nowrap">{jobTitle}</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <span className="font-normal text-sm text-[#AEAEB2]"># {course}</span>
                <button className="flex gap-1 cursor-pointer hover:text-[#F28C28]" onClick={onClick}>
                    <span className="font-normal text-sm text-[#8E8E93]">مشاهده بیشتر</span>
                    <Icon src={"/icon/student-card-arrow-left.svg"} alt={"arrow-left"} size={24}/>
                </button>
            </div>
        </div>
    );
}

export default StudentCardGrid;