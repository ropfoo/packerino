import { Item } from '../../lib/types/item';

interface ItemThumbnailCardProps {
    item: Item;
}

const ItemThumbnailCard: React.FC<ItemThumbnailCardProps> = ({ item }) => {
    return (
        <div
            className='
            flex
            flex-col
            items-center
            w-20
            h-20
            mr-2
            bg-night
            rounded-md
            p-2        
            '>
            <img
                className='
                    w-10
                    h-10
                    object-cover
                    rounded-lg
                '
                src={item.imageUrl}
                alt=''
            />
            <p className='text-sm text-center mt-2 w-16 whitespace-nowrap overflow-hidden overflow-ellipsis'>
                {item.title}
            </p>
        </div>
    );
};

export default ItemThumbnailCard;
