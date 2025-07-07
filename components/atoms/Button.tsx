import {ButtonHTMLAttributes} from "react";
import cn from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariants;
    size?: ButtonSize;
    isLoading?: boolean;
}

type ButtonVariants = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses = {
    primary: 'bg-[#F28C28] text-white',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300',
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
                    ...props
                }: ButtonProps) {
    return (
        <button
            className={cn(
                "rounded-full cursor-pointer ",
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