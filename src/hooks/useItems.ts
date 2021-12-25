import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase/app';
import { Item } from '../lib/types/item';

export function useItems() {
    const [initalItems, setInitialItems] = useState<Item[]>([]);

    const getItems = async () => {
        const itemsRef = collection(db, 'user/XBbBDKgI5acfPolBDUrq/items');
        const itemsSnap = await getDocs(itemsRef);
        const itemsList = itemsSnap.docs.map(doc => doc.data());
        return itemsList as Item[];
    };

    useEffect(() => {
        (async () => {
            const itemsData = await getItems();
            setInitialItems(itemsData);
        })();
    }, []);

    return {
        initalItems,
    };
}
