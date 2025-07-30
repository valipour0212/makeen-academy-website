import {JSX} from "react";
import {ButtonType} from "@/types/button";
import {cn} from "@/lib";
import {SIZE_STYLE, VARIANTS_STYLE} from "@/constants/button";


function Button({
                    children,
                    variant = "primary",
                    size = "small",
                    className,
                    isLoading = false
                }: ButtonType): JSX.Element {
    return (
        <button
            className={cn(
                "rounded-full cursor-pointer",
                className,
                VARIANTS_STYLE[variant],
                SIZE_STYLE[size],
            )}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
}

export default Button;