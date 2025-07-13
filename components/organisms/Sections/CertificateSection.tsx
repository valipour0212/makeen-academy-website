import Image from "next/image";

export default function CertificateSection() {
    return (
        <div className="w-full h-fit mt-2 flex flex-col md:flex-row-reverse gap-6">
            <div className="md:w-1/2">
                <Image src="/course/certificate.png" alt="certificate" width={500} height={500} className="object-cover rounded-lg w-full" />
            </div>
            <div className="flex flex-col gap-4 md:w-1/2">
                <h2 className="font-semibold text-2xl">گواهی پایان دوره</h2>
                <p className="font-normal text-sm">
                    این گواهی به افرادی اعطا می‌شود که دوره آموزشی مکین را با موفقیت گذرانده‌اند...
                </p>
            </div>
        </div>
    );
}
