import { Item } from '../../lib/types/item';

interface ItemSelectionProps {
    item: Item;
    isSelected: boolean;
    onClick?: () => void;
}

const ItemSelection: React.FC<ItemSelectionProps> = ({
    item,
    onClick,
    isSelected,
}) => {
    return (
        <div
            onClick={onClick}
            className={`
            ${isSelected && 'bg-stone'} 
            ${isSelected ? 'text-gravel' : 'text-stone'} 
            border 
            border-stonewet
            flex 
            items-center 
            first:rounded-t-lg
            last:rounded-b-lg
            px-2 
            py-1 
        `}>
            <img
                className='object-fit rounded-md w-10 h-10 mr-3 '
                src={item.imageUrl}
                alt=''
            />
            <p>{item?.title}</p>
        </div>
    );
};

export default ItemSelection;
