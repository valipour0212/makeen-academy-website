"use client";
import React, {useState} from 'react';
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

function Header() {
    const navBarItems = [
        {
            id: "1",
            name: "خانه",
            href: "/",
        },
        {
            id: "2",
            name: "دوره ها",
            href: "/courses",
        },
        {
            id: "3",
            name: "فضای کار اشتراکی",
            href: "/coworking",
        },
        {
            id: "4",
            name: "گالری تصاویر",
            href: "/gallery",
        },
        {
            id: "5",
            name: "مقالات",
            href: "/blog",
        },
        {
            id: "6",
            name: "مکینی ها",
            href: "/makeeniha",
        },
    ]

    const [selectID, setSelectID] = useState(navBarItems[0].id);
    const pathName = usePathname();
    const navSelected = navBarItems.find(nav => nav.id === selectID);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 w-full h-[74px] shadow-md flex justify-between items-center px-4 bg-white md:max-w-[1440px] md:mx-auto md:rounded-b-2xl">
            <Image src={"/logo/logo.png"} alt={"logo"} width={95} height={42}/>
            <Button className="md:hidden">مشاوره رایگان</Button>
            {
                navSelected && (
                    <nav className="hidden md:flex w-full justify-evenly gap-10">
                        {
                            navBarItems.map(nav =>
                                <Link
                                    key={nav.id}
                                    href={nav.href}
                                    className={` rounded-2xl cursor-pointer px-6 py-3 ${nav.href === pathName && "bg-[#F28C28] text-white shadow-md"}`}
                                    onClick={() => setSelectID(nav.id)}
                                >
                                    {nav.name}
                                </Link>
                            )
                        }
                    </nav>
                )
            }
        </header>
    );
}

export default Header;