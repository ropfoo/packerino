import { Route, Routes } from 'react-router-dom';
import ItemsPage from '../../pages/ItemsPage';

const Navigation: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemsPage />} />
            <Route path='/user' element={<div>hello user</div>} />
        </Routes>
    );
};

export default Navigation;
