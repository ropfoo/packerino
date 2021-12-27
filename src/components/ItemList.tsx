import { Auth } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { getItems } from '../lib/firebase/item';
import ItemCard from './ItemCard';

const ItemList: React.FC = () => {
    const auth = useQuery<Auth>('auth');
    const { data } = useQuery(
        'items',
        () => auth.data?.currentUser && getItems(auth.data?.currentUser.uid),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        }
    );

    // const addToList = (item: Item) => setList(l => [...l, item]);
    return (
        <div>
            <div className='flex flex-col md:flex-row flex-nowrap'>
                {data?.map((item, index) => (
                    <ItemCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
