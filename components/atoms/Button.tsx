import React, {ButtonHTMLAttributes} from "react";
import cn from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariants;
    size?: ButtonSize;
    className?: string;
    isLoading?: boolean;
}

type ButtonVariants = "primary" | "secondary" | "primaryOutline" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses = {
    primary: 'bg-[#F28C28] text-white',
    secondary: 'bg-[#36A8D9] text-white',
    primaryOutline: 'border border-[#F28C28] text-[#F28C28] font-medium text-lg min-w-[225px] min-h-[37px]',
    outline: 'bg-white border border-[#36A8D9] text-[#36A8D9]',
};

const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'w-[120px] h-[35px] px-4 py-1 gap-2 font-semibold text-lg',
    lg: 'w-[205px] h-[45px] px-4 py-2 font-semibold text-[16px]',
};

function Button({
                    children,
                    variant = "primary",
                    size = "sm",
                    isLoading = false,
                    className,
                    ...props
                }: ButtonProps) {
    return (
        <button
            className={cn(
                "rounded-full cursor-pointer",
                className,
                variantClasses[variant],
                sizeClasses[size],
            )}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
}

export default Button;