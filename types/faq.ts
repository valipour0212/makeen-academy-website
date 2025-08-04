export interface FAQItemType {
    question: string;
    answer: string;
}

export interface FAQDataType {
    [category: string]: FAQItemType[];
}
