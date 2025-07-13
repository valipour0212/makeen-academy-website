import React, {JSX} from 'react';
import Icon from "@/components/atoms/Icon";


function SocialIcons(): JSX.Element {
    const SocialData = [
        {
            id: "1",
            image: "/socials/youtube.svg",
        },
        {
            id: "2",
            image: "/socials/bale.svg",
        },
        {
            id: "3",
            image: "/socials/telegram.svg",
        },
        {
            id: "4",
            image: "/socials/instagram.svg",
        },
    ]

    return (
        <div className="flex gap-2 my-2 md:my-0">
            {
                SocialData.map(item => <Icon key={item.id} src={item.image} alt={item.image} size={20} className="md:w-8 md:h-8 cursor-pointer"/>)
            }
        </div>
    );
}

export default SocialIcons;