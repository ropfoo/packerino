import { ButtonProps } from './types/ButtonProps';

const SubmitButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='p-3 bg-slate-500 text-white rounded-lg'
            type='submit'>
            {label}
        </button>
    );
};

export default SubmitButton;
