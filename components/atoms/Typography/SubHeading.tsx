import {ReactNode} from "react";

interface SubHeadingProps {
    children: ReactNode;
    className?: string;
}

function SubHeading({children, className}: SubHeadingProps) {
    return <h3 className={className}>{children}</h3>;
}

export default SubHeading;
