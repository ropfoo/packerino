import { Auth } from 'firebase/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
    const auth = useQuery<Auth>('auth');
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
                {auth.data?.currentUser ? (
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
