import { doc, setDoc } from 'firebase/firestore';
import { Item } from '../types/item';
import { db } from './app';

export const addItem = async (item: Item) =>
    await setDoc(doc(db, 'user/XBbBDKgI5acfPolBDUrq/items', item.title), item);
