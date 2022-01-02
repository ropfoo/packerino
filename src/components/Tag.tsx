interface TagProps {
    tagName: string;
    isSelected?: boolean;
    isClickable?: boolean;
    onClick?: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({
    tagName,
    isSelected,
    isClickable = false,
    onClick,
}) => {
    return (
        <div
            onClick={() => {
                if (isClickable) {
                    onClick && onClick(tagName);
                }
            }}
            className={`
           
            bg-dark
            py-1 px-3
            w-fit
            rounded-full
            mr-2
            text-xs
            border
            ${isSelected ? 'border-white ' : 'border-dark'}
            ${isClickable && 'cursor-pointer'}
        `}>
            {tagName}
        </div>
    );
};

export default Tag;
