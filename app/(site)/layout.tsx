import {LayoutType} from "@/types/layout";
import {BottomNavigationBar, Footer, Header} from "@/layout";

function SiteLayout({children}: LayoutType) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <BottomNavigationBar/>
            <Footer/>
        </>
    );
}

export default SiteLayout;