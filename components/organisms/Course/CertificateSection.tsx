import ImageSection from "@/components/organisms/Course/ImageSection";

function CertificateSection() {
    return (
        <div className="w-10/12 flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
            <div className="md:w-[368px] md:h-[519px] bg-white rounded-2xl md:p-4">
                <ImageSection src="/img/certificate.png" alt="certificate"/>
            </div>

            <div className="md:w-8/12">
                <h2 className="font-semibold text-[20px] md:text-[28px]">گواهی پایان دوره</h2>
                <p className="font-normal text-sm md:text-[16px] mt-4 md:mt-8">این گواهی به افرادی اعطا می‌شود که دوره
                    آموزشی مکین را با موفقیت گذرانده‌اند. این مدرک نشان‌دهنده‌ی کسب مهارت‌ها و دانش لازم در زمینه‌های
                    مرتبط است و می‌تواند در بهبود فرصت‌های شغلی و حرفه‌ای مؤثر باشد.</p>
            </div>
        </div>
    );
}

export default CertificateSection;