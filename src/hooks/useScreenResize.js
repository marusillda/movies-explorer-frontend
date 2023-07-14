import { useState, useEffect, useCallback } from 'react';

export function useScreenResize() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setisTablet] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);

    const handleResize = useCallback(() => {
        if (timeoutId > 0) {
            clearTimeout(timeoutId);
        }

        setTimeoutId(setTimeout(() => {
            setIsMobile(window.innerWidth < 760);
            setisTablet(window.innerWidth >= 760 && window.innerWidth < 1280);
        }, 100));
        // eslint-disable-next-line
    }, [setIsMobile, setisTablet, setTimeoutId]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize])

    return { isMobile, isTablet };
}
