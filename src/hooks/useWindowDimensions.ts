import { useState, useEffect } from "react";

export interface IWindowDimension {
    width: number;
    height: number;
}

const getWindowDimensions = (): IWindowDimension => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

const useWindowDimensions = (): IWindowDimension => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
