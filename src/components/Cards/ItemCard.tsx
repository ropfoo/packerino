import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../lib/types/item';
import Card from './Card';

interface ItemCardProps {
    item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <Card>
            <div
                className='
                '>
                <img
                    className='
                    h-full
                    w-24
                    object-cover
                    rounded-2xl

                '
                    src={item.imageUrl}
                    alt={item.title}
                />
            </div>
            <div className='px-5'>
                <div className='text-dirt font-bold text-lg mb-1'>
                    {item.title}
                </div>
                <div className='text-gravel'>
                    <p>{item.price} €</p>
                    <p>{item.weight} kg</p>
                    <span className='flex'>
                        <p>{item.size?.height}</p>
                        <p>{item.size?.width}</p>
                        <p>{item.size?.length}</p>
                    </span>
                </div>
            </div>
            <Link to={`/item/${item.id}`}>view</Link>
        </Card>
    );
};

export default ItemCard;
