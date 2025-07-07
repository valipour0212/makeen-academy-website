import React, {JSX} from 'react';
import Image from "next/image";
import Button from "@/components/atoms/Button";

function Cowork(): JSX.Element {
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
        <section className="my-5 ">
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

            <h2 className="font-semibold text-lg mt-6">معرفی فضای کار اشتراکی مکین</h2>
            <p className="font-normal text-sm text-[#8E8E93] mt-4 mb-8">فضای کار اشتراکی مکین بر شکل‌گیری روابط کاری و تعاملات سازنده در یک محیط کاری متفاوت و پویا متمرکز شده است تا کارآفرینان، صاحبان کسب‌وکار و تیم‌های خلاق به دور از دغدغه‌های بر روی اولویت‌های اصلی و راهکارهای خلاقانه خود متمرکز شوند.</p>
            <Button size="lg">رزرو فضای کار</Button>
        </section>
    );
}

export default Cowork;