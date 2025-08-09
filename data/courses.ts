import {CourseFaqs, CourseFeature, CourseStep, CourseType} from "@/types/course";

export const COURSES: CourseType[] = [
    {
        id: "ui-ux",
        title: "دوره UI/UX",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/img/course/ui.png",
        targetDate: "2025-09-10T23:59:59",
    },
    {
        id: "dotnet",
        title: "دوره .NET",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "coming_soon",
        image: "/img/course/dotNET.png",
        targetDate: "2025-09-10T23:59:59",
    },
    {
        id: "php",
        title: "دوره PHP",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "full",
        image: "/img/course/php.png",
        targetDate: "2025-09-10T23:59:59",
    },
    {
        id: "python",
        title: "دوره Python",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/img/course/python.png",
        targetDate: "2025-09-10T23:59:59",
    },
    {
        id: "5",
        title: "دوره React",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/img/course/react.png",
        targetDate: "2025-09-10T23:59:59",
    },
] as const;

export const COURSE_FEATURES: CourseFeature[] = [
    {
        id: '1',
        icon: '/icon/medal.svg',
        title: 'گواهی پایان دوره',
        description: 'دارد',
    },
    {
        id: '2',
        icon: '/icon/active-clock.svg',
        title: 'مدت زمان دوره',
        description: '1400 ساعت',
    },
    {
        id: '3',
        icon: '/icon/active-cards.svg',
        title: 'روش پرداخت',
        description: 'اقساطی',
    },
    {
        id: '4',
        icon: '/icon/teacher.svg',
        title: 'نوع برگزاری دوره',
        description: 'حضوری',
    },
];

export const COURSE_STEPS: CourseStep[] = [
    {
        step: '1',
        title: 'مصاحبه و تعیین سطح',
        description: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه',
    },
    {
        step: '2',
        title: 'کارگاه های آموزشی',
        description: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه',
    },
    {
        step: '3',
        title: 'شروع پروژه همراه با تیم',
        description: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه',
    },
    {
        step: '4',
        title: 'نوشتن رزومه و ورود به بازار کار',
        description: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه',
    },
];

export const COURSES_FAQS: CourseFaqs[] = [
    {
        id: "1",
        question: "آیا تضمین استخدام وجود دارد؟",
        answer: "بله، در صورت موفقیت در دوره، استخدام شما تضمین می‌شود.",
    },
    {
        id: "2",
        question: "آیا تضمین استخدام وجود دارد؟",
        answer: "بله، در صورت موفقیت در دوره، استخدام شما تضمین می‌شود.",
    },
    {
        id: "3",
        question: "آیا تضمین استخدام وجود دارد؟",
        answer: "بله، در صورت موفقیت در دوره، استخدام شما تضمین می‌شود.",
    },
    {
        id: "4",
        question: "آیا تضمین استخدام وجود دارد؟",
        answer: "بله، در صورت موفقیت در دوره، استخدام شما تضمین می‌شود.",
    },
]