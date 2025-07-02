
import React from 'react';

interface LabelProps {
    text: string;
    isActive?: boolean;
}

function Label({text, isActive = false}: LabelProps) {
    return (
        <span className={`font-medium text-xs ${isActive ? 'text-[#F28C28]' : 'text-[#8E8E93]'}`}>
      {text}
    </span>
    );
}

export default Label;
