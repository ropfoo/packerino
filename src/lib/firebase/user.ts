import { doc, setDoc } from 'firebase/firestore';
import { db } from './app';

export type UserData = {
    username: string;
    email: string;
};

export const createUserData = async (uid: string, userData: UserData) => {
    try {
        await setDoc(doc(db, 'user', uid), userData);
    } catch (err) {
        console.log(err);
    }
};
