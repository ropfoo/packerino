import { ButtonProps } from './types/ButtonProps';

const FAPButton: React.FC<ButtonProps> = ({ label, onClick }) => {
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
