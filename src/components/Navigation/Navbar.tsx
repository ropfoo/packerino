import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className='p-2 w-1/5 flex justify-between'>
            <Link to='/'>home</Link>
            <Link to='/user'>user</Link>
        </nav>
    );
};

export default Navbar;
