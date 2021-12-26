import React from 'react';
import { Item } from '../lib/types/item';

interface ItemCardProps {
    item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div
            className='
            flex 
            bg-slate-50 
            rounded-lg
            h-36
            p-5 
            mb-2 
            md:mr-3 
            last:mr-0 
            md:w-1/2
        '>
            <div
                className='
                flex
                justify-center
                items-center
                bg-white
                p-2
                rounded-lg
                w-24
                h-[100%]'>
                <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className='px-5'>
                <b>{item.title}</b>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default ItemCard;
