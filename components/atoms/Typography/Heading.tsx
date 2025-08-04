import React, {ReactNode} from "react";

interface HeadingProps {
    children: ReactNode;
    className?: string;
}

function Heading({children, className}: HeadingProps) {
    return <h2 className={className}>{children}</h2>;
}

export default Heading;
