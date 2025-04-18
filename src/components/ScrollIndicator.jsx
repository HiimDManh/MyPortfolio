import { useEffect, useState } from "react";

const ScrollIndicator = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const updateScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollWidth(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
            <div
                className="h-full bg-pink-500 transition-all duration-150 ease-out"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
};

export default ScrollIndicator;
