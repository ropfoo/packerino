import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import CreateItemPage from '../../pages/CreateItemPage';
import EditItemPage from '../../pages/EditItemPage';
import ItemPage from '../../pages/ItemPage';
import ItemsPage from '../../pages/ItemsPage';
import LoginPage from '../../pages/LoginPage';
import PacksPage from '../../pages/PacksPage';
import SignUpPage from '../../pages/SignUpPage';
import UserPage from '../../pages/UserPage';

const Router: React.FC = () => {
    const { authData } = useAuth();
    return (
        <Routes>
            <Route
                path='/'
                element={authData?.currentUser ? <ItemsPage /> : <LoginPage />}
            />
            {authData?.currentUser ? (
                <>
                    <Route path='/packs' element={<PacksPage />} />
                    <Route path='/items' element={<ItemsPage />} />
                    <Route path='/items/create' element={<CreateItemPage />} />
                    <Route path='/user' element={<UserPage />} />
                    <Route path='/item/:id' element={<ItemPage />} />
                    <Route path='/item/edit/:id' element={<EditItemPage />} />
                </>
            ) : (
                <>
                    <Route path='/signup' element={<SignUpPage />} />
                </>
            )}
        </Routes>
    );
};

export default Router;
