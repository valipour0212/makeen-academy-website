import {PlayIcon} from "@/components/atoms/Icon";

interface VideoOverlayProps {
    title: string;
    subtitle: string;
    overlayColor?: string;
}

function VideoOverlay({title, subtitle, overlayColor = "bg-black/50"}: VideoOverlayProps) {
    return (
        <div className={`absolute inset-0 ${overlayColor} flex flex-col justify-center px-4 py-2 text-white`}>
            <div className="flex items-center gap-2 mb-2">
                <PlayIcon/>
                <h3 className="font-bold text-sm md:text-lg">{title}</h3>
            </div>
            <p className="text-xs md:text-sm font-light">{subtitle}</p>
        </div>
    );
}

export default VideoOverlay;