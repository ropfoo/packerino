import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NavBarLink from './NavBarLink';

import logo from '../../images/backpack.svg';
import { FiUser } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const { authData } = useAuth();

    return (
        <nav
            className='
            flex
            justify-between
            items-center
            bg-dark
            px-5 md:px-16
            py-5
            shadow-xl
            shadow-slate-900
            fixed
            top-0
            w-full
        '>
            <Link to='/'>
                <div className=' flex items-center text-xl text-gravel font-bold'>
                    <img
                        className='mr-5 w-7 md:w-9s'
                        src={logo}
                        width={35}
                        alt=''
                    />
                    <p className='hidden md:flex '>packerino</p>
                </div>
            </Link>
            <div
                className=' 
               flex
            '>
                {authData?.currentUser ? (
                    <div className='flex items-center'>
                        <NavBarLink to='/packs'>packs</NavBarLink>
                        <NavBarLink to='/items'>items</NavBarLink>
                        <NavBarLink to='/user'>
                            <FiUser size={22} />
                        </NavBarLink>
                    </div>
                ) : (
                    <>
                        <NavBarLink to='/signup'>signup</NavBarLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
