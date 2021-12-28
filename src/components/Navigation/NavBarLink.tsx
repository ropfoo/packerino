import { Link, NavLink } from 'react-router-dom';

interface NavBarLinkProps {
    to: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ to, children }) => {
    return (
        <NavLink
            className={({ isActive }) => `
            ${isActive ? 'text-snow' : 'text-gravel'}
            hover:text-snow
            hover:transition-colors
            mr-5
            last:mr-0
            `}
            to={to}>
            {children}
        </NavLink>
    );
};

export default NavBarLink;
