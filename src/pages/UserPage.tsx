import Page from '../components/Page';
import { Auth, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const UserPage: React.FC = () => {
    const auth = getAuth();
    const authQuery = useQuery<Auth>('auth');
    const user = authQuery.data?.currentUser;
    const navigate = useNavigate();
    return (
        <Page title='User'>
            <div>hello {user?.email}</div>
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
