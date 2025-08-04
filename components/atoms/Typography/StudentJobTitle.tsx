interface StudentJobTitleProps {
    title: string;
}

function StudentJobTitle({title}: StudentJobTitleProps) {
    return <span className="font-normal text-xs text-[#A2A2A7]">{title}</span>;
}

export default StudentJobTitle;