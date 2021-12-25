import { Field } from 'formik';

interface ImgInputProps {
    name: string;
    url: string;
}

const ImgInput: React.FC<ImgInputProps> = ({ name, url }) => {
    return (
        <label>
            <img width={100} height={100} src={url} alt='image url input' />
            <Field className='border' name={name} />
        </label>
    );
};

export default ImgInput;
