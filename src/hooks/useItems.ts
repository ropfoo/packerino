import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../components/Auth/Auth.provider';
import { db } from '../lib/firebase/app';
import { getItems } from '../lib/firebase/item';
import { Item } from '../lib/types/item';

export function useItems() {
    const [initalItems, setInitialItems] = useState<Item[]>([]);
    const { userAuth } = useAuthContext();

    useEffect(() => {
        (async () => {
            if (userAuth) {
                const itemsData = await getItems(userAuth.uid);
                setInitialItems(itemsData);
            }
        })();
    }, []);

    return {
        initalItems,
    };
}
