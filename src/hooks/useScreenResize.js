import { useState, useEffect, useCallback } from 'react';
import { TABLET_WIDTH, DESKTOP_WIDTH } from '../utils/constants';

export function useScreenResize() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);

    const setScreenSize = () => {
        setIsMobile(window.innerWidth < TABLET_WIDTH);
        setIsTablet(window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH);
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