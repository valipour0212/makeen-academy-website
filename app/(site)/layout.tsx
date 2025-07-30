import {LayoutType} from "@/types/layout";
import {BottomNavigationBar, Header} from "@/layout";

function SiteLayout({children}: LayoutType) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <BottomNavigationBar/>
        </>
    );
}

export default SiteLayout;