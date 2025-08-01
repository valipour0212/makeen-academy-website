import {CourseType} from "@/types/hero-section";

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