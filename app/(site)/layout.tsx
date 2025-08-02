import {LayoutType} from "@/types/layout";
import {BottomNavigationBar, Footer, Header} from "@/layout";

function SiteLayout({children}: LayoutType) {
    return (
        <>
            <Header/>
            <main className="w-full md:max-w-[1280px] mx-auto px-4 md:px-0">
                {children}
            </main>
            <BottomNavigationBar/>
            <Footer/>
        </>
    );
}

export default SiteLayout;