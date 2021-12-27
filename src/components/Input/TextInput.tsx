import { Field } from 'formik';
import { InputProps } from './types/InputProps';

const TextInput: React.FC<InputProps> = ({ name, label, isSmall }) => (
    <label className={`flex flex-col`}>
        <p>{label}</p>
        <Field
            className={`p-1 rounded-lg bg-gravel text-night ${
                isSmall ? 'w-full' : 'w-full'
            }`}
            name={name}
        />
    </label>
);

export default TextInput;
