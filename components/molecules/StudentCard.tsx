import {StudentCardType} from "@/types/students";
import {AvatarImage, CompanyLogoImage} from "@/components/atoms/Image";
import {StudentCourse, StudentJobTitle, StudentName} from "@/components/atoms/Typography";

function StudentCard({image, fullName, jobTitle, companyLogo, course, onSelect, onClick,}: StudentCardType) {
    return (
        <div
            onClick={onClick}
            className={`flex bg-white min-w-64 md:w-full min-h-20 p-4 my-2 mx-1 gap-2 rounded-2xl shadow ${
                onSelect && "border border-[#F28C28]"
            }`}
        >
            <AvatarImage src={image} alt={fullName}/>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center gap-1">
                    <StudentName name={fullName}/>
                    <StudentCourse course={course}/>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <CompanyLogoImage src={companyLogo} alt={companyLogo}/>
                    <StudentJobTitle title={jobTitle}/>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;