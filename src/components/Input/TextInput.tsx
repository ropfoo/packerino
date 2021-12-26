import { Field } from 'formik';
import { InputProps } from './types/InputProps';

const TextInput: React.FC<InputProps> = ({ name, label }) => (
    <div className='mb-5'>
        <label className='flex flex-col'>
            {label}
            <Field className='border-2 p-1 rounded-lg max-w-sm' name={name} />
        </label>
    </div>
);

export default TextInput;
