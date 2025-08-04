interface StudentNameProps {
    name: string;
}

function StudentName({name}: StudentNameProps) {
    return <span className="font-medium text-sm">{name}</span>;
}

export default StudentName;