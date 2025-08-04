export interface CoworkingImageType {
    id: string;
    src: string;
    alt: string;
}

export interface CoworkingDataType {
    title: string;
    description: string;
    button_text: string;
    button_link: string;
    images: CoworkingImageType[];
}
