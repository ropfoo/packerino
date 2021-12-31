import { FiExternalLink } from 'react-icons/fi';
import IconButton, { IconButtonProps } from './IconButton';

const LinkButton: React.FC<IconButtonProps> = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <FiExternalLink color='#7186A8' size={18} />
        </IconButton>
    );
};

export default LinkButton;
