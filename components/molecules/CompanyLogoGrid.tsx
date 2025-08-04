import {CompanyLogo} from "@/components/atoms/Image";

interface CompanyLogoGridProps {
    images: string[];
}

function CompanyLogoGrid({images}: CompanyLogoGridProps) {
    return (
        <div className="grid grid-cols-7 items-center gap-4 mt-2">
            {
                images.map((src, index) =>
                    <CompanyLogo key={index} src={src} alt={`company-logo-${index}`}/>
                )
            }
        </div>
    );
}

export default CompanyLogoGrid;
