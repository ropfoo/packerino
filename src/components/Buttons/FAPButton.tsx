import { ButtonProps } from './types/ButtonProps';

const FAPButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='
            bg-meadow
            text-night 
            font-bold
            text-md 
            rounded-full 
            flex
            justify-center
            items-center
            px-5 py-3 
            absolute 
            bottom-10 
            right-10
        '>
            <p>{label}</p>
        </button>
    );
};

export default FAPButton;
