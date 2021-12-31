import Page from '../components/Page/Page';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUser, UserData } from '../lib/firebase/user';

const UserPage: React.FC = () => {
    const auth = getAuth();
    const user = useQuery<UserData | null>(
        'user',
        () => (auth.currentUser ? getUser(auth.currentUser.uid) : null),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        }
    );
    const navigate = useNavigate();
    return (
        <Page title='User'>
            <div>hello {user.data?.username}</div>
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
