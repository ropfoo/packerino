import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { Item } from '../types/item';
import { db } from './app';

export const addItem = async (item: Item, uid: string) => {
    const itemRef = await doc(collection(db, `user/${uid}/items`));
    item.id = itemRef.id;
    await setDoc(itemRef, item);
};

export const getItems = async (uid: string) => {
    const itemsRef = collection(db, `user/${uid}/items`);
    const itemsSnap = await getDocs(itemsRef);
    const itemsList = itemsSnap.docs.map(doc => doc.data());
    return itemsList as Item[];
};
