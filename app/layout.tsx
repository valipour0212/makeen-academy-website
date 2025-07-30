import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "آکادمی مکین",
    description: "مکین برای آینده",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
        <body cz-shortcut-listen="true">
        {children}
        </body>
        </html>
    );
}
