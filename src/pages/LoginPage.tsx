import LoginForm from '../components/Forms/LoginForm';
import Page from '../components/Page';

const LoginPage: React.FC = () => {
    return (
        <Page title='Login'>
            <LoginForm />
        </Page>
    );
};

export default LoginPage;
