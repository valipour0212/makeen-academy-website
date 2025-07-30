"use client"

import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/atoms";
import {HEADER_NAV_ITEMS} from "@/data/navigation";
import {HeaderNavItemType} from "@/types/navigation";

function Header() {
    const pathname: string = usePathname()

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 w-full h-[74px] shadow flex justify-between items-center px-4 bg-white md:max-w-[1280px] md:mx-auto md:rounded-b-2xl">
            <div className="relative w-[95px] h-[42px]">
                <Image
                    src="/logo/makeen-logo.png"
                    alt="Makeen Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <Link href="/">
                <Button className="md:hidden">مشاوره رایگان</Button>
            </Link>

            <nav className="hidden md:flex w-full justify-evenly gap-10">
                {
                    HEADER_NAV_ITEMS.map((item: HeaderNavItemType) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`rounded-2xl cursor-pointer px-6 py-3 ${isActive ? "bg-[#F28C28] text-white shadow-prime" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                    )
                }
            </nav>
        </header>
    );
}

export default Header;