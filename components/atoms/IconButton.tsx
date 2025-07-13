import React from 'react';

interface IconButtonProps {
    onClick: () => void;
    direction: "left" | "right";
}

function IconButton({ onClick, direction }: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition-all"
            aria-label={direction === "left" ? "بعدی" : "قبلی"}
        >
            {direction === "left" ? "▶" :  "◀"}
        </button>
    );
}

export default IconButton;
