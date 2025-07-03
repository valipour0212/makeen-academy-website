import React, {JSX} from 'react';

interface TimeLabelProps {
    label: string;
}

function TimeLabel({label}: TimeLabelProps): JSX.Element {
    return (
        <span className="font-medium text-xs text-[#8E8E93]">
            {label}
        </span>
    );
}

export default TimeLabel;