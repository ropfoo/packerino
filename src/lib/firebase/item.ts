import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { Item } from '../types/item';
import { db } from './app';

export const addItem = async (item: Item, uid: string) =>
    await setDoc(doc(db, `user/${uid}/items`, item.title), item);

export const getItems = async (uid: string) => {
    const itemsRef = collection(db, `user/${uid}/items`);
    const itemsSnap = await getDocs(itemsRef);
    const itemsList = itemsSnap.docs.map(doc => doc.data());
    console.log('ran');
    return itemsList as Item[];
};
