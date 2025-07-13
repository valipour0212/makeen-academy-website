import React from 'react';
import Image from "next/image";

function StudentCompanies() {
    const images = [
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
        "/companies-logo/img-1.png",
    ]

    return (
        <section className="my-5 md:my-12 text-center">
            <h2 className="font-medium md:font-semibold text-[20px] md:text-[28px]">با افتخار</h2>
            <h3 className="font-normal text-[16px] md:text-[26px] md:mt-4 md:mb-6">دانشجو‌های مکین در شرکت های زیر مشغول به کارند</h3>

            <div className="grid grid-cols-7 items-center gap-4 mt-2">
                {
                    images.map((image, index) => <Image
                        key={index}
                        src={image}
                        alt={image}
                        width={500}
                        height={500}
                        className="object-cover w-fit h-fit"
                    />
                    )
                }
            </div>
        </section>
    );
}

export default StudentCompanies;