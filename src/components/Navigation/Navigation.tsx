import { Route, Routes } from 'react-router-dom';
import ItemsPage from '../../pages/ItemsPage';
import UserPage from '../../pages/UserPage';

const Navigation: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemsPage />} />
            <Route path='/user' element={<UserPage />} />
        </Routes>
    );
};

export default Navigation;
