import React from "react";

export interface ButtonType {
    children?: React.ReactNode;
    variant?: Variants;
    size?: Size;
    className?: string;
    isLoading?: boolean;
}

type Variants = "primary" | "secondary";

type Size = "small" | "medium" | "large";