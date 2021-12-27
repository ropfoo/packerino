import { Auth } from 'firebase/auth';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import ItemsPage from '../../pages/ItemsPage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import UserPage from '../../pages/UserPage';

const Router: React.FC = () => {
    const auth = useQuery<Auth>('auth');
    return (
        <Routes>
            <Route path='/' element={<ItemsPage />} />
            {auth.data?.currentUser ? (
                <>
                    <Route path='/items' element={<ItemsPage />} />
                    <Route path='/user' element={<UserPage />} />
                </>
            ) : (
                <>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </>
            )}
        </Routes>
    );
};

export default Router;
