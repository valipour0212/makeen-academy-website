
'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import Icon from '@/components/atoms/Icon';
import Label from '@/components/atoms/Label';

interface NavigationItemProps {
    icon: string;
    label: string;
    href: string;
    isActive: boolean;
}

function NavigationItem({icon, label, href, isActive}: NavigationItemProps) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(href)}
            className="flex flex-col items-center justify-center gap-1 focus:outline-none"
        >
            <Icon src={icon} alt={label} isActive={isActive}/>
            <Label text={label} isActive={isActive}/>
        </button>
    );
}

export default NavigationItem;
