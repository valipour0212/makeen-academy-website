import {cn} from "@/lib";

interface LabelProps {
    text: string;
    isActive?: boolean;
    className?: string;
}

function Label({text, isActive = false, className = ""}: LabelProps) {
    return (
        <span
            className={cn(
                'font-medium text-xs transition-colors duration-200 ease-in-out',
                isActive ? 'text-primary' : 'text-muted-foreground',
                className
            )}
        >
      {text}
    </span>
    );
}

export default Label;
