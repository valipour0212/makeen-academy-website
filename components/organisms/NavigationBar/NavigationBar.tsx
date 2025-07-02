
'use client';

import React from 'react';
import NavigationItem from '@/components/molecules/NavigationItem/NavigationItem';
import {usePathname} from 'next/navigation';

const NAV_ITEMS = [
    {label: 'خانه', icon: '/navigation/home.svg', href: '/'},
    {label: 'دوره ها', icon: '/navigation/courses.svg', href: '/courses'},
    {label: 'گالری تصاویر', icon: '/navigation/gallery.svg', href: '/gallery'},
    {label: 'مکینی ها', icon: '/navigation/people.svg', href: '/makeeniha'},
    {label: 'بیشتر', icon: '/navigation/more.svg', href: '/more'},
];

function NavigationBar() {
    const pathname = usePathname();

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-white border-t border-gray-200 h-[74px] shadow-md">
            {
                NAV_ITEMS.map(item => <NavigationItem
                        key={item.href}
                        label={item.label}
                        icon={item.icon}
                        href={item.href}
                        isActive={pathname === item.href}
                    />
                )
            }
        </nav>
    );
}

export default NavigationBar;
