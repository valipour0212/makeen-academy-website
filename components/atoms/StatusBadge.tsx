interface StatusBadgeProps {
    status: "coming_soon" | "open" | "full";
}

const statusMap = {
    coming_soon: {
        text: "به زودی",
        bg: "bg-[#EBF6FB]",
        textColor: "text-[#2F80ED]",
    },
    open: {
        text: "درحال ثبت نام",
        bg: "bg-[#EBFDEC]",
        textColor: "text-[#27AE60]",
    },
    full: {
        text: "تکمیل ظرفیت",
        bg: "bg-[#FDECEB]",
        textColor: "text-[#EC3C36]",
    }
}

function StatusBadge({status}: StatusBadgeProps) {
    const {text, bg, textColor} = statusMap[status];
    return (
        <div className={`w-fit h-fit p-2 gap-2 rounded-lg ${bg} font-medium text-xs md:text-[16px] ${textColor}`}>
            {text}
        </div>
    );
}

export default StatusBadge;