import React from 'react';
import Image from "next/image";

interface IconButtonProps {
    onClick: () => void;
    direction: "left" | "right";
}

function IconButton({onClick, direction}: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
            aria-label={direction === "left" ? "بعدی" : "قبلی"}
        >
            {
                direction === "left" ?
                    <Image src={"/last-videos/arrow-right.svg"} alt={"arrow-right"} width={24} height={24}
                           className=""/> :
                    <Image src={"/last-videos/arrow-left.svg"} alt={"arrow-left"} width={24} height={24}
                           className=""/>
            }
        </button>
    );
}

export default IconButton;
