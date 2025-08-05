import {cn} from "@/lib";

interface StepIndicatorDotProps {
    isActive: boolean;
}

function StepIndicatorDot({isActive}: StepIndicatorDotProps) {
    return (
        <div
            className={cn(
                "w-8 h-8 rounded-full border border-[#E5E5E5] transition-all duration-300 shadow cursor-pointer",
                isActive ? "bg-[#F28C28]" : "bg-white"
            )}
        />
    );
}

export default StepIndicatorDot;
