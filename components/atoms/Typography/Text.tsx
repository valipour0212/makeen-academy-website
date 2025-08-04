import React, {ReactNode} from "react";

interface TextProps {
    children: ReactNode;
    className?: string;
}

function Text({children, className}: TextProps) {
    return <span className={className}>{children}</span>;
}

export default Text;
