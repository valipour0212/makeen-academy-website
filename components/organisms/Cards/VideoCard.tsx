import {VideoType} from "@/types/video";
import Image from "next/image";
import {VideoMetaBadge} from "@/components/atoms/Badge";
import {Icon, PlayIcon} from "@/components/atoms/Icon";
import {Heading, Text} from "@/components/atoms/Typography";

interface VideoCardProps extends VideoType {
    isActive?: boolean;
}

function VideoCard({image, title, subtitle, visit, uploaded, isActive = false}: VideoCardProps) {
    return (
        <div
            className={`relative transition-all duration-300 rounded-2xl overflow-hidden shadow my-3 p-2 bg-white w-[140px] md:w-[332px] flex flex-col gap-2 ${
                isActive ? "scale-100 z-10" : "scale-90 opacity-80"
            }`}
        >
            <div className="relative md:w-[316px] h-[120px] md:h-[177px] rounded-lg">
                <Image src={image} alt={title} fill className="object-cover rounded-lg"/>
                <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center">
                    <PlayIcon/>
                </div>

                <div className="absolute inset-0 text-white flex flex-col justify-end items-center md:pb-3">
                    <Heading className="text-xs md:text-xl font-semibold">{title}</Heading>
                    <Text className="text-sm md:text-lg font-normal">{subtitle}</Text>
                </div>
            </div>
            <div className="flex flex-col justify-between items-start">
                <Text className="font-semibold md:text-sm">{title}</Text>
                <div className="flex gap-1 items-center">
                    <Icon src={"/img/logo/logo-makeen.svg"} alt={"logo-makeen"}/>
                    <p className="text-xs text-[#8E8E93]">آکادمی مکین</p>
                </div>
                <VideoMetaBadge visit={visit} uploaded={uploaded}/>
            </div>
        </div>
    );
}

export default VideoCard;