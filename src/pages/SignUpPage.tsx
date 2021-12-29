import SignUpForm from '../components/Forms/SignUpForm';
import Page from '../components/Page';
import hillsImg from '../images/hills.jpg';

const LoginPage: React.FC = () => {
    return (
        <Page title='SignUp' isSignIn={true} img={hillsImg}>
            <SignUpForm />
        </Page>
    );
};

export default LoginPage;
