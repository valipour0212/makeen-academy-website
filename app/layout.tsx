import type {Metadata} from "next";
import "./globals.css";
import NavigationBar from "@/components/organisms/NavigationBar/NavigationBar";
import Header from "@/components/organisms/Header/Header";

export const metadata: Metadata = {
    title: "آکادمی مکین",
    description: "آکادمی مکین",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
        <body cz-shortcut-listen="true">
        <Header/>
        {children}
        <NavigationBar/>
        </body>
        </html>
    );
}
