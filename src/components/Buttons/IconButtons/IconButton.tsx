export interface IconButtonProps {
    onClick: () => void;
    isActive?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
    children,
    isActive,
    onClick,
}) => {
    return (
        <button
            className={`
            ${isActive ? 'bg-gravel text-dark' : 'bg-dark text-gravel'} 
            rounded-full
            p-3
        `}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;
