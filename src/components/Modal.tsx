import React, { useRef } from 'react';
import { animated, useTransition } from 'react-spring';

interface ModalProps {
    isVisible: boolean;
    onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({
    children,
    isVisible,
    onBackdropClick,
}) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === backdropRef.current) onBackdropClick();
    };

    const transition = useTransition(isVisible, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <>
            {transition(
                (styles, item) =>
                    item && (
                        <animated.div
                            ref={backdropRef}
                            onClick={handleBackdropClick}
                            style={styles}
                            className='
                            flex
                            justify-center
                            items-center
                            w-full 
                            h-full 
                            top-0 
                            left-0
                            absolute 
                            backdrop-brightness-50 
                        '>
                            <div
                                className='
                                bg-white 
                                w-1/2 
                                h-1/2
                                p-5
                                rounded-lg
                            '>
                                {children}
                            </div>
                        </animated.div>
                    )
            )}
        </>
    );
};

export default Modal;
