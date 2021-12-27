import { doc, getDoc, setDoc } from 'firebase/firestore';
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

export const getUser = async (uid: string) => {
    const usersRef = doc(db, 'user', uid);
    const userSnap = await getDoc(usersRef);
    return userSnap.data() as UserData;
};
