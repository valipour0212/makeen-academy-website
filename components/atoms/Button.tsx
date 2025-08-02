import {cn} from "@/lib";
import {SIZE_STYLE, VARIANTS_STYLE} from "@/constants/button";
import {ButtonType} from "@/types/button";

function Button({
                    children,
                    variant = "primary",
                    size = "small",
                    className,
                    isLoading = false
                }: ButtonType) {
    return (
        <button
            className={cn(
                "rounded-full cursor-pointer ",
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