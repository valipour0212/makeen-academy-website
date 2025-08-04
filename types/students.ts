export interface Student {
    id: string;
    image: string;
    fullName: string;
    jobTitle: string;
    description: string;
    voice: string;
    companyLogo: string;
    course: string;
    onSelect: boolean;
}

export interface StudentCardType {
    image: string;
    fullName: string;
    jobTitle: string;
    companyLogo: string;
    course: string;
    onSelect?: boolean;
    onClick?: () => void;
}

export interface StudentPageAccordionType {
    image: string;
    fullName: string;
    companyLogo: string;
    jobTitle: string;
    description: string;
    voice: string;
}
