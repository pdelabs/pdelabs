import { useState, useEffect, useCallback } from 'react';

const useDimensions = (): [(node: any) => void, { width: number; height: number }] => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [element, setElement] = useState(null);

    const refCallback = useCallback((node: any) => {
        if (node) {
            setElement(node);
        }
    }, []);

    useEffect(() => {
        if (!element) return;

        const updateDimensions = (entries: any) => {
            for (let entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, [element]);

    return [refCallback, dimensions];
};

export default useDimensions;
