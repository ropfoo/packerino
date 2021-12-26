import { Form, Formik } from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import TextInput from '../Input/TextInput';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Credentials } from './AuthTypes';
import { createUserData } from '../../lib/firebase/user';

const Register: React.FC = () => {
    const auth = getAuth();
    const handleSignUp = async (credentials: Credentials) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            );
            const user = userCredentials.user;
            createUserData(user.uid, credentials.email);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSignUp}>
            <Form>
                <TextInput label='email' name='email' />
                <TextInput label='password' name='password' />
                <SubmitButton label='signup' />
            </Form>
        </Formik>
    );
};

export default Register;
