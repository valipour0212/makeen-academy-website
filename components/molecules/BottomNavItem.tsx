"use client"

import React from 'react';
import {useRouter} from "next/navigation";
import {Icon, Label} from "@/components/atoms";

interface BottomNavItemProps {
    icon: string;
    label: string;
    href: string;
    activeIcon: string;
    isActive: boolean;
    onClick?: (href: string) => void;
}

function BottomNavItem({icon, label, href, activeIcon, isActive, onClick}: BottomNavItemProps) {
    const router = useRouter();

    function handleClick() {
        if (onClick) onClick(href); // For More Item
        else router.push(href);
    }

    return (
        <button
            onClick={handleClick}
            className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        >
            <Icon src={isActive ? activeIcon : icon} alt={label} isActive={isActive}/>
            <Label text={label} isActive={isActive}/>
        </button>
    );
}

export default BottomNavItem;