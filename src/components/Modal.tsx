import React, { useRef } from 'react';

interface ModalProps {
    onBackdropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onBackdropClick }) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === backdropRef.current) onBackdropClick();
    };

    return (
        <div
            ref={backdropRef}
            onClick={handleBackdropClick}
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
        </div>
    );
};

export default Modal;
