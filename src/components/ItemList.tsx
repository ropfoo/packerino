import React, { useEffect, useState } from 'react';
import { useItems } from '../hooks/useItems';
import { Item } from '../lib/types/item';
import ItemCard from './ItemCard';

const ItemList: React.FC = () => {
    const { initalItems } = useItems();
    const [list, setList] = useState<Item[]>([]);

    useEffect(() => {
        setList(initalItems);
    }, [initalItems]);

    const addToList = (item: Item) => setList(l => [...l, item]);

    return (
        <div>
            <div className='flex flex-col md:flex-row flex-nowrap'>
                {list.map((item, index) => (
                    <ItemCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
