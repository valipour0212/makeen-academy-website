import {useEffect, useState} from "react";

function useIsMobile(breakpoint = 768): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function checkScreen() {
            setIsMobile(window.innerWidth < breakpoint);
        }

        checkScreen(); // اجرا در بار اول
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;