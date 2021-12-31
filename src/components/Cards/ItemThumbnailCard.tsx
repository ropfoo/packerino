import { Item } from '../../lib/types/item';

interface ItemThumbnailCard {
    item: Item;
}

const ItemThumbnailCard: React.FC<ItemThumbnailCard> = ({ item }) => {
    return (
        <div
            className='
            flex
            flex-col
            items-center
            w-20
            h-20
            mr-2
            border-2
            rounded-md
            p-1
            border-stonewet
        '>
            <img
                className='
                    w-10
                    h-10
                    object-cover

                '
                src={item.imageUrl}
                alt=''
            />
            <p className='text-sm mt-2'>{item.title}</p>
        </div>
    );
};

export default ItemThumbnailCard;
