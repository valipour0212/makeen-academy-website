import React from 'react';
import NewsletterInput from "@/components/molecules/NewsletterInput/NewsletterInput";
import Image from "next/image";

function Newsletter() {
    return (
        <section className="my-5 flex flex-col items-center text-center relative">
            <h2 className="font-medium text-[16px]">با مکین همراه شو</h2>
            <span className="font-normal text-sm mx-30 mt-1">برای اطلاع از اخبار و برگزاری دوره های مکین در خبر نامه ما عضو شوید!</span>
            <NewsletterInput/>
            <Image src="/newletter/newslwtter.svg" alt="newslwtter" width={77} height={92} className="absolute left-5 bottom-5"/>
        </section>
    );
}

export default Newsletter;