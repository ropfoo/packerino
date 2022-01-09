interface ContextMenuItemProps {
    onClick: () => void;
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
    children,
    onClick,
}) => {
    return (
        <li
            className='flex p-3 border-b border-stonewet cursor-pointer'
            onClick={onClick}>
            {children}
        </li>
    );
};

export default ContextMenuItem;
