import {Icon} from "@/components/atoms";

interface CourseInfoItemProps {
    icon: string;
    title: string;
    value: string;
}

function CourseInfoItem({icon, title, value}: CourseInfoItemProps) {
    return (
        <div className="w-1/2 h-full bg-white rounded-lg p-2 flex items-center gap-2">
            <Icon src={icon} alt={title} size={24}/>
            <div className="flex flex-col gap-2">
                <span className="font-medium text-[16px]">{title}</span>
                <span className="font-medium text-[16px] text-[#AEAEB2]">{value}</span>
            </div>
        </div>
    );
}

export default CourseInfoItem;