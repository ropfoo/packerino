import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import LoadingSpinner from './LoadingSpinner';

interface ModalProps {
    isVisible: boolean;
    isSpinner?: boolean;
    onBackdropClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    children,
    isVisible,
    isSpinner,
    onBackdropClick,
}) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === backdropRef.current)
            onBackdropClick && onBackdropClick();
    };

    const styles = useSpring({
        dspl: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
    });

    return (
        <>
            <animated.div
                ref={backdropRef}
                onClick={handleBackdropClick}
                style={{
                    ...styles,
                    display: styles.dspl.to(displ =>
                        displ === 0 ? 'none' : 'flex'
                    ),
                }}
                className={`     
                flex
                justify-center
                items-center
                w-full 
                h-full 
                top-0 
                left-0
                
                ${
                    isSpinner
                        ? `
                        realtive
                        `
                        : `
                        absolute 
                        backdrop-brightness-50
                        backdrop-blur-xl
                        `
                }
                `}>
                {isSpinner ? (
                    <LoadingSpinner />
                ) : (
                    <div
                        className='
                    bg-stone
                    text-gravel
                    w-full
                    mx-3
                    md:mx-0
                    md:w-1/2 
                    p-3 md:p-8 xl:p-16
                    rounded-xl lg:rounded-2xl xl:rounded-3xl
                '>
                        {children}
                    </div>
                )}
            </animated.div>
        </>
    );
};

export default Modal;
