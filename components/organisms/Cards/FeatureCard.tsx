import {FeatureType} from "@/types/feature";
import {Icon} from "@/components/atoms";


function FeatureCard({icon, title, description}: FeatureType) {
    return (
        <div
            className="min-w-3/5 flex flex-col p-2 md:p-4 md:pb-10 my-2 mx-1 gap-2 bg-white shadow rounded-lg">
            <div className="flex gap-2 items-center">
                <Icon src={icon} alt={title} size={40} className="md:w-10 md:h-10"/>
                <span className="font-medium text-lg text-black">{title}</span>
            </div>
            <p className="font-normal text-sm text-[#111111]">{description}</p>
        </div>
    );
}

export default FeatureCard;