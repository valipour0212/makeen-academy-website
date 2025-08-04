import {Heading} from "@/components/atoms/Typography";
import {GALLERY} from "@/data/gallery";
import {GalleryGrid} from "@/components/molecules";
import Link from "next/link";
import {Button} from "@/components/atoms";

function GallerySection() {
    return (
        <section className="my-5 md:my-12 flex flex-col items-center">
            <Heading className="font-medium md:font-semibold text-[20px] md:text-[28px]">{GALLERY.title}</Heading>

            <GalleryGrid/>

            <Link href={GALLERY.link}>
                <Button variant="primaryOutline" size="large">{GALLERY.button_text}</Button>
            </Link>

        </section>
    );
}

export default GallerySection;