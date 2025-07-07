import Image from "next/image";
import Button from "@/components/atoms/Button";


function Description() {

    const images: string[] = ["/description/img-1.png", "/description/img-2.png", "/description/img-3.png"];
    const title: string = "اینجا در مکین";
    const subtitle: string = "ما در اینجا در مکین برای ساخت آینده شغلی تو در تلاشیم چرای که آینده از آن توست";
    const description: string = " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم پس  اینجا توی مکین یاد میگیری چطوری یادبگیری ";

    return (
        <section className="flex flex-col my-5">
            <div className="flex justify-between gap-4">
                <Image src={images[0]} width={110} height={250} alt="image-1"
                       className="w-1/3 h-fit rounded-lg shadow-md mt-4"/>
                <Image src={images[1]} width={110} height={250} alt="image-2"
                       className="w-1/3 h-fit rounded-lg shadow-md mt-16"/>
                <Image src={images[2]} width={110} height={250} alt="image-3"
                       className="w-1/3 h-fit rounded-lg shadow-md"/>
            </div>

            <div className="flex flex-col ml-5 my-6 gap-2 text-black">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <h3 className="font-semibold text-lg">{subtitle}</h3>
                <p className="font-normal text-sm">{description}</p>
            </div>

            <Button size="lg">مشاوره رایگان</Button>
        </section>
    );
}

export default Description;