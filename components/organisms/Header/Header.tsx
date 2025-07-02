import React from 'react';
import Button from "@/components/atoms/Button";
import Image from "next/image";

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full h-[74px] shadow-md flex justify-between items-center px-4 bg-white">
            <Image src={"/logo/logo.png"} alt={"logo"} width={95} height={42}/>
            <Button>مشاوره رایگان</Button>
        </header>
    );
}

export default Header;