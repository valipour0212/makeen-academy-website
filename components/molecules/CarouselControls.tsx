import React from 'react';
import IconButton from '@/components/atoms/IconButton';

interface CarouselControlsProps {
    onPrev: () => void;
    onNext: () => void;
}

function CarouselControls({ onPrev, onNext }: CarouselControlsProps) {
    return (
        <div className="absolute inset-y-0 w-full flex justify-between items-center px-2 pointer-events-none">
            <div className="pointer-events-auto">
                <IconButton direction="left" onClick={onPrev} />
            </div>
            <div className="pointer-events-auto">
                <IconButton direction="right" onClick={onNext} />
            </div>
        </div>
    );
}

export default CarouselControls;
