'use client';

import React from 'react';
import NavigationItem from '@/components/molecules/NavigationItem';
import {usePathname} from 'next/navigation';

const NAV_ITEMS = [
    {label: 'خانه', icon: '/icons/navigation/home.svg', href: '/'},
    {label: 'دوره ها', icon: '/icons/navigation/courses.svg', href: '/courses'},
    {label: 'گالری تصاویر', icon: '/icons/navigation/gallery.svg', href: '/gallery'},
    {label: 'مکینی ها', icon: '/icons/navigation/people.svg', href: '/makeeniha'},
    {label: 'بیشتر', icon: '/icons/navigation/more.svg', href: '/more'},
];

function NavigationBar() {
    const pathname = usePathname();

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-between bg-white border-t border-gray-200 rounded-t-2xl h-[74px] shadow-md py-3 px-6 md:hidden">
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
