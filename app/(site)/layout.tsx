import {LayoutType} from "@/types/layout";
import {Header} from "@/layout";

function SiteLayout({children}: LayoutType) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
}

export default SiteLayout;