"use client";

interface MentorCardProps {
    fullName: string;
    subtitle: string;
    jobTitle: string;
    description: string;
}

function MentorCard({
                        fullName,
                        subtitle,
                        jobTitle,
                        description,
                    }: MentorCardProps) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold md:font-bold text-lg md:text-[20px]">
                {fullName}
            </h3>
            <div className="font-medium text-xs md:text-[16px] text-[#797979] flex flex-col gap-1 md:mt-4 md:mb-6">
                <p>{subtitle}</p>
                <p>{jobTitle}</p>
            </div>
            <p className="font-normal text-sm md:text-[16px] md:pl-20">
                {description}
            </p>
        </div>
    );
}

export default MentorCard;