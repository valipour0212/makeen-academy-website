import React from 'react';
import BlogCard from "@/components/organisms/Cards/BlogCard";

function BlogList() {
    const blogData = [
        {
            id: "1",
            slug: "blog-1",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
        {
            id: "2",
            slug: "blog-2",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
        {
            id: "3",
            slug: "blog-3",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
        {
            id: "4",
            slug: "blog-4",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
        {
            id: "5",
            slug: "blog-5",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
    ]

    return (
        <section className="my-5 md:my-12">
            {/* Mobile  */}
            <div className="flex gap-4 overflow-x-auto hide-scroll-x md:hidden">
                {
                    blogData.map(blog => <BlogCard key={blog.id} {...blog} />)
                }
            </div>

            {/* Desktop */}
            <div className="hidden md:flex md:flex-col md:gap-12 md:items-center">
                <h2 className="font-semibold text-[28px]">مقالات</h2>
                <div className="grid grid-cols-4 gap-6">
                    {
                        blogData.slice(0, 4).map(blog => <BlogCard key={blog.id} {...blog} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default BlogList;