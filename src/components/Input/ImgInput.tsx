import { Field } from 'formik';
import { InputProps } from './types/InputProps';

interface ImgInputProps extends InputProps {
    url: string;
}

const ImgInput: React.FC<ImgInputProps> = ({ name, url }) => {
    return (
        <label>
            {url && (
                <img width={100} height={100} src={url} alt='image url input' />
            )}
            <Field className='border' name={name} />
        </label>
    );
};

export default ImgInput;
