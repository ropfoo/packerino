import { Field } from 'formik';
import { InputProps } from './types/InputProps';

interface CheckboxProps extends InputProps {
    isChecked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, isChecked }) => {
    return (
        <label className='flex items-center'>
            <div
                className={`
                border
                w-5
                h-5
                mr-3
                ${isChecked ? 'bg-blue-400' : 'bg-transparent'}   
        `}>
                <Field className='hidden' type='checkbox' name={name} />
            </div>
            <p> {label}</p>
        </label>
    );
};

export default Checkbox;
