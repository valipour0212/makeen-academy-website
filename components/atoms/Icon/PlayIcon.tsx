import Image from "next/image";

function PlayIcon() {
    return <Image src="/icon/video-play.svg" alt="play icon" width={40} height={40} className="object-contain w-6 h-6 md:w-10 md:h-10"/>;
}

export default PlayIcon;