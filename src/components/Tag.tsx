import { IoClose } from 'react-icons/io5';

interface TagProps {
    tagName: string;
    isSelected?: boolean;
    isClickable?: boolean;
    isInSelector?: boolean;
    onClick?: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({
    tagName,
    isSelected,
    isClickable = false,
    isInSelector = false,
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
            flex
            items-center
            py-1 px-3
            w-fit
            rounded-full
            mr-2
            text-sm
            ${isClickable && 'cursor-pointer'}
            ${
                isInSelector
                    ? `
                    bg-transparent 
                    text-dark 
                    border-none 
                    w-[100%]
                    rounded-none
                    `
                    : 'bg-dark'
            }

        `}>
            {tagName}
            {isSelected && (
                <div className='ml-2'>
                    <IoClose size={18} />
                </div>
            )}
        </div>
    );
};

export default Tag;
