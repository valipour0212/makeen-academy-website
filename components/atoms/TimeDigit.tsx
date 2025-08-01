interface TimeDigitProps {
    value: number;
    color?: string;
}

function TimeDigit({value, color = "text-black"}: TimeDigitProps) {
    return (
        <span className={`font-medium text-[16px] ${color}`}>
            {String(value).padStart(2, '0')}
        </span>
    );
}

export default TimeDigit;