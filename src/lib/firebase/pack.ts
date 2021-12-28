import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { createPack } from '../../helper/pack';
import { Item } from '../types/item';
import { PackData } from '../types/pack';
import { db } from './app';

export const addPackData = async (pack: PackData, uid: string) => {
    const packRef = doc(collection(db, `user/${uid}/packs`));
    pack.id = packRef.id;
    await setDoc(packRef, pack);
};

export const getPacks = async (uid: string, items?: Item[] | null) => {
    const packsDataRef = collection(db, `user/${uid}/packs`);
    const packsDataSnap = await getDocs(packsDataRef);
    const packsDataList = packsDataSnap.docs.map(doc =>
        doc.data()
    ) as PackData[];
    const packsList = packsDataList.map(packData =>
        createPack(packData, items)
    );
    return packsList;
};
