import React, {useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import {BOTTOM_NAV_ITEMS} from "@/data/navigation";
import {ButtonNavItemType} from "@/types/navigation";
import BottomNavItem from "../components/molecules/BottomNavItem";
import {BottomNavMoreModal} from "@/components/organisms";

function BottomNavigationBar() {
    const pathName: string = usePathname();
    const router = useRouter();

    const [showMore, setShowMore] = useState(false);

    function handleClick(href: string) {
        if (href === "/more") setShowMore(prev => !prev);
        else router.push(href);
    }

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-40 flex justify-between bg-white border-t border-gray-200 rounded-t-2xl h-[74px] shadow-md py-3 px-6 md:hidden">
            {
                BOTTOM_NAV_ITEMS.map((item: ButtonNavItemType) =>
                    <BottomNavItem
                        key={item.href}
                        {...item}
                        isActive={pathName === item.href}
                        onClick={handleClick}
                    />
                )
            }

            {
                showMore && <BottomNavMoreModal onClose={() => setShowMore(false)}/>
            }
        </nav>
    );
}

export default BottomNavigationBar;