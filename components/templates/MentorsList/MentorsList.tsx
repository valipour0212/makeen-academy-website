import React from 'react';
import MentorsCard from "@/components/organisms/MentorsCard/MentorsCard";

function MentorsList() {
    const mentorsData = [
        {
            id: "1",
            image: "/Mentors/img-1.png",
            fullName: "محمد صادقی کیا",
            subtitle: "CEO at makeen",
            jobTitle: "منتور دوره uiux ",
            description: " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس "
        },
        {
            id: "2",
            image: "/Mentors/img-1.png",
            fullName: "محمد صادقی کیا",
            subtitle: "CEO at makeen",
            jobTitle: "منتور دوره uiux ",
            description: " اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم ، یادت میدیم که بتونی از پس "
        },
    ]
    return (
        <section className="my-5 flex flex-col items-center">
            <h2 className="font-medium text-[20px]">منتور های مکین</h2>

            <div className="mt-4 w-full flex gap-2">
                {
                    mentorsData.map(mentor => <MentorsCard
                        key={mentor.id}
                        image={mentor.image}
                        fullName={mentor.fullName}
                        subtitle={mentor.subtitle}
                        jobTitle={mentor.jobTitle}
                        description={mentor.description}/>
                    )
                }
            </div>
        </section>
    );
}

export default MentorsList;