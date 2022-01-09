import React, { useRef, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { animated, useTransition } from 'react-spring';
import { useOnOutsideClick } from '../../hooks/useOnOutsideClick';

const ContextMenu: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useOnOutsideClick({ ref: menuRef, onOutsideClick: () => setIsOpen(false) });

    const menuTransition = useTransition(isOpen, {
        from: { opacity: 0, scale: 0.6 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0.6 },
        reverse: isOpen,
    });

    return (
        <div className='relative' ref={menuRef}>
            <div
                className={`
                    cursor-pointer
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-full
                    transition-
                    ${isOpen && 'bg-dark'}
                `}
                onClick={() => setIsOpen(o => !o)}>
                <HiOutlineDotsHorizontal size={23} />
            </div>
            {menuTransition(
                (style, item) =>
                    item && (
                        <animated.ul
                            style={style}
                            className='
                            absolute 
                            right-0
                            bg-dark
                            border
                            border-stonewet
                            rounded-lg
                        '>
                            {children}
                        </animated.ul>
                    )
            )}
        </div>
    );
};

export default ContextMenu;
