import IconButton, { IconButtonProps } from './IconButton';
import { IoMdAdd } from 'react-icons/io';
const AddButton: React.FC<IconButtonProps> = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <IoMdAdd size={17} />
        </IconButton>
    );
};

export default AddButton;
