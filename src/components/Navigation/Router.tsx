import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const CreateItemPage = lazy(() => import('../../pages/CreateItemPage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
const ItemPage = lazy(() => import('../../pages/ItemPage'));
const ItemsPage = lazy(() => import('../../pages/ItemsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const PacksPage = lazy(() => import('../../pages/PacksPage'));
const EditItemPage = lazy(() => import('../../pages/EditItemPage'));

const Router: React.FC = () => {
    const { authData } = useAuth();
    return (
        <Suspense fallback={<div>loading</div>}>
            <Routes>
                <Route
                    path='/'
                    element={
                        authData?.currentUser ? <ItemsPage /> : <LoginPage />
                    }
                />
                {authData?.currentUser ? (
                    <>
                        <Route path='/packs' element={<PacksPage />} />
                        <Route path='/items' element={<ItemsPage />} />
                        <Route
                            path='/items/create'
                            element={<CreateItemPage />}
                        />
                        <Route path='/user' element={<UserPage />} />
                        <Route path='/item/:id' element={<ItemPage />} />
                        <Route
                            path='/item/edit/:id'
                            element={<EditItemPage />}
                        />
                    </>
                ) : (
                    <>
                        <Route path='/signup' element={<SignUpPage />} />
                    </>
                )}
            </Routes>
        </Suspense>
    );
};

export default Router;
