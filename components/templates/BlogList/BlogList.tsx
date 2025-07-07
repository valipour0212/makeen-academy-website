import React from 'react';
import BlogCard from "@/components/organisms/BlogCard/BlogCard";

function BlogList() {
    const blogData = [
        {
            id: "1",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
        {
            id: "2",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
        {
            id: "3",
            image: "/blog/img-1.png",
            title: "بهترین زبان های برنامه نویسی برای امنیت کدامند",
            description: "اثر کنکورد یا هزینه غرق‌شده ، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذار‌ها",
            uploaded: "۲۲ دی ۱۴۰۳",

        },
    ]
    return (
        <section className="my-5 flex gap-4 overflow-x-auto">
            {
                blogData.map(blog => <BlogCard key={blog.id} {...blog} />)
            }
        </section>
    );
}

export default BlogList;