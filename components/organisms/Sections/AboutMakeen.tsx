import Image from "next/image";
import Button from "@/components/atoms/Button";


function AboutMakeen() {

    const images: string[] = ["/description/img-1.png", "/description/img-2.png", "/description/img-3.png"];
    const title: string = "اینجا در مکین";
    const subtitle: string = "ما در اینجا در مکین برای ساخت آینده شغلی تو در تلاشیم چرای که آینده از آن توست";
    const description: string = " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم پس  اینجا توی مکین یاد میگیری چطوری یادبگیری ";

    return (
        <section className="flex flex-col md:flex-row-reverse md:justify-between md:items-center my-5 md:gap-12 md:my-12 relative">
            <div className="hidden md:flex md:min-w-8 md:min-h-64 md:bg-red-400"></div>

            <div className="flex justify-between gap-4">
                <Image src={images[0]} width={110} height={250} alt="image-1"
                       className="w-1/3 md:w-[156px] h-fit md:h-[358px] rounded-lg shadow-md mt-4"/>
                <Image src={images[1]} width={110} height={250} alt="image-2"
                       className="w-1/3 md:w-[156px] h-fit md:h-[358px] rounded-lg shadow-md mt-16"/>
                <Image src={images[2]} width={110} height={250} alt="image-3"
                       className="w-1/3 md:w-[156px] h-fit md:h-[358px] rounded-lg shadow-md"/>
            </div>

            <div className="flex flex-col ml-5 my-6 gap-2 md:gap-8 text-black md:w-1/2">
                <h2 className="font-semibold text-2xl md:text-[32px]">{title}</h2>
                <h3 className="font-semibold md:font-medium text-lg md:text-[20px]">{subtitle}</h3>
                <p className="font-normal text-sm md:text-[16px]">{description}</p>
                <Button size="lg" className="mt-6">مشاوره رایگان</Button>
            </div>

            <Image src="/description/Vector.svg" alt="Vector" width={667} height={764} className="hidden md:w-full md:h-full md:flex md:absolute md:-right-130 md:-top-16"/>
        </section>
    );
}

export default AboutMakeen;