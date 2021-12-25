import { Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
    return (
        <Link className='text-slate-900 mr-5' to={to}>
            {label}
        </Link>
    );
};

export default NavLink;
