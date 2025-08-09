import Image from "next/image";

interface Props {
    size?: number;
}

function PlayIcon({size = 40}: Props) {
    return <Image src="/icon/video-play.svg" alt="play icon" width={size} height={size} className="object-contain cursor-pointer"/>;
}

export default PlayIcon;