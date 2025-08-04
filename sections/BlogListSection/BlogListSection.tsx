import {BLOG_LIST} from "@/data/blog";
import BlogCard from "@/components/molecules/BlogCard";
import {Heading} from "@/components/atoms/Typography";

function BlogListSection() {
    return (
        <section className="my-5 md:my-12">
            {/* Mobile */}
            <div className="flex gap-4 overflow-x-auto hide-scroll-x md:hidden">
                {
                    BLOG_LIST.map(blog =>
                        <BlogCard key={blog.id} {...blog} />
                    )
                }
            </div>

            {/* Desktop */}
            <div className="hidden md:flex md:flex-col md:gap-12 md:items-center">
                <Heading className="font-semibold text-[28px]">مقالات</Heading>
                <div className="grid grid-cols-4 gap-6">
                    {
                        BLOG_LIST.slice(0, 4).map(blog =>
                            <BlogCard key={blog.id} {...blog} />
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default BlogListSection;