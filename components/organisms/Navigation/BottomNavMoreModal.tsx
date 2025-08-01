import React from 'react';
import {usePathname, useRouter} from "next/navigation";
import {BUTTON_NAV_MORE_ITEMS} from "@/data/navigation";
import {ButtonNavItemType} from "@/types/navigation";
import {Icon, Label} from "@/components/atoms";

interface BottomNavMoreModalProps {
    onClose: () => void;
}

function BottomNavMoreModal({onClose}: BottomNavMoreModalProps) {
    const pathName: string = usePathname()
    const router = useRouter()

    function handleSelect(href: string) {
        router.push(href)
        onClose()
    }

    return (
        <div
            className="absolute bottom-[70px] left-0 right-0 bg-white rounded-t-xl border border-gray-200 z-10 p-4 flex flex-col gap-3">
            {
                BUTTON_NAV_MORE_ITEMS.map((item: ButtonNavItemType) => {
                        const isActive = pathName === item.href;

                        return (
                            <button
                                key={item.href}
                                onClick={() => handleSelect(item.href)}
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                <Icon src={isActive ? item.activeIcon : item.icon} alt={item.label} isActive={isActive}/>
                                <Label text={item.label} isActive={isActive}/>
                            </button>
                        );
                    }
                )
            }
        </div>
    );
}

export default BottomNavMoreModal;