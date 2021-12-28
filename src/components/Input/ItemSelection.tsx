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
            rounded-lg 
            px-2 
            py-1 
        `}>
            <div
                className={`w-10 h-10 mr-3 bg-white 
            `}>
                <img className='bg-cover' src={item.imageUrl} alt='' />
            </div>
            <p>{item?.title}</p>
        </div>
    );
};

export default ItemSelection;
