import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import NavBarLink from './NavBarLink';

import logo from '../../images/backpack.svg';

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
                <div className=' flex items-center text-xl text-dirt font-bold'>
                    <img className='mr-5' src={logo} width={35} alt='' />
                    packerino
                </div>
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
