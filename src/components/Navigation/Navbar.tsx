import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
    const { authData } = useAuth();

    return (
        <nav
            className='
            flex
            justify-between
            bg-dark
            px-7
            py-5
            drop-shadow
        '>
            <Link to='/'>
                <div className='text-xl text-dirt font-bold'>packerino</div>
            </Link>
            <div
                className=' 
               flex
            '>
                {authData?.currentUser ? (
                    <>
                        <NavLink to='/sets' label='sets' />
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
