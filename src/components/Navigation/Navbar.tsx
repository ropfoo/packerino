import { Link } from 'react-router-dom';
import { useAuthContext } from '../Auth/Auth.provider';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
    const { userAuth } = useAuthContext();
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
            <Link to='/'>
                <div className='text-xl font-bold'>packerino</div>
            </Link>
            <div
                className=' 
               flex
            '>
                {userAuth ? (
                    <>
                        <NavLink to='/items' label='items' />
                        <NavLink to='/user' label='user' />
                    </>
                ) : (
                    <>
                        <NavLink to='/login' label='login' />
                        <NavLink to='/signup' label='signup' />
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
