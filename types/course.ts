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

export interface CourseFeature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface CourseStep {
    step: string;
    title: string;
    description: string;
}

export interface CourseFaqs {
    id: string;
    question: string;
    answer: string;
}