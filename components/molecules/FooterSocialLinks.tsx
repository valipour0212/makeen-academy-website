import {SOCIAL_LINKS} from "@/data/footer";
import Link from "next/link";
import {Icon} from "@/components/atoms";


function FooterSocialLinks() {
    return (
        <div className="flex items-center gap-2 mt-2 md:mt-8 mb-4">
            {
                SOCIAL_LINKS.map(item =>
                    <Link key={item.id} href={item.href} className="cursor-pointer">
                        <Icon
                            src={item.icon}
                            alt={item.href}
                            size={20}
                            className="md:w-8 md:h-8"
                        />
                    </Link>
                )
            }
        </div>
    );
}

export default FooterSocialLinks;