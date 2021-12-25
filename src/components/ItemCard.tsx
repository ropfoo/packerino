import React from 'react';
import { Item } from '../lib/types/item';

interface ItemCardProps {
    item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div className='flex bg-slate-50 p-5 mb-2 md:mr-3 last:mr-0 md:w-1/2'>
            <img className='max-w-[20%]' src={item.url} alt={item.title} />
            <div className='px-5'>
                <b>{item.title}</b>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default ItemCard;
