interface VideoMetaBadgeProps {
    visit: number;
    uploaded: number;
}

function VideoMetaBadge({visit, uploaded}: VideoMetaBadgeProps) {
    return (
        <div className="flex items-center gap-2 text-[#8E8E93] text-xs md:text-sm font-light mt-1">
            <span>{visit} هزار بازدید</span>
            <span>·</span>
            <span>{uploaded} روز پیش</span>
        </div>
    );
}

export default VideoMetaBadge;