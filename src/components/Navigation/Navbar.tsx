import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
    return (
        <nav
            className='
            flex
            justify-between
            bg-white
            px-7
            py-5
            drop-shadow
        '>
            <div className='text-xl font-bold'>packerino</div>
            <div
                className=' 
               flex
            '>
                <NavLink to='/' label='home' />
                <NavLink to='/user' label='user' />
            </div>
        </nav>
    );
};

export default Navbar;
