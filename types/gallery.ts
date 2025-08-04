export interface GalleryDataType {
    title: string;
    images: GalleryImageType[],
    button_text: string,
    link: string,
}

export interface GalleryImageType {
    id: string;
    src: string;
}
