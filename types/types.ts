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