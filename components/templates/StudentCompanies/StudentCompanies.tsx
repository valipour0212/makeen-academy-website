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
        <section className="my-5 text-center">
            <h2 className="font-medium text-[20px]">با افتخار</h2>
            <h3 className="font-normal text-[16px]">دانشجو‌های مکین در شرکت های زیر مشغول به کارند</h3>

            <div className="grid grid-cols-7 grid-rows-6 gap-4 mt-2">
                {
                    images.map((image, index) => <Image
                        key={index}
                        src={image}
                        alt={image}
                        width={50}
                        height={50}
                        className="object-cover"
                    />
                    )
                }
            </div>
        </section>
    );
}

export default StudentCompanies;