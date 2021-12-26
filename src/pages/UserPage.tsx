import { useAuthContext } from '../components/Auth/Auth.provider';
import Register from '../components/Auth/Register';
import Page from '../components/Page';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const UserPage: React.FC = () => {
    const { userAuth, setUserAuth } = useAuthContext();
    const auth = getAuth();
    const navigate = useNavigate();
    return (
        <Page title='User'>
            <div>hello {userAuth?.email}</div>
            <button
                onClick={() => {
                    signOut(auth);
                    setUserAuth && setUserAuth(null);
                    navigate('/login');
                }}>
                sign out
            </button>
        </Page>
    );
};

export default UserPage;
