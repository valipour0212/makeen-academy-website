import Image from "next/image";

interface SliderArrowButtonProps {
    direction: "left" | "right";
    onClick: () => void;
}

function SliderArrowButton({direction, onClick}: SliderArrowButtonProps) {
    return (
        <button
            onClick={onClick}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 shadow rounded-full"
            style={{[direction === "left" ? "left" : "right"]: "0.5rem"}}
            aria-label={direction}
        >
            {
                direction === "left"
                    ? <div className="bg-[#F2F2F7] md:w-10 md:h-10 rounded-full flex justify-center items-center">
                        <Image src="/icon/arrow-left.svg" alt="arrow-left" width={24} height={24} className="object-cover w-6 h-6"/>
                    </div>
                    : <div className="bg-[#F2F2F7] md:w-10 md:h-10 rounded-full flex justify-center items-center">
                        <Image src="/icon/arrow-right.svg" alt="arrow-right" width={24} height={24} className="object-cover w-6 h-6"/>
                    </div>
            }
        </button>
    );
}

export default SliderArrowButton;