import React from 'react';
import Image from "next/image";
import MakeenihaCard from "@/components/organisms/MakeenkihaCard/MakeenihaCard";

function MakeenihaList() {
    const MakeenihaData = [
        {
            id: "1",
            image: "/makeeniha/avatar-1.png",
            fullName: "محمدرضا اسدپور",
            jobTitle: "Product designer in Tapsi",
            description: "یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های ",
            CompanyLogo: "/makeeniha/company-logo-1.png",
            course: "دوره 18"
        },
        {
            id: "2",
            image: "/makeeniha/avatar-1.png",
            fullName: "محمدرضا اسدپور",
            jobTitle: "Product designer in Tapsi",
            description: "یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های ",
            CompanyLogo: "/makeeniha/company-logo-1.png",
            course: "دوره 18"
        },
        {
            id: "3",
            image: "/makeeniha/avatar-1.png",
            fullName: "محمدرضا اسدپور",
            jobTitle: "Product designer in Tapsi",
            description: "یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های ",
            CompanyLogo: "/makeeniha/company-logo-1.png",
            course: "دوره 18"
        },
    ]
    return (
        <section className="my-5 ">
            <div
                className="px-2 pb-5 w-full h-[270px] flex flex-col items-center bg-white rounded-[20px] shadow-md relative">
                <div
                    className="w-[100px] h-[100px] bg-white rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                    <Image src={MakeenihaData[0].image} alt={"avatar"} fill className="object-cover rounded-full p-2"/>
                </div>

                <div className="mt-16 text-center space-y-4 ">
                    <div className="space-y-2">
                        <h2 className="font-semibold text-[16px]">{MakeenihaData[0].fullName}</h2>
                        <p className="font-normal text-xs text-[#575757]">{MakeenihaData[0].jobTitle}</p>
                    </div>
                    <p className="font-normal text-[16px]">{MakeenihaData[0].description}</p>
                </div>
            </div>

            <div className="mt-5 flex gap-4 overscroll-x-auto">
                {
                    MakeenihaData.map(item => <MakeenihaCard
                            key={item.id}
                            image={item.image}
                            fullName={item.fullName}
                            jobTitle={item.jobTitle}
                            companyLogo={item.CompanyLogo}
                            course={item.course}
                        />
                    )
                }
            </div>
        </section>
    );
}

export default MakeenihaList;