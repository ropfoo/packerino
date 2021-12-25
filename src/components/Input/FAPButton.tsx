import { MouseEventHandler } from 'react';

interface FAPButtonProps {
    label: string;
    onClick?: () => void;
}

const FAPButton: React.FC<FAPButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='
            bg-emerald-900 
            text-white text-lg 
            rounded-full 
            px-5 py-3 
            absolute 
            bottom-10 
            right-10
        '>
            {label}
        </button>
    );
};

export default FAPButton;
