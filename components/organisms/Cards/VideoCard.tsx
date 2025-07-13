import React, {JSX} from 'react';
import Image from "next/image";

interface LastVideosListProps {
    image: string;
    // videoTitle: string;
    // videoSubtitle: string;
    // videoTime: string;
    title: string;
    visit: number;
    uploaded: number;
}

function VideoCard({image, title, visit, uploaded}: LastVideosListProps): JSX.Element {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md gap-2 p-2 mb-4 w-[205px] md:w-[335px] h-[190px] md:h-[290px]">
            <div className="w-[187px] md:w-full h-[98px] md:h-[180px] cursor-pointer">
                <Image src={image} alt={image} width={500} height={500} className="object-cover "/>
            </div>

            <h2 className="font-semibold text-xs md:text-sm text-[#111111] mt-2 cursor-pointer">{title}</h2>

            <div className="flex items-center gap-1">
                <Image src={"/last-videos/logo-makeen.svg"} alt={"makeen logo"} width={16} height={16} className="w-4 md:w-6 h-4 md:h-6 object-cover"/>
                <span className="font-normal text-[10px] md:text-xs text-[#8E8E93]">آکادمی مکین</span>
            </div>

            <div className="flex items-center gap-2">
                <span className="font-normal text-[8px] md:text-xs text-[#8E8E93]">{visit} هزار بازدید</span>
                <Image src={"/last-videos/dot.svg"} alt={"dot"} width={2} height={2}/>
                <span className="font-normal text-[8px] md:text-xs text-[#8E8E93]">{uploaded} روز پیش</span>
            </div>
        </div>
    );
}

export default VideoCard;