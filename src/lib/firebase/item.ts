import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore';
import { Item } from '../types/item';
import { db } from './app';

export const setItem = async (item: Item, uid: string) => {
    if (item.id) {
        // update
        return await setDoc(doc(db, `user/${uid}/items/${item.id}`), item);
    }
    // create
    const itemRef = await doc(collection(db, `user/${uid}/items`));
    item.id = itemRef.id;
    return await setDoc(itemRef, item);
};

export const getItem = async (userId: string, itemId: string) => {
    const itemsRef = doc(db, `user/${userId}/items`, itemId);
    const itemDoc = await getDoc(itemsRef);
    const item = itemDoc.data();
    return item as Item;
};

export const removeItem = async (userId: string, itemId: string) => {
    const itemRef = doc(db, `user/${userId}/items`, itemId);
    await deleteDoc(itemRef);
};

export const getItems = async (uid: string) => {
    const itemsRef = collection(db, `user/${uid}/items`);
    const itemsSnap = await getDocs(itemsRef);
    const itemsList = itemsSnap.docs.map(doc => doc.data());
    return itemsList as Item[];
};
