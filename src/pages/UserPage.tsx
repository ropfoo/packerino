import Page from '../components/Page/Page';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const UserPage: React.FC = () => {
    const auth = getAuth();
    const { user } = useUser();
    const navigate = useNavigate();
    return (
        <Page title='User'>
            <div>hello {user?.username}</div>
            <button
                onClick={() => {
                    auth.signOut();
                    navigate('/login');
                }}>
                sign out
            </button>
        </Page>
    );
};

export default UserPage;
