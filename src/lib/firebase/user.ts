import { doc, setDoc } from 'firebase/firestore';
import { db } from './app';

export const createUserData = async (uid: string, username: string) => {
    try {
        await setDoc(doc(db, 'user', uid), { name: username });
    } catch (err) {
        console.log(err);
    }
};
