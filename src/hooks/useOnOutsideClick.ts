import React, { useEffect } from 'react';

export function useOnOutsideClick({
    ref,
    onOutsideClick,
}: {
    ref: React.RefObject<any>;
    onOutsideClick: () => void;
}) {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target)) {
                onOutsideClick && onOutsideClick();
            }
        };

        window.addEventListener('click', handleClick);

        return () => window.removeEventListener('click', handleClick);
    }, [ref, onOutsideClick]);
}
