import { Route, Routes } from 'react-router-dom';
import ItemsPage from '../../pages/ItemsPage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import UserPage from '../../pages/UserPage';
import { useAuthContext } from '../Auth/Auth.provider';

const Router: React.FC = () => {
    const { userAuth } = useAuthContext();
    return (
        <Routes>
            <Route path='/' element={<ItemsPage />} />
            {userAuth ? (
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
