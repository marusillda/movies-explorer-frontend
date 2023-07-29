import { useState, useEffect, useCallback } from 'react';

export function useScreenResize() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);

    const setScreenSize = () => {
        setIsMobile(window.innerWidth < 760);
        setIsTablet(window.innerWidth >= 760 && window.innerWidth < 1280);
    }

    useEffect(() => {
        setScreenSize();
    }, []);


    const handleResize = useCallback(() => {
        if (timeoutId > 0) {
            clearTimeout(timeoutId);
        }

        setTimeoutId(setTimeout(() => {
            setScreenSize();
        }, 100));
        // eslint-disable-next-line
    }, [setIsMobile, setIsTablet, setTimeoutId]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize])

    return { isMobile, isTablet };
}