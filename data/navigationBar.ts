import { NavigationBarItem } from '@/types/types';

const NAVIGATION_BAR: NavigationBarItem[] = [
    {
        label: 'خانه',
        icon: '/icons/navigation/home.svg',
        activeIcon: '/icons/navigation/active-home.svg',
        href: '/',
    },
    {
        label: 'دوره ها',
        icon: '/icons/navigation/courses.svg',
        activeIcon: '/icons/navigation/active-courses.svg',
        href: '/courses',
    },
    {
        label: 'گالری تصاویر',
        icon: '/icons/navigation/gallery.svg',
        activeIcon: '/icons/navigation/active-gallery.svg',
        href: '/gallery',
    },
    {
        label: 'مکینی ها',
        icon: '/icons/navigation/people.svg',
        activeIcon: '/icons/navigation/active-people.svg',
        href: '/makeeniha',
    },
    {
        label: 'بیشتر',
        icon: '/icons/navigation/more.svg',
        activeIcon: '/icons/navigation/active-more.svg',
        href: '/more',
    },
];

export default NAVIGATION_BAR;
