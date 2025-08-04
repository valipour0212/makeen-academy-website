import {Heading, SubHeading} from "@/components/atoms/Typography";
import {COMPANIES} from "@/data/companies";
import {CompanyLogoGrid} from "@/components/molecules";

function CompaniesSection() {
    return (
        <section className="my-5 md:my-12 text-center">
            <Heading className="font-medium md:font-semibold text-[20px] md:text-[28px]">{COMPANIES.title}</Heading>
            <SubHeading className="font-normal text-[16px] md:text-[26px] md:mt-4 md:mb-6">{COMPANIES.subtitle}</SubHeading>
            <CompanyLogoGrid images={COMPANIES.images} />
        </section>
    );
}

export default CompaniesSection;
