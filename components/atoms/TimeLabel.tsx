interface TimeLabelProps {
    label: string;
}

function TimeLabel({label}: TimeLabelProps) {
    return (
        <span className="font-medium text-xs text-[#8E8E93]">
            {label}
        </span>
    );
}

export default TimeLabel;