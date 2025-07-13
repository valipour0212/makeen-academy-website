'use client';

import React, {JSX, useState} from 'react';
import {usePathname} from 'next/navigation';
import NAVIGATION_BAR from "@/data/navigationBar";
import {MoreModal, NavigationItem} from "@/components/molecules";

function NavigationBar(): JSX.Element {
    const pathname = usePathname();
    const [showMoreModal, setShowMoreModal] = useState(false);

    function handleItemClick(href: string) {
        if (href === "/more") return setShowMoreModal(prev => !prev);
    }

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-between bg-white border-t border-gray-200 rounded-t-2xl h-[74px] shadow-md py-3 px-6 md:hidden">
            {
                NAVIGATION_BAR.map(item => <NavigationItem
                        key={item.href}
                        label={item.label}
                        icon={item.icon}
                        activeIcon={item.activeIcon}
                        href={item.href}
                        isActive={pathname === item.href}
                        onClick={handleItemClick}
                    />
                )
            }
            {showMoreModal && <MoreModal onClose={() => setShowMoreModal(false)} />}
        </nav>
    );
}

export default NavigationBar;
