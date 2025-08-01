type CourseVariant = "hero" | "slide" | "list"

export interface CourseType {
    id: string;
    title: string;
    description: string;
    status?: "coming_soon" | "open" | "full";
    image: string;
    targetDate?: string;
    variant?: CourseVariant;
    className?: string;
}

export interface BannerType {
    id: string;
    imagePath: string;
}
