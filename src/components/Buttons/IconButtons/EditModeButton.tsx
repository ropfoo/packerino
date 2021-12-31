import IconButton, { IconButtonProps } from './IconButton';
import { FiEdit3 } from 'react-icons/fi';

const EditModeButton: React.FC<IconButtonProps> = ({ onClick, isActive }) => {
    return (
        <IconButton isActive={isActive} onClick={onClick}>
            <FiEdit3 />
        </IconButton>
    );
};

export default EditModeButton;
