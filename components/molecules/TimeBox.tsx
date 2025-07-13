import React, {JSX} from 'react';
import TimeDigit from "@/components/atoms/TimeDigit";
import TimeLabel from "@/components/atoms/TimeLabel";

interface TimeBoxProps {
    value: number;
    label: string;
    color?: string;
}

function TimeBox({value, label, color}: TimeBoxProps): JSX.Element {
    return (
        <div className="flex flex-col justify-between">
            <TimeDigit value={value} color={color}/>
            <div className="w-[36px] h-[1px] bg-[#D1D1D6] my-2"></div>
            <TimeLabel label={label}/>
        </div>
    );
}

export default TimeBox;