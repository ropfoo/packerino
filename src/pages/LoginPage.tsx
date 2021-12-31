import LoginForm from '../components/Forms/LoginForm';
import Page from '../components/Page/Page';

import hillsImg from '../images/hills.jpg';

const LoginPage: React.FC = () => {
    return (
        <Page title='Login' isSignIn={true} img={hillsImg}>
            <LoginForm />
        </Page>
    );
};

export default LoginPage;
