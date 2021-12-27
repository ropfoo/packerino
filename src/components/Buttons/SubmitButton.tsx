import { ButtonProps } from './types/ButtonProps';

const SubmitButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='p-3 bg-meadow text-night rounded-lg font-bold'
            type='submit'>
            {label}
        </button>
    );
};

export default SubmitButton;
