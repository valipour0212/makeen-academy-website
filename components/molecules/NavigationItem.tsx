'use client';

import {Icon, Label} from "@/components/atoms";
import {useRouter} from "next/navigation";

interface NavigationItemProps {
    label: string;
    icon: string;
    activeIcon: string;
    href: string;
    isActive: boolean;
    onClick?: (href: string) => void;
}

function NavigationItem({icon, activeIcon, label, href, isActive, onClick}: NavigationItemProps) {
    const router = useRouter();

    function handleClick() {
        if (onClick) onClick(href); // for More Item
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

export default NavigationItem;
