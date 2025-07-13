// types.ts
export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    status: "open" | "coming_soon" | "full";
    targetDate: string;
    image: string;
}
