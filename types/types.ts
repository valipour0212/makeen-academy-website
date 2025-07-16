export interface NavigationBarItem {
    label: string;
    icon: string;
    activeIcon: string;
    href: string;
}

export interface MoreModalItem {
    label: string;
    icon: string;
    activeIcon: string;
    href: string;
}

export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    status: "open" | "coming_soon" | "full";
    targetDate: string;
    image: string;
}

export interface Mentor {
    id: number;
    image: string;
    fullName: string;
    subtitle: string;
    jobTitle: string;
    description: string;
}

export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
}