"use client"

import {usePathname, useRouter} from "next/navigation";
import MORE_MODAL_ITEMS from "@/data/moreModalItems";
import {Icon, Label} from "@/components/atoms";

interface MoreModalProps {
    onClose: () => void;
}


function MoreModal({onClose}: MoreModalProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleSelect = (href: string) => {
        router.push(href);
        onClose(); // Close Modal
    };

    return (
        <div
            className="absolute bottom-[70px] left-0 right-0 bg-white rounded-t-xl border border-gray-200 z-10 p-4 flex flex-col gap-3">
            {
                MORE_MODAL_ITEMS.map(item => {
                        const isActive = pathname === item.href;

                        return (
                            <button
                                key={item.href}
                                onClick={() => handleSelect(item.href)}
                                className="flex items-center  gap-1 cursor-pointer"
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

export default MoreModal;