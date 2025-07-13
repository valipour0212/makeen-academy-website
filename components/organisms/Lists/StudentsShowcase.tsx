"use client"
import React, {useState} from 'react';
import Image from "next/image";
import StudentCard from "@/components/organisms/Cards/StudentCard";

function StudentsShowcase() {
    const MakeenihaData = [
        {
            id: "1",
            image: "/makeeniha/avatar-1.png",
            fullName: "محمدرضا اسدپور",
            jobTitle: "Product designer in Tapsi",
            description: "یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های ",
            CompanyLogo: "/makeeniha/company-logo-1.png",
            course: "دوره 18",
            onSelect: true
        },
        {
            id: "2",
            image: "/makeeniha/avatar-2.png",
            fullName: "محمدجواد نعیمی",
            jobTitle: "backend developer in Crous",
            description: "یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های ",
            CompanyLogo: "/makeeniha/company-logo-1.png",
            course: "دوره 18",
            onSelect: false
        },
        {
            id: "3",
            image: "/makeeniha/avatar-1.png",
            fullName: "محمدرضا اسدپور",
            jobTitle: "Product designer in Tapsi",
            description: "یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های ",
            CompanyLogo: "/makeeniha/company-logo-1.png",
            course: "دوره 18",
            onSelect: false
        },
    ]

    const [selectID, setSelectID] = useState(MakeenihaData[0].id)
    const selected = MakeenihaData.find(item => item.id === selectID)

    return (
        <section className="my-5 mt-16 md:my-12 md:flex md:flex-col md:items-center gap-16">
            <h2 className="hidden md:flex md:font-semibold md:text-[28px]">مکینی ها</h2>
            <div className="md:flex md:flex-row-reverse md:gap-8">
                {
                    selected && (
                        <div
                            className="px-2 pb-5 w-full md:min-w-2/3 h-[270px] md:h-80 flex flex-col items-center bg-white rounded-[20px] shadow-md relative">
                            <div
                                className="w-[100px] h-[100px] bg-white rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                                <Image src={selected.image} alt={"avatar"} fill className="object-cover rounded-full p-2"/>
                            </div>

                            <div className="mt-16 text-center space-y-4 ">
                                <div className="space-y-2">
                                    <h2 className="font-semibold text-[16px]">{selected.fullName}</h2>
                                    <p className="font-normal text-xs text-[#575757]">{selected.jobTitle}</p>
                                </div>
                                <p className="font-normal text-[16px]">{selected.description}</p>
                            </div>
                        </div>
                    )
                }

                <div className="mt-5 flex md:flex-col gap-4 overflow-x-auto hide-scroll-x md:min-w-1/3 md:overflow-y-auto">
                    {
                        MakeenihaData.map(item => <StudentCard
                                key={item.id}
                                image={item.image}
                                fullName={item.fullName}
                                jobTitle={item.jobTitle}
                                companyLogo={item.CompanyLogo}
                                course={item.course}
                                onSelect={item.id === selectID}
                                onClick={() => setSelectID(item.id)}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default StudentsShowcase;