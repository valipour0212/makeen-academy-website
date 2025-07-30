import {ButtonNavItemType, HeaderNavItemType} from "@/types/navigation";

export const HEADER_NAV_ITEMS: HeaderNavItemType[] = [
    {id: "home", label: "خانه", href: "/"},
    {id: "courses", label: "دوره‌ها", href: "/courses"},
    {id: "coworking", label: "فضای کار اشتراکی", href: "/coworking"},
    {id: "gallery", label: "گالری تصاویر", href: "/gallery"},
    {id: "blog", label: "مقالات", href: "/blog"},
    {id: "students", label: "مکینی‌ها", href: "/students"},
]

export const BOTTOM_NAV_ITEMS: ButtonNavItemType[] = [
    {
        id: "home",
        label: "خانه",
        href: "/",
        icon: "/icon/navigation/home.svg",
        activeIcon: "/icon/navigation/active-home.svg"
    },
    {
        id: "courses",
        label: "دوره‌ها",
        href: "/courses",
        icon: "/icon/navigation/courses.svg",
        activeIcon: "/icon/navigation/active-courses.svg"
    },
    {
        id: "gallery",
        label: "گالری تصاویر",
        href: "/gallery",
        icon: "/icon/navigation/gallery.svg",
        activeIcon: "/icon/navigation/active-gallery.svg"
    },
    {
        id: "students",
        label: "مکینی‌ها",
        href: "/students",
        icon: "/icon/navigation/people.svg",
        activeIcon: "/icon/navigation/active-people.svg"
    },
    {
        id: "more",
        label: "بیشتر",
        href: "/more",
        icon: "/icon/navigation/more.svg",
        activeIcon: "/icon/navigation/more.svg"
    },
]

export const BUTTON_NAV_MORE_ITEMS: ButtonNavItemType[] = [
    {
        id: "coworking",
        label: "فضای کار اشتراکی",
        href: "/coworking",
        icon: "/icon/navigation/chair.svg",
        activeIcon: "/icon/navigation/chair.svg"
    },
    {
        id: "blog",
        label: "مقالات",
        href: "/blog",
        icon: "/icon/navigation/note.svg",
        activeIcon: "/icon/navigation/active-note.svg"
    },
]