import { Form, Formik } from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import TextInput from '../Input/TextInput';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Credentials } from './AuthTypes';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = async (credentials: Credentials) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            );
            const user = userCredentials.user;
            navigate('/user');

            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}>
            <Form>
                <TextInput label='email' name='email' />
                <TextInput label='password' name='password' />
                <SubmitButton label='login' />
            </Form>
        </Formik>
    );
};

export default Login;
