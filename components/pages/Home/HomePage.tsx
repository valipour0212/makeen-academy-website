import React from 'react';
import Image from "next/image";

function HomePage() {
    return (
        <>
            <Image
                src={"/home/banner.png"}
                alt={"banner"}
                width={358}
                height={177}
                className="rounded-lg px-4 py-6 w-full h-fit"
            />

        </>
    );
}

export default HomePage;