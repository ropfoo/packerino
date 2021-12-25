import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase/app';

export function useUser() {
    const getUsers = async () => {
        const usersCollection = collection(db, 'user');
        const usersSnapshot = await getDocs(usersCollection);
        const userList = usersSnapshot.docs.map(doc => doc.data());
        console.log(userList);
    };
}
