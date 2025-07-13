import {Course} from "@/types/types";

export const coursesData: Course[] = [
    {
        id: "1",
        slug: "ui-ux",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره UI/UX",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/courses/ui.png",
    },
    {
        id: "2",
        slug: "dotnet",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره .NET",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "coming_soon",
        image: "/courses/dotNET.png",
    },
    {
        id: "3",
        slug: "php",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره PHP",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "full",
        image: "/courses/php.png",
    },
    {
        id: "4",
        slug: "python",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره Python",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/courses/python.png",
    },
    {
        id: "5",
        slug: "react",
        targetDate: "2025-09-10T23:59:59",
        title: "دوره React",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        status: "open",
        image: "/courses/react.png",
    },
] as const;