export interface NewsletterImageType {
    src: string;
    alt: string;
    width: number;
    height: number;
    class_name?: string;
}

export interface NewsletterDataType {
    title: string;
    description: string;
    image: NewsletterImageType;
    input_placeholder: string;
    button_text: string;
}
