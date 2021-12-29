import { Form, Formik } from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import TextInput from '../Input/TextInput';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export type LoginCredentials = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = async (credentials: LoginCredentials) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            );
            navigate('/user');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}>
            <Form
                className='
                grid
                gap-5 
            '>
                <TextInput label='email' name='email' />
                <TextInput label='password' name='password' />
                <SubmitButton label='login' />
            </Form>
        </Formik>
    );
};

export default Login;
