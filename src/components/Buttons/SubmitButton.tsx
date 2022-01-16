import { ButtonProps } from './types/ButtonProps';

const SubmitButton: React.FC<ButtonProps> = props => {
    return (
        <button
            onClick={props.onClick}
            className='p-3 bg-meadow text-night rounded-lg font-bold'
            type='submit'
            {...props}>
            {props.label}
        </button>
    );
};

export default SubmitButton;
