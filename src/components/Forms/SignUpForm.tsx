import { Form, Formik } from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import TextInput from '../Input/TextInput';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserData } from '../../lib/firebase/user';

export type SignUpData = {
    username: string;
    email: string;
    password: string;
};

const SignUp: React.FC = () => {
    const auth = getAuth();
    const handleSignUp = async (userData: SignUpData) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            );
            const user = userCredentials.user;
            createUserData(user.uid, {
                username: userData.username,
                email: userData.email,
            });
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={handleSignUp}>
            <Form
                className='
                grid
                gap-5 
            '>
                <TextInput label='username' name='username' />
                <TextInput label='email' name='email' />
                <TextInput label='password' name='password' />
                <SubmitButton label='signup' />
            </Form>
        </Formik>
    );
};

export default SignUp;
