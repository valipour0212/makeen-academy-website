import React from 'react';
import FeaturesCard from "@/components/organisms/FeaturesCard/FeaturesCard";

function FeaturesList() {
    const featuresData = [
        {
            id: "1",
            icon: "/icons/features/favorite.svg",
            title: "محیط صمیمی",
            description: "کارآموزا در بوتکمپ مکین، توی یک محیط صمیمی با عمکاری و هم افزایی، سعی میکنن به موفقت برسن. ",
        },
        {
            id: "2",
            icon: "/icons/features/safe.svg",
            title: "تضمین استخدام",
            description: "اینکه ۷۰٪ هزینه رو بعد ار استخدام به صورت قسطی از حقوقت توی یکسال پس میدی",
        },
        {
            id: "3",
            icon: "/icons/features/professors.svg",
            title: "اساتید حرفه ای",
            description: "در مکین شما با منتور هایی کار میکنید که خودشان این مسیر را رفته اند و چندین پروژه دارن",
        },
        {
            id: "4",
            icon: "/icons/features/practical.svg",
            title: "آموزه های کاربردی",
            description: "در دوره های ما چیز هایی آموزش داده میشه که به درد بازار کار میخوره و شرکت ها به اون نیاز دارن",
        },
        {
            id: "5",
            icon: "/icons/features/payment.svg",
            title: "پرداخت قسطی",
            description: "کارآموز هایی که در این دوره شرکت میکنن تمام هزینه ها را به صورت قسطی تو ۲۰ ماه پرداخت میکنند",
        },
        {
            id: "6",
            icon: "/icons/features/workshop.svg",
            title: "کارگاه های همراه دوره",
            description: "در این دوره کارگاه های مختلفی خواهیم داشت مثل کارگاه استخدام،کارگاه حظور درجلسه محاصبه و کارگاه انتقال تجربه فارغ التحصیلان",
        },
    ]

    return (
            <div className="flex gap-4 my-5 overflow-x-auto overflow-y-clip scrollbar-none">
                {
                    featuresData.map(item => <FeaturesCard key={item.id} {...item}/>)
                }
            </div>
    );
}

export default FeaturesList;