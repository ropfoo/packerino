import { Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
    return (
        <Link className='text-dirt mr-5' to={to}>
            {label}
        </Link>
    );
};

export default NavLink;
