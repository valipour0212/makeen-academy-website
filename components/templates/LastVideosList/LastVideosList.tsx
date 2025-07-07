import React from 'react';
import LastVideosCard from "@/components/organisms/LastVideosCard/LastVideosCard";

function LastVideosList() {
    const lastVideosData = [
        {
            id: "1",
            image: "/last-videos/img-1.png",
            videoTitle: "ویژه برنامه نوروز مکین رو",
            videoSubtitle: "به هیچ وجه از دست نده",
            videoTime: "22:10",
            title: "ویژه برنامه نوروزی مکین",
            visit: 23,
            uploaded: 23,
        },
        {
            id: "2",
            image: "/last-videos/img-1.png",
            videoTitle: "ویژه برنامه نوروز مکین رو",
            videoSubtitle: "به هیچ وجه از دست نده",
            videoTime: "22:10",
            title: "ویژه برنامه نوروزی مکین",
            visit: 23,
            uploaded: 23,
        },
    ]


    return (
        <section className="flex flex-col items-center gap-4 my-5">
            <h2 className="">آخرین ویدیوها</h2>

            <div className="flex gap-2">
                {
                    lastVideosData.map(video => <LastVideosCard key={video.id} {...video} />)
                }
            </div>
        </section>
    );
}

export default LastVideosList;