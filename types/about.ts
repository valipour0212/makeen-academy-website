export interface AboutVectorType {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface AboutDataType {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
    vector: AboutVectorType;
}
