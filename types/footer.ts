export interface FooterFeatureType {
    id: string;
    icon: string;
    text: string;
}

export interface SocialLinkType {
    id: string;
    icon: string;
    href: string;
}

export interface FooterResponse {
    features: FooterFeatureType[];
    socials: SocialLinkType[];
}