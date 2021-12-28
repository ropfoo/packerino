import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NavBarLink from './NavBarLink';

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
            shadow-xl
            shadow-slate-900
            fixed
            top-0
            w-full
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
                        <NavBarLink to='/packs'>packs</NavBarLink>
                        <NavBarLink to='/items'>items</NavBarLink>
                        <NavBarLink to='/user'>user</NavBarLink>
                    </>
                ) : (
                    <>
                        <NavBarLink to='/login'>login</NavBarLink>
                        <NavBarLink to='/signup'>signup</NavBarLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
