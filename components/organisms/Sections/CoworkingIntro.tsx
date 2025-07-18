import React, {JSX} from 'react';
import Image from "next/image";
import Button from "@/components/atoms/Button";

function CoworkingIntro(): JSX.Element {
    const coworkData = [
        {
            id: "1",
            image: "/cowork/img-1.png",
        },
        {
            id: "2",
            image: "/cowork/img-2.png",
        },
        {
            id: "3",
            image: "/cowork/img-3.png",
        },
        {
            id: "4",
            image: "/cowork/img-4.png",
        },
    ]

    return (
        <section className="my-5 md:my-12 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-16">
            <div className="flex flex-col md:w-1/2 md:gap-8">
                <h2 className="font-semibold text-lg md:text-[30px] mt-6">معرفی فضای کار اشتراکی مکین</h2>
                <p className="font-normal text-sm md:text-lg text-[#8E8E93] mt-4 mb-8">فضای کار اشتراکی مکین بر شکل‌گیری روابط کاری و تعاملات سازنده در یک محیط کاری متفاوت و پویا متمرکز شده است تا کارآفرینان، صاحبان کسب‌وکار و تیم‌های خلاق به دور از دغدغه‌های بر روی اولویت‌های اصلی و راهکارهای خلاقانه خود متمرکز شوند.</p>
                <Button size="lg">رزرو فضای کار</Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {
                    coworkData.map(item => <Image
                            key={item.id}
                            src={item.image}
                            alt={item.image}
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                    )
                }
            </div>
        </section>
    );
}

export default CoworkingIntro;